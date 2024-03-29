---
title: "Control"
description: "The control component styles the default `input[radio]` and `input[checkbox]`,
allowing an easier control on the style of both these elements."
npm: "@fylgja/control"
git: "components/control"
codepen: "XWgNzra"
tags: ["forms", "nativeElements", "elements"]
preview: "control.png"
style: {
    control: "../../node_modules/@fylgja/control/control.css"
}
script: {
    inline: "
        const indeterminates = document.querySelectorAll('[indeterminate]');
        [].forEach.call(indeterminates, item => item.indeterminate = true);
    "
}
order: 3
---

The control component styles the default `input[radio]` and `input[checkbox]`,
allowing an easier control on the style of both these elements.

## Installation

```bash
npm install @fylgja/control
```

Then include the component in to your code via;

```scss
@use "@fylgja/control";
// Or via PostCSS import
@import "@fylgja/control";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/control" with ($control-layer: "components");
// Or via PostCSS and other options as native CSS
@import "@fylgja/control" layer(components);
```

## How to use

Out of the box all the styling is done directly,
to the `input[type=radio]` and `input[type=checkbox]`,
so no extra steps are needed.

{% codeSample html, "flex flex-wrap gap-4" %}
<input type="checkbox">
<input type="checkbox" checked>
<input type="checkbox" indeterminate>
<input type="checkbox" disabled>
<input type="radio">
<input type="radio" checked>
<input type="radio" disabled>
{% endcodeSample %}

The exception is for the switch style,
that requires a class on the `input[type=checkbox]`.

{% codeSample html, "flex flex-wrap gap-4" %}
<input type="checkbox" class="control-switch">
<input type="checkbox" class="control-switch" checked>
{% endcodeSample %}

If you want to apply this style to other elements, like button.
You can use the class `.control-radio`, `.control-checkbox` and `.control-switch`.

```html
<button class="control-switch" aria-label="label"></button>
```

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles,
here are the following SCSS variables can you modify.

```scss
$enable-control-switch: true !default;

$control-size: 1em !default;
$control-radius: 0.25rem !default;
$control-border-width: 1px !default;
$control-border-style: solid !default;
$control-border-color: currentcolor !default;
$control-bg: transparent !default;
$control-color: inherit !default;

$control-focus-color: var(--color-theme-fade, #{$color-theme-fade}) !default;
$control-focus-shadow: 0 0 0 0.2rem $control-focus-color !default;

$control-disabled-opacity: 0.7 !default;
$control-disabled-border-style: dashed !default;

$control-checked-stroke: var(--color-theme, #{$color-theme}) !default;
$control-checked-bg: var(--color-theme, #{$color-theme}) !default;
$control-checked-color: var(--color-on-theme, #{$color-on-theme}) !default;

// Checkbox
$control-checkbox-icon: url("#") !default; // *1
$control-checked-checkbox-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") !default;
$control-indeterminate-checkbox-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E") !default;

// Radio
$control-radio-icon: url("#") !default; // *1
$control-checked-radio-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4'/%3e%3c/svg%3e") !default;

// Switch
$control-switch-width: ($control-size * 1.75) !default;
$control-switch-height: $control-size !default;
$control-switch-radius: 3rem !default;

$control-switch-icon: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='5'/%3e%3c/svg%3e") !default;
$control-checked-switch-icon: var(--control-icon) !default;
```

_*1: Hash url needed to give the mask an empty value_
