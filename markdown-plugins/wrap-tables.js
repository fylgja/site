import { defineMdastPlugin } from "satteri";

export const wrapTables = defineMdastPlugin({
	name: "wrap-tables",
	table(node, ctx) {
		ctx.wrapNode(node, {
			type: "blockquote",
			data: {
				hName: "div",
				hProperties: { className: "scroll-x", tabindex: 0 },
			},
			children: [],
		});
	},
});
