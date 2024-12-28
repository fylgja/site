---
title: "Utilities"
pageTitle: "Fylgja Utilities"
description: ""
npm: "@fylgja/utilities"
git: "https://github.com/fylgja/fylgja/tree/main/utilities"
sortOrder: 5
---

## Installation

You can install Fylgja Utilities via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/utilities
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities@1.0/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/utilities";
```

Alternatively, if you only need specific parts of the utilities.

Since this is very long list of options, where not going to list all of them,
but based on the titles in the Utilities section and the github package page,
you can see all of the available options.

Indavidual import example:

```css
@import "@fylgja/utilities/{UTILITY_NAME}";
```

## Utilities

### Align

Align is a [Dynamic CSS Utility] which works together with any flex or grid based layout.
This Utility will provide a default alignment for centering on the items axis and space between on the content axis and can be customize using CSS variables as explained in the section on [Dynamic CSS Utility]'s.

<figure class="demo-wrapper flex align" style="--align: center">
<code class="demo-box -inline">Align Center</code>
</figure>

### Auto Grid

Auto Grid is a [Dynamic CSS Utility] which creates a grid layout automatically based on the available space, same as seen with Container Queries.
The max column size and count can be customizes by using CSS variables.

<figure class="auto-grid gap">
<div class="demo-box -inline">1</div>
<div class="demo-box -inline">2</div>
<div class="demo-box -inline">3</div>
<div class="demo-box -inline">4</div>
<div class="demo-box -inline">5</div>
</figure>

### clip

### content-lazy

### display

### divide

### flex

### flip

### flow

### gap

### gradient

### grid

### line-clamp

### list

### overlay

### position

### rounded

### scroll

### scrollbar

### size

### snap

### spacing

### sr-only

### stack

### stretched-link

### transition

### truncate

### typography

### visibility

## Dynamic CSS Utility

[Dynamic CSS Utility]: #dynamic-css-utility
