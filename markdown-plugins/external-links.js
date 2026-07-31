import { defineHastPlugin } from "satteri";

const EXTERNAL_PROTOCOLS = ["http", "https"];

/**
 * Checks if a link points outside of the site.
 * @param {string} href
 * @returns {boolean}
 */
function isExternalHref(href) {
	if (href.startsWith("//")) return true;
	const match = href.match(/^([a-zA-Z][a-zA-Z\d+\-.]*):\/\//);
	return Boolean(match && EXTERNAL_PROTOCOLS.includes(match[1].toLowerCase()));
}

export const externalLinks = defineHastPlugin({
	name: "external-links",
	element: {
		filter: ["a"],
		visit(node, ctx) {
			const href = node.properties.href;
			if (typeof href !== "string" || !isExternalHref(href)) return;

			ctx.setProperty(node, "target", "_blank");
			ctx.setProperty(node, "rel", ["noopener", "noreferrer"]);
		},
	},
});
