---
title: "Colors"
description: "Add a collection of prebuild colors to any project with ease, using Fylgja Colors."
npm: "@fylgja/colors"
git: "components/colors"
preview: "theme.png"
order: 9
versions: [
    { name: '1.x', url: "v1/colors" },
    { name: "Latest", url: "colors" }
]
---

Add a collection of prebuild colors to any project with ease, using Fylgja Colors.

## Installation

```bash
npm install @fylgja/colors@1
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

{% include "colors-v1.njk" %}

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
    background-color: hsl(var(--blue-gray-4) / 10%);
}
```

### Using a single colors

Instead of importing all the color options you can import 1 of the many colors, using the following import path;

```css
@import "@fylgja/colors/hex/blue"; /* As HEX */
@import "@fylgja/colors/hsl/blue"; /* As HSL */
```

_This only available for the CSS syntax_
