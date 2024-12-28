---
title: "Browser Support"
description: "How Well Is Fylgja Supported in Which Browsers?"
---

Fylgja is a CSS framework that is tested and supported in all modern browsers (Chrome, Firefox, Edge, and Safari).
This means that you can use Fylgja without having to worry about compatibility issues with most browsers.

We do recommend using tools like postcss-preset-env or autoprefixer to make it easier to use newer CSS features.
These tools will automatically add the necessary vendor prefixes to your CSS code,
so that it works in older browsers.
However, Fylgja will still work without these tools, if you prefer to use them.

> More on postcss-preset-env or autoprefixer in our [guide for PostCSS tools](/guides/postcss/)

In some cases, Fylgja's CSS Components may include newer CSS/HTML features that require tooling or a polyfill to work in older browsers.
Fylgja strives to support at least two major versions back.

If you need to support older browsers,
you can avoid using the Fylgja components that require newer features.
Fylgja CSS Components can be used separately,
so you can pick and choose the components that you need.

And when in doubt, always check [Can I Use](https://caniuse.com/) or the [Mozilla Docs](https://developer.mozilla.org/) to see if a particular CSS feature is supported in the browsers that you need to target.
