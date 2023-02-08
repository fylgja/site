---
title: "Theme"
description: "Helper component for adding theme specific SCSS variables to multiple components."
npm: "@fylgja/theme"
git: "components/theme"
tags: ["addons"]
preview: "theme.png"
order: 11
---

Helper component for adding theme specific SCSS variables to multiple components.

## Installation

```bash
npm install @fylgja/theme
```

Then include the component in to your code via;

```scss
@use "@fylgja/theme";
```

## How to use

This component does not create any CSS.

And only contains some SCSS variable for Fylgja components, that have theme specific styles.

You can use this component to quickly override the specific styles,
set to a button, links and more, via;

```scss
@use "@fylgja/theme" with (
    $color-theme: #00897b,
    $color-on-theme: #fff
);
```

Instead of the default the theme is now a teal color.

And you can also reuse this in your own components,

by importing the `@fylgja/theme` or use it directly in your styles via;

```scss
@use "@fylgja/theme" as ft with (
    $color-theme: #00897b,
    $color-on-theme: #fff
);

.label {
    background-color: ft.$color-theme;
    color: ft.$color-on-theme;
}
```

_You can also use it without the prefix if you want via * selector_

## Config

The following variables are available.

```scss
$color-scheme: light !default;
$root-font-size: null !default;
$root-bg: if($color-scheme == dark, #000, #fff) !default;
$root-fg: if($color-scheme == dark, #fff, #000) !default;

$color-text: color.change($root-fg, $alpha: 0.87) !default;
$color-text-alt: color.change($root-fg, $alpha: 0.68) !default;
$color-text-muted: color.change($root-fg, $alpha: 0.56) !default;

// Color pallet
$color-theme: #1565c1 !default;
$color-theme-fade: color.change($color-theme, $alpha: 0.2) !default;
$color-on-theme: #fff !default;

$color-error: #b00020 !default;
$color-warning: #ffab40 !default;
$color-success: #00e676 !default;

$item-spacer: 0 0 1em !default;
```
