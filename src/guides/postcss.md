---
title: "PostCSS Tips, Tricks and Fixes"
description: "How to use PostCSS plugins with Fylgja"
thumb: "guide-thumb/postcss.jpg"
---

Looking for Tips, Tricks and Fixes for using specific PostCSS plugins with Fylgja.
Look no further then down here.

## PostCSS Import

This a great alternative if your planing to not go the SCSS route.

In Fylgja we made sure all of our NPM packages contain the the `style` key,
so PostCSS Import knows where to import it from.

Making it just as easy to import as with SCSS.

With both, SCSS and PostCSS Import you don't need to specify the file in the path, only the vendor and component.

_Sample of both PostCSS Import and SCSS imports;_

```scss
// Without file
@import "@fylgja/auto-grid"; // PostCSS Import
@use "@fylgja/auto-grid"; // SCSS

// With file (not recommended)
@import "@fylgja/auto-grid/auto-grid.css"; // PostCSS Import
@use "@fylgja/auto-grid/index"; // SCSS
```

## Preset Env or Autoprefixer

While Fylgja support all ever green browser versions.
There still might be a use case, where you need to support older browsers.

For this we recommend PostCSS Preset Env,
since this plugin also polyfills modern CSS into something most browsers can understand.

Make sure to use the stage 3 version to keep the inline and block based styles with a fallback,
stage 4 will break stuff.

```js
require("postcss-preset-env")({
    stage: 3,
}),
```

If you are looking for more info, [checkout the preset-env.cssdb.org](https://preset-env.cssdb.org/)

If you just looking for adding vendor prefixes then Autoprefixer is also a good alternative.

## CSSNano

While CSSNano is a great tool for minifying your CSS,
it can be to aggressive.

The only issue you might find with CSSNano, is with our current [aspect-ratio component](/components/aspect-ratio/#postcss-calc-and-cssnano-issue).

For this we at least recommend to keep your CSS calc's as the are.

```js
require("cssnano")({
    preset: ["default", {
        calc: false
    }],
})
```

## PurgeCSS

Fylgja works really wel with PurgeCSS.
And almost does not needed any config to work with Fylgja.

Sadly PurgeCSS does remove any pseudo states without any prefixes.
So things like `:any-link` will get removed.

To avoid this simply make sure the add the following regex to your safelist.

```js
require("@fullhuman/postcss-purgecss")({
    safelist: [/^\:/]
})
```
