---
title: "Darkmode"
description: "Fylgja does not ship with darkmode styles by default. Since we don't force a specific color pallet for your use."
---

Fylgja does not ship with darkmode styles by default.
Since we don't force a specific color pallet for your use.

But the foundation for each component is made in a flexable way.
So you can change it via the CSS variables or the Sass variables.

By just setting these Sass vars in the `@fylgja/theme`.
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

For this we made a small css rule for dark mode.
And added a small bit of JS to toggle the state.
If the user prefers a specific mode over the system default one.

<details class="faq-panel"><summary>Sample from our site</summary>

```scss
// _color-scheme.scss
@mixin dark-mode {
    :root:not(.light-mode) {
        --color-scheme: dark;
        --color-bg: #{color.change($color-theme, $lightness: 8%)};
        --color-text: #fff;
        --color-text-alt: #{color.change(#fff, $alpha: 0.8)};
        --color-text-muted: #{color.change(#fff, $alpha: 0.67)};
        --code-bg: #{color.change($color-theme, $lightness: 16%)};
        --code-color: #fff;
        --card-bg: #{color.change($color-theme, $lightness: 16%)};
        --card-color: #fff;
        --dialog-bg: #{color.change($color-theme, $lightness: 16%)};
        --select-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>');
        --btn-focus-bg: #{color.change(#fff, $alpha: 0.1)};
        --btn-active-bg: #{color.change(#fff, $alpha: 0.2)};
        --divider-color: #{color.change(#fff, $alpha: 0.2)};
        --menu-item-bg-focus: #{color.change(#fff, $alpha: 0.1)};
    }
}

@media (prefers-color-scheme: dark) {
    @include dark-mode;
}

.dark-mode {
    @include dark-mode;
}
```

```js
const root = document.documentElement;
const themeScheme = document.querySelector("#color-scheme-toggle");

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
let theme = "";
if (currentTheme == "dark") {
    root.classList.add("dark-mode");
    root.classList.remove("light-mode");
} else if (currentTheme == "light") {
    root.classList.add("light-mode");
    root.classList.remove("dark-mode");
}

themeScheme.addEventListener("click", () => {
    if (root.classList.contains("dark-mode")) {
        theme = "light";
        root.classList.add("light-mode");
        root.classList.remove("dark-mode");
    } else {
        theme = "dark";
        root.classList.add("dark-mode");
        root.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
});
```

</details>

## Considerations to take when adding or using dark mode.

Dark mode does not necessary mean black with white text.
And as you could see it in our sample.

We used a dark tint of our theme (primary) color.
This gives it a more personal feel than just a inverted version.

Also dark mode is never a must.
If your brand/site does not fits in this style.
Than don't bother trying to add it.
This only adds confusion to your users.

This of course also work the other way around.
