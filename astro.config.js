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
	redirects: {
		// Fylgja V1 docs to redirect
		"/guides": "/docs",
		"/getting-started": "/docs",

		// Packages that have been merged into the Base
		"/components": "/library/base",
		"/components/base": "/library/base",
		"/components/button": "/library/base",
		"/components/code": "/library/base",
		"/components/control": "/library/base",
		"/components/details": "/library/base",
		"/components/dialog": "/library/base",
		"/components/form": "/library/base",
		"/components/hashlink": "/library/base",
		"/components/list": "/library/base",
		"/components/print": "/library/base",
		"/components/table": "/library/base",

		// Packages that have been merged into the Tokens
		"/components/aspect-ratio": "/library/tokens#aspect-ratio",
		"/components/borders": "/library/tokens#border-radius",
		"/components/colors": "/library/tokens#colors",
		"/components/easing": "/library/tokens#easing",
		"/components/fonts": "/library/tokens#fonts",
		"/components/mq": "/library/tokens#mq",
		"/components/shadow": "/library/tokens#shadows",
		"/components/sizes": "/library/tokens#sizes",
		"/components/tokens": "/library/tokens",
		"/components/z-layer": "/library/tokens#z-layer",

		// Packages that have been merged into the Utils
		"/components/aria-only": "/library/utilities",
		"/components/auto-grid": "/library/utilities",
		"/components/gradient": "/library/utilities",
		"/components/scroll-slider": "/library/utilities",
		"/components/scrollbar": "/library/utilities",
		"/components/section": "/library/utilities",
		"/components/stretched-link": "/library/utilities",
		"/components/transform": "/library/utilities",
		"/components/transition": "/library/utilities",
		"/components/utilpack": "/library/utilities",

		// Other Packages
		"/components/alpine-dialog": "/library/alpine-dialog",
		"/components/props-builder": "/library/props-builder",
		"/components/sass": "/library/sass-extend",
		"/components/stylelint-config": "/library/stylelint-config",
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
