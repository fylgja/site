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
| `@fylgja/form-extend/range-vertical` | Adds `.range-vertical` modifier                     |

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

#### Vertical Modifier

To change the orientation of a range slider to vertical, add the `.range-vertical` class to the input element.

## Examples

Below are examples showcasing each part of the Fylgja Form Extend in action.

### Form Validation

<div class="field">
	<label for="email-validate">Email</label>
	<input type="email" name="email" id="email" placeholder="Fill in a invalid email to see me work" aria-errormessage="err1" autocomplete="off">
	<div id="err1" class="field-error-message">
		Invalid Email Address, please use a email in the format
		<code>me@example.com</code>
	</div>
</div>

### Meter and Progress element

<label>
	Danger
	<meter min="0" max="100" low="33" high="66" optimum="80" value="32"></meter>
</label>
<label>
	Warning
	<meter min="0" max="100" low="33" high="66" optimum="80" value="50"></meter>
</label>
<label>
	success
	<meter min="0" max="100" low="33" high="66" optimum="80" value="80"></meter>
</label>

### Range element

<label for="input-range" class="flex gap-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 7-3 5h4l-3 5"/><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/><path d="M22 14v-4"/><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/></svg>
<span>Power Level</span>
</label>
<input type="range" name="input-range" id="input-range" value="40" style="--range-value: 40" oninput="setRangeValue(this)">

<div class="flex align gap" style="--align: start">
	<label for="input-range-volume" class="flex gap-sm">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
	<span>Volume</span>
	</label>
	<input type="range" name="input-range-volume" id="input-range-volume" value="40" step="10" style="--range-value: 40" class="range-vertical" oninput="setRangeValue(this)">
</div>

<script is:inline>
	function setRangeValue(el) {
		if (CSS.supports("timeline-scope", "--foo")) return;
		el.style.setProperty("--range-value", el.value);
	}
</script>
