import { defineMdastPlugin } from "satteri";

// GitHub's octicons. `@fylgja/callout` styles whatever `<svg>` it finds in the title and leaves
// the set to the plugin, so these only need to be square and free of a `fill`.
const ICON_PATHS = {
	note: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
	tip: "M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
	important:
		"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
	warning:
		"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
	caution:
		"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
};

const FOLD_ICON_PATH =
	"M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z";

/**
 * Builds an element out of an `emphasis` node, which is the inline node type Sätteri lets a plugin
 * rename through `hName`.
 * @param {string} tag
 * @param {object} properties
 * @param {object[]} [children]
 * @returns {object}
 */
function element(tag, properties, children = []) {
	return { type: "emphasis", data: { hName: tag, hProperties: properties }, children };
}

/**
 * @param {string} path
 * @param {string} [className]
 * @returns {object}
 */
function icon(path, className) {
	return element(
		"svg",
		{ className, viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentcolor", ariaHidden: "true" },
		[element("path", { d: path })],
	);
}

/**
 * @param {string} value
 * @returns {string}
 */
function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * A type name reaches the pattern verbatim, so anything with meaning in a regex has to lose it.
 * @param {string} value
 * @returns {string}
 */
function escapePattern(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Builds the full set of types, the five built in ones plus whatever the project adds. Reusing a
 * built in name overrides it, which is how you swap an icon or a label without a new type.
 * @param {Array<string|CalloutVariant>} custom
 * @returns {Map<string, { type: string, label: string, icon?: string }>}
 */
function buildVariants(custom) {
	const variants = new Map();

	for (const [type, icon] of Object.entries(ICON_PATHS)) {
		variants.set(type, { type, label: capitalize(type), icon });
	}

	for (const entry of custom) {
		const variant = typeof entry === "string" ? { type: entry } : entry;
		if (!variant?.type) continue;

		const type = variant.type.toLowerCase();
		const existing = variants.get(type);

		variants.set(type, {
			type,
			label: variant.label ?? existing?.label ?? capitalize(type),
			icon: variant.icon ?? existing?.icon,
		});
	}

	return variants;
}

/**
 * Splits the first paragraph into a title and the content that follows it. A callout title runs
 * from after the type marker to the end of that line, so the split lands on the first hard break
 * or the first newline inside a text node, whichever comes first.
 * @param {object[]} children Children of the first paragraph.
 * @param {string} head The first child's text, with the type marker already removed.
 * @param {boolean} titles Whether the first line is read as a title at all.
 * @returns {{ title: object[], content: object[] }}
 */
function splitFirstLine(children, head, titles) {
	// With titles off the marker still goes, but the line it sat on stays content, so the break
	// that followed it has to go with it.
	if (!titles) {
		const rest = head.replace(/^\n+/, "");
		const tail = children.slice(1);

		if (rest) return { title: [], content: [{ ...children[0], value: rest }, ...tail] };
		return { title: [], content: tail[0]?.type === "break" ? tail.slice(1) : tail };
	}

	const title = [];
	const content = [];
	let inTitle = true;

	for (const [index, original] of children.entries()) {
		const child = index === 0 ? { ...original, value: head } : original;

		if (!inTitle) {
			content.push(child);
			continue;
		}

		if (child.type === "break") {
			inTitle = false;
			continue;
		}

		if (child.type === "text" && child.value.includes("\n")) {
			const at = child.value.indexOf("\n");
			const before = child.value.slice(0, at);
			const after = child.value.slice(at + 1);

			if (before) title.push({ type: "text", value: before });
			if (after) content.push({ type: "text", value: after });
			inTitle = false;
			continue;
		}

		if (child.type !== "text" || child.value) title.push(child);
	}

	return { title: trimEdges(title), content };
}

/**
 * Drops the whitespace a title picks up from the space after the type marker.
 * @param {object[]} nodes
 * @returns {object[]}
 */
function trimEdges(nodes) {
	const trimmed = [...nodes];
	const last = trimmed.length - 1;

	// Read back out of the array between the two, a one node title is both ends at once.
	if (trimmed[0]?.type === "text") {
		trimmed[0] = { ...trimmed[0], value: trimmed[0].value.trimStart() };
	}
	if (trimmed[last]?.type === "text") {
		trimmed[last] = { ...trimmed[last], value: trimmed[last].value.trimEnd() };
	}

	return trimmed.filter((node) => node.type !== "text" || node.value);
}

/**
 * @typedef {object} CalloutVariant
 * @property {string} type The name used in the Markdown, as in `[!SUCCESS]`.
 * @property {string} [label] Title when the callout does not carry one, defaults to the type with
 *   a capital first letter.
 * @property {string} [icon] Path data for a 16x16 icon. Without one the title has no icon.
 */

/**
 * @typedef {object} CalloutsOptions
 * @property {string} [className] Base class name, defaults to "callout". The title, its parts and
 *   the content build on it, so "admonition" gives you "admonition-title" and the rest.
 * @property {boolean} [titles] Read a custom title from the text after the type, defaults to true.
 *   With this off that text stays part of the content.
 * @property {Array<string|CalloutVariant>} [variants] Types to add on top of the built in five. A
 *   string is a type with no icon, an object can carry a label and an icon.
 */

/**
 * Renders blockquote callouts in the markup `@fylgja/callout` styles, from GitHub alert syntax
 * with the collapse markers from Obsidian callouts.
 * @param {CalloutsOptions} [options]
 * @returns {import("satteri").MdastPluginDefinition}
 */
export function callouts({ className = "callout", titles = true, variants = [] } = {}) {
	const types = buildVariants(variants);
	const pattern = [...types.keys()].map(escapePattern).join("|");
	const calloutRegex = new RegExp(`^\\[!(${pattern})\\]([-+])?`, "i");

	return defineMdastPlugin({
		name: "callouts",
		blockquote(node, ctx) {
			const firstParagraph = node.children[0];
			if (!firstParagraph || firstParagraph.type !== "paragraph") return;

			const firstText = firstParagraph.children[0];
			if (!firstText || firstText.type !== "text") return;

			const match = firstText.value.match(calloutRegex);
			if (!match) return;

			const variant = types.get(match[1].toLowerCase());
			const type = variant.type;
			const collapseMarker = match[2];

			const { title: customTitle, content: body } = splitFirstLine(
				firstParagraph.children,
				firstText.value.replace(calloutRegex, ""),
				titles,
			);

			const label =
				customTitle.length > 0 ? customTitle : [{ type: "text", value: variant.label }];

			const title = {
				type: "paragraph",
				data: {
					hName: collapseMarker ? "summary" : "p",
					hProperties: { className: `${className}-title` },
				},
				children: [
					...(variant.icon ? [icon(variant.icon)] : []),
					element("strong", {}, label),
					...(collapseMarker ? [icon(FOLD_ICON_PATH, `${className}-fold-icon`)] : []),
				],
			};

			// A title only callout has nothing left of its first paragraph, and an empty `<p>` is
			// worse than no paragraph at all.
			const content = body.length > 0 ? [{ ...firstParagraph, children: body }] : [];

			ctx.setProperty(node, "children", [title, ...content, ...node.children.slice(1)]);
			ctx.setProperty(node, "data", {
				hName: collapseMarker ? "details" : "div",
				hProperties: {
					className,
					"data-callout": type,
					...(collapseMarker === "+" && { open: true }),
				},
			});
		},
	});
}
