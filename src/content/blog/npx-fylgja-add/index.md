---
title: "Use Fylgja CSS Without Installing Anything"
description: "The fylgja css meta package now ships a CLI that lets you copy key Fylgja CSS files directly into your project with a single npx command."
publishDate: 2026-06-10
tags: ["FylgjaCSS", "Buildless", "Release"]
coverImage: "cover.jpg"
---

Fylgja CSS v2.2 is out, and it ships a CLI that lets you grab the most useful Fylgja CSS files without adding a dependency to your project.
One command copies the file straight into your project directory.

```sh
npx fylgja@latest add theme
```

That single command copies `theme.css` from `@fylgja/base` into `src/css`, `src/styles`, or `src/assets` if any of those directories exist, falling back to the current directory if none are found.

### Where this started

This idea is not entirely new. Since the launch of `@fylgja/base`, it has shipped a small bin script that did exactly one thing: copy `theme.css` into your project. The reason was simple. The theme file is meant to be customized. It holds the brand colors, dark mode defaults, and view transition styles that make a site feel like yours. Keeping it inside `node_modules` and importing it directly would not give you direct control. You would have to override the defaults it sets, layering your own styles on top rather than shaping them from the source. That is also why the theme was never bundled into `@fylgja/base` by default. Copying it into the project is the intended workflow.

That single script proved the concept worked. People used it, it solved a real problem, and it stayed in the package ever since. The new CLI is that idea grown up and applied to the whole library.

### Why we built this

Fylgja CSS has always been designed to work without a build step. You can link a CDN, download a release from GitHub, or drop a file in manually. The `npx` command is the natural next step for that story: one command, no install, no lock file changes, just the CSS file you need sitting in your project.

It is especially useful when prototyping. Grab the theme file, tweak the custom properties, and move on. No `node_modules` involved.

That said, installing via npm is still the recommended approach for real projects. You get version pinning, automatic updates through your package manager, and the full CSS source if you want to customise at build time. The `npx` command is an addition, not a replacement.

### What you can add

The command covers all three core packages. For `@fylgja/base` you can pull in the full bundle with `add base`, just the good defaults and typography with `add preflight`, or the theme file with `add theme`. You can also grab individual pieces like `add base/btn`, `add base/form`, or `add base/dialog` if you only need one part.

For `@fylgja/tokens`, `add tokens` gives you the full bundle. If you only need a subset, each token category is available individually: `add tokens/colors`, `add tokens/sizes`, `add tokens/shadows`, `add tokens/fonts`, `add tokens/easing`, `add tokens/borders`, `add tokens/mq`, `add tokens/z-layer`, `add tokens/aspect-ratio`, and `add tokens/hues`.

For utilities, `add utilities` copies the full utility bundle.

Run `npx fylgja@latest help` to see everything in one place.

### What comes next

This is the first version of the CLI, shipped as part of Fylgja CSS v2.2. The plan is to expand it as the library grows. For now it handles files from the three core packages, but future releases will add more targets as new packages land.

One thing worth noting: with the `npx` approach we lose visibility into how many people are actually using Fylgja CSS, since npm download stats only count installs. If you find Fylgja CSS useful, a star on [GitHub](https://github.com/fylgja/fylgja) goes a long way. It is the best signal we have to see how many people like what we are building.

[buildless approach]: https://fylgja.dev/docs/concepts/buildless
