---
title: "Tokens"
pageTitle: "Fylgja Tokens"
description: ""
npm: "@fylgja/tokens"
git: "https://github.com/fylgja/fylgja/tree/main/tokens"
sortOrder: 5
---

Start your projects with a predefined set of design tokens,
to avoid creating multiple variantions of spacing and colors and follow consisten structure trough your project.

If you don't require everything that Fylgja Tokens offers,
you can import only the parts you need.
For example, you can import just the spacing and provide your own colors as design tokens.

## Installation

You can install Fylgja Tokens via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/tokens
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens@2.0/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/tokens";
```

Alternatively, if you only need specific parts of the tokens, you can import them individually:

| Import Path                    | CSS | SCSS | JS  | Description                                     |
| ------------------------------ | --- | ---- | --- | ----------------------------------------------- |
| `@fylgja/tokens/aspect-ratio`  | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/border-radius` | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/border-sizes`  | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/colors`        | ✅   | ✅    | ✅   | List of 14 colors in oklch format               |
| `@fylgja/tokens/colors-static` |     | ✅    |     | Combination of colors and hues as a static list |
| `@fylgja/tokens/hues`          | ✅   | ✅    |     | JS version is part of the colors import         |
| `@fylgja/tokens/easing`        | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/fonts`         | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/shadows`       | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/sizes`         | ✅   | ✅    | ✅   |                                                 |
| `@fylgja/tokens/z-layer`       | ✅   | ✅    | ✅   |                                                 |

### Shadow DOM support

The CSS version also support a [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) import version which offer the design tokens on the host scope,
the import paths will end with `.host`.

This is great option if you want to use the Fylgja Tokens with your web components.

**Example import:**

```css
@import "@fylgja/tokens/aspect-ratio.host";
```

## Previews

### Aspect-Ratio

<figure class="flex-wrap gap">
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-box);">Box</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-landscape);">Landscape</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-portrait);">Portrait</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-widescreen);">Widescreen</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-superwide);">Superwide</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-ultrawide);">ultrawide</div>
<div class="demo-box" style="min-block-size: 8rem; aspect-ratio: var(--ratio-golden);">Golden Ratio</div>
</figure>

### Border Radius

<figure class="flex-wrap gap">
<div class="demo-box" style="border-radius: var(--radius-1);">1</div>
<div class="demo-box" style="border-radius: var(--radius-2);">2</div>
<div class="demo-box" style="border-radius: var(--radius-3);">3</div>
<div class="demo-box" style="border-radius: var(--radius-4);">4</div>
<div class="demo-box" style="border-radius: var(--radius-5);">5</div>
<div class="demo-box" style="border-radius: var(--radius-6);">6</div>
<div class="demo-box" style="border-radius: var(--radius-full);">Full</div>
</figure>

#### Conditional

Functions identically to the preceding numbered examples,
except that this value reverts to 0 when the element's boundaries intersect with the screen edges.

### Border Sizes

<figure class="flex-wrap gap">
<div class="demo-box" style="border-width: var(--border-size-1);">1</div>
<div class="demo-box" style="border-width: var(--border-size-2);">2</div>
<div class="demo-box" style="border-width: var(--border-size-3);">3</div>
<div class="demo-box" style="border-width: var(--border-size-4);">4</div>
<div class="demo-box" style="border-width: var(--border-size-5);">5</div>
<div class="demo-box" style="border-width: var(--border-size-6);">6</div>
</figure>

### Colors

Unlike other approaches where colors are predefined, we offer a dynamic color map.
This map defines ranges of colors that can be modified using the `--hue` or `--chroma` variables.

This approach minimizes the amount of CSS required for color definitions.
It simplifies color implementation by defining only the color strength (`--color-{NUMBER}`) and a `--hue`.
We also provide a set of predefined hues for convenience.

<figure
	id="demoColors"
	class="flex-wrap align gap"
	style="--align: start; --gap: 0.5em; --demo-box-stroke: transparent; --hue: var(--hue-teal)"
>
<div class="demo-box -scaler" style="background-color: var(--color-0); color: var(--color-14)">0</div>
<div class="demo-box -scaler" style="background-color: var(--color-1); color: var(--color-14)">1</div>
<div class="demo-box -scaler" style="background-color: var(--color-2); color: var(--color-14)">2</div>
<div class="demo-box -scaler" style="background-color: var(--color-3); color: var(--color-14)">3</div>
<div class="demo-box -scaler" style="background-color: var(--color-4); color: var(--color-14)">4</div>
<div class="demo-box -scaler" style="background-color: var(--color-5); color: var(--color-14)">5</div>
<div class="demo-box -scaler" style="background-color: var(--color-6); color: var(--color-14)">6</div>
<div class="demo-box -scaler" style="background-color: var(--color-7); color: var(--color-14)">7</div>
<div class="demo-box -scaler" style="background-color: var(--color-8); color: var(--color-0)">8</div>
<div class="demo-box -scaler" style="background-color: var(--color-9); color: var(--color-0)">9</div>
<div class="demo-box -scaler" style="background-color: var(--color-10); color: var(--color-0)">10</div>
<div class="demo-box -scaler" style="background-color: var(--color-11); color: var(--color-0)">11</div>
<div class="demo-box -scaler" style="background-color: var(--color-12); color: var(--color-0)">12</div>
<div class="demo-box -scaler" style="background-color: var(--color-13); color: var(--color-0)">13</div>
<div class="demo-box -scaler" style="background-color: var(--color-14); color: var(--color-0)">14</div>
</figure>

<div class="flex-wrap gap">
<label>
	Hue
	<select name="demo-hue-changer" onChange="
		demoColors.style.setProperty('--hue', event.target.value);
		document.documentElement.style.setProperty('--hue', event.target.value);
		document.documentElement.style.setProperty('--brand', 'var(--color-9)');
	">
	<option value="var(--hue-pink)">Pink</option>
	<option value="var(--hue-purple)">Purple</option>
	<option value="var(--hue-violet)">Violet</option>
	<option value="var(--hue-indigo)">Indigo</option>
	<option value="var(--hue-blue)">Blue</option>
	<option value="var(--hue-cyan)">Cyan</option>
	<option value="var(--hue-teal)" selected>Teal</option>
	<option value="var(--hue-green)">Green</option>
	<option value="var(--hue-lime)">Lime</option>
	<option value="var(--hue-yellow)">Yellow</option>
	<option value="var(--hue-orange)">Orange</option>
	<option value="var(--hue-red)">Red</option>
	</select>
</label>
<label>
	Chroma
	<select name="demo-chroma-changer" onChange="demoColors.style.setProperty('--chroma', event.target.value);">
	<option value="1" selected>1</option>
	<option value="0.9">0.9</option>
	<option value="0.8">0.8</option>
	<option value="0.7">0.7</option>
	<option value="0.6">0.6</option>
	<option value="0.5">0.5</option>
	<option value="0.4">0.4</option>
	<option value="0.3">0.3</option>
	<option value="0.2">0.2</option>
	<option value="0.1">0.1</option>
	<option value="0">0</option>
	</select>
</label>
</div>

### Easing

> [!note]
> TODO

### Fonts

<p
	id="demoFonts"
	style="font-size: var(--font-size-6); line-height: var(--line-height-3);"
>Easily customize your text with variable and static font sizes, intelligently adjusted line heights, modern font stacks, and a comprehensive set of typography variables.</p>

<div class="flex-wrap gap">
<label>
	Font Size
	<select name="demo-font-size-changer" onChange="demoFonts.style.fontSize = event.target.value;">
	<option value="var(--font-size-1)">Size 1</option>
	<option value="var(--font-size-2)">Size 2</option>
	<option value="var(--font-size-3)">Size 3</option>
	<option value="var(--font-size-4)">Size 4</option>
	<option value="var(--font-size-5)">Size 5</option>
	<option value="var(--font-size-6)" selected>Size 6</option>
	<option value="var(--font-size-7)">Size 7</option>
	<option value="var(--font-size-8)">Size 8</option>
	<option value="var(--font-size-9)">Size 9</option>
	<optgroup label="Fluid">
		<option value="var(--font-size-fluid-1)">Fluid 1</option>
		<option value="var(--font-size-fluid-2)">Fluid 2</option>
		<option value="var(--font-size-fluid-3)">Fluid 3</option>
		<option value="var(--font-size-fluid-4)">Fluid 4</option>
		<option value="var(--font-size-fluid-5)">Fluid 5</option>
	</optgroup>
	</select>
</label>
<label>
	Line Height
	<select name="demo-line-height-changer" onChange="demoFonts.style.lineHeight = event.target.value;">
	<option value="var(--line-height-1)">Height 1</option>
	<option value="var(--line-height-2)">Height 2</option>
	<option value="var(--line-height-3)" selected>Height 3</option>
	<option value="var(--line-height-4)">Height 4</option>
	<option value="var(--line-height-5)">Height 5</option>
	</select>
</label>
</div>

```css
--font-size-{1-9};
--font-size-fluid-{1-5};
--line-height-{1-5};
```

### Shadows

<figure class="flex-wrap gap" style="--gap: 1.25em">
<div class="demo-box" style="box-shadow: var(--shadow-1);">1</div>
<div class="demo-box" style="box-shadow: var(--shadow-2);">2</div>
<div class="demo-box" style="box-shadow: var(--shadow-3);">3</div>
<div class="demo-box" style="box-shadow: var(--shadow-4);">4</div>
<div class="demo-box" style="box-shadow: var(--shadow-5);">5</div>
<div class="demo-box" style="box-shadow: var(--shadow-6);">6</div>
</figure>

### Sizes

Fylgja includes a comprehensive numeric spacing scale characterized by its proportional values.
This ensures predictable and consistent spacing relationships within the design system.

<div class="demo-size-table">

| Name | Value    | Pixel |                                                 |
| ---- | -------- | ----- | ----------------------------------------------- |
| 1    | 0.125rem | 2px   | <div style="inline-size: var(--size-1)"></div>  |
| 2    | 0.25rem  | 4px   | <div style="inline-size: var(--size-2)"></div>  |
| 3    | 0.375rem | 6px   | <div style="inline-size: var(--size-3)"></div>  |
| 4    | 0.5rem   | 8px   | <div style="inline-size: var(--size-4)"></div>  |
| 5    | 0.625rem | 10px  | <div style="inline-size: var(--size-5)"></div>  |
| 6    | 0.75rem  | 12px  | <div style="inline-size: var(--size-6)"></div>  |
| 7    | 0.875rem | 14px  | <div style="inline-size: var(--size-7)"></div>  |
| 8    | 1rem     | 16px  | <div style="inline-size: var(--size-8)"></div>  |
| 9    | 1.25rem  | 20px  | <div style="inline-size: var(--size-9)"></div>  |
| 10   | 1.5rem   | 24px  | <div style="inline-size: var(--size-10)"></div> |
| 11   | 1.75rem  | 28px  | <div style="inline-size: var(--size-11)"></div> |
| 12   | 2rem     | 32px  | <div style="inline-size: var(--size-12)"></div> |
| 13   | 2.25rem  | 36px  | <div style="inline-size: var(--size-13)"></div> |
| 14   | 2.5rem   | 40px  | <div style="inline-size: var(--size-14)"></div> |
| 15   | 2.75rem  | 44px  | <div style="inline-size: var(--size-15)"></div> |
| 16   | 3rem     | 48px  | <div style="inline-size: var(--size-16)"></div> |
| 17   | 3.5rem   | 56px  | <div style="inline-size: var(--size-17)"></div> |
| 18   | 4rem     | 64px  | <div style="inline-size: var(--size-18)"></div> |
| 19   | 5rem     | 80px  | <div style="inline-size: var(--size-19)"></div> |
| 20   | 6rem     | 96px  | <div style="inline-size: var(--size-20)"></div> |
| 21   | 7rem     | 112px | <div style="inline-size: var(--size-21)"></div> |
| 22   | 8rem     | 128px | <div style="inline-size: var(--size-22)"></div> |
| 23   | 9rem     | 144px | <div style="inline-size: var(--size-23)"></div> |
| 24   | 10rem    | 160px | <div style="inline-size: var(--size-24)"></div> |
| 25   | 11rem    | 176px | <div style="inline-size: var(--size-25)"></div> |
| 26   | 12rem    | 192px | <div style="inline-size: var(--size-26)"></div> |
| 27   | 13rem    | 208px | <div style="inline-size: var(--size-27)"></div> |
| 28   | 14rem    | 224px | <div style="inline-size: var(--size-28)"></div> |
| 29   | 15rem    | 240px | <div style="inline-size: var(--size-29)"></div> |
| 30   | 16rem    | 256px | <div style="inline-size: var(--size-30)"></div> |
| 31   | 18rem    | 288px | <div style="inline-size: var(--size-31)"></div> |
| 32   | 20rem    | 320px | <div style="inline-size: var(--size-32)"></div> |
| 33   | 24rem    | 384px | <div style="inline-size: var(--size-33)"></div> |
| 34   | 28rem    | 448px | <div style="inline-size: var(--size-34)"></div> |
| 35   | 32rem    | 512px | <div style="inline-size: var(--size-35)"></div> |

</div>

#### Size Content

<div class="demo-size-table">

| Name | Value |                                                        |
| ---- | ----- | ------------------------------------------------------ |
| 1    | 24ch  | <div style="inline-size: var(--size-content-1)"></div> |
| 2    | 45ch  | <div style="inline-size: var(--size-content-2)"></div> |
| 3    | 68ch  | <div style="inline-size: var(--size-content-3)"></div> |

</div>

#### Size Heading

<div class="demo-size-table">

| Name | Value |                                                        |
| ---- | ----- | ------------------------------------------------------ |
| 1    | 20ch  | <div style="inline-size: var(--size-heading-1)"></div> |
| 2    | 28ch  | <div style="inline-size: var(--size-heading-2)"></div> |
| 3    | 36ch  | <div style="inline-size: var(--size-heading-3)"></div> |

</div>

### Z-Layer

Z-indexes don't need high values, just a currated list of values.

```css
/* Options */
--layer-{1-5};

/* Example */
.modal {
	z-index: var(--layer-5);
}
```
