---
title: "Tokens"
description: "A collection of all Fylgja tokens offered for specific design tools or frameworks."
npm: "@fylgja/tokens"
git: "components/tokens"
tags: ["tokens", "addons"]
preview: "theme.png"
featured: true
order: 8
---

A collection of all Fylgja tokens offered for specific design tools or frameworks.

## Installation

You can add Fylgja Tokens in a variety of ways.
However, the two choices are typically through a CDN or with NPM.

### Javascript token based systems

If you using PostCSS, Tailwind or another JS based framework that support CSS Props (design tokens), then this your option;

```bash
npm install @fylgja/tokens
```

The following import options are available;

- `@fylgja/tokens`: full bundle of a all CSS props
- `@fylgja/tokens/jit`: full bundle of a all CSS props in PostCSS jit props syntax
- `@fylgja/tokens/tailwind`: full bundle of a all CSS props in Tailwind syntax syntax

see the section [How to use](#how-to-use) for more information on each option

## How to use

### Design tools (e.g. Sketch or Figma)

For design tools use the CDN link as entry,
or download the tokens trough our github repo.

These tokens can be used with any design tool that follows the new [design tokens specification](https://design-tokens.github.io/community-group/format/).

```
https://unpkg.com/@fylgja/tokens/tokens.json
```

These tokens are specific for [Figma compatibility](https://github.com/six7/figma-tokens);

```
https://unpkg.com/@fylgja/tokens/figma-tokens.json
https://unpkg.com/@fylgja/tokens/figma-tokens.sync.json
```

### All Fylgja props

If you plan to utilize all of Fylgja's design tokens in your preferred system,
then this is the way to go;

```js
import "@fylgja/tokens";
```

_Both JS import options are available, in ESM and CommonJS_

### PostCSS jit props

If you wish to use the Fylgja Tokens with [postcss-jit-props](https://github.com/GoogleChromeLabs/postcss-jit-props), use the following config in in your `postcss-config.js`;

```js
const postcssJitProps = require('postcss-jit-props');
const fylgjaTokens = require('@fylgja/tokens');

module.exports = {
  plugins: [
    postcssJitProps(fylgjaTokens),
  ]
}
```

This solution wil add the each CSS prop as you use them,
so no unused CSS variables.

### Tailwind tokens

This is made specificity for the Tailwind config and will offer override options for the defaults by tailwind.
and even extend them with more options.

> See each relevant Fylgja Component, for what is added extra.

To use this import the tokens and add them to your config.

```js
const fylgjaTokens = require("@fylgja/tokens/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["**/*.html"],
    theme: {
        extend: {
            ...fylgjaTokens,
        },
    },
};
```

Or if you want a bit more control (example);

```js
const { screens, colors } = require("@fylgja/tokens/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["**/*.html"],
    theme: {
        screens,
        extend: {
            colors,
        },
    },
};
```
