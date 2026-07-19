// Single source of truth for the UI component categories. Kept free of
// `astro:content` so it can be imported from both the content config and
// astro.config.js (which loads before Astro's virtual modules exist).
export const uiCategories = [
	"actions",
	"forms",
	"navigation",
	"overlays",
	"feedback",
	"data-display",
	"layout",
] as const;
