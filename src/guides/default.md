---
title: "Default setup"
description: "The default setup via SCSS"
thumb: "guide-thumb/sass.jpg"
---

Fylgja does not need a framework or specific tools to work.
Giving you the freedom on how to use Fylgja in project.

By default we advice the [Dart Sass](https://sass-lang.com/dart-sass) setup.
But feel free to use the PostCSS import alternative instead.
Which is almost the same as the SCSS version, in use.

This guide will focus on the Sass setup.
And will show you a sample setup in a blank environment.

## Setup dependencies

First make sure to install Sass.
_If not already done so._

```bash
npm i -D sass
```

Add a script that will run your Sass styles;

```json
// package.json
{
  ...
  "scripts": {
    "start": "sass src/main.scss dist/main.css -s compressed --load-path=node_modules",
  },
  "devDependencies": {
    "sass": "^1.32.11",
  }
}
```

_Or run it via your own preferred tool, e.g. Gulp, Webpack or Rollup._

## Adding Fylgja components

This part can be done via a bundle or adding each component individual.

For this sample we are setting up a blog page.
But for making this demo a little easier, we will install Fylgja as one package instead.

```bash
npm i fylgja
```

## Loading the styles

Create a `src/main.scss`.

Add the following Fylgja components to your `src/main.scss`.

```scss
// src/main.scss
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

We will also add the `@fylgja/theme` component,
which is part of many Fylgja component as dependency and helper for color and spacer styles.

With this we can quickly edit the theme color for all of the Fylgja components,
without having to set it per Fylgja component we just imported.

## Building your CSS

This last step is the simple one.
Just run;

```bash
npm start # or `npm run start`
```

This will create a `main.css` in your dist folder.
Now you have a CSS file containing styles for a blog.

From here on you can extend or change many things to your liking;

 - Load other SCSS file to the `main.scss` or adjust Fylgja to your needs.
 - You can extend the compiler logic by adding PostCSS plugins.
   To extend or polyfill.
 - Optimize the CSS size by removing some styles your self.
   or by using tools, like PurgeCSS and CleanCSS.

