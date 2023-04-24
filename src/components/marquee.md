---
title: "Marquee"
description: "The marquee component lets you make infinite CSS sliders without any JavaScript"
npm: "@fylgja/list"
git: "components/marquee"
tags: ["layouts"]
preview: "scroll-slider.png"
preconnect: { picsum: "https://picsum.photos" }
---

The marquee component lets you make infinite CSS sliders without any JavaScript.

This feature provides an efficient and lightweight way to create dynamic and engaging sliders that loop infinitely,
without the need for additional code.

## Installation

```bash
npm install @fylgja/marquee
```

Then include the component in to your code via;

```scss
@use "@fylgja/marquee";
// Or via PostCSS import
@import "@fylgja/marquee";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/marquee" with ($marquee-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/marquee" layer(components);
```

## How to use

While this component may require some additional HTML to function,
it is relatively straightforward to set up.

_Moreover, you can further simplify the process by adding JavaScript or PHP loops._

{% codeSample html, "", "padding: 1.25rem 0;" %}
<div class="marquee overflow-mask">
    <div class="marquee-item">
        {% include "code-sample/marquee.njk" %}
    </div>
    <div class="marquee-item" aria-hidden="true">
        {% include "code-sample/marquee.njk" %}
    </div>
</div>
{% endcodeSample %}

To create a seamless loop effect with the marquee component,
you'll need a second marquee-item.

Without it,
the loop may appear incomplete or disjointed.

This item is a crucial component for achieving a smooth and continuous loop,
ensuring an engaging and immersive experience for your users.

If you wish to reverse the effect, simply add the class `-reverse`.

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$marquee-animation-name: marquee !default;
$marquee-animation-speed: 30s !default;
$marquee-gap: 1rem !default;
```
