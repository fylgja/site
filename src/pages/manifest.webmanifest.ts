import type { APIRoute } from "astro";
import siteConfig from "@/site.config";
import screenshots from "@/screenshots";

const { name, description, themeColor } = siteConfig;

const date = new Date();
const dateHash = `v=${date.getMonth() + 1}-${date.getFullYear()}`;

const webmanifest = {
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
			src: `/icon-filled.svg?${dateHash}`,
			type: "image/svg+xml",
			sizes: "any",
			purpose: "any",
		},
		{
			src: `/icon-maskable.svg?${dateHash}`,
			type: "image/svg+xml",
			sizes: "any",
			purpose: "maskable",
		},
		{
			src: `/icon-mono.svg?${dateHash}`,
			type: "image/svg+xml",
			sizes: "any",
			purpose: "monochrome",
		},
	],
	screenshots: screenshots.map(({ name, label, width, height, formFactor }) => ({
		src: `/screenshots/${name}.webp?${dateHash}`,
		type: "image/webp",
		sizes: `${width}x${height}`,
		form_factor: formFactor,
		label,
	})),
};

export const GET: APIRoute = () => new Response(JSON.stringify(webmanifest, null, 2));
