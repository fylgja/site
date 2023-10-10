---
title: "Colors"
description: "Add a collection of prebuild colors to any project with ease, using Fylgja Colors."
npm: "@fylgja/colors"
git: "components/colors"
tags: ["tokens"]
preview: "theme.png"
order: 9
versions: [
    { name: "Latest", url: "colors" },
    { name: '1.x', url: "v1/colors" }
]
---

> Attention!
> This is the latest iteration of our color component, currently in its beta phase.
> 
> If you wish to access the previous version, [please visit the v1 page](/components/v1/colors).
> 
> However, if you're looking for a more comprehensive color palette with improved dark shades,
> you've come to the right place.
> Explore further below for an enhanced experience.

Add a collection of prebuild colors to any project with ease, using Fylgja Colors.

## Installation

```bash
npm install @fylgja/colors@2.0.0-beta.6
```

Then include the component in to your code via;

```scss
@use "@fylgja/colors";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/colors"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

And comes packing in both HEX and HSL syntax;

### Color options

{% include "colors.njk" %}

### SCSS version

```scss
@use "@fylgja/colors" as *;

.style {
    color: $blue-5;
}

// CSS Syntax
@use "@fylgja/colors/props";

.style {
    color: var(--blue-5);
}
```

### CSS version

```css
@import "@fylgja/colors";

.style {
    color: var(--blue-5);
}
```

### Javascript

```js
import props from "@fylgja/colors"

const style = {
    color: props.blue[5]
}
```

### Using HSL syntax

Instead of importing the default version you can import the hsl version using;

```scss
@use "@fylgja/colors/hsl";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/colors/hsl"; // *

.silver-card {
    background-color: hsl(var(--blue-gray-4-hsl) / 10%);
}
```

### Using okLCH syntax

> This syntax might still change in the actual v2 release

Instead of importing the default version you can import the oklch version using;

```scss
@use "@fylgja/colors/oklch";
@use "@fylgja/colors/oklch-hues";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/colors/oklch"; // *
@import "@fylgja/colors/oklch-hues"; // *

.silver-card {
    --color-hue: var(--blue); // or your own color angle/hue
    background-color: oklch(var(--color-4));
}
```

### Using a single colors

Instead of importing all the color options you can import 1 of the many colors, using the following import path;

```css
@import "@fylgja/colors/hex/blue"; /* As HEX */
@import "@fylgja/colors/hsl/blue"; /* As HSL */
```

_This only available for the CSS syntax_
