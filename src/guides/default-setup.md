---
title: "How to add Fylgja to your Project"
description: "Step by Step setup on how to add Fylgja to your project"
thumb: "logo-icon.png"
order: 1
---

Fylgja is a CSS framework that does not require a framework or specific tools to work. This gives you the freedom to use Fylgja in your project in any way that you see fit.

By default, we recommend using the Dart Sass setup. However, you can also use the PostCSS import alternative if you prefer. This guide will focus on the Dart Sass setup and show you a sample setup in a blank environment.

> If you are already using specific tooling for building your frontend, such as Vite,
> and want to add Fylgja with this tool,
> then we recommend checking out our examples GitHub repo: [github.com/fylgja/examples](https://github.com/fylgja/examples).
> This repo contains examples of how to use Fylgja with different tooling, including Vite.

## Setup Dependencies

First, make sure that you have Sass installed. If you don't already have it, you can install it with the following command:

```bash
npm i -D sass
```

Next, add a script to your `package.json`` file that will run your Sass styles.

This script will compile your Sass files to CSS and save them to the `dist` folder.

```json
// package.json
{
  ...
  "scripts": {
    "start": "sass src/main.scss dist/main.css -s compressed --load-path=node_modules",
  },
  "devDependencies": {
    "sass": "*",
  }
}
```

## Adding Fylgja Components

Fylgja components can be installed individually or as a bundle. For this sample, we will install Fylgja completely.

```bash
npm i fylgja
```

## Loading the styles

Create a file called `src/main.scss`. In this file, you will import the Fylgja components that you want to use.

```scss
@use "@fylgja/theme" with (
  $color-theme: rebeccapurple,
  $color-on-theme: white
);

@use "@fylgja/base";
@use "@fylgja/details";
@use "@fylgja/table";
@use "@fylgja/list";

@use "@fylgja/breadcrumbs";
@use "@fylgja/pagination";
@use "@fylgja/avatar";
@use "@fylgja/button";

@use "@fylgja/container";
@use "@fylgja/section";
@use "@fylgja/card";

@use "@fylgja/hashlink";
@use "@fylgja/utilpack";
```

We also imported the `@fylgja/theme` component,
which is part of many Fylgja components as a dependency and helper for color and spacer styles.

This will allow us to quickly edit the theme color for all of the Fylgja components without having to set it per Fylgja component that we imported.

## Building your CSS

Now that you have imported the Fylgja components,
you can build your CSS by running the npm start command.

This will compile your Sass files to CSS and save them to the dist folder.

## Next Steps

From here, you can extend or change many things to your liking. Here are a few ideas:

- Load other Sass files into the main.scss file or adjust Fylgja to your needs.
- Extend the compiler logic by adding PostCSS plugins to extend or polyfill CSS features.
- Optimize the CSS size by removing some styles yourself or by using tools like PurgeCSS and CleanCSS.

I hope this guide has been helpful!

If you have questions, feel free to ask them at our [github discussions](https://github.com/orgs/fylgja/discussions)
