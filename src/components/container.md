---
title: "Container"
description: "The container component is wrapper component. To make all child elements fit better in the page"
npm: "@fylgja/container"
tags: "layouts"
preview: "container.png"
---

The container component is wrapper component.
To make all child elements fit better in the page.

## Installation

```bash
npm install @fylgja/container
```

Now include the component in to your code via;

```scss
@use "@fylgja/container";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/container/container.css";
```

## How to use

To use the container create element with the class `.container`.

```html
<div class="container">..</div>
```

The container is pretty straight forward.
But its power is found in its customization via CSS variables.

Allowing for smaller of bigger containers when needed.

A more content max width based solution can be made via;

```html
<div class="container" style="--container-size: 65ch;">..</div>
```

Making your text better readable for your users when needed.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
$container-size: 1280px !default;
$container-padding-y: 0 !default;
$container-padding-x: 1.25rem !default;
```
