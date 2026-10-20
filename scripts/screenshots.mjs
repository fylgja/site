// Captures the manifest screenshots from src/screenshots.ts into public/screenshots/.
// Usage, from the site root: npm run screenshots [-- --url=https://fylgja.dev]
// Defaults to the dev server. Set CHROME to override the browser path.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import sharp from "sharp";
import screenshots from "../src/screenshots.ts";

const outDir = resolve(import.meta.dirname, "../public/screenshots");
const chrome =
	process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const flags = Object.fromEntries(
	process.argv
		.slice(2)
		.filter((arg) => arg.startsWith("--"))
		.map((arg) => arg.slice(2).split("=")),
);
const baseUrl = flags.url ?? "http://localhost:4321";

/**
 * Waits for Chrome to write its DevTools port, then returns the browser WebSocket URL.
 * @param {string} profile Chrome user data dir
 * @returns {Promise<string>} Browser WebSocket debugger URL
 */
async function browserEndpoint(profile) {
	const portFile = join(profile, "DevToolsActivePort");
	for (let tries = 0; tries < 100 && !existsSync(portFile); tries++) await sleep(100);
	const [port, path] = readFileSync(portFile, "utf8").trim().split("\n");
	return `ws://127.0.0.1:${port}${path}`;
}

/**
 * Opens a DevTools Protocol session bound to a single new page.
 * @param {string} endpoint Browser WebSocket debugger URL
 * @returns {Promise<{ send: (method: string, params?: object) => Promise<any>, once: (event: string) => Promise<any>, close: () => void }>} Page session
 */
async function openPage(endpoint) {
	const socket = new WebSocket(endpoint);
	await new Promise((done, fail) => {
		socket.onopen = done;
		socket.onerror = fail;
	});

	let id = 0;
	let sessionId;
	/** @type {Map<number, (result: any) => void>} */
	const pending = new Map();
	/** @type {Map<string, (params: any) => void>} */
	const waiters = new Map();

	socket.onmessage = ({ data }) => {
		const message = JSON.parse(data);
		if (message.id) pending.get(message.id)?.(message.result);
		else waiters.get(message.method)?.(message.params);
	};

	const send = (method, params = {}) =>
		new Promise((done) => {
			pending.set(++id, done);
			socket.send(JSON.stringify({ id, method, params, sessionId }));
		});
	const once = (event) => new Promise((done) => waiters.set(event, done));

	const { targetId } = await send("Target.createTarget", { url: "about:blank" });
	({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));
	return { send, once, close: () => socket.close() };
}

/**
 * Loads one page at the emulated device size and saves it as WebP.
 * @param {string} endpoint Browser WebSocket debugger URL
 * @param {import("../src/screenshots.ts").Screenshot} shot Screenshot definition
 * @returns {Promise<string>} Path of the written WebP
 */
async function capture(endpoint, { name, path, width, height, scale, formFactor }) {
	const page = await openPage(endpoint);
	await page.send("Page.enable");
	await page.send("Emulation.setDeviceMetricsOverride", {
		width: width / scale,
		height: height / scale,
		deviceScaleFactor: scale,
		mobile: formFactor === "narrow",
	});
	await page.send("Emulation.setScrollbarsHidden", { hidden: true });

	const loaded = page.once("Page.loadEventFired");
	const url = new URL(path, baseUrl).href;
	const { errorText } = await page.send("Page.navigate", { url });
	if (errorText) throw new Error(`Could not load ${url} (${errorText}), is the site running?`);
	await loaded;
	await page.send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });

	const { data } = await page.send("Page.captureScreenshot", { format: "png" });
	page.close();

	const out = join(outDir, `${name}.webp`);
	await sharp(Buffer.from(data, "base64")).resize(width, height).webp({ quality: 80, effort: 6 }).toFile(out);
	return out;
}

mkdirSync(outDir, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "manifest-screenshots-"));
const browser = spawn(chrome, [
	"--headless",
	"--disable-gpu",
	"--remote-debugging-port=0",
	`--user-data-dir=${profile}`,
	"about:blank",
], { stdio: "ignore" });

try {
	const endpoint = await browserEndpoint(profile);
	for (const shot of screenshots) {
		console.log(await capture(endpoint, shot));
	}
} finally {
	browser.kill();
	await new Promise((done) => browser.once("exit", done));
	rmSync(profile, { recursive: true, force: true });
}
