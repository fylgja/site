---
title: "PostCSS Tips, Tricks and Fixes"
description: "How to use PostCSS plugins with Fylgja"
thumb: "guide-thumb/postcss.jpg"
---

Looking for Tips, Tricks and Fixes for using specific PostCSS plugins with Fylgja.
Look no further then down here.

## Preset Env or Autoprefixer

While Fylgja support all ever green browser versions.
There still might be a use where you need to support older browsers.

For this we recommend PostCSS Preset Env,
since this plugin also polyfills modern CSS into something most browsers can understand.

[Looking for more info checkout the preset-env.cssdb.org](https://preset-env.cssdb.org/)

If you just looking for adding vendor prefixes then Autoprefixer is also a good alternative.

## CSSNano

While CSSNano is a great tool for minifying your CSS,
it can be to aggressive.

The only issue you might find with it is our current [aspect-ratio component](/components/aspect-ratio/#postcss-calc-and-cssnano-issue).

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

Sadly PurgeCSS does remove any pseudo states without any prefix.
So things like `:any-link` will get removed.

To avoid this simply make sure the add the following regex to your safelist.

```js
require("@fullhuman/postcss-purgecss")({
    safelist: [/^\:/]
})
```
