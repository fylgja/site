---
title: "Utilities"
pageTitle: "Fylgja Utilities"
description: "Fylgja utilities provides a curated set of CSS utilities"
npm: "@fylgja/utilities"
git: "https://github.com/fylgja/fylgja/tree/main/utilities"
sortOrder: 3
---

Fylgja Utilities offers a focused collection of production-ready CSS utilities.

Designed for direct use without a build step,
each utility is carefully selected for practical application.

Fylgja Utilities integrates seamlessly as a standalone solution
or alongside other utility frameworks like Tailwind CSS and UnoCSS.

## Installation

You can install Fylgja Utilities via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/utilities
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities@1.0/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/utilities";
```

Alternatively, if you only need specific parts of the utilities.

You can import any utility mentioned below, using:

```css
@import "@fylgja/utilities/{UTILITY_NAME}";
```

_align • auto-grid • clip • container • content-lazy • display • divide • flex • flow • gap • gradient • grid-cols • line-clamp • list • overlay • position • rounded • scroll • scrollbar • size • snap • spacing • sr-only • stack • stretched-link • toggle • transition • truncate • typography_

## Utilities

### Align

Align is a [Dynamic CSS Utility] which works together with any flex or grid based layout.
This Utility will provide a default alignment for centering on the items axis and space between on the content axis and can be customize using CSS variables as explained in the section on [Dynamic CSS Utility]'s.

<figure class="demo-wrapper flex align" style="--align: center; --demo-wrapper-min-size: 200px">
<code class="demo-box --inline">Align Center</code>
</figure>

### Auto Grid

Auto Grid is a [Dynamic CSS Utility] which creates a grid layout automatically based on the available space, same as seen with Container Queries.
The max column size and count can be customizes by using CSS variables.

<figure class="auto-grid gap">
<div class="demo-box --inline">1</div>
<div class="demo-box --inline">2</div>
<div class="demo-box --inline">3</div>
<div class="demo-box --inline">4</div>
<div class="demo-box --inline">5</div>
</figure>

### clip

Clip is a better way to handle overflowing content compared to hidden value used by overflow.

This utility easily allows to to prevent any overflow content by setting clip as the wrapper class,
and this clipping can be set just to the axis thats needs it without introducing overflow auto to the other axis that has nothing set.

When using `clip-y` it will only clip the overflow on the y axis and the x axis can still overflow.

### container

The classic method to center and to add a max-width to you content.

Normally this class is considered a CSS Component, but these days this class is so small it is considered Utility instead.

This do the fact that this CSS Utility only sets the inline margin and a max-width using CSS calc to include a page gap, previously know as container padding, from the sides when the screen is smaller then the set max-width.

### content-lazy

As the name states this allows you to load specific parts of the page lazy, using the power of CSS.

[content-visibility] is now a baseline CSS property, so can be used in all browsers.

But if some older version does not yet support this, it will have no effect, so this utility can be used a progressive enhancement.

Do note [content-visibility] is best used for pages that are long and so have many elements to load, this utility has no effect on shorter pages.

content-lazy is a [Dynamic CSS Utility] for the part to customize the reserved element size if not loaded.

[content-visibility]: https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility

### display

As the name states display sets the display value of an element, but unlike other utility systems this version only loads the parts that are commonly used in websites,
so don't expect all version to work as seen with TailwindCSS or with other systems.

Why not add all you ask.

Simple to keep the CSS size small without introducing the need for tooling to make the CSS smaller.

Display supports the following classes:

<div class="scroll-x">

| class                                        | value                          |
| -------------------------------------------- | ------------------------------ |
| `hidden`                                     | `display: none`                |
| `block`                                      | `display: block`               |
| `inline-block`                               | `display: inline flow-root`    |
| `sm:{hidden,block,inline-block,table-cell}`  | All for the **sm** breakpoint  |
| `md:{hidden,block,inline-block,table-cell}`  | All for the **md** breakpoint  |
| `lg:{hidden,block,inline-block,table-cell}`  | All for the **lg** breakpoint  |
| `xl:{hidden,block,inline-block,table-cell}`  | All for the **xl** breakpoint  |
| `xxl:{hidden,block,inline-block,table-cell}` | All for the **xxl** breakpoint |

</div>

For the breakpoint we use the same values as before,
including table-cell as extra when you plan to hide the table cell on mobile,
but show it on desktop screen sizes

### divide

The `divide` utility is a popular feature,
but it's often incomplete in most utility systems.

With Fylgja, you get access to both `divide-y` and `divide-x`,
which don't require preset values,
as they inherit styles from the border utilities.

As with all of Fylgja's utilities,
you can modify the divider's width using CSS variables, making it highly flexible.

To further enhance the divide utility,
Fylgja introduces `divide-gap-y` and `divide-gap-x`.

These utilities allow you to add flow-based spacing between dividers,
offering more control over layout gaps.

Like the border-width,
these gaps can also be easily adjusted with CSS variables for complete customization.

<figure class="demo-wrapper">
<ul role="list" class="divide-y divide-gap-y">
<li>A better way to</li>
<li>handle divides</li>
<li>and supports a gaps to!</li>
</ul>
</figure>

### flex

Similar to the the display utilities, but also includes a lot of super powers.
`flex` is a [Dynamic CSS Utility] that includes a lot of customization trough the power of CSS variables.

We made sure to include few extra flex helper utilities that include the same as using the CSS variables.

### flip

flip is a small utility to flip things based on a open state.

This works great with the HTML details or a custom collapse.

Next to flip you also get `flip-rotate` that will also rotate and not just flip, this version does require the `transition` utility of a CSS component that allready support CSS transitions for rotate values.

<figure class="demo-wrapper flex-wrap gap" style="--demo-wrapper-min-size: 8rem">
<details name="demo-flip-group" open>
	<summary class="list-none btn">
	<span>Click Me!</span>
	<span class="flip">↓</span>
	</summary>
	<div style="--my: 0.5rem">Hello there.</div>
</details>
<details name="demo-flip-group">
	<summary class="list-none btn">
	<span>I will Rotate when toggling!</span>
	<span class="flip-rotate transition">↓</span>
	</summary>
	<div style="--my: 0.5rem">Hello there.</div>
</details>
</figure>

### flow

### gap

### gradient

### grid

Similar to the the display utilities, but also includes a lot of super powers.
`grid` is a [Dynamic CSS Utility] that includes a lot of customization trough the power of CSS variables.

### line-clamp

### list

### overlay

### position

### rounded

### scroll

### scrollbar

### size

### snap

### spacing

### sr-only

### stack

### stretched-link

### transition

### truncate

### typography

### visibility



[Dynamic CSS Utility]: /docs/concepts/dynamic-css-utilities
