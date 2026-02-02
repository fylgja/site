import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkAlert } from "remark-github-blockquote-alert";
import { remarkWrapTables } from "./remarkPlugins";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
	site: "https://fylgja.dev",
	integrations: [sitemap()],
	markdown: {
		remarkPlugins: [remarkAlert, remarkWrapTables],
		rehypePlugins: [[rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]],
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
	},
	devToolbar: {
		enabled: false,
	},
});
