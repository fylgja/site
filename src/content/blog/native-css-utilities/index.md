---
title: "Native CSS Utilities"
description: "A look into how the new and improved CSS attr() function will change the way we write CSS utilities."
publishDate: 2026-01-10
tags: ["CSS Props", "FylgjaCSS", "TailwindCSS"]
coverImage: new-utilities.jpg
---

With every passing year, CSS becomes more powerful.
The last few have brought amazing additions that are now becoming baseline, and 2026 is shaping up to continue that trend.

Today, we'll focus on one upcoming feature that will fundamentally change how we write CSS utilities: the `attr()` function.

## What is `attr()`?

The `attr()` function allows you to use HTML attribute values directly in your CSS.
In the past, its use was limited to the `content` property for displaying text, like showing a link's URL in a print stylesheet:

```html
<a href="https://fylgja.dev/">Explore FylgjaCSS</p>
<style>
@media print {
  a[href^="https://"]::after {
    content: " (" attr(href) ")";
  }
}
</style>
```

Soon, however, `attr()` will be usable with *any* CSS property and will support types beyond just strings.

This opens up a world of possibilities, especially for utility systems.
By adding a type similar to `@property` you can tell the browser what kind of value to expect:

```html
<div data-grid-cols="2"></div>
<style>
[data-grid-cols] {
  --col-count: attr(data-grid-cols type(<number>), 1);
  display: grid;
  grid-template-columns: repeat(var(--col-count), minmax(0, 1fr));
}
</style>
```

Here, we're telling the browser that `data-grid-cols` should be a `number`.
If an invalid value is provided (e.g., `#fff`), the browser will use our fallback of `1`.

## The Evolution of CSS Utilities

So, how does this change the way we build utilities? Let's look at the evolution of a simple padding utility.

### Step 1: Static, Generated Classes

The most common approach today is a static utility framework like Tailwind CSS,
which generates a separate class for each variation.

This is predictable and easy to use, but requires a large CSS file or a build step to generate the styles.

```html
<div class="py-2 px-4"></div>
<div class="py-3 px-5"></div>
<style>
/* Generated CSS */
.py-2 {
  padding-block: calc(var(--spacing) * 2);
}

.px-4 {
  padding-inline: calc(var(--spacing) * 4);
}

.py-3 {
  padding-block: calc(var(--spacing) * 3);
}

.px-5 {
  padding-inline: calc(var(--spacing) * 5);
}
</style>
```

### Step 2: Dynamic Utilities with CSS Variables

To avoid large CSS files and build tools, we at Fylgja developed [Dynamic CSS Utilities] using inline styles to set CSS variables.

The CSS is minimal, but it comes at the cost of verbosity in the HTML.

```html
<div style="--py: .5rem; --px: 1rem"></div>
<div style="--py: var(--size-3); --px: 1.25rem"></div>
<style>
[style*="--py:"] {
  padding-block: var(--py);
}

[style*="--px:"] {
  padding-inline: var(--px);
}
</style>
```

### Step 3: Native Utilities with `attr()`

The new `attr()` function gives us the best of both worlds:
the clean HTML of static classes and the dynamic,
build-free nature of CSS variables.

```html
<div data-py="2" data-px="4"></div>
<div data-py="3" data-px="5"></div>
<style>
[data-py] {
  padding-block: calc(var(--spacing) * attr(--data-py type(<number>), 1));
}

[data-px] {
  padding-inline: calc(var(--spacing) * attr(--data-px type(<number>), 1));
}
</style>
```

This approach is clean, requires no build step, and gives us sensible defaults.
It even handles responsive variants elegantly:

```html
<div data-md-py="2"></div>
<style>
@media (width >= 768px) {
  [data-md-py] {
    padding-block: calc(var(--spacing) * attr(--data-py type(<number>), 1));
  }
}
</style>
```

## Finding the Right Balance

Should `attr()` be used for everything
A hard **NO**. Utilities are great for simple, repeatable patterns like layouts, but they shouldn't replace well-crafted components.
They should complement them.

For example, our own `@fylgja/card` component can be combined with `attr()` based utilities
to create complex variations without writing new CSS:

```html
<article class="card" md-grid-cols="50px 1fr" gap="4"></article>
```

Here, `md-grid-cols` and `gap` could be `attr()` utilities that apply layout styles at different breakpoints,
making the component system both flexible and readable.

## What's Next?

This new way of defining CSS utilities is exciting, but it's still on the horizon.
As of this writing, the typed `attr()` function is only supported in Chrome and Edge.

[![Baseline Status: attr()](https://baseline.js.org/features/attr/responsive-adaptive.svg)](https://webstatus.dev/features/attr)

While we wait for broader browser support, you can experiment with this approach today.
We are exploring it for `@fylgja/utilities`,
and you can check out the [spacing utilities](https://github.com/fylgja/fylgja/blob/main/utilities/utils/experimental/spacing.css) we showed here.

A build tool could be an option in the future to create the fallback values, but for now, using inline CSS variables,
as shown in our [Dynamic CSS Utilities] concept, remains a great, cross-browser compatible solution.

[Dynamic CSS Utilities]: /docs/concepts/dynamic-css-utilities/

## A Quick Shout-Out

While writing this post, we did our own research and experimented with `attr()` support in Fylgja.
But we also took inspiration from these excellent articles by other developers exploring the same topic:

- [Advanced CSS `attr()`](https://una.im/advanced-attr) by Una Kravets
- [The Modern `attr()`](https://ishadeed.com/article/modern-attr/) by Ahmad Shadeed

We especially loved the approach to CSS Anchors in Una's article.
If you want to dive deeper into `attr()`, we highly recommend giving their posts a read.

For the most detailed technical information,
the MDN Web Docs are always the best place to check: [MDN `attr()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/attr)
