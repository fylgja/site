import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://fylgja.dev",
	redirects: {
		// TODO: add more v1 pages
		"/guides": "/docs",
	},
	integrations: [sitemap()],
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
