---
title: "Introducing Fylgja CSS Attr v2 Polyfill"
description: "A new Fylgja extension that lets you write attr() v2 today, generating static fallback values for browsers that do not support it yet."
publishDate: 2026-09-08
tags: ["FylgjaCSS", "CSS Utilities", "Release"]
coverImage: cover.webp
---

We are excited to share a new extension for Fylgja CSS, [the attr v2 polyfill](/library/extensions/css-attr-polyfill/) 🎉

This extension brings better support for the `attr()` v2 syntax, by letting older browsers fall back to a static list of values, generated from the code you already wrote for modern browsers.

So why did we build this? Because we do not want to wait for CSS attr v2 to land everywhere. Browser support is getting better and it is expected to become baseline this year, but that should not block us right now.

<script src="/baseline-status.min.js" type="module"></script>
<baseline-status featureId="attr" style="border: 1px solid var(--baseline-status-color-outline); max-width: 100%"></baseline-status>

> The [caniuse data](https://caniuse.com/css3-attr) paints a more positive picture, with every browser except Safari supporting this, and Safari having it in Technical Preview.
> So full support is just around the corner, once Safari ships it in a next release 🙏

## Why we want it now

CSS attr v2 is great for building dynamic CSS utilities. We wrote about this before in [Native CSS Utilities](./native-css-utilities), where we explored using attr v2 for exactly that.

With this polyfill, you get it working today.

[Jake Archibald](https://jakearchibald.com/) also covered it recently for Firefox 155, so if you need a refresher, watch his [YouTube short](https://youtube.com/shorts/r9g0FNaZUEI) on Firefox for Web Devs.

## So how do you use it?

Our goal was to make the CSS attr polyfill as easy to use as possible, which gave us a few requirements.

First, writing a CSS attr utility should stay the same:

```css
[data-py] {
	padding-block: calc(var(--spacing) * attr(data-py type(<number>), 1));
}
```

And so should using it in your HTML:

```html
<div data-py="4"></div>
```

The polyfill scans for this usage and creates the fallback values for older browsers in your CSS. For more on what that output looks like, see the [extension page in the Fylgja Library](/library/extensions/css-attr-polyfill/).

Second, it has to be easy to integrate into a project, so we needed integrations with the popular CSS compilers. That means support for [ViteJS](https://vitejs.dev/), [LightningCSS](https://lightningcss.dev/) and [PostCSS](https://postcss.org/).

It is also usable in a custom setup through the API or the CLI. We plan to use this in Fylgja CSS itself, where the next version of [Fylgja Utilities] will ship it as the default instead of the current solution for dynamic CSS utilities. That also means we needed an option for projects without a build step, hence the API and CLI.

For now [Fylgja Utilities] does not support the `attr()` v2 syntax yet, and it is only available through the experimental imports. You can try it today with those imports, or bring your own solution.

[Fylgja Utilities]: /library/utilities/
