---
title: "Default setup"
description: "The default setup via SCSS"
thumb: "guide-thumb/sass.jpg"
---

Fylgja does not need a framework or specific tools to work.
Giving you the freedom on how to use Fylgja in project.

By default we advice the [Dart Sass](https://sass-lang.com/dart-sass) setup.
But feel free to use the CSS alternative instead.

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
Using each package as separate dependency.

```bash
# Adding Typography Components
npm i @fylgja/base @fylgja/details @fylgja/table @fylgja/list
# Adding Element Components that are common in a blog
npm i @fylgja/breadcrumbs @fylgja/pagination @fylgja/avatar @fylgja/button
# Adding Layout helpers
npm i @fylgja/container @fylgja/section @fylgja/card
# Adding utils to help out with specif spacing and other logic
npm i @fylgja/utilpack @fylgja/hashlink
```

> This will also be available via bundles like `npm i @fylgja/blog`.
> That does the same thing as above. But via 1 command.

## Loading the styles

Create a `src/main.scss`.

Add each package that you just installed to the `src/main.scss`.

Also add the `@fylgja/theme` component.
That is part of many packages as dependency.
This will allow you to set theme specific colors and/or spacers, 
that you want to change.
Each variable that you change will also effect the dependents of the `@fylgja/theme`.
So you don't have to change each components variables.

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

