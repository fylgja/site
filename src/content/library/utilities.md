---
title: "Utilities"
pageTitle: "Fylgja Utilities"
description: "Fylgja utilities provides a curated set of CSS utilities"
npm: "@fylgja/utilities"
git: "https://github.com/fylgja/fylgja/tree/main/utilities"
sortOrder: 3
preconnect: [
	"https://placecats.com/"
]
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
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css" rel="stylesheet">
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

_align • auto-grid • clip • container • content-lazy • display • divide • flex • flow • gap • gradient • grid-cols • line-clamp • list • overlay • position • rounded • scroll • scroll-mask • scrollbar • size • snap • spacing • sr-only • stack • stretched-link • toggle • transition • truncate • typography_

## Utilities Overview

### Align

Effortlessly align content along both the Y and X axes for **flex** and **grid** layouts,
as well as for flow layouts. This utility leverages [Dynamic CSS Utilities].

<figure class="demo-wrapper flex align-center" style="--demo-wrapper-min-size: 200px">
<code class="demo-box --inline">Align Center</code>
</figure>

<div class="scroll-x">

| CSS Utility Name | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| `align`          | Main utility class, can be modified using CSS variables                  |
| `align-center`   | Alias for `class="align" style="--align: center; --align-items: center"` |
| `align-self`     | Main utility class, to apply to a child element                          |
| `align-self-end` | Alias for `class="align-self" style="--align-self: end auto;"`           |

</div>

### Auto Grid

Create responsive grid layouts with the `auto-grid` utility.
This class automatically generates columns based on the configured `--max-col-size` CSS variable.

<figure class="demo-wrapper --resize">
<div class="auto-grid gap">
<div class="demo-box --inline">1</div>
<div class="demo-box --inline">2</div>
<div class="demo-box --inline">3</div>
<div class="demo-box --inline">4</div>
</div>
</figure>

### Clip

Hide overflowing content with ease. Use `clip` for all sides,
or target specific axes with `clip-y` (vertical) and `clip-x` (horizontal).

### Container

The `container` utility provides a standard way to center content and apply a maximum width, often referred to as a wrapper.

This container follows modern flow styles, applying a maximum width once without relying on media queries for each breakpoint.
This allows for flexible styling per section using CSS variables to adjust `--container-size` and `--container-gap`.

### Content Lazy

Implement lazy loading for sections of your page using `content-lazy`. Adjust the initial size with the `content-size` variable.

### Display

Quickly set the `display` property of an element.

<div class="scroll-x">

| CSS Utility Name              | value                                        |
| ----------------------------- | -------------------------------------------- |
| `hidden`                      | `display: none`                              |
| `block`                       | `display: block`                             |
| `inline-block`                | `display: inline flow-root`                  |
| `flex`                        | `display: flex`                              |
| `inline-flex`                 | `display: inline flex`                       |
| `grid`                        | `display: grid`                              |
| `inline-grid`                 | `display: inline grid`                       |
| `table-cell`                  | `display: table-cell`                        |
| `open:{DISPLAY}`              | Open modifier for dialogs and popovers       |
| `{sm,md,lg,xl,xxl}:{DISPLAY}` | Apply display styles at specific breakpoints |

</div>

### Divide

The `divide` utility offers enhanced control over dividers, going beyond basic implementations.

Fylgja provides both `divide-y` (vertical) and `divide-x` (horizontal), which seamlessly integrate with your border utilities, eliminating the need for preset values.

Additionally, it work together with the `flow` utility, to add flow-based spacing between your dividers, providing greater flexibility in layout gaps.

<figure class="demo-wrapper">
<ul role="list" class="divide-y flow">
<li>A better way to</li>
<li>handle divides</li>
<li>and supports a gaps to!</li>
</ul>
</figure>

### Flex

Convenient shorthands for `display: flex`, including options for direction and wrapping,
using CSS variables, following the [Dynamic CSS Utilities] approach.

<div class="scroll-x">

| CSS Utility Name | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `flex`           | Main utility class, can be modified using CSS variables |
| `flex-col`       | Alias for `class="flex" style="--flex-dir: column"`     |
| `flex-wrap`      | Alias for `class="flex" style="--flex-wrap: wrap"`      |
| `flex-none`      | Helper for child elements, Sets: `flex: 0 0 auto`       |
| `flex-auto`      | Helper for child elements, Sets: `flex: 1 1 auto`       |

</div>

### Flow

While Fylgja's base styles often include flow spacing,
the `flow` utility allows you to explicitly force a new flow with `flow` or remove any flow with `flow-none`.

### Gap

Easily set gaps for Grid, Flex, or Column layouts using the `gap` class or its alias `gap-sm`.
The default gap is `1em` (`0.5em` for `gap-sm`).

### Gradient

Provides three helpful utilities for applying border, background, and text gradients, all customizable with CSS variables.

<figure class="demo-wrapper">
<div class="auto-grid gap">
	<div
		class="card bg-gradient"
		style="
			--card-color: #111;
			--gradient-angle: 35deg;
			--gradient-stops: red, yellow;
		"
	>
		background Gradient
	</div>
	<div
		class="card text-gradient"
		style="--gradient-angle: 35deg; --gradient-stops: red, yellow"
	>
		Text Gradient
	</div>
	<div
		class="card border-gradient"
		style="--gradient-angle: 35deg; --gradient-stops: red, yellow"
	>
		Border Gradient
	</div>
	<div
		class="card text-gradient border-gradient"
		style="--gradient-angle: 35deg; --gradient-stops: red, yellow"
	>
		Text & Border Gradient
	</div>
</div>
</figure>

### Grid Cols

Simplified way to set up grid layouts with columns using `grid-cols`.
You can modify the column configuration using CSS variables, following the [Dynamic CSS Utility] pattern.

Also includes `grid-flow`, ideal for creating a row of columns for sliders,
and is compatible with the `gap` utility for consistent column spacing.

### Line Clamp

Limit the number of lines in your paragraphs to prevent text overflow. The default is 3 lines.

<figure class="demo-wrapper --resize" style="width: 500px">
	<p class="line-clamp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquam nisi ea! Et veniam delectus voluptates. Architecto consectetur placeat eius quaerat voluptas tempore id maiores, suscipit dolore, nihil qui voluptatum.</p>
	<figcaption class="text-center italic text-muted">Resize this to see the max lines in effect</figcaption>
</figure>

### List

Offers the `list-none` utility, useful for removing default list markers,
especially if you are not using Fylgja's base styles or when customizing HTML `<details>` elements.

### Overlay

Adds a subtle overlay shadow to an element, often effective in combination with the `stack` utility.

<figure class="demo-wrapper">
<div class="stack inline-grid">
<img src="https://placecats.com/480/300" alt="Meow" width="480" height="300" loading="lazy">
<div class="overlay align-self" style="--p: 1rem; --align-self: end auto">Meow</div>
</div>
</figure>

### Position

Set the `position` property with common default values. Each position can be further customized with CSS variables.

| class      | value                     |
| ---------- | ------------------------- |
| `relative` | Sets `position: relative` |
| `sticky`   | Sets `position: sticky`   |
| `absolute` | Sets `position: absolute` |
| `fixed`    | Sets `position: fixed`    |

### Rounded

A set of straightforward border radius utilities:

- `rounded`: Applies a standard border radius.
- `rounded-conditional`: Applies a border radius, but removes it if the element's size matches the page or container.
- `rounded-none`: Removes any border radius.
- `rounded-inherit`: Inherits the border radius from the parent.
- `round`: Creates a perfectly round element.

### Scroll

Enable scrollable overflow on the X or Y axis with `scroll-x` (horizontal) and `scroll-y` (vertical).

### Scroll Mask

Enable Overflow Mask to any overflowing content.
Making it more clear to that there is overflowing content.

Usefull in combination with `scroll-x` and `scroll-y`.

### Scrollbar

Customize the appearance of the scrollbar, including hiding it or making it small.

### Size

Convenient shorthands for setting width and height using [Dynamic CSS Utilities]. Includes `w-full`, `h-full`, `max-w-full`, and `max-h-full`.

For more detailed sizing options, refer to the [Spacing utilities](#spacing).

### Snap

Easily create interactive sliders. This utility works best in conjunction with other layout utilities like Grid Cols and Scroll.

<figure class="demo-wrapper">
<div class="snap scroll-x scroll-mask grid-cols grid-flow gap" style="--sm_grid-cols: 2">
<img src="https://placecats.com/neo_banana/480/300" alt="Meow" width="480" height="300" loading="lazy">
<img src="https://placecats.com/neo/480/300" alt="Meow" width="480" height="300" loading="lazy">
<img src="https://placecats.com/millie/480/300" alt="Meow" width="480" height="300" loading="lazy">
<img src="https://placecats.com/bella/480/300" alt="Meow" width="480" height="300" loading="lazy">
<img src="https://placecats.com/millie_neo/480/300" alt="Meow" width="480" height="300" loading="lazy">
</div>
</figure>

```html
<div
    class="snap scroll-x scroll-mask grid-cols grid-flow gap"
    style="--sm_grid-cols: 2"
>
    ... slides
</div>
```

### Spacing

[Dynamic CSS Utilities] for quickly setting width, height, margin, or padding on an element.

You don't need a specific class to use these [Dynamic CSS Utilities]; simply set the style with:

- `--size-y` (block-size / height)
- `--size-x` (inline-size / width)
- `--my` (margin-block)
- `--mx` (margin-inline)
- `--py` (padding-block)
- `--px` (padding-inline)

along with a valid CSS unit to apply the styles.

The power of [Dynamic CSS Utilities] extends to breakpoint customization.
For example, set a different margin for the **md** breakpoint using `--md_my: 1rem`.

This also includes a few shortcuts (but without breakpoints):

- `--size` (same as setting `--size-y` and `--size-x`)
- `--m` (same as setting `--my` and `--mx`)
- `--p` (same as setting `--py` and `--px`)

### Screen Reader Only

Visually hide an element from the page using `sr-only`, while keeping it accessible for screen readers.

Similar to the `display` utility, you can apply breakpoint-specific styles, e.g., `sm:sr-only`.

### Stack

Effortlessly stack multiple elements on top of each other without the need for manual positioning.
This allows you to stack without using `position: absolute`.

### Stretched Link

Make any element fully clickable without breaking link semantics.
Use it with a `card` or with `relative` class on the parent element to define the clickable area.

<figure class="demo-wrapper">
<div class="card --hover inline-block">
	<img src="https://placecats.com/neo_banana/480/300" alt="Meow" width="480" height="300" loading="lazy">
	<div class="card-content">
	<p>This is the body text that should not be part of the link</p>
	<a class="stretched-link btn --primary" href="#stretched-link">This is a accessible link text</a>
	</div>
</div>
</figure>

### Toggle

Create interactive toggle states for elements like `<details>` using the `toggle` utility.

<figure class="demo-wrapper flex-wrap gap" style="--demo-wrapper-min-size: 8rem">
<details open>
    <summary class="list-none btn">
    <span>Click Me!</span>
    <span class="toggle-flip">↓</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
<details open>
    <summary class="list-none btn">
    <span>I will Rotate when toggling!</span>
    <span class="toggle-rotate transition">↓</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
<details open>
    <summary class="list-none btn stack">
    <span class="toggle-hide">Content is Closed!</span>
    <span class="toggle-show">Content is Open!</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
</figure>

### Transition

Quickly add smooth transitions to elements using `transition`, `transition-display`, or `transition-color`.
Also supports discrete transitions.

### Truncate

Truncate text to a single line with `truncate`.

<figure class="demo-wrapper --resize" style="width: 500px;">
	<p class="truncate">This is very looooooooooooooooooooooooooooong text that can not fit on one line!</p>
</figure>

### Typography

Convenient shorthands for common text styles:

- `lead`: Makes text a bit larger and bold.
- `font-normal`: Uses a normal font weight.
- `font-bold`: Uses a bold font weight.
- `text-start`: Align text to the left.
- `text-end`: Align text to the right.
- `text-center`: Center text alignment.
- `italic`: Apply italic styling.
- `not-italic`: Remove italic styling.
- `nowrap`: Prevent text break.

[Dynamic CSS Utility]: /docs/concepts/dynamic-css-utilities
[Dynamic CSS Utilities]: /docs/concepts/dynamic-css-utilities

## Support with other CSS Utility Systems

Fylgja Utilities are designed to complement, rather than replace,
other CSS Utility Systems like Tailwind CSS.

Most Fylgja utilities are interchangeable with those found in other CSS Utility Systems.

If a similar utility is already present in your chosen system,
it's generally best to use that system's utility or vice versa.

However, some Fylgja Utilities are unique and can be an excellent addition to any CSS Utility System,
providing specialized functionality not commonly found elsewhere.
