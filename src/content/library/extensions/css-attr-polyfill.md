---
title: "CSS attr() Polyfill"
pageTitle: "Fylgja CSS attr() Polyfill"
description: "Compile CSS attr() v2 into static fallback rules for browsers that do not support it."
npm: "@fylgja/css-attr-polyfill"
git: "https://github.com/fylgja/css-attr-polyfill"
sortOrder: 15
faq:
  - question: Do I still need this once every browser supports attr() v2?
    answer: No, and you can drop it without touching your stylesheet. The compiler
      never rewrites your attr() rules, it only adds guarded copies alongside
      them, so removing the build step leaves the original CSS working exactly
      as written.
  - question: What happens to a value I never scanned or safelisted?
    answer: In browsers with attr() v2 it just works, because the original rule is
      still there and stays unbounded. Everywhere else it falls back to the
      value in the attr() fallback argument, which is the same thing a browser
      would do with an attribute value it could not parse.
  - question: Can I put a custom property in the attribute, like data-tint="var(--brand)"?
    answer: No. The attribute value has to parse as the declared type on its own,
      and var() is not a color or a length at parse time. This is true of native
      attr() too, not a limit of the compiler. Keep the indirection on the CSS
      side, the way calc(var(--spacing) * attr(data-p ...)) does.
  - question: Why does the generated CSS come after the rule it replaces?
    answer: Browsers disagree about what to do with an attr() they do not support.
      Some drop the declaration, but Safari keeps it, so a fallback placed
      earlier would lose to the very rule it stands in for. In split mode this
      means the fallback stylesheet has to be loaded after the source.
  - question: Editing an attribute value in dev does not regenerate the CSS. Why?
    answer: Content is scanned once when a stylesheet is transformed, so changing
      markup alone does not invalidate it. Touching the stylesheet or restarting
      the dev server picks the new values up. Production builds are unaffected.
  - question: Does this pull PostCSS into my project?
    answer: No. CSS documents are read by a parser built into the package. PostCSS,
      Lightning CSS and Vite are optional peers, needed only by the integration
      you actually use.
---

Compile CSS `attr()` v2 into static fallback rules for browsers that do not support it.

This is a build time compiler, not a runtime polyfill. It reads your stylesheet, works out
which attribute values your project actually uses, and writes the equivalent static CSS.

```css
/* you write this */
[data-py] {
	padding-block: calc(var(--spacing) * attr(data-py type(<number>), 1));
}
```

```css
/* you also get this */
@supports not (padding: attr(x type(<length>), 1px)) {
	[data-py] {
		padding-block: calc(var(--spacing) * 1);
	}
	[data-py="2"] {
		padding-block: calc(var(--spacing) * 2);
	}
	[data-py="4"] {
		padding-block: calc(var(--spacing) * 4);
	}
}
```

The generated rules sit behind `@supports not (...)`, whose condition is false in browsers
that support `attr()` v2 and true everywhere else, so only one of the two paths is ever
live. Browsers that do support it keep the original declaration and its unbounded
behaviour.

## Installation

```bash
npm install @fylgja/css-attr-polyfill
```

Requires Node 22 or newer.

## Usage

### CLI

```bash
css-attr-polyfill utilities.css -c "src/**/*.{html,jsx,vue}" -o utilities.compiled.css
```

| Option                  | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `-o, --output <file>`   | Write the result here (default: stdout)                  |
| `-c, --content <glob>`  | Content to scan for attribute values (repeatable)        |
| `-s, --safelist <spec>` | Values for an attribute, as `name=spec` (repeatable)     |
| `--config <file>`       | Load options from a JS or JSON config file               |
| `--split`               | Output only the fallback, leaving the source alone       |
| `--supports <cond>`     | Override the `@supports` condition guarding the fallback |
| `--max-values <n>`      | Cap on generated rules per declaration                   |
| `--quiet`               | Do not print warnings                                    |

With `--split`, `-o` receives the fallback stylesheet. There is no second destination,
because the source is returned unchanged and you already have it on disk.

### Config file

Everything except the input path and `--quiet` can live in a config file, so the whole
build reduces to `css-attr-polyfill utilities.css --config ./attr.config.json`. Keys are
camelCase where the flag is kebab-case.

```json
{
	"safelist": { "data-*": "0..12 by 0.5" },
	"content": ["src/**/*.html"],
	"mode": "split",
	"output": "utilities.fallback.css",
	"maxValues": 250,
	"annotationMode": "merge"
}
```

A JS config works too, as `export default { ... }`.

### API

```js
import { compile } from "@fylgja/css-attr-polyfill";

const { css, warnings } = await compile(source, {
	content: ["src/**/*.{html,jsx,vue}"],
	safelist: { "data-*": "0..12 by 0.5" },
});
```

Use `transform()` instead of `compile()` if you already have the values and want a
synchronous, filesystem free call.

## Where values come from

A typed `attr()` is unbounded, so a static stylesheet cannot cover every possible value.
Three sources feed the generator, and their results are combined.

**Content scanning.** Point `content` at your markup and the scanner extracts the attribute
values you actually use. It handles HTML, Markdown, JSX, TSX, Vue, Svelte, Astro and server
side templates such as PHP, Twig and Blade. It extracts rather than parses, so one pass
covers all of them.

**Safelist.** For values scanning cannot see, list them in config. Keys accept `*` wildcards
and values accept ranges, lists or arrays.

```js
{
	safelist: {
		"data-*": "0..12 by 0.5",
		"anchor": "--tip, --menu",
		"data-cols": [1, 2, 3, 4],
	}
}
```

**In CSS annotations.** Useful when the stylesheet is distributed on its own, since the
values travel with it.

```css
/* attr-polyfill: data-py 0..12 by 0.5 */
[data-py] {
	padding-block: calc(var(--spacing) * attr(data-py type(<number>), 1));
}
```

Annotations are merged with config by default. Set `annotationMode: "override"` to have
them replace it instead.

## Output modes

`combined` (the default) splices each fallback in immediately after its source rule. Every
byte the compiler does not touch is preserved exactly as authored, including your own
formatting and comments.

`split` leaves the source stylesheet untouched and returns a second stylesheet containing
only the fallbacks, mirroring any `@layer`, `@media` or `@container` nesting. The
`@supports` guard sits innermost so layer names still register.

> [!Important]
> The fallback has to come after the rule it replaces. Browsers disagree about what to do
> with an unsupported `attr()`: some drop the declaration, but Safari keeps it, so a
> fallback placed earlier would lose to it. In split mode, load the fallback stylesheet
> after the source.

## Integrations

All three run in combined mode, since a build pipeline expects one stylesheet in and one
stylesheet out. Use the CLI or `compile()` when you want a separate fallback file.

### Vite

```js
import attrPolyfill from "@fylgja/css-attr-polyfill/vite";

export default {
	plugins: [attrPolyfill({ content: ["src/**/*.{html,jsx,vue}"] })],
};
```

### PostCSS

```js
import attrPolyfill from "@fylgja/css-attr-polyfill/postcss";

export default {
	plugins: [attrPolyfill({ content: ["src/**/*.html"] })],
};
```

Content is scanned once per build, not once per stylesheet. Warnings surface through the
PostCSS result.

### Lightning CSS

Lightning CSS parses `attr()` v2 correctly, but its visitor API models selectors and
declarations as structured values, with no escape hatch for raw CSS text. Generated rules
cannot be injected from a visitor, so this integration runs before Lightning CSS parses the
stylesheet.

```js
import { preprocess } from "@fylgja/css-attr-polyfill/lightningcss";
import { transform } from "lightningcss";

const { code } = await preprocess(source, { content: ["src/**/*.html"] });

transform({ code: Buffer.from(code), filename: "utils.css", minify: true });
```

## What it will not do

**Runtime bound attributes.** `:data-py="n"` in Vue, `data-py={n}` in JSX, or anything set
from JavaScript cannot be read from source. These are detected and reported, and you should
safelist their values.

**More than one `attr()` in a declaration.** `margin: attr(data-a ...) attr(data-b ...)`
needs a cartesian product of both value sets, which the scanner does not have the
co-occurrence data to bound. Such declarations are skipped with a warning.

## Behaviour worth knowing

Values are validated against the declared type. `data-py="abc"` against `type(<number>)`
produces no rule, because native `attr()` would resolve to its fallback there too.

Attribute values are always quoted in generated selectors. `[data-py=2]` is invalid CSS,
since unquoted attribute values must be valid identifiers.

Selectors are narrowed at their subject, never at an ancestor. `attr()` resolves against
the element the declaration applies to, so `.card[data-py] > p` generates
`.card[data-py] > p:where([data-py="2"])`. When the attribute is absent from the selector,
the added match is wrapped in `:where()` so specificity does not change.
