import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
	site: "https://fylgja.dev",
	integrations: [sitemap()],
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		remarkPlugins: [remarkAlert],
		shikiConfig: {
			defaultColor: false,
			themes: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
		},
	},
	devToolbar: {
		enabled: false,
	},
});
