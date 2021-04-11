---
title: "Introduction"
description: "Why use Fylgja and what does Fylgja offer"
order: 1
hasToc: false
---

Fylgja is a component based CSS framework.
Alowing you to pick what you only need.
This will keep your build bundle small without using any tools.

Each component is made as a single layer CSS class.
That needs to be easily editable via SCSS or/and CSS variables.
Giving you a foundation to work on.

Where you can add your own styles on top.

Since it is so modular.
We recommend you use NPM to get each the specific components you need.
And build one CSS or more files via Sass or PostCSS.

The easiest way to include Fylgja is via the core NPM package.
Or via a CDN.

```bash
npm install fylgja
```

```html
<link href="https://cdn.jsdelivr.net/npm/fylgja/fylgja.css" rel="stylesheet">
```

[See our downloads page](/download/), for more information.

## More Guides to help you getting started

Since Fylgja is build via Sass.
It is very easy to intergrate with any framework.
The only requirement is Sass.

Not a fan of Sass.
Fylgja also ships with a CSS version for each component.

You can use each CSS file via Webpack or Rollup directly in your JS framework.
Or bundle the CSS files via PostCSS.
You can use {% extLink "PostCSS import", "https://github.com/postcss/postcss-import" %} for this.
See the PostCSS import docs on how to do this.

For more in dept guides. [see the guides page](/guides/).


