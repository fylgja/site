---
title: "Tokens"
pageTitle: "Fylgja Tokens"
description: "Establish a consistent design language across your projects with Fylgja Design Tokens"
npm: "@fylgja/tokens"
git: "https://github.com/fylgja/fylgja/tree/main/tokens"
sortOrder: 2
---

Establish a consistent design language across your projects with Fylgja Design Tokens.

This predefined set of tokens eliminates redundant variations in spacing, colors, and other design elements,
ensuring a unified structure throughout your codebase.

For projects with specific requirements,
Fylgja offers granular imports.

Select only the necessary token categories, such as spacing, and define your own custom color palettes.

Furthermore, Fylgja seamlessly integrates with [PostCSS Jit Props],
mirroring the functionality of [Open Props](https://open-props.style/) and other design token systems, for optimized CSS output.

## Installation

You can install Fylgja Tokens via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/tokens
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```js
import tokens from "@fylgja/tokens";
```

or as CSS with:

```css
@import "@fylgja/tokens/css";
```

Next to this we also offers imports for SCSS, JS and for design systems in a json format.

Each option can be import for all tokens or just the part you need.

<div class="scroll-x">

| Import Path                                 | Description                                     |
| ------------------------------------------- | ----------------------------------------------- |
| `@fylgja/tokens/{css/scss}`                 | All tokens                                      |
| `@fylgja/tokens/{css/scss/js}/aspect-ratio` | Aspect Ratios                                   |
| `@fylgja/tokens/{css/scss/js}/borders`      | Border Widths and Radii                         |
| `@fylgja/tokens/{css/scss/js}/colors`       | List of 14 colors in oklch format               |
| `@fylgja/tokens/{css/scss}/hues`            | JS version is part of the colors import         |
| `@fylgja/tokens/scss/colors-static`         | Combination of colors and hues as a static list |
| `@fylgja/tokens/{css/scss/js}/easing`       | Easing Functions                                |
| `@fylgja/tokens/{css/scss/js}/fonts`        | Font Size and Line Height                       |
| `@fylgja/tokens/{css/scss/js}/mq`           | CSS Breakpoints and User preferences            |
| `@fylgja/tokens/{css/scss/js}/shadows`      | Shadows                                         |
| `@fylgja/tokens/{css/scss/js}/sizes`        | Sizes                                           |
| `@fylgja/tokens/{css/scss/js}/z-layer`      | Z-Index's                                       |

</div>

> [!Note]
> Not all tokens can be represented in a design system format.

<div class="scroll-x">

| Import Path for design system     | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| `@fylgja/tokens/tokens`           | Follows the [(draft) Design Tokens Spec]         |
| `@fylgja/tokens/figma`            | Can be used with the Figma Plugin [Token Studio] |
| `@fylgja/tokens/style-dictionary` | Follow the [Style Dictionary] format             |

[(draft) Design Tokens Spec]: https://design-tokens.github.io/community-group/format/
[Token Studio]: https://tokens.studio/
[Style Dictionary]: https://styledictionary.com/

</div>

### Shadow DOM Support

For web components utilizing Shadow DOM,
import the `.host` variants to apply tokens within the host scope:

```css
@import "@fylgja/tokens/aspect-ratio.host";
```

This enables seamless integration of Fylgja Design Tokens within your custom web components.

### PostCSS Jit Props Integration

Leverage [PostCSS Jit Props] to optimize CSS output by including only the tokens used in your project.

While Fylgja tokens are designed for minimal size,
this integration further reduces file sizes,
especially when combined with custom tokens.

[PostCSS Jit Props]: https://github.com/GoogleChromeLabs/postcss-jit-props

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
<div class="demo-box --scaler" style="background-color: var(--color-0); color: var(--color-14)">0</div>
<div class="demo-box --scaler" style="background-color: var(--color-1); color: var(--color-14)">1</div>
<div class="demo-box --scaler" style="background-color: var(--color-2); color: var(--color-14)">2</div>
<div class="demo-box --scaler" style="background-color: var(--color-3); color: var(--color-14)">3</div>
<div class="demo-box --scaler" style="background-color: var(--color-4); color: var(--color-14)">4</div>
<div class="demo-box --scaler" style="background-color: var(--color-5); color: var(--color-14)">5</div>
<div class="demo-box --scaler" style="background-color: var(--color-6); color: var(--color-14)">6</div>
<div class="demo-box --scaler" style="background-color: var(--color-7); color: var(--color-14)">7</div>
<div class="demo-box --scaler" style="background-color: var(--color-8); color: var(--color-0)">8</div>
<div class="demo-box --scaler" style="background-color: var(--color-9); color: var(--color-0)">9</div>
<div class="demo-box --scaler" style="background-color: var(--color-10); color: var(--color-0)">10</div>
<div class="demo-box --scaler" style="background-color: var(--color-11); color: var(--color-0)">11</div>
<div class="demo-box --scaler" style="background-color: var(--color-12); color: var(--color-0)">12</div>
<div class="demo-box --scaler" style="background-color: var(--color-13); color: var(--color-0)">13</div>
<div class="demo-box --scaler" style="background-color: var(--color-14); color: var(--color-0)">14</div>
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

Achieve smooth and natural animations with five robust timing functions: ease, ease-out, ease-in, and ease-in-out.
Go beyond the basics with advanced easing options with the elastic motion.

<div id="demoEasing" class="demo-easing is-paused flex-col">
<div
	class="demo-box"
	style="animation-timing-function: var(--ease-1)"
	aria-label="Preview of easing weight of 1"
>1</div>
<div
	class="demo-box"
	style="animation-timing-function: var(--ease-2)"
	aria-label="Preview of easing weight of 2"
>2</div>
<div
	class="demo-box"
	style="animation-timing-function: var(--ease-3)"
	aria-label="Preview of easing weight of 3"
>3</div>
<div
	class="demo-box"
	style="animation-timing-function: var(--ease-4)"
	aria-label="Preview of easing weight of 4"
>4</div>
<div
	class="demo-box"
	style="animation-timing-function: var(--ease-5)"
	aria-label="Preview of easing weight of 5"
>5</div>
</div>

<div class="flex-wrap gap">
<fieldset>
	<legend>Play Animation</legend>
	<div class="input-group">
		<label class="btn --primary">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Pause</title><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
			<input
				name="demo-play-easeing-state"
				type="radio"
				checked
				onChange="demoEasing.classList.add('is-paused');"
			>
		</label>
		<label class="btn --primary">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Play</title><polygon points="6 3 20 12 6 21 6 3"/></svg>
			<input
				name="demo-play-easeing-state"
				type="radio"
				onChange="demoEasing.classList.remove('is-paused');"
			>
		</label>
	</div>
</fieldset>
<label>
	Easing Style
	<select
		name="demo-play-easeing-style"
		onChange="
			let easeItemIndex = 1;
			for (const easeItem of demoEasing.children) {
				easeItem.style.setProperty('animation-timing-function', `var(--${event.target.value}-${easeItemIndex})`);
				easeItemIndex += 1;
			}
			demoEasingLabel.textContent = event.target.value;
		"
	>
	<option value="ease" selected>Ease</option>
	<option value="ease-in">Ease In</option>
	<option value="ease-out">Ease Out</option>
	<option value="ease-in-out">Ease In Out</option>
	<option value="ease-elastic-in">Ease Elastic In</option>
	<option value="ease-elastic-out">Ease Elastic Out</option>
	<option value="ease-elastic-in-out">Ease Elastic In Out</option>
	</select>
</label>
<label>
	<span class="sr-only">Animation</span>Speed<br>
	<div class="input-group --merge">
		<input
			name="demo-play-easeing-speed"
			type="number"
			min="1"
			max="25"
			value="5"
			onChange="demoEasing.style.setProperty('--demo-animate-speed', event.target.value + 's');"
			style="padding-inline-end: 0"
		>
		<div aria-hidden="true" class="form-input" style="padding-inline-start: 0.3ex">
			<span class="text-muted">S</span>
		</div>
	</div>
</label>
</div>

### Fonts

<div class="demo-wrapper --resize flow-none" style="--my: var(--text-flow)">
<p
	id="demoFonts"
	style="font-size: var(--font-size-6); line-height: var(--line-height-3);"
>Easily customize your text with variable and static font sizes, intelligently adjusted line heights, modern font stacks, and a comprehensive set of typography variables.</p>
</div>

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
		<option value="var(--font-size-fluid-1)">Size Fluid 1</option>
		<option value="var(--font-size-fluid-2)">Size Fluid 2</option>
		<option value="var(--font-size-fluid-3)">Size Fluid 3</option>
		<option value="var(--font-size-fluid-4)">Size Fluid 4</option>
		<option value="var(--font-size-fluid-5)">Size Fluid 5</option>
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

```css
--size-{1-10}
--size-{12,14,16,18,20,24,28,32,36}
--size-{40,50,60,70,80,90,100,120}
--size-heading
--size-content
```

### Z-Layer

Z-indexes don't need high values, just a currated list of values.
If you need a higher z-index then your probley trying to override an exciting behavior and should consider refactoring the z-index values or wrap the z-indexes inside a new stacking layer.

| Name        | Usage examples                             |
| ----------- | ------------------------------------------ |
| `--layer-1` | Visible Stack item or overlaping elements  |
| `--layer-2` | 2de level of overlaping elements           |
| `--layer-3` | Sticky elements, e.g. Back To Top Button   |
| `--layer-4` | Fixed elements, e.g. Page Header or Appbar |
| `--layer-5` | Top Layer elements, e.g. Dialogs or Modals |
