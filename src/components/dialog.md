---
title: "Dialog"
description: "The dialog combines 3 components in 1, it a modal by default,
and with a small change it's a offcanvas,
notification popup aka the snackbar."
requiresJs: true
npm: "@fylgja/dialog"
git: "components/dialog"
codepen: "rNmXjRo"
tags: ["nativeElements", "elements"]
preview: "dialog.png"
featured: true
order: 6
preconnect: { caniuse: "https://caniuse.bitsofco.de/" }
---

The dialog combines 3 components in 1, it a modal by default,
and with a small change it's a offcanvas,
notification popup aka the snackbar.

This code is super tiny compared to other solutions,
and it's super flexible.
Use it to have a modal on desktop and offcanvas on mobile,
simply by changing a few CSS variables.

## Installation

```bash
npm install @fylgja/dialog
```

Then include the component in to your code via;

```scss
@use "@fylgja/dialog";
// Or via PostCSS import
@import "@fylgja/dialog";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/dialog" with ($dialog-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/dialog" layer("components");
```

## How to use

To use the dialog simply create a html dialog element and a button,
that can open the dialog.

{% codeSample html, "flex justify-center" %}
<button class="btn -theme" onclick="document.querySelector('#dialog-modal').showModal()">Open Modal</button>
<dialog id="dialog-modal">
    <p>Hello There! Hello World! Welcome!</p>
    <button class="btn" onclick="document.querySelector('#dialog-modal').close()">Close</button>
</dialog>
{% endcodeSample %}

Use the `.offcanvas` or `.offcanvas-end` to turn the modal to a offcanvas style.

As for the `.snackbar` make sure to also use the `show()` function instead of the `showModal()` function;

{% codeSample html, "flex justify-center" %}
<button class="btn -theme" onclick="document.querySelector('#dialog-snackbar').show()">Show Notification</button>
<dialog id="dialog-snackbar" class="snackbar" style="--dialog-padding: 1em 2em;">
    <div class="flex items-center">
        <p class="my-0 me-4">Hello There!</p>
        <button class="btn" onclick="document.querySelector('#dialog-snackbar').close()">Close</button>
    </div>
</dialog>
{% endcodeSample %}

Use the `.dialog-inner` 
if your content will be to big for specific screen sizes.

This will allow scrolling the content inside the dialog-inner.

You can combine this with a header and/or footer, 
that always will be visible when you are scrolling.

```html
<dialog id="dialog-offcanvas" class="offcanvas">
    <div>Offcanvas Title</div>
    <div class="dialog-inner">...</div>
    <div><button>Submit</button></div>
</dialog>
```

### Support

You will need the polyfill until the html dialog is supported fully
-> [github.com/GoogleChrome/dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill).

[![Data on support for the dialog feature across the major browsers from caniuse.com](https://caniuse.bitsofco.de/image/dialog.webp)](https://caniuse.com/dialog)

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

For direct control of the base styles,
use the following SCSS variables can you modify.

```scss
$enable-dialog-polyfill: true !default;

// Modal (default)
$dialog-index: 9 !default;
$dialog-offset: 2em !default;
$dialog-max-width: calc(100% - #{$dialog-offset}) !default;
$dialog-max-height: $dialog-max-width !default;
$dialog-radius: 0.3em !default;
$dialog-padding: 2em !default;

$dialog-elevation: var(--elevation-z6) !default;
$dialog-bg: var(--color-bg, #{$root-bg}) !default;
$dialog-color: inherit !default;

$dialog-backdrop: rgba(black, 0.2) !default;

// Snackbar
$dialog-snackbar-from: end !default;
$dialog-snackbar-offset: 1em !default;

// Offcanvas
$dialog-offcanvas-radius: 0 !default;
```

## Tips

If you need to use the older solutions, that doesn't use the HTML Dialog.
But you do like to use the Fylgja Dialog styles.

You can use the class `.dialog`.

```html
<button class="backdrop" aria-hidden="true"></button>
<div role="dialog" class="dialog is-open">
    ...
</div>
```
