---
title: "Form Extend"
pageTitle: "Fylgja Form Extend"
description: "Enhance your forms with advanced features, including native validation and flexible base and component styles for a wide range of form fields"
npm: "@fylgja/form-extend"
git: "https://github.com/fylgja/fylgja/tree/main/components/form-extend"
sortOrder: 11
---

Enhance your forms with advanced features, including native validation and flexible base and component styles for a wide range of form fields.

## Installation

You can install Fylgja Form Extend via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/form-extend
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/form-extend/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/form-extend";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path                          | Description                                         |
| ------------------------------------ | --------------------------------------------------- |
| `@fylgja/form-extend/field-error`    | Styles for form validation and error messages       |
| `@fylgja/form-extend/meter-progress` | Styles for `<meter>` and `<progress>` elements      |
| `@fylgja/form-extend/range`          | Styles for the `<input type="range">` element       |
| `@fylgja/form-extend/range-fill`     | Adds a CSS-only value fill to the `<range>` element |

### Form Validation

The `@fylgja/base` theme automatically gives form fields a red outline when an error occurs.
Fylgja Form Extend takes this further with the `field-error` helper class,
making it simple to display clear error messages.

Use the `field-error-message` class to keep error messages hidden until the associated form field has an error.
Pairing this with the `aria-errormessage` attribute ensures a better experience for users with screen readers.

Error messages are always scoped within a common `field` wrapper,
so they'll work even if the error message isn't placed directly next to the form field.

This also supports the `[aria-invalid]` attribute.
If set to `true`, the error message will be shown.

### Meter and Progress Elements

Fylgja Form Extend provides default styles for both `<meter>` and `<progress>` elements,
ensuring they are consistent with the rest of your form components.

Since they share the same base, their styles are combined into a single, lightweight CSS file.

### Range Element

Styling range sliders can be tricky due to inconsistent browser implementations.
Fylgja simplifies this process, providing consistent styles across different browsers.

You can customize the range element with **CSS variables**.
This allows you to update the value with just a little bit of JavaScript.

```html
<label for="input-range">Input Range</label>
<input
  type="range"
  name="input-range"
  id="input-range"
  value="40"
  style="--range-value: 40"
  oninput="this.style.setProperty('--range-value', this.value)"
>
```

For those who want to be a bit more adventurous,
the `range-fill` version offers a CSS-only solution for the value fill,
eliminating the need for JavaScript.

> [!note]
> This feature relies on scroll animations, which may not be supported in all browsers.
> Firefox uses a native fill method, while Chrome and Safari depend on scroll animations.
> As of now, Safari support is not fully available,
> but you can continue to use the JavaScript solution alongside this CSS-only method.

## Examples

Below are examples showcasing each part of the Fylgja Form Extend in action.

### Form Validation

<div class="field">
	<label for="email-validate">Email</label>
	<input type="email" name="email" id="email" aria-errormessage="err1" autocomplete="off">
	<div id="err1" class="field-error-message">
		Invalid Email Address, please use a email in the format
		<code>me@example.com</code>
	</div>
</div>

### Meter and Progress element

<label for="fuel">Fuel level:</label>
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>

<label for="file">File progress:</label>
<progress id="file" max="100" value="70" class="show-value"></progress>

<label for="updating">Updating..</label>
<progress id="updating">Loading</progress>

### Range element

<label for="input-range">Power Level</label><br>
<input type="range" name="input-range" id="input-range" value="40" style="--range-value: 40" oninput="this.style.setProperty('--range-value', this.value)">
