---
title: "Introduction"
description: "Why use Fylgja and what does Fylgja offer"
order: 1
style: "
#sample-import { --cols-size: 300px }
#sample-import pre { margin: 0; }
"
---

Fylgja is a component based CSS framework,
allowing you to pick only what you need,

this will keep your build bundle small without using any tools.

So instead of including everything as one package,
you can only include only what you need,
keeping your CSS small without any tools.

```css
/* So instead of */
@import "vendor";

/* You do this */
@import "@fylgja/auto-grid";
@import "@fylgja/utilpack";
```

## Quick start

```bash
npm install fylgja
```

And include it with;

<div id="sample-import" class="auto-grid my-4">

```scss
// SCSS
@use "@fylgja/auto-grid";
@use "@fylgja/utilpack";
```

```css
/* PostCSS Import */
@import "@fylgja/auto-grid";
@import "@fylgja/utilpack";
```

</div>

For more information on how to add Fylgja [see our downloads page](/download/),

and for the documentation of each Fylgja CSS Component,
see each component at the [Fylgja components page](/components/).

## More to help you getting started

If you still have questions or are looking for some samples.

We have growing section of guides, UI Components<sup>*</sup> and starter projects.

We advice you to first checkout the [Default setup guide](/guides/default/)
on how to get started.

Or if you want to see some code in action,
[checkout our Codepen page](https://codepen.io/Fylgja) where we have samples of each of our CSS components.

<small><sup>*</sup>We are hard at work adding this</small>

