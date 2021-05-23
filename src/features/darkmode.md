---
title: "Dark mode"
description: "Fylgja does not ship with dark mode styles by default. Since we don't force a specific color pallet for your use."
---

Fylgja does not ship with dark mode styles by default.
Since we don't force a specific color pallet for your use.

But the foundation for each component is made in a flexible way.
So you can change it via the CSS variables or the SCSS variables.

By just setting these SCSS variables in the `@fylgja/theme`.
All component styles are dark.

```scss
@use "@fylgja/theme" with (
    $root-bg: #111,
    $root-fg: #fff
);
```

## Sample dark mode setup

But if your really want the light and dark mode experience.
You should use the CSS variables we offer in the `@fylgja/base`.

We also have dark mode support in our site.
Down in the footer you will find a moon or sun icon.

_Depending on what theme your using._

For this we made a small CSS rule for dark mode.
And added a small bit of JS to toggle the state.
If the user prefers a specific mode over the system default one.

<details class="faq-panel"><summary>Sample from our site</summary>

```scss
// _color-scheme.scss
@mixin dark-mode {
    --color-scheme: dark;
    --color-bg: #{color.change($color-theme, $lightness: 8%)};
    --color-text: #fff;
    --color-text-alt: #{color.change(#fff, $alpha: 0.8)};
    --color-text-muted: #{color.change(#fff, $alpha: 0.67)};
    --code-bg: #{color.change($color-theme, $lightness: 16%)};
    --code-color: #fff;
    --btn-focus-bg: #{color.change(#fff, $alpha: 0.1)};
    --btn-active-bg: #{color.change(#fff, $alpha: 0.2)};
    --divide-color: #{color.change(#fff, $alpha: 0.2)};
    ...
}

@media (prefers-color-scheme: dark) {
    :root:not([data-theme]) {
        @include dark-mode;
    }
}

:root[data-theme="dark"] {
    @include dark-mode;
}
```

```js
const root = document.documentElement;
let theme = "";

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    root.setAttribute("data-theme", currentTheme);
}

function toggleColorScheme(e) {
    if (!e.target.closest("[data-toggle-color-scheme]")) return;
    if (root.getAttribute("data-theme")) {
        theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    } else {
        theme = prefersDarkScheme ? "light" : "dark";
    }
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

document.addEventListener("click", (event) => {
    toggleColorScheme(event);
});
```

</details>

## Considerations to take when adding or using dark mode.

Dark mode does not necessary mean black with white text.

And as you could see it in our sample,
we used a dark tint of our theme (primary) color.
This gives it a more personal feel than just a inverted version.

Also dark mode is never a must.
If your brand/site does not fits in this style.
Than don't bother trying to add it.
This only adds confusion to your users.

This of course also work the other way around.
