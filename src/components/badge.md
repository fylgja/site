---
title: "Badge"
description: "Badges component serves as a small blocks to indicate notifications. Or to highlight an item."
tags: "elements"
npm: "@fylgja/badge"
preview: "badge.png"
---

Badges component serves as a small blocks to indicate notifications.
Or to highlight an item.

## Installation

```bash
npm install @fylgja/badge
```

And include the component in to your code via;

```scss
@use "@fylgja/badge";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/badge/badge.css";
```

## How to use

To use the badge create element with the class `.badge`.

```html
<div class="badge">..</div>
```

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
$badge-padding: 0.3em 0.35em !default;
$badge-radius: 0.25rem !default;
$badge-bg: var(--color-theme, #{$color-theme}) !default;
$badge-color: var(--color-on-theme, #{$color-on-theme}) !default;
$badge-font-size: 0.85em !default;
$badge-line-height: 1 !default;
```
