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

_align • auto-grid • clip • container • content-lazy • display • divide • flex • flow • gap • gradient • grid-cols • line-clamp • list • overlay • position • rounded • scroll • scrollbar • size • snap • spacing • sr-only • stack • stretched-link • toggle • transition • truncate • typography_

## Preview

### Align

Effortlessly align content along both the Y and X axes for **flex** and **grid** layouts, and also for flow layouts. This utility leverages [Dynamic CSS Utilities].

<figure class="demo-wrapper flex align" style="--align: center; --demo-wrapper-min-size: 200px">
<code class="demo-box --inline">Align Center</code>
</figure>

### Auto Grid

Create responsive grid layouts that automatically generate columns based on the configured `--max-col-size`.

<figure class="demo-wrapper --resize">
<div class="auto-grid gap">
<div class="demo-box --inline">1</div>
<div class="demo-box --inline">2</div>
<div class="demo-box --inline">3</div>
<div class="demo-box --inline">4</div>
</div>
</figure>

### Clip

Hide overflowing content with ease. Use `clip` for all sides, or target specific axes with `clip-y` and `clip-x`.

### Container

The standard way to center content and apply a maximum width, often referred to as a wrapper.

### Content Lazy

Implement lazy loading for sections of your page using `content-lazy`. Adjust the initial size with the `content-size` variable.

### Display

Quickly set the `display` property of an element.

<div class="scroll-x">

| class                         | value                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| `hidden`                      | `display: none`                                                                            |
| `block`                       | `display: block`                                                                           |
| `inline-block`                | `display: inline flow-root`                                                                |
| `flex`                        | `display: flex`                                                                            |
| `inline-flex`                 | `display: inline flex`                                                                     |
| `grid`                        | `display: grid`                                                                            |
| `inline-grid`                 | `display: inline grid`                                                                     |
| `table-cell`                  | `display: table-cell`                                                                      |
| `open:{DISPLAY}`              | Open modifier for dialogs and popovers                                                     |
| `{sm,md,lg,xl,xxl}:{DISPLAY}` | Apply display styles at specific breakpoints (**sm**, **md**, **lg**, **xl**, and **xxl**) |

</div>

### Divide

The `divide` utility offers enhanced control over dividers, going beyond basic implementations.

Fylgja provides both `divide-y` and `divide-x`, which seamlessly integrate with your border utilities, eliminating the need for preset values.

Additionally, introduce `divide-gap-y` and `divide-gap-x` to add flow-based spacing between your dividers, providing greater flexibility in layout gaps.

<figure class="demo-wrapper">
<ul role="list" class="divide-y divide-gap-y flow-none">
<li>A better way to</li>
<li>handle divides</li>
<li>and supports a gaps to!</li>
</ul>
</figure>

### Flex

Convenient shorthands for `display: flex`, including options for direction and wrapping. Utilize `flex-col` and `flex-wrap`, which are [Dynamic CSS Utilities] and can be customized with CSS variables.

### Flow

While Fylgja's base styles often include flow spacing, the `flow` utility allows you to explicitly force a new flow with `flow` or remove any flow with `flow-none`.

### Gap

Easily set gaps for Grid, Flex, or Column layouts.

### Gradient

Provides three helpful utilities for applying border, background, and text gradients, all customizable with CSS variables.

### Grid Cols

Simplified way to set up grid layouts with columns using `grid-cols`.

You can modify the column configuration using CSS variables, following the [Dynamic CSS Utility] pattern.

Also includes `grid-flow`, ideal for creating a row of columns for sliders, and is compatible with the `gap` utility for consistent column spacing.

### Line Clamp

Limit the number of lines in your paragraphs to prevent text overflow.

### List

Offers the `list-none` utility, useful for removing default list markers, especially if you are not using Fylgja's base styles or when customizing HTML `<details>` elements.

### Overlay

Adds a subtle overlay shadow to an element, often effective in combination with the `stack` utility.

<figure class="demo-wrapper">
<div class="stack inline-grid">
<img src="https://placecats.com/380/200" alt="Meow" width="380" height="200" loading="lazy">
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

Enable scrollable overflow on the X or Y axis with `scroll-x` and `scroll-y`.

### Scrollbar

Customize the appearance of the scrollbar, including hiding it or making it small.

### Size

Convenient shorthands for setting width and height using [Dynamic CSS Utilities]. Includes `w-full`, `h-full`, `max-w-full`, and `max-h-full`.

For more detailed sizing options, refer to the Spacing utilities.

### Snap

Easily create interactive sliders. This utility works best in conjunction with other layout utilities like Grid Cols.

<figure class="demo-wrapper">
<div class="snap scroll-x grid-cols grid-flow gap" style="--sm_grid-cols: 2; --md_grid-cols: 3">
<img src="https://placecats.com/neo_banana/380/200" alt="Meow" width="380" height="200" loading="lazy">
<img src="https://placecats.com/neo/380/200" alt="Meow" width="380" height="200" loading="lazy">
<img src="https://placecats.com/millie/380/200" alt="Meow" width="380" height="200" loading="lazy">
<img src="https://placecats.com/bella/380/200" alt="Meow" width="380" height="200" loading="lazy">
<img src="https://placecats.com/millie_neo/380/200" alt="Meow" width="380" height="200" loading="lazy">
</div>
</figure>

```html
<div
    class="snap scroll-x grid-cols grid-flow gap"
    style="--sm_grid-cols: 2; --md_grid-cols: 3"
>
    ... slides
</div>
```

### Spacing

[Dynamic CSS Utilities] for quickly setting padding and margin on an element.

You don't need a specific class to use these [Dynamic CSS Utilities]; simply set the style with: `--size-y`, `--size-x`, `--my`, `--mx`, `--py`, and `--px` along with a valid CSS unit to apply the styles.

The power of [Dynamic CSS Utilities] extends to breakpoint customization. For example, set a different margin for the **md** breakpoint using `--md_my: 1rem`.

### Screen Reader Only

Visually hide an element from the page while keeping it accessible for screen readers.

Similar to the `display` utility, you can apply breakpoint-specific styles, e.g., `sm:sr-only`.

### Stack

Effortlessly stack multiple elements on top of each other without the need for manual positioning.

### Stretched Link

Make any element fully clickable without breaking link semantics. Use it with a `relative` class on the parent element to define the clickable area.

### Toggle

Create interactive toggle states for elements like `<details>` using the `toggle` utility.

<figure class="demo-wrapper flex-wrap gap" style="--demo-wrapper-min-size: 8rem">
<details name="demo-flip-group" open>
    <summary class="list-none btn">
    <span>Click Me!</span>
    <span class="toggle-flip">↓</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
<details name="demo-flip-group">
    <summary class="list-none btn">
    <span>I will Rotate when toggling!</span>
    <span class="toggle-rotate transition">↓</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
<details name="demo-flip-group">
    <summary class="list-none btn stack">
    <span class="toggle-hide">I will Hide when toggled!</span>
    <span class="toggle-show">I will Show when toggled!</span>
    </summary>
    <div style="--my: 0.5rem">Hello there.</div>
</details>
</figure>

### Transition

Quickly add smooth transitions to elements using `transition`, `transition-display`, or `transition-color`. Also supports discrete transitions.

### Truncate

Truncate text to a specified number of lines.

### Typography

Convenient shorthands for common text styles:

- `text-start`: Align text to the left.
- `text-end`: Align text to the right.
- `text-center`: Center text alignment.
- `italic`: Apply italic styling.
- `not-italic`: Remove italic styling.

[Dynamic CSS Utility]: /docs/concepts/dynamic-css-utilities
[Dynamic CSS Utilities]: /docs/concepts/dynamic-css-utilities
