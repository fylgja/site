---
title: "Preset TailwindCSS"
description: "Tailwind CSS preset to use the Fylgja Design System, with its design tokens, base styles, and utilities."
npm: "@fylgja/tailwindcss"
git: "https://github.com/fylgja/tailwindcss"
sortOrder: 20
---

> [!warning]
> This project is currently in Beta.
>
> While it is functionally stable, we reserve the right to introduce breaking changes before its official stable release.

The Fylgja CSS Tailwind package is a preset for Tailwind CSS v4+,
replacing the default theme with Fylgja's design tokens and adding a set of useful base styles and utilities.

This allows you to use the power and flexibility of Tailwind's utility-first approach
while maintaining the consistent and considered design system of Fylgja CSS.

## Installation

Install `@fylgja/tailwindcss` and its peer dependencies using your favorite package manager:

```bash
npm install @fylgja/tailwindcss

# Peer dependencies
npm install @fylgja/base @fylgja/tokens @fylgja/utilities
```

This way, `@fylgja/tailwindcss` is not dependent on the versions of its peer dependencies,
allowing you to choose your preferred versions.

For instructions on how to add TailwindCSS, see the [Tailwind Getting Started](https://tailwindcss.com/docs/installation/).

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/tailwindcss";
```

Alternatively, if you only need specific parts of the base, you can import them individually:

<div class="scroll-x">

| Import Path                     | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| `@fylgja/tailwindcss/theme`     | Replaces Tailwind's default theme with Fylgja's design tokens |
| `@fylgja/tailwindcss/base`      | Provides sensible defaults for common HTML elements           |
| `@fylgja/tailwindcss/utilities` | Extends Tailwind CSS with Fylgja's utility classes            |

</div>

## What's Included

### Theme

This preset replaces Tailwind's default theme with Fylgja's design tokens. This includes:

- **Colors:** A rich and harmonious color palette using the modern `oklch` color space.
  The color names follow the format `color-shade` (e.g., `bg-blue-500`, `text-red-700`).
- **Shadows:** A set of beautiful, layered shadows, using depth to create better shadows for any color palette.
- **Easings:** A collection of easing functions for smooth animations.
- **Breakpoints:** Responsive breakpoints for building adaptive layouts.
- **Aspect Ratios:** A set of common aspect ratios.

This theme is powered by the [`@fylgja/tokens` package](https://fylgja.dev/library/tokens/).

### Base Styles

Fylgja's base styles provide sensible, scoped defaults for common HTML elements.
This offers consistent styling for elements out-of-the-box,
without interfering with your own custom component styles.

This includes styles for:

- Typography, scoped to the `<article>` tag and/or `.prose` class.
- Forms
- Buttons (`btn`)
- Dialogs

This section is powered by the [`@fylgja/base` package](https://fylgja.dev/library/base/).

### Utilities

In addition to Tailwind's default utilities, this preset adds a selection of custom utilities,
adapted for Tailwind CSS v4's `@utility` syntax.

- **`auto-grid`**: Creates a responsive grid that automatically fills with columns.
  - `max-col-size-*`: A companion utility to `auto-grid` that sets the maximum width of the columns.
    The `*` can be any integer, which is multiplied by `var(--spacing)`. (e.g., `max-col-size-20`)

- **`container`**: A responsive container with a maximum width and horizontal padding.

- **`flow`**: Adds vertical spacing between sibling elements.
  - `flow-none`: Removes any spacing applied by `flow`.

- **`overlay`**: Creates a stacked overlay, often used for placing text on top of images.

- **Rounding**:
  - `rounded-inherit`: Sets the `border-radius` to inherit from its parent.
  - `round`: Makes an element perfectly circular.

- **Scrolling**:
    - `scroll-x`: Enables horizontal scrolling in a container.
    - `scroll-y`: Enables vertical scrolling in a container.
    - `scrollbar-none`: Hides the scrollbar entirely.
    - `scrollbar-thin`: Styles the scrollbar to be thinner, where supported.

- **`snap`**: A shorthand utility to apply CSS Scroll Snap.
  Behavior can be further customized using the `--snap-dir`, `--snap-stop`, and `--snap-align` CSS variables.

- **`stack`**: Stacks child elements on top of each other within the same grid area.

- **`stretched-link`**: Makes an anchor element expand to cover its parent container.

- **`lead`**: Increases the font size and weight of a text element, typically used for introductory paragraphs.

- **`divide`**: Provides better defaults for adding borders between elements.
  - `divide-y` & `divide-y-*`: Adds horizontal borders between vertically stacked items.
  - `divide-x` & `divide-x-*`: Adds vertical borders between horizontally stacked items.

- **`list-none`**: Removes list styling, including the marker on `<details>` elements.

- **`gap`**: A utility to apply `gap` with a default value of `1em`.

These utilities are designed to be intuitive and to integrate seamlessly with the rest of the Tailwind ecosystem.

This collection of utilities is powered by the [`@fylgja/utilities` package](https://fylgja.dev/library/utilities/).
