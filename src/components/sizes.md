---
title: "Sizes"
description: "The Fylgja Sizes offers Design Tokens (CSS props) for consistent and semantic sizes, in typography, spacing and general sizes."
# npm: "@fylgja/sizes"
git: "components/sizes"
tags: ["tokens"]
preview: "theme.png"
---

The Fylgja Sizes offers Design Tokens (CSS props) for consistent and semantic sizes,
in typography, spacing and general sizes.

## Installation

```bash
npm install @fylgja/sizes
```

Then include the component in to your code via;

```scss
@use "@fylgja/sizes";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/sizes"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/sizes" as *;

.style {
    font-size: $size-1;
}

// CSS variable syntax
@use "@fylgja/sizes/props";

.style {
    font-size: var(--size-1);
}
```

### CSS version

```css
@import "@fylgja/sizes";

.style {
    width: var(--size-fluid-8);
}
```

### Javascript

```js
import props from "@fylgja/sizes"

const style = {
    borderRadius: props.size[1],
}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

<details class="faq-panel"><summary>View SCSS variables</summary>

```scss
$size-1: 0.25rem;
$size-2: 0.5rem;
$size-3: 0.625rem;
$size-4: 0.75rem;
$size-5: 0.875rem;
$size-6: 1rem;
$size-7: 1.25rem;
$size-8: 1.5rem;
$size-9: 1.75rem;
$size-10: 2rem;
$size-11: 2.25rem;
$size-12: 2.5rem;
$size-13: 2.75rem;
$size-14: 3rem;
$size-15: 4rem;
$size-16: 5rem;
$size-17: 7.5rem;
$size-19: 10rem;
$size-20: 15rem;
$size-21: 20rem;
$size-22: 30rem;

// Container sizes / Media Query sizes
$size-xxs: 240px;
$size-xs: 420px;
$size-sm: 640px;
$size-md: 768px;
$size-lg: 1024px;
$size-xl: 1440px;
$size-xxl: 2200px;

// Content & Heading sizes
$size-content-1: 25ch;
$size-content-2: 45ch;
$size-content-3: 65ch;

$size-heading-1: 22ch;
$size-heading-2: 28ch;
$size-heading-3: 36ch;
```

</details>
