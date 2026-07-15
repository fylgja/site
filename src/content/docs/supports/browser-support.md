---
title: "Browser Support"
description: "How Well Is Fylgja CSS Supported in Which Browsers?"
faq:
  - question: How many browser versions back does Fylgja CSS support?
    answer: Fylgja CSS aims to support at least three major browser versions back
      for each of Chrome, Firefox, Edge, and Safari.
  - question: Do I need PostCSS or a build tool to use Fylgja CSS?
    answer: No, Fylgja CSS works even without extra tooling. Tools like
      postcss-preset-env are only recommended if you need vendor prefixes or
      polyfills for older browsers.
  - question: What should I do if I need to support browsers older than Fylgja's
      target range?
    answer: Use a tool like PostCSS to transform newer CSS features for
      compatibility, and pick only the Fylgja CSS Components that avoid features
      unsupported in your target browsers, since components are modular.
  - question: How do I check if a specific CSS feature Fylgja uses is supported in
      my target browsers?
    answer: Check Can I Use or the Mozilla Developer Docs for the specific CSS or
      HTML feature in question.
---

Fylgja CSS is a CSS Library that is thoroughly tested and supported across all modern browsers,
including Chrome, Firefox, Edge, and Safari.

This ensures that you can use Fylgja CSS with confidence,
without worrying about compatibility issues.

## Using Newer CSS Features

While Fylgja CSS works seamlessly in modern browsers,
we recommend using tools like [postcss-preset-env](https://preset-env.cssdb.org/) to take advantage of newer CSS features. 

These tools will automatically add the necessary vendor prefixes and polyfills to your CSS,
ensuring compatibility with older browsers.

That said, Fylgja CSS is designed to function even without these tools. However,
there may be some cases where certain CSS components leverage modern CSS or HTML features
that require additional tooling or polyfills for full compatibility in older browsers.

## Supporting Older Browsers

Fylgja CSS aims to support at least three major browser versions back.

If you need to support older browsers beyond that, you can:

1. **Use Modern Tools**: Employ PostCSS or similar tools to help maintain compatibility by transforming newer CSS features.
2. **Pick and Choose Components**: Fylgja CSS Components are modular,
   meaning you can use only the components that meet your browser support needs.
   Avoid components that rely on features unsupported by older browsers.

For checking browser compatibility for specific CSS features,
we recommend using [Can I Use](https://caniuse.com/)
or consulting the [Mozilla Developer Docs](https://developer.mozilla.org/).
