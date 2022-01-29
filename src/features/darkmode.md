---
title: "Dark mode"
description: "Fylgja does not ship with dark mode styles by default. Since we don't force a specific color pallet."
---

Fylgja does not ship with dark mode styles by default.
Since we don't force a specific color pallet.

But the foundation for each CSS Component is made in a way that you can change it very easily.

You can change it with the CSS variables or the SCSS variables.

So for an simple example,
just setting all of Fylgja colors to a dark mode style,
can be done with the `@fylgja/theme` component, like this;

```scss
@use "@fylgja/theme" with (
    $root-bg: #111,
    $root-fg: #fff
);
```

## True dark mode setup

But if your really want the true dark mode experience.

You should use the CSS variables that are available in each Fylgja Component.

Taking a note from our own website,
that also ships with dark mode feature,
there are few things you need.

1. you need a base color pallet,
  with the Fylgja Base Component you get this for free.
2. you need a CSS file where you change all of your light color for dark variant.
3. you need<sup>*</sup> a little bit of javascript to toggle that logic manually.

> \* While you don't need javascript for a dark mode experience,
> having this option there,
> is a better user experience for your users.

So if you interested, down here is an example form our own site.

<details class="faq-panel"><summary>View dark mode sample from Fylgja</summary>

```scss
@mixin dark-mode {
    --color-scheme: dark;
    --color-bg: #{color.change($color-theme, $lightness: 8%)};
    --color-text: #fff;
    --color-text-alt: #{color.change(#fff, $alpha: 0.8)};
    --color-text-muted: #{color.change(#fff, $alpha: 0.67)};
    --code-bg: #{color.change($color-theme, $lightness: 16%)};
    ...
}

// Native CSS dark mode
@media (prefers-color-scheme: dark) {
    :root:not([data-theme]) {
        @include dark-mode;
    }
}

// JS dark mode
:root[data-theme="dark"] {
    @include dark-mode;
}
```

```js
{% include 'js/theme-toggle.js' %}
```


</details>

## Considerations to take when adding dark mode.

Dark mode does not necessary mean black with white text.

And as you could see it in our sample,
we used a dark tint of our theme (primary) color.

This gives it a more personal feel than just a inverted version.

Also dark mode is never a must,
if your brand or site does not fit in this color style,
then don't bother trying to add it,
as it only confuses your users.
