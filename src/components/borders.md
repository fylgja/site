---
title: "Borders"
description: "The Fylgja borders offers Design Tokens (CSS props) for consistent and semantic borders."
npm: "@fylgja/borders"
git: "components/borders"
tags: ["tokens"]
preview: "theme.png"
---

The Fylgja borders offers Design Tokens (CSS props) for consistent and semantic borders.

## Installation

```bash
npm install @fylgja/borders
```

Then include the component in to your code via;

```scss
@use "@fylgja/borders";
// Or via PostCSS and other options as native CSS
@import "@fylgja/borders"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/borders" as *;

.style {
    border-size: $border-size-1;
}

// CSS Syntax
@use "@fylgja/borders/props";

.style {
    border-size: var(--border-size-1);
}
```

### CSS version

```css
@import "@fylgja/borders";

.style {
    border-size: var(--border-size-1);
}
```

### Javascript

```js
import props from "@fylgja/borders"

const style = {
    borderSize: props.borderSize[1]
}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

```scss
$border-size-1: 0.125rem;
$border-size-2: 0.25rem;
$border-size-3: 0.375rem;
$border-size-4: 0.5rem;
$border-size-5: 0.75rem;
$border-size-6: 1rem;
$radius-1: 0.125rem;
$radius-2: 0.25rem;
$radius-3: 0.375rem;
$radius-4: 0.5rem;
$radius-5: 0.75rem;
$radius-6: 1rem;
$radius-full: 1e5px;
$radius-fluid-1: clamp(0.125rem, 0.5rem, 0.5rem);
$radius-fluid-2: clamp(0.25rem, 0.75rem, 0.75rem);
$radius-fluid-3: clamp(0.375rem, 1rem, 1rem);
$radius-fluid-4: clamp(2rem, 4vw, 4rem);
$radius-fluid-5: clamp(3rem, 6vw, 5rem);
$radius-fluid-6: clamp(4rem, 6vw, 6rem);
$radius-blob-1: "30% 70% 70% 30% / 53% 30% 70% 47%";
$radius-blob-2: "53% 47% 34% 66% / 63% 46% 54% 37%";
$radius-blob-3: "37% 63% 56% 44% / 49% 56% 44% 51%";
$radius-blob-4: "63% 37% 37% 63% / 43% 37% 63% 57%";
$radius-blob-5: "49% 51% 48% 52% / 57% 44% 56% 43%";
$radius-conditional-1: clamp(0px, calc(100vw - 100%) * 1e5, 0.125rem);
$radius-conditional-2: clamp(0px, calc(100vw - 100%) * 1e5, 0.25rem);
$radius-conditional-3: clamp(0px, calc(100vw - 100%) * 1e5, 0.375rem);
$radius-conditional-4: clamp(0px, calc(100vw - 100%) * 1e5, 0.5rem);
$radius-conditional-5: clamp(0px, calc(100vw - 100%) * 1e5, 0.75rem);
$radius-conditional-6: clamp(0px, calc(100vw - 100%) * 1e5, 1rem);
```
