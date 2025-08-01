---
title: "Base"
pageTitle: "Fylgja Base"
description: "Common defaults to make your body and typography look good and easy to change to your needs."
npm: "@fylgja/base"
git: "https://github.com/fylgja/fylgja/tree/main/base"
sortOrder: 1
---

Fylgja Base provides a streamlined starting point for any web project.
It’s a collection of class-less solutions,
allowing you to focus on building your site using plain HTML or your preferred frontend language,
without the need to add any additional classes.

If you don't require everything that Fylgja Base offers,
you can import only the parts you need.
For example, the preflight module provides a solid foundation for typography
but excludes styles for forms, buttons, and the HTML dialog element.

## Installation

You can install Fylgja Base via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/base
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/base";
```

Alternatively, if you only need specific parts of the base, you can import them individually:

| Import Path                     | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| `@fylgja/base/preflight`        | Global defaults, typography and table defaults        |
| `@fylgja/base/preflight-scoped` | Global defaults, scoped typography and table defaults |
| `@fylgja/base/btn`              | HTML Button styles + `.btn` class for links           |
| `@fylgja/base/btn-class-only`   | Just the `.btn` class for adding btn styles           |
| `@fylgja/base/btn-class-less`   | Just the HTML Button styles                           |
| `@fylgja/base/form`             | Comprehensive form styles                             |
| `@fylgja/base/dialog`           | Dialog styles, including support for popovers         |

### Theme Styles

Fylgja Base provides a clean foundation,
intentionally excluding brand colors and extra styling by default.

To apply a pre-defined theme, import it separately:

```css
@import "@fylgja/base/theme";
```

For theme customization, copy the styles to your project:

```sh
npx @fylgja/base
```

This command will add the theme styles to `src/css`, `src/styles`, or `src/assets` (if present),
or the current directory if no folder is found.

Beyond brand colors, the theme includes styles for dark mode, view transitions,
primary buttons, and off-canvas dialog support.

## Preview

Fylgja Base is designed to work seamlessly with plain HTML, so most of what you see on this site uses just HTML, with a few CSS components and Utilities.

Below is a demo showcasing Fylgja Base applied to a wide range of HTML elements.
This preview highlights the default styles and improvements you get simply by using Fylgja Base.

<figure class="flow">
<iframe
	src="/library/base/demo"
	title="Fylgja Base - Showcasing the power of classless styling"
	loading="lazy"
	width="992"
	height="744"
	class="card"
></iframe>
<fircaption class="block text-center italic text-muted">
<a href="/library/base/demo">View the Fylgja Base Demo in Fullscreen</a>
</figcaption>
</figure>
