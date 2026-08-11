import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import { wrapTables, githubAlerts, externalLinks } from "./markdown-plugins";
import { animationTimelineFix } from "./lightningcss-fixes";
import { uiCategories } from "./src/ui-categories";

// UI category folders (e.g. /ui/overlays/) are not real pages; send them to the
// gallery filtered by that category.
const uiCategoryRedirects = Object.fromEntries(
	uiCategories.map((category) => [`/ui/${category}/`, `/ui/?category=${category}`]),
);

export default defineConfig({
	site: "https://fylgja.dev",
	integrations: [sitemap(), mdx()],
	markdown: {
		processor: satteri({
			mdastPlugins: [githubAlerts, wrapTables],
			hastPlugins: [externalLinks],
		}),
		shikiConfig: {
			defaultColor: false,
			themes: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
		},
	},
	vite: {
		css: {
			lightningcss: { visitor: animationTimelineFix },
		},
		customLogger: {
			...globalThis.VITE_LOGGER,
			warn(msg) {
				if (msg.includes("target-current")) return;
				console.warn(msg);
			},
		},
	},
	redirects: {
		// Handy links
		"/git/": "https://github.com/fylgja",
		"/cdn/": "https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css",
		// Common used urls, to redirect
		"/lore/": "/about-us/#the-name",
		"/download/": "/docs/",
		"/tailwind/": "/library/extensions/preset-tailwind/",
		"/colors/": "/library/tokens/",
		"/tokens/": "/library/tokens/",
		// Moved into the Sliders category
		"/ui/layout/carousel/": "/ui/sliders/carousel/",
		// UI category folders → filtered gallery
		...uiCategoryRedirects,
	},
	devToolbar: {
		enabled: false,
	},
});
