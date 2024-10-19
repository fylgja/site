import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://fylgja.dev",
	redirects: {
		// TODO: add more v1 pages
		"/guides": "/docs",
	},
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "github-dark",
			langAlias: {
				phtml: "php",
			},
		},
	},
	devToolbar: {
		enabled: false,
	},
	vite: {
		ssr: {
			noExternal: ["fylgja"],
		},
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	experimental: {
		clientPrerender: true,
	},
});
