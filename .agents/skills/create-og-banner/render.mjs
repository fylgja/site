// Renders banners/<name>.html to src/assets/social/<name>.png at 1200×630.
// Usage, from the site root: node .agents/skills/create-og-banner/render.mjs [name ...]
// Without names it renders every banner. Set CHROME to override the browser path.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const sharp = createRequire(join(root, "package.json"))("sharp");
const bannerDir = resolve(import.meta.dirname, "banners");
const outDir = join(root, "src/assets/social");
const chrome =
	process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const names = process.argv.slice(2).length
	? process.argv.slice(2)
	: readdirSync(bannerDir)
			.filter((file) => file.endsWith(".html"))
			.map((file) => file.replace(/\.html$/, ""));

const tmp = mkdtempSync(join(tmpdir(), "og-banner-"));

/**
 * Screenshots one banner with headless Chrome, then palette-compresses it into the site assets.
 * @param {string} name Banner file name without the .html extension
 * @returns {Promise<string>} Path of the written PNG
 */
async function render(name) {
	const shot = join(tmp, `${name}.png`);
	// The virtual time budget gives Google Fonts time to load before the capture.
	execFileSync(chrome, [
		"--headless",
		"--disable-gpu",
		"--hide-scrollbars",
		"--window-size=1200,630",
		"--virtual-time-budget=8000",
		`--screenshot=${shot}`,
		pathToFileURL(join(bannerDir, `${name}.html`)).href,
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
