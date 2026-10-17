/**
 * Lightning CSS folds `animation-timeline` into the `animation` shorthand when
 * both are set on the same rule. That is not valid syntax, so browsers drop the
 * whole declaration and the animation never runs.
 * See https://github.com/parcel-bundler/lightningcss/issues/1283
 *
 * Vite minifies CSS with Lightning CSS but strips any visitor from its options,
 * so the fix runs earlier, as a PostCSS plugin on the unminified source.
 */

const TIMELINE = "animation-timeline";

/**
 * Moves animation-timeline out of a rule that also sets the animation shorthand,
 * into a sibling rule the minifier cannot merge back. The sibling sits in the
 * feature query that a scroll driven animation needs anyway.
 * @param {import("postcss").Rule} rule
 * @param {import("postcss").Helpers} helpers
 * @returns {void}
 */
function splitAnimationTimeline(rule, { AtRule }) {
	const declarations = rule.nodes.filter((node) => node.type === "decl");
	if (!declarations.some((declaration) => declaration.prop === "animation")) return;

	const timelines = declarations.filter((declaration) => declaration.prop === TIMELINE);
	if (timelines.length === 0) return;

	const supports = new AtRule({ name: "supports", params: `(${TIMELINE}: view())` });
	supports.append(rule.clone({ nodes: [] }).append(timelines.map((timeline) => timeline.remove())));
	rule.after(supports);
}

/** @type {import("postcss").Plugin} */
export const animationTimelineFix = {
	postcssPlugin: "animation-timeline-fix",
	Rule: splitAnimationTimeline,
};
