---
title: "Introduction"
description: "Why use Fylgja and what does Fylgja offer"
order: 1
hasToc: false
---

Fylgja is a component based CSS framework,
lowing you to pick only what you need,

this will keep your build bundle small without using any tools.

Each component is made as a single layer CSS class, easily editable via SCSS or/and CSS variables,

giving you a foundation to work on, and you can add your own styles on top.

Since it is so modular, we recommend using NPM to get the specific components you need,
and build one or more CSS files via Sass or PostCSS.

The easiest way to include Fylgja is via the core NPM package,
or add it by using a CDN.

```bash
npm install fylgja
```

```html
<link href="https://cdn.jsdelivr.net/npm/fylgja/fylgja.css" rel="stylesheet">
```

[See our downloads page](/download/), for more information.

## More Guides to help you getting started

Since Fylgja is build via Sass, it is very easy to intergrate it with other frameworks,
the only requirement is Sass.

Not a fan of Sass, Fylgja also ships with a CSS version for each component.

You can use each CSS file via Webpack or Rollup directly in your JS framework or bundle the CSS files via PostCSS,

use [PostCSS import](https://github.com/postcss/postcss-import) for this.
See the PostCSS import docs on how to do this.

For more in dept guides. [see the guides page](/guides/).


