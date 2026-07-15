---
title: "Snap Slider"
pageTitle: "Fylgja Snap Slider"
description: "A CSS-powered slider/carousel, enhanced with JavaScript for improved functionality and accessibility."
npm: "@fylgja/snap-slider"
git: "https://github.com/fylgja/snap-slider"
faq:
  - question: Do I need to import a separate CSS file for the slider to work?
    answer: No, the package only ships JS. Styling comes from Fylgja Utilities
      (snap, scroll-x, grid-cols, and similar), applied to your own markup. See
      the UI Components section for full examples once they're published.
  - question: Do I need to call customElements.define() myself?
    answer: No, importing @fylgja/snap-slider/custom-element registers the
      <snap-slider> tag automatically, so you can use it in your HTML right
      after the import.
  - question: What happens if I forget to add [data-track]?
    answer: It logs a console warning and reverts to a plain CSS slider. Without
      data-track to identify the scroll container, the JS never initializes, so
      you lose the pager, keyboard navigation, and the other JS-powered
      enhancements, but native CSS scroll-snap behavior still works if your
      markup already relies on Fylgja Utilities for that.
  - question: How do I navigate to a specific slide programmatically?
    answer: There isn't a documented goToSlide() method. Navigation is driven by
      data-next/data-prev buttons or pager markers that link to a slide's ID
      (href="#slide-id" or data-target-id), so you trigger those instead of
      calling JavaScript directly.
  - question: What's the difference between data-auto-pager and data-group-pager?
    answer: data-auto-pager generates the pager markers for you automatically.
      data-group-pager changes how those markers are counted when multiple
      slides are visible at once, showing one marker per visible group of slides
      instead of one per slide.
  - question: Does the pager support keyboard navigation?
    answer: Yes, ArrowLeft/ArrowRight and ArrowUp/ArrowDown move to the next or
      previous slide when a pager marker has focus, and the page itself won't
      scroll from those key presses.
  - question: Why did my pager disappear?
    answer: By default the pager hides itself, and is marked inert so it can't be
      focused, whenever the slider has no overflow to navigate. Add data-force-pager
      (or the force-pager modifier for AlpineJS) if you want it visible anyway.
  - question: Can I use the Custom Element and the AlpineJS version on the same page?
    answer: On different sliders, yes, each is an independent instance. On the same
      slider element, no. The package doesn't export a combined build, and
      nothing guards against double-initializing the same element, so it would
      need a manual setup rather than being something the package handles for
      you.
  - question: Can I get the SnapSlider instance from the AlpineJS integration, like
      I can with the Custom Element?
    answer: No, this is intentional. The AlpineJS integration manages the slider's
      lifecycle internally through Alpine's own directive lifecycle instead of
      exposing the instance on the element.
---

A CSS-powered slider/carousel, enhanced with JavaScript for improved functionality and accessibility.

The Snap Slider is available as a Custom Element (the primary and recommended way) or as an AlpineJS component.

- **Custom Element Live Demo:** [https://fylgja-snap-slider.netlify.app/](https://fylgja-snap-slider.netlify.app/)
- **AlpineJS Live Demo:** [https://fylgja-snap-slider.netlify.app/alpinejs](https://fylgja-snap-slider.netlify.app/alpinejs)

## Installation

The Snap Slider can be integrated into your project via NPM or by using a CDN.

### NPM Installation

Install the package from NPM:

```sh
npm install @fylgja/snap-slider
```

### CDN Integration

Alternatively, you can include the script directly in your HTML using a `<script>` tag.

**For the Custom Element:**

```html
<script defer src="https://unpkg.com/@fylgja/snap-slider/dist/custom-element/cdn.min.js"></script>
```

**For the AlpineJS version:**

```html
<script defer src="https://unpkg.com/@fylgja/snap-slider/dist/alpine/cdn.min.js"></script>
```

## Usage

The Snap Slider can be used as a Custom Element or as an AlpineJS component.

### Custom Element (Recommended)

Import the custom element into your project:

```js
import '@fylgja/snap-slider/custom-element';
```

Then, use the `<snap-slider>` element in your HTML. A `[data-track]` child element is required to contain the slides.

```html
<snap-slider>
    <div data-track>
        <!-- Your slides go here -->
    </div>
</snap-slider>
```

### AlpineJS Component

To use the AlpineJS version, import the component and register it with Alpine:

```js
import Alpine from 'alpinejs';
import snapSlider from '@fylgja/snap-slider/alpine';

window.Alpine = Alpine;

Alpine.plugin(snapSlider);
Alpine.start();
```

Then, apply the `x-snap-slider` directive to your slider element.

```html
<div x-data x-snap-slider>
    <div data-track>
        <!-- Your slides go here -->
    </div>
</div>
```

## Configuration

The `snap-slider` supports the following data attributes for configuration:

| Data Attribute                | Description                                                                | Default       |
| ----------------------------- | -------------------------------------------------------------------------- | ------------- |
| `data-track`                  | **Required.** Identifies the container for the slider's slides.            |               |
| `data-next`                   | Designates a button to navigate to the next slide.                         |               |
| `data-prev`                   | Designates a button to navigate to the previous slide.                     |               |
| `data-pager`                  | Designates the container for pagination markers.                           |               |
| `data-auto-pager`             | Automatically generates pagination markers.                                | `false`       |
| `data-group-pager`            | Groups pager markers based on the number of visible slides.                | `false`       |
| `data-loop`                   | Enables looping. Navigation wraps around and buttons are never disabled.   | `false`       |
| `data-force-pager`            | Keeps the pager visible even when the slider has no overflow.              | `false`       |
| `data-slide-label-sepparator` | Customizes the separator in the `aria-label` for slides (e.g., "1 of 12"). | `of`          |
| `data-pager-class`            | Sets custom classes for the pager container.                               | `snap-pager`  |
| `data-marker-class`           | Sets custom classes for the pager markers.                                 | `snap-marker` |

### AlpineJS Configuration

For the AlpineJS version, boolean options like `auto-pager`, `group-pager`, `loop`, and `force-pager` are passed as modifiers to the `x-snap-slider` directive:

```html
<div x-data x-snap-slider.auto-pager.group-pager.loop.force-pager>
    ...
</div>
```

Other data attributes can be applied directly to the element as usual.

### Pager

You can add a pager to your slider in two ways:

#### 1. Auto Pager

The easiest way to add a pager is by using the `data-auto-pager` attribute (or `x-snap-slider.auto-pager` for AlpineJS). This will automatically generate a pager for you.

By default, the pager is inserted after the `[data-track]` element. You can customize its location by adding an empty `[data-pager]` container anywhere inside the slider element.

#### 2. Custom Pager

For more control, you can create a custom pager. Each slide must have a unique ID, and each pager marker must link to a slide's ID using `href="#slide-id"` or `data-target-id="slide-id"`.

### Group Pager

When multiple slides are visible at once, you can use the `data-group-pager` attribute (or `x-snap-slider.group-pager` for AlpineJS) to group the pager markers. This will only show one marker for each visible group of slides.

## JavaScript API

You can interact with the slider programmatically using the following methods and events.

### Methods

Instance access is only available for the Custom Element. The AlpineJS integration manages
the slider's lifecycle internally through Alpine's own directive lifecycle, so the
`SnapSlider` instance isn't exposed on the element.

**For the Custom Element:**
```js
const snapSliderElement = document.querySelector('snap-slider');
const snapSliderInstance = snapSliderElement.slider;
```

| Method            | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| `init()`          | Initializes the slider. This is called automatically.                           |
| `destroy()`       | Removes all event listeners and observers.                                      |
| `refreshSlides()` | Re-initializes the slider, useful when slides are added or removed dynamically. A built-in MutationObserver already calls this automatically when slides are added or removed, so manual calls are rarely needed. |

### Events

The slider dispatches a `slideChange` event on the slider element whenever the in-view slides change.

```js
const sliderEl = document.querySelector('snap-slider'); // Or '[x-snap-slider]'
sliderEl.addEventListener('slideChange', (event) => {
    console.log(event.detail);
});
```

The `event.detail` object contains the following properties:

| Property            | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `inViewSlides`      | An array of the slides currently in view.               |
| `totalInViewSlides` | The total number of slides in view.                     |
| `firstInViewSlide`  | The first slide in view.                                |
| `lastInViewSlide`   | The last slide in view.                                 |
| `isAtStart`         | A boolean indicating if the slider is at the beginning. |
| `isAtEnd`           | A boolean indicating if the slider is at the end.       |
| `hasNoOverflow`     | A boolean indicating if all slides are visible at once. |
