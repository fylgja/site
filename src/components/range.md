---
title: "Range"
description: "Range component will add solid foundation for a input range slider"
npm: "@fylgja/range"
git: "components/range"
tags: ["forms", "nativeElements"]
preview: "range.png"
style: {
    range: "../../node_modules/@fylgja/range/range.css"
}
---

Range component will add solid foundation for a input range slider.

## Installation

```bash
npm install @fylgja/range
```

Then include the component in to your code via;

```scss
@use "@fylgja/range";
// Or via PostCSS import
@import "@fylgja/range";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/range" with ($range-layer: "components");
// Or via PostCSS and other options as native CSS
@import "@fylgja/range" layer(components);
```

## How to use

Out of the box all the styling is done directly,
to the `input[type=range]`,

{% codeSample html, "flex flex-col gap-4" %}
<input type="range" value="50">
<input type="range" value="50" disabled>
{% endcodeSample %}

The thumb (the value) and track (the background) are both styled to look the same in all browsers.

### Fill range

Currently there is no cross browser support for “filling” the track,
as a way to visually show progress,
from the left or right of the thumb.

Only Firefox supports this, for now.

Instead, we provide a CSS variable that can be adjusted as a percentage to match the value.

Using a little bit of javascript this can also be added relatively with ease.

{% codeSample %}
<input type="range" value="60" min="10" max="200" id="range-slider-with-js">
<script>
const setRangeValue = (input) => {
  const min = input.getAttribute('min') || 0;
  const max = input.getAttribute('max') || 100;
  const value = input.value || 50;
  const fillPercentage = Math.round(100 * (value - min) / (max - min));
  input.style.setProperty('--_fill', fillPercentage);
}
setRangeValue(document.getElementById("range-slider-with-js"));
document.addEventListener('input', event => {
  const input = event.target;
  if (input.id !== "range-slider-with-js") return;
  setRangeValue(input);
});
</script>
{% endcodeSample %}

### Color Range slider

Here's a sample case for range slider as color picker,.

Even if you need Javascript to handle the data,
the track background can be set with just one CSS variable;

{% codeSample %}
<input type="range" name="color-range" class="rainbow-slider" min="0" max="300">
<style>
.rainbow-slider {
  --range-track-bg: linear-gradient(
    to var(--fill-direction, right),
    hsl(0deg 100% 50%),
    hsl(120deg 100% 50%),
    hsl(240deg 100% 50%),
    hsl(300deg 100% 50%)
  );
  --range-track-height: 1rem;
  --range-thumb-border-size: 2px;
  --range-thumb-color: hsl(0deg 0% 100% / 80%);
  --range-thumb-stroke: hsl(0deg 0% 0% / 60%);
}
</style>
{% endcodeSample %}

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles,
here are the following SCSS variables can you modify.

```scss
$range-track-height: 0.5rem !default;
$range-track-radius: 1rem !default;
$range-track-bg: track-fill(var(--color-theme, #{$color-theme})) !default;
$range-track-color: #ccc !default;
$range-track-disabled-bg: currentcolor !default;
$range-track-disabled-color: #ddd !default;

$range-thumb-size: 1rem !default;
$range-thumb-radius: 100% !default;
$range-thumb-border-size: 0 !default;
$range-thumb-border-color: var(--color-theme, #{$color-theme}) !default;
$range-thumb-color: var(--color-theme, #{$color-theme}) !default;
$range-thumb-disabled-color: #aaa !default;
$range-thumb-shadow: 0 1px 2px rgb(0 0 0 / 50%) !default;

$range-focus-color: var(--color-theme-fade, #{$color-theme-fade}) !default;
$range-focus-shadow: 0 0 0 0.4rem var(--range-focus-color, #{$range-focus-color}) !default;
```

> `track-fill()` is a helper function to set the `linear-gradient`,
> for the Javascript based fill method.
