---
title: "Badge"
pageTitle: "Fylgja Badge"
description: "The Fylgja Badge component allows you to display compact labels or status indicators alongside other UI elements"
npm: "@fylgja/badge"
git: "https://github.com/fylgja/fylgja/tree/main/components/badge"
---

The Fylgja Badge component allows you to display compact labels or status indicators alongside other UI elements.

This component is ideal for showing counts, status chips, or small tags — for example: unread counts, state indicators (active/inactive), or categorical markers.

## Installation

You can install Fylgja Badge via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/badge
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/badge/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/badge";
```

## Examples

These examples demonstrate how you can use the Badge component with various layout and content options.

### Cart Item

<button class="relative" aria-label="3 Products in your Cart" style="--px: .375rem">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
	<span class="badge absolute" style="--inset-t: -1ch; --inset-e: -1ch">3</span>
</button>

```html
<button class="relative" aria-label="3 Products in your Cart" style="--px: .375rem">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
	<span class="badge absolute" style="--inset-t: -1ch; --inset-e: -1ch">3</span>
</button>
```

### Product Item with Sale Label

<div class="auto-grid gap" style="--max-col-size: 16rem">

<article class="card --hover">
	<div class="relative">
		<img
			src="/images/placeholders/cat.webp"
			alt="Sunny Cat Wallpaper"
			width="500"
			height="300"
			loading="lazy"
		/>
		<span class="badge absolute" style="--inset-t: 1ch; --inset-e: 1ch">10% more cute</span>
	</div>
	<div class="card-content">
		<p class="lead"><strong>Sunny Cat Wallpaper</strong></p>
		<p>Dicta ea a, commodi reiciendis aut doloremque earum fugit ducimus officiis.</p>
		<p class="font-bold">€18.99</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</div>
</article>

<article class="card --hover">
	<div class="relative">
		<img
			src="/images/placeholders/fox.webp"
			alt="Orange Fox Wallpaper"
			width="500"
			height="300"
			loading="lazy"
		/>
		<span class="badge absolute" style="--inset-t: 1ch; --inset-e: 1ch; --badge-bg: orange; --badge-color: #111">Orange</span>
	</div>
	<div class="card-content">
		<p class="lead"><strong>Orange Fox Wallpaper</strong></p>
		<p>Dicta ea a, commodi reiciendis aut doloremque earum fugit ducimus officiis.</p>
		<p class="font-bold">€6.00</p>
		<form action="#" class="flex-wrap gap align">
			<input type="hidden" name="product-id" value="demo-id">
			<button>Add to Cart</button>
		</form>
	</div>
</article>

</div>
