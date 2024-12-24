---
title: "Autocomplete in your editor"
description: "Tips to make it even easier to work with Fylgja in your editor"
---

Fylgja is a CSS framework that makes it easy to create beautiful and responsive websites. But it can be even easier to use Fylgja if you have autocomplete in your editor.

Here are a few tips to get autocomplete working in your favorite editor:

> We use VSCode mainly for our own coding,
> but if you have tips for other editors please share your tips,
> by creating a pull request on [github.com/fylgja/site](https://github.com/fylgja/site)

## CSS Variable Autocompletion (VSCode)

This extension adds autocompletion for CSS variables.

Install the extension [phoenisx.cssvar](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar),
and configure your editor to allow autocompletion from the node modules folder;

```json
// .vscode/settings.json
{
  "cssvar.files": [
    "./node_modules/fylgja/fylgja.css",
    // Your styles folder
    "./src/styles/variables.css"
  ],
  // Do not ignore node_modules css files, which is ignored by default
  "cssvar.ignore": []
}
```

_Or use the specific Fylgja component path._

[For more config options see the extension docs](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar).


## SCSS IntelliSense (VSCode)

This extension adds IntelliSense for SCSS with;

- Full support for `@use` and `@forward`, including aliases, prefixes and hiding.
- Rich documentation through SassDoc.
- Suggestions and hover info for built-in Sass modules, when used with `@use`.

Install the extension [somewhatstationery.some-sass](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass),
and configure your editor to allow IntelliSense from the node modules folder;

```json
// .vscode/settings.json
{
  "somesass.scannerExclude": [".git/**", "./node_modules/**!(@fylgja)"],
  // Recommended if you don't rely on @import
  "somesass.suggestFromUseOnly": true
}
```

[For more config options see the extension docs](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass).
