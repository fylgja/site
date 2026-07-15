---
title: "AlpineJS Dialog"
pageTitle: "Fylgja AlpineJS Dialog"
description: "Bring the power and simplicity of Alpine.js to the native HTML Dialog"
npm: "@fylgja/alpinejs-dialog"
git: "https://github.com/fylgja/alpinejs-dialog"
sortOrder: 12
faq:
  - question: Does this plugin work without Alpine.js?
    answer: No, it's an Alpine.js plugin and requires Alpine core to be installed
      and started, as shown in the installation steps above.
  - question: Why do I need x-htmldialog if I'm already using x-show?
    answer: Alpine's x-show normally toggles the display style directly, which
      doesn't give you the native modal behavior (focus trapping, top-layer
      stacking, backdrop) of dialog. x-htmldialog intercepts that toggle and
      calls showModal/close instead, while still letting you drive the open
      state with Alpine.
  - question: Can I combine noscroll and closeby on the same element?
    answer: Yes, Alpine directive modifiers can be chained, e.g.
      x-htmldialog.noscroll.closeby.any="open = false".
  - question: Does closeby still close a modeless dialog on Escape or a backdrop click?
    answer: Yes, that handling isn't currently gated on whether the dialog is modal, so
      it applies the same way regardless of the modeless modifier.
  - question: What happens in browsers that already support closedby natively?
    answer: The plugin always manages closing itself, in every browser, regardless
      of native support. It has to, so it can keep Alpine's own open state in
      sync with the dialog. Native support is only checked to skip a redundant
      preventDefault on backdrop clicks, not to hand control back to the browser.
  - question: Can I use x-htmldialog on an element that isn't a dialog?
    answer: No, it calls showModal or show unconditionally, which don't exist
      on other elements, so it throws an error rather than failing silently.
---

Bring the power and simplicity of Alpine.js to the native HTML `<dialog>` element.

**Live Demo:** https://alpinejs-dialog.netlify.app/

## Installation

You can use this plugin by either installing it using NPM or including it from a CDN.

### Via NPM

You can install it from NPM and include it in your bundle:

```bash
npm install @fylgja/alpinejs-dialog
```

```js
import Alpine from 'alpinejs';
import dialog from '@fylgja/alpinejs-dialog';

window.Alpine = Alpine;

Alpine.plugin(dialog);
Alpine.start();
```

### Via CDN

You can include the CDN version of this plugin as a `<script>` tag,
just make sure to include it before AlpineJs.

```html
<script defer src="https://unpkg.com/@fylgja/alpinejs-dialog/dist/index.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

## Usage

To utilize the `x-htmldialog` plugin, add the directive to an HTML `<dialog>` element that is also controlled by `x-show`.

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Open</button>
    <dialog x-show="open" x-htmldialog="open = false">..</dialog>
</div>
```

When the `x-htmldialog` directive is present on an `x-show` element:

- It prevents `x-show` from directly toggling the display style.
- Instead, it uses the native `el.showModal()` function to display the dialog.
- The optional value provided to `x-htmldialog` (e.g., `"open = false"`) is executed
  when the dialog is closed by pressing the Escape key or clicking outside the dialog (the backdrop).

### Modifiers

The `x-htmldialog` directive supports modifiers to further customize its behavior.

#### `noscroll`

The `noscroll` modifier prevents scrolling on the background page while the dialog is open.

```html
<div x-data="{ open: false }">
    <button @click="open = !open">Open</button>
    <dialog x-show="open" x-htmldialog.noscroll="open = false">..</dialog>
</div>
```

### `closeby`

The `closeby` option gives you fine-grained control over how the dialog can be dismissed. The plugin polyfills this behavior for browsers that do not yet support it natively.

You can set this option in two ways:

**1. As an attribute on the `<dialog>` element:**
```html
<dialog closeby="any" ...>
```

**2. As a modifier on the `x-htmldialog` directive:**
```html
<dialog x-htmldialog.closeby.any ...>
```

#### Available Options

* **`any`**: The dialog can be closed by any user action, such as pressing the `ESC` key or clicking on the backdrop.
* **`closerequest`**: (Default) The dialog can be dismissed via the `ESC` key or a "close request" (e.g., a form submission with `method="dialog"`). It will not close when the backdrop is clicked.
* **`none`**: The user cannot close the dialog. It must be closed programmatically.
* **`auto`**: Currently behaves the same as `closerequest`.

#### `modeless`

The `modeless` modifier opens the dialog with `el.show()` instead of `el.showModal()`, so it
doesn't block interaction with the rest of the page (no backdrop, no focus trapping). This is
useful for things like a persistent side panel or a non-blocking notification tray, where the
underlying page should stay interactive. Unlike `closeby`, this is modifier-only, there's no
equivalent HTML attribute.

```html
<dialog x-show="open" x-htmldialog.modeless="open = false">..</dialog>
```

Escape-key and backdrop-based closing (via `closeby`) and the `noscroll` behavior still apply
even in modeless mode, since those aren't currently gated on whether the dialog is modal.

#### Combining Modifiers

Modifiers can be chained together on the same `x-htmldialog` directive:

```html
<dialog x-show="open" x-htmldialog.noscroll.closeby.any="open = false">..</dialog>
```
