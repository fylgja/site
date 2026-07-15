---
title: "Autocomplete in your editor"
description: "Why autocomplete for Fylgja CSS works in most editors, and how to improve it further"
faq:
  - question: Why does autocomplete work without a Fylgja-specific extension?
    answer: Fylgja's design tokens are plain CSS custom properties, its Sass
      functions are documented with SassDoc, and its JS/TS packages are
      documented with JSDoc. Editors don't need anything Fylgja-specific, they
      just need decent CSS, Sass, and TypeScript language tooling, which most
      already have.
  - question: I use an editor that isn't mentioned here, will this still work?
    answer: Likely yes for the Sass and JS/TS side, since that relies on
      general-purpose language servers most editors already support. For CSS
      custom properties, it depends on whether your editor's CSS tooling scans
      node_modules by default; if not, look for a CSS variable completion
      extension for your editor, the concept is the same one shown here for
      VSCode.
  - question: Do I need a CSS variable extension if I'm only using SCSS?
    answer: Not for the Sass functions themselves, SassDoc-aware tooling covers
      that. A CSS variable extension is specifically for autocompleting Fylgja's
      design tokens (CSS custom properties) as you type them, which is a
      separate concern from Sass language support.
  - question: Will these tools pick up my own custom tokens, or only Fylgja's?
    answer: Both, as long as you point the tool at wherever your own variables are
      defined too, alongside Fylgja's files in node_modules. Check the
      extension's own settings for how to configure which files it scans.
---

Fylgja CSS is a CSS Library that simplifies the creation of beautiful and responsive websites.

Autocomplete for Fylgja doesn't depend on a Fylgja-specific extension. It comes down to how
each part of Fylgja is documented, and whether your editor already has language tooling for
that:

- **Design tokens** (CSS custom properties like `--size-4` or `--color-9`) are plain CSS
  variables. Any editor with CSS/SCSS language support can suggest them, once it knows where
  to look.
- **Sass functions** (`@fylgja/sass`) are documented with [SassDoc](https://sassdoc.com/)
  comments, parameter types, return types, and descriptions, right above each function. Any
  Sass language server that reads SassDoc will surface this as you type.
- **JS/TS packages** (like `@fylgja/props-builder`) are documented with
  [JSDoc](https://jsdoc.app/), including typed options. Any editor with JavaScript/TypeScript
  language support will show parameter hints and accepted values from that, the same way it
  would for any other JSDoc-documented package.
- **AI coding assistants** read the same JSDoc and SassDoc comments, so a general-purpose AI
  tool in your editor can suggest accurate completions too, without Fylgja-specific training.
  See [AI & LLM Support](/docs/intergrations/ai-support) for more on how Fylgja works with AI
  tools specifically.

> [!Tip]
> The extensions below are a few examples we've checked, not an exhaustive list. Most editors
> have an equivalent for CSS variables and for Sass language support (often wrapping the same
> underlying tools, for example Zed's community
> [zed-scss](https://github.com/bajrangCoder/zed-scss) extension uses the same `some-sass`
> language server as VSCode's SCSS IntelliSense below). If you find a good setup for your
> editor, please contribute it via a pull request on our
> [GitHub repository](https://github.com/fylgja/site).

## Editor Extensions

A few extensions we've checked that add this kind of tooling:

- **CSS variables**: [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)
  (VSCode) surfaces Fylgja's design tokens as you type.
- **SCSS / SassDoc**: [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass)
  (VSCode) or [zed-scss](https://github.com/bajrangCoder/zed-scss) (Zed, wraps the same
  `some-sass` language server) both surface SassDoc hover docs and suggestions for
  `@fylgja/sass`.

## JS/TS Packages

Packages like `@fylgja/props-builder` are written in plain JS with JSDoc annotations,
including typed options (for example, a parameter typed as a fixed set of accepted string
values). Any editor with JavaScript/TypeScript language support, which is most editors,
either built in or through a `typescript-language-server` integration, will surface parameter
hints and accepted values from that automatically. There's nothing to install or configure for
this specifically.
