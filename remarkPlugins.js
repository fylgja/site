export function remarkWrapTables(attributes) {
	return (tree) => {
		const traverse = (parent) => {
			for (let i = parent.children.length - 1; i >= 0; i--) {
				const node = parent.children[i];

				if (node.type === "table") {
					const wrapper = {
						type: "div",
						data: {
							hName: "div",
							hProperties: Object.assign(
								{ className: "scroll-x", tabindex: 0 },
								attributes,
							),
						},
						children: [node],
					};
					parent.children.splice(i, 1, wrapper);
				} else if (node.children) {
					traverse(node);
				}
			}
		};

		traverse(tree);
	};
}
