---
title: "Tokens"
pageTitle: "Fylgja Tokens"
description: ""
npm: "@fylgja/tokens"
git: "tokens"
sortOrder: 5
---

Start your projects with a predefined set of design tokens,
to avoid creating multiple variantions of spacing and colors and follow consisten structure trough your project.

If you don't require everything that Fylgja Tokens offers,
you can import only the parts you need.
For example, you can import just the spacing and provide your own colors as design tokens.

## Installation

You can install Fylgja Tokens via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/tokens
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens@2.0/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/tokens";
```

Alternatively, if you only need specific parts of the tokens, you can import them individually:

| Import Path                    | CSS | SCSS | JS  | Description                                     |
| ------------------------------ | --- | ---- | --- | ----------------------------------------------- |
| `@fylgja/tokens/aspect-ratio`  | x   | x    | x   |                                                 |
| `@fylgja/tokens/border-radius` | x   | x    | x   |                                                 |
| `@fylgja/tokens/border-sizes`  | x   | x    | x   |                                                 |
| `@fylgja/tokens/colors`        | x   | x    | x   | List of 14 colors in oklch format               |
| `@fylgja/tokens/colors-static` |     | x    |     | Combination of colors and hues as a static list |
| `@fylgja/tokens/hues`          | x   | x    |     | JS version is part of the colors import         |
| `@fylgja/tokens/easing`        | x   | x    | x   |                                                 |
| `@fylgja/tokens/fonts`         | x   | x    | x   |                                                 |
| `@fylgja/tokens/shadows`       | x   | x    | x   |                                                 |
| `@fylgja/tokens/sizes`         | x   | x    | x   |                                                 |
| `@fylgja/tokens/z-layer`       | x   | x    | x   |                                                 |

### Shadow DOM support

The CSS version also support a [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) import version which offer the design tokens on the host scope,
the import paths will end with `.host`.

This is great option if you want to use the Fylgja Tokens with your web components.

**Example import:**

```css
@import "@fylgja/tokens/aspect-ratio.host";
```

## Previews

### Aspect-Ratio

<figure class="flex-wrap align gap">
<div class="demo-box" style="aspect-ratio: var(--ratio-box);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-landscape);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-portrait);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-widescreen);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-superwide);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-ultrawide);"></div>
<div class="demo-box" style="aspect-ratio: var(--ratio-golden);"></div>
</figure>
