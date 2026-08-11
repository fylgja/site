/**
 * Lightning CSS folds `animation-timeline` into the `animation` shorthand when
 * both are set on the same rule. That is not valid syntax, so browsers drop the
 * whole declaration and the animation never runs.
 * See https://github.com/parcel-bundler/lightningcss/issues/1283
 */

/** @typedef {{ property: string }} Declaration */
/** @typedef {{ declarations: Declaration[], importantDeclarations: Declaration[] }} DeclarationBlock */
/** @typedef {{ type: "style", value: { selectors: unknown, declarations: DeclarationBlock, rules: unknown[], loc: unknown } }} StyleRule */

const TIMELINE = "animation-timeline";

/**
 * Collects the animation-timeline declarations that Lightning CSS would fold
 * into a neighboring animation shorthand.
 * @param {Declaration[]} declarations
 * @returns {Declaration[]}
 */
function foldedTimelines(declarations) {
	if (!declarations.some((declaration) => declaration.property === "animation")) return [];
	return declarations.filter((declaration) => declaration.property === TIMELINE);
}

/**
 * Lightning CSS cannot read its own AST back when an optional field is present
 * as null, which any `var()` produces, so drop those keys before handing a rule
 * back. Only touched rules go through this, untouched ones are returned as void.
 * @param {unknown} node
 * @returns {void}
 */
function dropNullFields(node) {
	if (Array.isArray(node)) return node.forEach(dropNullFields);
	if (node === null || typeof node !== "object") return;
	for (const [key, value] of Object.entries(node)) {
		if (value === null) delete /** @type {Record<string, unknown>} */ (node)[key];
		else dropNullFields(value);
	}
}

/**
 * Moves animation-timeline out into a sibling rule so it survives minification.
 * A plain sibling gets merged back into the original rule, so it is wrapped in
 * the feature query that a scroll driven animation needs anyway.
 * @param {StyleRule} rule
 * @returns {[StyleRule, object] | void}
 */
function splitAnimationTimeline(rule) {
	const block = rule.value.declarations;
	const normal = foldedTimelines(block.declarations);
	const important = foldedTimelines(block.importantDeclarations);
	if (normal.length === 0 && important.length === 0) return;

	block.declarations = block.declarations.filter((declaration) => !normal.includes(declaration));
	block.importantDeclarations = block.importantDeclarations.filter(
		(declaration) => !important.includes(declaration),
	);

	dropNullFields(rule);
	return [
		rule,
		{
			type: "supports",
			value: {
				condition: {
					type: "declaration",
					propertyId: { property: TIMELINE },
					value: "view()",
				},
				rules: [
					{
						type: "style",
						value: {
							selectors: rule.value.selectors,
							declarations: {
								declarations: normal,
								importantDeclarations: important,
							},
							rules: [],
							loc: rule.value.loc,
						},
					},
				],
				loc: rule.value.loc,
			},
		},
	];
}

/** @type {{ Rule: { style: typeof splitAnimationTimeline } }} */
export const animationTimelineFix = { Rule: { style: splitAnimationTimeline } };
