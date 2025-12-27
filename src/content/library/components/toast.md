---
title: "Toast"
pageTitle: "Fylgja Toast"
description: "The Fylgja Toast component allows you to display compact labels or status indicators alongside other UI elements"
npm: "@fylgja/toast"
git: "https://github.com/fylgja/fylgja/tree/main/components/toast"
---

The Fylgja Toast component allows you to display brief, transient messages and notifications across your UI.

This component is ideal for building UI elements such as toasts, banners, alerts, or short inline messages that provide quick feedback (confirmations, warnings, or errors).

## Installation

You can install Fylgja Toast via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/toast
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/toast/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/toast";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path            | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `@fylgja/toast/base`   | Contains to core of the Toast                                        |
| `@fylgja/toast/styles` | Contains styles for each toast status, for example warning and error |

## Styles

By default, a toast appears as a lightweight floating panel.
Use icons, a close action, or inline controls to provide richer interactions when needed.

The `styles` package makes visual customization straightforward.
A single CSS variable `--toast-style` controls background, border, and text colors.

Built on CSS Relative Colors, the system derives accessible color variations automatically,
so you get consistent, readable results with minimal effort.

Three preset style tokens are provided: `info` (which uses the brand color),
`warning`, and `error`. You can extend or override these tokens to match your design system.

## Examples

These examples demonstrate how you can use the Toast component with various styles and content options.

<div class="divide-y flow" style="--flow: 2rem; border-color: color-mix(in srgb, currentcolor 10%, #0000);">

<div>
<div class="toast">Default Message</div>

```html
<section class="toast" aria-label="...">...</section>
```
</div>

<div>
<div class="toast" data-type="info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>Info Message</div>

```html
<section class="toast" data-type="info" aria-label="...">...</section>
```
</div>

<div>
<div class="toast" data-type="warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>Warning Message</div>

```html
<section class="toast" data-type="warning" aria-label="...">...</section>
```
</div>

<div>
<div class="toast" data-type="error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug"><path d="M12 20v-9"></path><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"></path><path d="M14.12 3.88 16 2"></path><path d="M21 21a4 4 0 0 0-3.81-4"></path><path d="M21 5a4 4 0 0 1-3.55 3.97"></path><path d="M22 13h-4"></path><path d="M3 21a4 4 0 0 1 3.81-4"></path><path d="M3 5a4 4 0 0 0 3.55 3.97"></path><path d="M6 13H2"></path><path d="m8 2 1.88 1.88"></path><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"></path></svg>Error Message</div>

```html
<section class="toast" data-type="error" aria-label="...">...</section>
```
</div>

<div>
<div id="toastWithColor" class="toast align" style="--toast-style: #008001">
	<span>Custom Style Message</span>
	<input
		type="color"
		name="toast-color"
		value="#008001"
		oninput="toastWithColor.style.setProperty('--toast-style', event.target.value)"
		class="round"
		style="--block-size: 2rem; --inline-size: 2rem"
	>
</div>

```html
<section class="toast" style="--toast-style: #008001" aria-label="...">...</section>
```
</div>

<div id="toastWithClose">
<div class="toast align">
	<span>Message with Action</span>
	<button
		style="--btn-py: .25rem; --btn-stroke: #0000"
		onclick="toastWithClose.setAttribute('hidden', '')"
		aria-label="Close Message"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
	</button>
</div>
</div>

</div>
