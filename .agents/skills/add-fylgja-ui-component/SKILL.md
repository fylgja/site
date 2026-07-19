---
name: add-fylgja-ui-component
description: Use when creating or scaffolding a new Fylgja UI component doc (an MDX file under src/content/ui/**), or when writing or reviewing any Fylgja UI example markup, to keep the structure and house style consistent. Covers the content template, ComponentPreview usage, classless HTML, the native-element-first rule, and Fylgja utility idioms (alignment via .align / --align, never invented justify-* or items-* classes).
---

Guidance for adding a component to the Fylgja UI Components library on the site
(`src/content/ui/**`). Follow this whenever you scaffold a new component doc or
write example markup for one. The related component skills ([create-fylgja-modal],
[create-fylgja-offcanvas]) build on the rules here.

## Where the file goes

- Each component is a folder: `src/content/ui/<category>/<name>/index.mdx`, with its
  demo snippets beside it. The glob loader strips `index`, so the route is
  `/ui/<category>/<name>/`. The category folder must match the `category` enum in
  `src/content.config.ts`: `actions`, `forms`, `navigation`, `overlays`,
  `feedback`, `data-display`, `layout`.
- Routing, the sidebar, and the gallery are automatic. Adding the folder is enough;
  do not touch `_collection.ts`, `[...id].astro`, or the index.

## Start from the template

Copy the whole `src/content/ui/_template/` folder to
`src/content/ui/<category>/<name>/` and fill in `index.mdx`. Keep the section order
(Preview, Installation only if a package backs it, Usage, Anatomy, Accessibility,
Variants, Examples). Remove sections that genuinely do not apply.

Frontmatter fields (schema in `src/content.config.ts`):

- `title`, `description` (one sentence), `category` (from the enum).
- `tags`: free-form keywords for gallery search.
- `status`: `stable` | `beta` | `planned`.
- `languages`: `["html"]`, add `"js"` / `"alpine"` / `"astro"` only when that variant
  exists (e.g. `"js"` for a vanilla-JS / custom-element version).
- `requires`: Fylgja packages the component needs, rendered as a Requirements box.
  Each entry is `{ pkg, level, reason }`. `level: required` means it will not
  look/behave right without the package; `level: recommended` means it works
  standalone but is better with it. Native-element components (dialog, details,
  table, form controls) typically list `@fylgja/base` as `recommended`.
- `sortOrder`: order within the category.

Frontmatter is YAML: a plain (unquoted) value must not contain a colon-space (`: `),
so an FAQ answer mentioning `--size: 3rem` or `style="…: …"` breaks the parse.
Rephrase (e.g. "the --size variable, such as 3rem") or quote the whole value.
- `faq`: optional question/answer array, rendered at the bottom. Answers are plain
  text (no markdown), but the Faq parser auto-links bare `https://` URLs and supports
  `[text](url)` link sugar (use it for internal links, e.g.
  `[Snap Slider docs](/library/extensions/snap-slider/)`).
- `npm` / `git`: only when a package backs the component.

## Component folder and snippets

Keep demo markup out of the MDX. Each demo is a `.html` file beside `index.mdx`,
imported as a raw string. Use the generic name `example`:

```
src/content/ui/overlays/modal/index.mdx
src/content/ui/overlays/modal/example.html
src/content/ui/overlays/modal/example.alpine.html
```

```mdx
import ComponentPreview from "@/components/ComponentPreview.astro";
import example from "./example.html?raw";
import exampleAlpine from "./example.alpine.html?raw";

<ComponentPreview center code={example} alpine={exampleAlpine} />
```

The `.html` and `.css` files are not collection entries (the loader only globs
`{md,mdx}`), so they are never routed. Name the HTML demo `example.html`, the
Alpine variant `example.alpine.html`, and a CSS snippet you want to display
`example.css` (rendered with `<CodeBlock lang="css" code={example.trim()} />`).
When a component needs several distinct demos, use suffixed names like
`example-<variant>.html`. `ComponentPreview` trims the imported strings, so a
trailing newline is fine.

Format snippet files per `.editorconfig`: **tab** indentation (width 4), LF line
endings, and a final newline. Do not use spaces to indent HTML snippets.

## ComponentPreview

Use `<ComponentPreview>` (from `@/components/ComponentPreview.astro`) for every demo.

- The `code` prop is the single source of truth: it is rendered live (via
  `set:html`) and shown in the HTML source tab, so they never drift. Import it from
  a snippet file (above) rather than inlining a long template string.
- `set:html` does not execute `<script>` tags. Demos must therefore be
  **declarative**: invoker commands, `<details>`, the Popover API, `<form>`.
  Never put an inline `onclick`/`on*` in the live `code`.
- Style demos with Fylgja utilities, not custom CSS. Spacing uses the dynamic
  `--py` / `--px` / `--my` / `--mx` utilities (e.g. `style="--py: 0.75rem"`);
  `flow-none` on a parent clears its children's default text margins; `flex-none`
  stops a flex child shrinking; `divide-y`, `list-none`, `align`, and
  `toggle-rotate` cover common component chrome. A `<style>` block in the snippet
  IS applied by set:html, but treat it as a last resort for the rare rule no
  utility expresses, never the default.
- `astro` and `alpine` props add reference-only source tabs; they are not rendered
  live, so a scripted variant belongs in a tab, not the live preview.
- `center` centers the preview contents (good when the demo is just a trigger).
- The wrapper does not apply `flow`. Pass `previewClass="flow"` only when a demo
  stacks several visible elements that need spacing.

## House style

**Native element first.** Reach for the correct HTML primitive before anything
else: `<dialog>` for modals/drawers, `<details>`/`<summary>` for disclosure, the
Popover API for popovers, `<table>` for tabular data. Never reimplement one with a
`<div>` plus ARIA and script. If you are adding `role=`, stop and find the element
that already has that role.

**Classless.** Fylgja styles bare elements. A `<button>`, `<dialog>`, `<h2>`,
`<p>`, `<input>` should look right with no classes. Add utility classes only for
layout the base cannot do (e.g. aligning a row of actions), and keep them off the
content itself.

**Do not reach for `flow`.** Base already spaces text: `h1`–`h6`, `p`, `ul`, `ol`,
`dl`, and `pre` get vertical margins automatically. So headings and paragraphs in
a dialog, card, or section need nothing. Only use `flow` (or `gap` on a flex/grid
container) to stack *non-text* elements that base does not margin, such as a run of
`<details>`. When in doubt, leave it out and check the spacing.

**Never invent utilities.** Fylgja has no Tailwind-style `justify-*`, `items-*`,
`gap-4`, `mt-2`, etc. Using them silently does nothing. Instead:

- Alignment goes through `.align`, which drives `place-content` (and
  `place-items`) from CSS variables. Right-align a flex row:
  `class="flex-wrap gap align" style="--align: center end"` (the second value of
  `--align` is `justify-content`). `.align-center` centers both axes.
  `.align-self` / `.align-self-end` handle a single item.
- Spacing and sizing use dynamic utilities via variables, e.g.
  `style="--my: 1rem 0"`, `style="--px: 2rem"`, `style="--gap: 0.5rem"`, with
  breakpoint variants like `--md_my`. See the Dynamic CSS Utilities doc.
- Real utilities you will actually use: `flex`, `flex-wrap`, `flex-col`,
  `flex-none`, `gap`, `gap-sm`, `align`, `align-center`, `align-self`, `auto-grid`
  (`--max-col-size`), `grid-cols` (`--grid-cols`), `flow`, `divide-y`, `line-clamp`,
  `truncate`, `stretched-link`, `text-center`/`text-end`, `lead`, `hidden`/`block`,
  `w-full`, `container`, `sr-only`. When unsure a class exists, grep
  `node_modules/@fylgja/utilities` rather than guessing.

**Colors reference Fylgja, never the site.** A component is copy-pasted into other
projects, so only use color vars Fylgja ships: base foundations (`--brand`,
`--on-brand`, `--root-bg`, `--root-fg`, `--surface-color`, `--text-color-muted`) or
`@fylgja/tokens`. Derive subtle tones with `color-mix`, e.g. a divider color of
`color-mix(in oklab, var(--root-bg) 75%, var(--root-fg))`. Never use a site-only
variable such as `--border-color-fade` in a component snippet.

**Interactivity is declarative.** Prefer invoker commands (`commandfor` +
`command`), `<form method="dialog">`, `<details>`, and the Popover API. When JS is
unavoidable, put it in a `<script>` tag and wire listeners by id. Never inline
`onclick` or other `on*` attributes anywhere.

**No redundant `role="list"`.** A `<ul>`/`<ol>` inside a `<nav>` keeps its list
semantics, so `role="list"` there is redundant. Only add `role="list"` to a list
whose `list-style` is removed and that is not already inside a nav landmark.

**Cross-link** related components with links like `/ui/overlays/modal/`.

## When done

Verify with a build (`npm run build`) or by previewing the page, not after every
edit. Drive any interactive demo in a browser to confirm it actually works, since
`set:html` and native APIs (invoker commands, `closedby`) are easy to get subtly
wrong.
