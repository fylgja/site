---
title: "Input Group"
pageTitle: "Fylgja Input Group"
description: "Create smarter, more intuitive form controls by grouping inputs and buttons together"
npm: "@fylgja/input-group"
git: "https://github.com/fylgja/fylgja/tree/main/components/input-group"
---

The Fylgja Input Group component allows you to group inputs and buttons together
to create more intuitive form controls.

This component is ideal for building various UI elements such as
search bars, button groups, or rating systems using radio buttons.

## Installation

You can install Fylgja Input Group via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/input-group
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/input-group/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/input-group";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path                 | Description                           |
| --------------------------- | ------------------------------------- |
| `@fylgja/input-group/base`  | Contains to core of the Input Group   |
| `@fylgja/input-group/merge` | Contains the `--merge` modifier class |
| `@fylgja/input-group/steps` | Contains the `--steps` modifier class |

## Modifiers

### `--merge`

The `--merge` modifier merges all borders between elements in an input group, making them appear as a unified component.

### `--steps`

The `--steps` modifier adds stepping functionality, mainly used with radio buttons or checkbox groups to create a range-like input.

## Examples

These examples demonstrate how you can use the Input Group component with various form controls and modifiers.

The flexibility of this component allows you to customize form elements easily.

#### Search box

Create a simple search bar by combining an input field with a button:

<form action="./search/">
	<label for="ui-search">Search</label>
	<div class="input-group">
		<input name="ui-search">
		<button>Search</button>
	</div>
</form>

```html
<form action="./search/">
	<label for="ui-search">Search</label>
	<div class="input-group">
		<input name="ui-search">
		<button>Search</button>
	</div>
</form>
```

#### Button Group

Create a group of buttons with the `--merge` modifier for a seamless design:

<div class="input-group --merge">
	<button>Delete</button>
	<button>Update</button>
	<button>Publish</button>
</div>

```html
<div class="input-group --merge">
	<button>Delete</button>
	<button>Update</button>
	<button>Publish</button>
</div>
```

You can also use checkboxes to create a toolbar.
The btn class hides the input and makes the label the interactive element:

```html
<div class="input-group --merge">
	<label class="btn">
		<input type="checkbox">
		Mute
	</label>
	<label class="btn">
		<input type="checkbox">
		Pause
	</label>
</div>
```

#### Start Rating

Use the `--steps` modifier to create a rating system with radio buttons,
giving it the appearance of a step-by-step input:

<fieldset class="flow" style="--flow: 0.5em">
	<legend>Your Rating</legend>
	<div class="input-group --steps">
		<label>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="star" style="fill: var(--_not-checked, none) var(--_is-checked, currentColor)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></defs><title>Rating 1</title><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating">
		</label>
		<label>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Rating 2</title><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating">
		</label>
		<label>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Rating 3</title><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating" checked>
		</label>
		<label>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Rating 4</title><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating">
		</label>
		<label>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Rating 5</title><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating">
		</label>
	</div>
</fieldset>

```html
<fieldset>
	<legend>Your Rating</legend>
	<div class="input-group --steps">
		<label>
			<svg ...><use href="#star" /></svg>
			<input type="radio" name="demo-star-rating">
		</label>
		...
	</div>
</fieldset>
```
