---
title: "Card"
pageTitle: "Fylgja Card"
description: "Create grouped content with the Card for product items, Blog items or for a Dropdown Panel"
npm: "@fylgja/card"
git: "https://github.com/fylgja/fylgja/tree/main/components/card"
---

The Fylgja Card component allows you to group content together, for a more contained content element.

This component is ideal for building various UI elements such as
Product items, Blog items or for a Dropdown Panel.

## Installation

You can install Fylgja Card via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/card
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/card/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/card";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path             | Description                                |
| ----------------------- | ------------------------------------------ |
| `@fylgja/card/base`     | Contains to core of the Card               |
| `@fylgja/card/elevated` | Contains the `--elevated` modifier classes |
| `@fylgja/card/hover`    | Contains the `--hover` modifier classes    |

## Modifiers

### `--elevated`

The `--elevated` modifier unset the border color and add a shadow with a depth of 2 to the card.

This variant requires the Design Token `--shadow-2`.
This token is provided by the `@fylgja/tokens` or by other Token/Props frameworks such as [Open Props](https://open-props.style/)

### `--hover`

Simliar to the `--elevated` modifier, only instead this work on the hover interaction and does not unset the border.
This version uses a shadow dept of 4, so the Design Token `--shadow-4` is required.

This modifier is paired best with solutions such as the [`stretched-link`](https://fylgja.dev/library/utilities/#stretched-link) which makes the card clickable.

## Examples

These examples demonstrate how you can use the Card component with various layout and content options.

### Media Card

This example demonstrates how to apply layouts to the Card component.
It's especially useful for highlighting featured blog posts or banners.

<article class="card md:flex">
	<picture class="flex-none">
		<source srcset="https://picsum.photos/id/15/320/240.webp" media="(width >= 768px)">
		<img
			src="https://picsum.photos/id/18/740/280.webp"
			alt="Exploring Fylgja in the Wilds"
			width="740"
			height="240"
			loading="lazy"
			class="object-cover"
			style="--size-y: 240px; --md_size-x: 320px"
		>
	</picture>
	<div class="card-content">
		<h3 class="lead">Exploring Fylgja in the Wilds</h3>
		<p class="line-clamp">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius repellendus, eaque repellat esse rem repudiandae deserunt dicta excepturi exercitationem quod porro cumque id. Expedita iste vel illum libero quasi? Error quos illum soluta dolor pariatur doloremque aperiam ea amet, ad iusto expedita dolorum id fuga tenetur quasi suscipit reiciendis?
		</p>
		<p><a href="#">Read More</a></p>
	</div>
</article>

```html
<article class="card md:flex">
	<picture class="flex-none">
		<source srcset="https://picsum.photos/id/15/320/240.webp" media="(width >= 768px)">
		<img
			src="https://picsum.photos/id/18/740/280.webp"
			alt="Exploring Fylgja in the Wilds"
			width="740"
			height="240"
			loading="lazy"
			class="object-cover"
			style="--size-y: 240px; --md_size-x: 320px"
		>
	</picture>
	<div class="card-content">
		<h3 class="lead">Exploring Fylgja in the Wilds</h3>
		<p class="line-clamp">...</p>
		<p><a href="#">Read More</a></p>
	</div>
</article>
```

### Product Grid

Using cards in a product grid is highly effective, as each card serves as a self-contained wrapper for individual content.

As you can see, with just a few CSS utilities, you can easily create a fully functional product grid.

<div class="auto-grid gap" style="--max-col-size: 16rem">
	<article class="card --hover">
		<img
			src="https://picsum.photos/id/425/500/300.webp"
			alt="Coffee Beans"
			width="500"
			height="300"
			loading="lazy"
		/>
		<p class="lead"><strong>Coffee Beans</strong></p>
		<p>Dicta ea a, commodi reiciendis aut doloremque earum fugit ducimus officiis.</p>
		<p class="font-bold">€18.99</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</article>
	<article class="card --hover">
		<img
			src="https://picsum.photos/id/30/500/300.webp"
			alt="Coffee Cup"
			width="500"
			height="300"
			loading="lazy"
		/>
		<p class="lead"><strong>Coffee Cup</strong></p>
		<p>Dicta ea a, commodi reiciendis aut doloremque earum fugit ducimus officiis.</p>
		<p class="font-bold">€6.00</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</article>
	<article class="card --hover">
		<img
			src="https://picsum.photos/id/42/500/300.webp"
			alt="Barista Training"
			width="500"
			height="300"
			loading="lazy"
		/>
		<p class="lead"><strong>Barista Training</strong></p>
		<p>Dicta ea a, commodi reiciendis aut doloremque earum fugit ducimus officiis.</p>
		<p class="font-bold">€112.56</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</article>
</div>

```html
<div class="auto-grid gap" style="--max-col-size: 16rem">
	<article class="card --hover">
		<img
			src="https://picsum.photos/id/425/500/300.webp"
			alt="Coffee Beans"
			width="500"
			height="300"
			loading="lazy"
		>
		<p class="lead"><strong>Coffee Beans</strong></p>
		<p>Dicta ea a...</p>
		<p class="font-bold">€18.99</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</article>
	...
</div>
```
