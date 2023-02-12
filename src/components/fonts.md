---
title: "Fonts"
description: "The Fylgja fonts offers Design Tokens (CSS props) for consistent and semantic typography."
npm: "@fylgja/fonts"
git: "components/fonts"
tags: ["tokens"]
preview: "theme.png"
order: 9
---

The Fylgja fonts offers Design Tokens (CSS props) for consistent and semantic typography.

## Installation

```bash
npm install @fylgja/fonts
```

Then include the component in to your code via;

```scss
@use "@fylgja/fonts";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/fonts"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/fonts" as *;

.style {
    font-size: $font-size-1;
    line-height: $line-height-1;
}

// CSS Syntax
@use "@fylgja/fonts/props";

.style {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
}
```

### CSS version

```css
@import "@fylgja/fonts";

.style {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
}
```

### Javascript

```js
import props from "@fylgja/fonts"

const style = {
    fontSize: props.fontSize[1],
    lineHeight: props.lineHeight[1]
}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

```scss
$font-size-1: 0.875rem;
$font-size-2: 1rem;
$font-size-3: 1.125rem;
$font-size-4: 1.25rem;
$font-size-5: 1.5rem;
$font-size-6: 1.875rem;
$font-size-7: 2rem;
$font-size-8: 2.25rem;
$font-size-9: 3rem;
$font-size-fluid-1: clamp(0.875rem, 1.5vw, 1rem);
$font-size-fluid-2: clamp(1rem, 2vw, 1.125rem);
$font-size-fluid-3: clamp(1.25rem, 2vw, 1.5rem);
$font-size-fluid-4: clamp(1.5rem, 3vw, 1.875rem);
$font-size-fluid-5: clamp(2rem, 4vw, 3rem);
$line-height-1: 1.1;
$line-height-2: 1.25;
$line-height-3: 1.375;
$line-height-4: 1.5;
$line-height-5: 1.8;
```
