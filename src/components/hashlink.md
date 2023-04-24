---
title: "Hashlink"
description: "The Hashlink is a small utility component,
which adds smooth scrolling to the page via CSS
and a scroll offset to any element with a id."
npm: "@fylgja/hashlink"
git: "components/hashlink"
tags: "utils"
preview: "hashlink.png"
---

The Hashlink is a small utility component,
which adds smooth scrolling to the page via CSS

and a scroll offset to any element with a id.

Making it perfect for hashlinks.
But also works with Javascript scrollto actions.

## Installation

```bash
npm install @fylgja/hashlink
```

Then include the component in to your code via;

```scss
@use "@fylgja/hashlink";
// Or via PostCSS import
@import "@fylgja/hashlink";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/hashlink" with ($hashlink-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/hashlink" layer(utilities);
```

## How to use

The styles require no additional html markup,

but will only take affect if a hashlink points to the correct id and can receive focus.

```html
<a href="#heading">Go to Heading</a>
..
<h2 id="heading" tabindex="-1">..</h2>
```

Now the page will smooth scroll to the target id and with a specific offset.

_Which is also be super handy with sticky headers._

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$enable-hashlink-scroll-behavior: true !default;
$enable-hashlink-scroll-behavior-focus-only: true !default;
$enable-hashlink-id-offset: true !default;

$hashlink-scroll-offset: 1rem !default;
```
