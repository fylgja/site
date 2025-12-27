---
title: "Autocomplete in your editor"
description: "Tips to make it even easier to work with Fylgja CSS in your editor"
---

Fylgja CSS is a CSS Library that simplifies the creation of beautiful and responsive websites.

To make it even easier to work with,
you can enable autocompletion for Fylgja CSS's features in your editor.

This will speed up your development process by suggesting CSS variables,
SCSS syntax, and more as you type.

Below are a few tips to get autocomplete working in your favorite editor:

> [!Tip]
> We primarily use VSCode for our development.
> If you have tips for other editors,
> please contribute by creating a pull request on our [GitHub repository](https://github.com/fylgja/site).

## CSS Variable Autocompletion (VSCode)

To enable autocompletion for CSS variables in VSCode, you can use the **CSS Variable Autocomplete** extension.

1. Install the extension [phoenisx.cssvar](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar).
2. Configure your editor to include Fylgja CSS's CSS variables from your `node_modules` folder:

```json
// .vscode/settings.json
{
  "cssvar.files": [
    "./node_modules/@fylgja/**/*.css"
    // Include your custom styles or variable files
    "./src/styles/variables.css"
  ],
  // Ensure node_modules is not excluded by the autocomplete
  "cssvar.ignore": []
}
```

You can also specify paths to individual Fylgja CSS component files if preferred.

For more configuration options, refer to the [extension documentation](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar).

## SCSS IntelliSense (VSCode)

If you're working with SCSS, the **SCSS IntelliSense** extension enhances your coding experience by offering:

- Full support for `@use` and `@forward`, including aliases, prefixes, and hiding.
- Rich documentation through SassDoc.
- Suggestions and hover information for built-in Sass modules when used with `@use`.

1. Install the extension [somewhatstationery.some-sass](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass).
2. Configure IntelliSense for SCSS in your editor by allowing it to scan the `node_modules` folder:

```json
// .vscode/settings.json
{
  "somesass.scannerExclude": [".git/**", "./node_modules/**!(@fylgja)"],
  // Recommended setting if you rely on @use instead of @import
  "somesass.suggestFromUseOnly": true
}
```

For more configuration options, refer to the [extension documentation](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass).
