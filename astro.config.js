import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkAlert } from "remark-github-blockquote-alert";
import icon from "astro-icon";

export default defineConfig({
	site: "https://fylgja.dev",
	integrations: [sitemap(), icon()],
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		remarkPlugins: [remarkAlert],
		shikiConfig: {
			defaultColor: false,
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		},
	},
	// TODO: add more v1 pages
	redirects: {
		"/guides": "/docs",
	},
	devToolbar: {
		enabled: false,
	},
	// Drop when using Fylgja from node
	vite: {
		ssr: {
			noExternal: ["fylgja"],
		},
	},
});
