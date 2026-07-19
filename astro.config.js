import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import { remarkAlert } from "remark-github-blockquote-alert";
import { remarkWrapTables } from "./remarkPlugins";
import rehypeExternalLinks from "rehype-external-links";
import { uiCategories } from "./src/ui-categories";

// UI category folders (e.g. /ui/overlays/) are not real pages; send them to the
// gallery filtered by that category.
const uiCategoryRedirects = Object.fromEntries(
	uiCategories.map((category) => [`/ui/${category}/`, `/ui/?category=${category}`])
);

export default defineConfig({
	site: "https://fylgja.dev",
	integrations: [sitemap(), mdx()],
	markdown: {
		processor: unified({
			remarkPlugins: [remarkAlert, remarkWrapTables],
			rehypePlugins: [
				[
					rehypeExternalLinks,
					{
						target: "_blank",
						rel: "noopener noreferrer",
					},
				],
			],
		}),
		shikiConfig: {
			defaultColor: false,
			themes: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
		},
	},
	redirects: {
		// Handy links
		"/git/": "https://github.com/fylgja",
		"/cdn/": "https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css",
		// Common used urls, to redirect
		"/download/": "/docs/",
		"/tailwind/": "/library/extensions/preset-tailwind/",
		"/colors/": "/library/tokens/",
		"/tokens/": "/library/tokens/",
		// UI category folders → filtered gallery
		...uiCategoryRedirects,
	},
	devToolbar: {
		enabled: false,
	},
});
