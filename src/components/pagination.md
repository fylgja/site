---
title: "Pagination"
description: "The pagination component makes it easy to build many pagination patterns, 
like button only next previous nav or dots nav."
npm: "@fylgja/pagination"
git: "components/pagination"
codepen: "ZEypmmj"
tags: ["navs"]
preview: "pagination.png"
style: {
    progress: "../../node_modules/@fylgja/pagination/pagination.css"
}
---

The pagination component makes it easy to build many pagination patterns, 
like button only next previous nav or dots nav.

## Installation

```bash
npm install @fylgja/pagination
```

Then include the component in to your code via;

```scss
@use "@fylgja/pagination";
// Or via PostCSS import
@import "@fylgja/pagination";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/pagination" with ($pagination-layer: "components");
// Or via PostCSS and other options as native CSS
@import "@fylgja/pagination" layer(components);
```

## How to use

In your html, you need besides the pagination class, also some html for the items.

We advice you to use an ordered list, as this tells the user the structure of the list of links.

{% codeSample %}
<nav aria-label="pagination">
    <ol class="pagination">
        <li><a href="#item" aria-label="Page 1">1</a></li>
        <li><a href="#item" aria-label="Page 2" aria-current="page">2</a></li>
        <li><a href="#item" aria-label="Page 3">3</a></li>
        <li><a href="#item" aria-label="Page 4">4</a></li>
    </ol>
</nav>
{% endcodeSample %}

Using the `aria-current="page"` will tell the user that this is the current page.

And it is also used to give it the active item style.

### Pagination with buttons and ellipsis.

If you need a more complex pagination with buttons and ellipsis, 

you can nest the pagination with buttons and there is a class

`.pagination-ellipsis` for adding a gap in you pagination items.

{% codeSample %}
<nav aria-label="pagination" class="pagination justify-between">
    <button class="pagination-item" aria-label="Previous">←</button>
    <button class="pagination-item md-order-last" aria-label="Next">→</button>
    <ol class="pagination">
        <li><a href="#item" aria-label="Page 1">1</a></li>
        <li><a href="#item" aria-label="Page 2" aria-current="page">2</a></li>
        <li><a href="#item" aria-label="Page 3">3</a></li>
        <li><span class="pagination-ellipsis">…</span></li>
        <li><a href="#item" aria-label="Page 50">50</a></li>
    </ol>
</nav>
{% endcodeSample %}

### Other use cases

The pagination component also works for any other use cases,
that are a form a pagination.

Do you need a pagination with slider dots, use the dots variable class.

{% codeSample %}
<nav aria-label="pagination" class="pagination -dots">
    <a href="#item" aria-label="Slide 1"></a>
    <a href="#item" aria-label="Slide 2" class="is-active"></a>
    <a href="#item" aria-label="Slide 3"></a>
    <a href="#item" aria-label="Slide 4"></a>
</nav>
{% endcodeSample %}

Need a more btn like pagination, combine this component with the `@fylgja/btn` component.

{% codeSample %}
<nav aria-label="pagination" class="pagination">
    <button class="btn -theme">Previous</button>
    <button class="btn -theme is-active">Next</button>
</nav>
{% endcodeSample %}

Or even more options, like a pagination slider thumbs with images as content, instead of text.

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$enable-pagination-old-gap: true !default;
$enable-pagination-dots-style: true !default;

$pagination-size: 2em !default;
$pagination-gap: 2px !default;
$pagination-padding: 0.25em 0.5em !default;
$pagination-border-size: 1px !default;
$pagination-border-style: solid !default;
$pagination-radius: 4px !default;
$pagination-transition: 0.2s linear;
$pagination-transition-property: (
    color,
    background-color,
    border-color,
    box-shadow
) !default;

$pagination-stroke: transparent !default;
$pagination-bg: transparent !default;
$pagination-color: inherit !default;

$pagination-focus-stroke: currentcolor !default;
$pagination-focus-bg: transparent !default;
$pagination-focus-color: inherit !default;

$pagination-active-stroke: var(--color-theme, #{$color-theme}) !default;
$pagination-active-bg: var(--color-theme, #{$color-theme}) !default;
$pagination-active-color: var(--color-on-theme, #{$color-on-theme}) !default;

$pagination-disabled-opacity: 0.8 !default;

$pagination-dots-size: 0.625em !default;
$pagination-dots-gap: 0.35em !default;

$pagination-dots-stroke: currentcolor !default;
$pagination-dots-active-stroke: var(--color-theme, #{$color-theme}) !default;
$pagination-dots-active-bg: var(--color-theme, #{$color-theme}) !default;
```

_Setting the `$enable-pagination-old-gap` to false._
_Will set the pagination gap via the CSS property gap instead._
