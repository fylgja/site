---
title: "Introduction"
description: "Why use Fylgja and what does Fylgja offer"
order: 1
---

Fylgja is a component based CSS framework,
allowing you to pick only what you need,

this will keep your build bundle small without using any tools.

So instead of including everything as one package,
you can only include only what you need.

```css
/* Instead of */
@import "vendor";

/* You do this */
@import "@fylgja/auto-grid";
@import "@fylgja/utilpack";
```

Each CSS Component is made as a single layer CSS class.
So you don't have to worry about specificity.

And each component is easy to edit via SCSS and CSS variables.

Giving you a foundation to work on, and you can add your own styles on top.

Since it is so modular,
we recommend using NPM to get the specific components you need,

and build one or more CSS files via Sass or PostCSS.

Or use the easy way and include Fylgja as one package via NPM or via a CDN.

[See our downloads page](/download/),
for more information on how to add Fylgja to your project.

## More to help you getting started

If you still have questions or are looking for some samples.

We have growing section of guides, UI Components<sup>*</sup> and starter projects.

We advice you to first checkout the [Default setup guide](/guides/default/)
on how to get started.

Or if you want to see some code in action,
[checkout our Codepen page](https://codepen.io/Fylgja) where we have samples of each of our CSS components.

<small><sup>*</sup>We are hard at work adding this</small>

