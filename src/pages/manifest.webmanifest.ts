import type { APIRoute } from "astro";
import siteConfig from "site.config";

const { name, description, themeColor } = siteConfig;

const webmanifest = {
	id: "/",
	name: name,
	short_name: name,
	description: description,
	start_url: "/",
	display: "fullscreen",
	orientation: "any",
	theme_color: themeColor,
	background_color: themeColor,
	icons: [
		{
			src: "/icon-filled.svg",
			type: "image/svg+xml",
			sizes: "any",
		},
		{
			src: "/icon.svg",
			type: "image/svg+xml",
			sizes: "any",
			purpose: "monochrome",
		},
	],
	screenshots: [
		{
			src: "screenshots/desktop-home.webp",
			sizes: "1920x1080",
			form_factor: "wide",
		},
		{
			src: "screenshots/mobile-home.webp",
			sizes: "721x1440",
			form_factor: "narrow",
		},
	],
};

export const GET: APIRoute = () => new Response(JSON.stringify(webmanifest, null, 2));
