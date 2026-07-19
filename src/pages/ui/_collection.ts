import { getCollection } from "astro:content";
import { sortByOrder } from "@/utils";

/**
 * Ordered category definitions for the UI Components section.
 * `key` must match the `category` enum in src/content.config.ts.
 * `label` is the display title used in the sidebar and gallery filter.
 */
export const CATEGORIES = [
	{ key: "actions", label: "Actions" },
	{ key: "forms", label: "Forms" },
	{ key: "navigation", label: "Navigation" },
	{ key: "overlays", label: "Overlays" },
	{ key: "feedback", label: "Feedback" },
	{ key: "data-display", label: "Data display" },
	{ key: "layout", label: "Layout" },
] as const;

// All published UI entries, drafts hidden in production, sorted by sortOrder.
// Underscore-prefixed entries (e.g. _template) are internal and never routed.
const entries = sortByOrder(
	await getCollection("ui", ({ id, data }: { id: string; data: any }) => {
		if (id.startsWith("_")) return false;
		if (data.draft && import.meta.env.PROD) return false;
		return true;
	})
);

// Sidebar/menu groups: one collapsible section per non-empty category.
const collection = CATEGORIES.map(({ key, label }) => ({
	title: label,
	category: key,
	items: entries.filter((entry) => entry.data.category === key),
})).filter((group) => group.items.length);

export { entries, collection, collection as default };
