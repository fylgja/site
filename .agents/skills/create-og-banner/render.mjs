// Renders banners/<name>.html to src/assets/social/<name>.png at the banner's own size.
// Usage, from the site root: node .agents/skills/create-og-banner/render.mjs [name ...] [--out=<dir>] [--scale=2]
// Without names it renders every banner. Set CHROME to override the browser path.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const sharp = createRequire(join(root, "package.json"))("sharp");
const bannerDir = resolve(import.meta.dirname, "banners");
const chrome =
	process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const args = process.argv.slice(2);
const flags = Object.fromEntries(
	args.filter((arg) => arg.startsWith("--")).map((arg) => arg.slice(2).split("=")),
);
const outDir = resolve(root, flags.out ?? "src/assets/social");
const scale = Number(flags.scale ?? 1);
const requested = args.filter((arg) => !arg.startsWith("--"));
const names = requested.length
	? requested
	: readdirSync(bannerDir)
			.filter((file) => file.endsWith(".html"))
			.map((file) => file.replace(/\.html$/, ""));

const tmp = mkdtempSync(join(tmpdir(), "og-banner-"));

/**
 * Reads the pixel size from the inline style of the .banner element.
 * @param {string} html Banner source
 * @returns {{ width: number, height: number }} Banner size in CSS pixels
 */
function bannerSize(html) {
	const [, width, height] = html.match(
		/class="banner" style="width: (\d+)px; height: (\d+)px/,
	) ?? [, 1200, 630];
	return { width: Number(width), height: Number(height) };
}

/**
 * Screenshots one banner with headless Chrome, then palette-compresses it into the output folder.
 * @param {string} name Banner file name without the .html extension
 * @returns {Promise<string>} Path of the written PNG
 */
async function render(name) {
	const source = join(bannerDir, `${name}.html`);
	const { width, height } = bannerSize(readFileSync(source, "utf8"));
	const shot = join(tmp, `${name}.png`);
	// The virtual time budget gives Google Fonts time to load before the capture.
	execFileSync(chrome, [
		"--headless",
		"--disable-gpu",
		"--hide-scrollbars",
		`--window-size=${width},${height}`,
		`--force-device-scale-factor=${scale}`,
		"--virtual-time-budget=8000",
		`--screenshot=${shot}`,
		pathToFileURL(source).href,
	], { stdio: "ignore" });

	const out = join(outDir, `${name}.png`);
	await sharp(shot).png({ palette: true, quality: 90, effort: 10 }).toFile(out);
	return out;
}

try {
	for (const name of names) {
		console.log(await render(name));
	}
} finally {
	rmSync(tmp, { recursive: true, force: true });
}
