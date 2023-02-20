---
title: "Theme"
description: "Helper component for adding theme specific SCSS variables to multiple components."
npm: "@fylgja/theme"
git: "components/theme"
tags: ["addons"]
preview: "theme.png"
order: 11
---

Helper component for adding theme specific variables to multiple Fylgja Components.

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

And only contains shared SCSS variables for Fylgja components,
that have theme specific styles.

You can use this component to quickly override the specific styles,
to set any base colors or spacing, with;

```scss
@use "@fylgja/theme" with (
    $color-theme: #00897b,
    $color-on-theme: #fff
);
```

instead of the default the theme color is now a teal color.

Also the Fylgja component is easier for reusing this in your own components,
by importing the `@fylgja/theme` or use it directly in your styles via;

```scss
@use "@fylgja/theme";

.label {
    background-color: theme.$color-theme;
    color: theme.$color-on-theme;
}
```

_You can also use it without the prefix if you want via * selector_

### atLayer

This mixin is specific for Fylgja's build progress,
and is used to create the Sass `@layer` variants for each component.

You can use this, if you need something with the same logic,
or for a Fylgja Add-On component.

```scss
@use "@fylgja/theme";

@include theme.atLayer($name) {
  // Your CSS here
}
```

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

$base-spacing: 1em !default;
$item-spacer: 0 0 $base-spacing !default; // Legacy support

// For any thing like forms and buttons
$action-padding-block: 0.375em !default;
$action-padding-inline: 0.625em !default;
$action-padding: $action-padding-block $action-padding-inline;
$action-border-width: 1px !default;
```
