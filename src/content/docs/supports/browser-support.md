---
title: "Browser Support"
description: "How Well Is Fylgja Supported in Which Browsers?"
---

Fylgja is a CSS Library that is thoroughly tested and supported across all modern browsers,
including Chrome, Firefox, Edge, and Safari.

This ensures that you can use Fylgja with confidence,
without worrying about compatibility issues.

## Using Newer CSS Features

While Fylgja works seamlessly in modern browsers,
we recommend using tools like [postcss-preset-env](https://preset-env.cssdb.org/) to take advantage of newer CSS features. 

These tools will automatically add the necessary vendor prefixes and polyfills to your CSS,
ensuring compatibility with older browsers.

That said, Fylgja is designed to function even without these tools. However,
there may be some cases where certain CSS components leverage modern CSS or HTML features
that require additional tooling or polyfills for full compatibility in older browsers.

## Supporting Older Browsers

Fylgja aims to support at least two major browser versions back.

If you need to support older browsers beyond that, you can:

1. **Use Modern Tools**: Employ PostCSS or similar tools to help maintain compatibility by transforming newer CSS features.
2. **Pick and Choose Components**: Fylgja CSS Components are modular,
   meaning you can use only the components that meet your browser support needs.
   Avoid components that rely on features unsupported by older browsers.

For checking browser compatibility for specific CSS features,
we recommend using [Can I Use](https://caniuse.com/)
or consulting the [Mozilla Developer Docs](https://developer.mozilla.org/).
