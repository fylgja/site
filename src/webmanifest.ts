import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import siteConfig from "@/site.config";
import screenshots from "@/screenshots";

const { name, description, themeColor } = siteConfig;

/**
 * Short content hash, so cached copies are replaced as soon as the content changes.
 * @param content File or text to hash
 * @returns First 8 characters of the SHA-1 hex digest
 */
export const contentHash = (content: string | Buffer) =>
	createHash("sha1").update(content).digest("hex").slice(0, 8);

/**
 * Appends the content hash of a file in public/ to its URL.
 * @param src Root relative URL of the file
 * @returns URL with a ?v= hash
 */
const versioned = (src: string) => `${src}?v=${contentHash(readFileSync(`public${src}`))}`;

export default {
	id: "/",
	name: name,
	short_name: "Fylgja",
	description: description,
	lang: "en",
	dir: "ltr",
	start_url: "/",
	scope: "/",
	display: "standalone",
	orientation: "any",
	theme_color: themeColor,
	background_color: themeColor,
	icons: [
		{
			src: versioned("/icon-filled.svg"),
			type: "image/svg+xml",
			sizes: "any",
			purpose: "any",
		},
		{
			src: versioned("/icon-maskable.svg"),
			type: "image/svg+xml",
			sizes: "any",
			purpose: "maskable",
		},
		{
			src: versioned("/icon-mono.svg"),
			type: "image/svg+xml",
			sizes: "any",
			purpose: "monochrome",
		},
	],
	screenshots: screenshots.map(({ name, label, width, height, formFactor }) => ({
		src: versioned(`/screenshots/${name}.webp`),
		type: "image/webp",
		sizes: `${width}x${height}`,
		form_factor: formFactor,
		label,
	})),
};
