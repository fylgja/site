---
title: "Stylelint Config"
pageTitle: "Fylgja Stylelint Config"
description: "Fylgja uses an opinionated Stylelint config to enforce its CSS rules across all of its projects."
npm: "@fylgja/stylelint-config"
git: "https://github.com/fylgja/stylelint-config"
sortOrder: 14
---

Fylgja uses an opinionated Stylelint config to enforce its CSS rules across all of its projects.

This config promotes consistency and readability in Fylgja's CSS code,
and helps to prevent errors and make the code easier to maintain.

## Installation

```sh
npm install @fylgja/stylelint-config --save-dev
```

## Usage

Set your Stylelint config to:

```json
{
  "extends": "@fylgja/stylelint-config"
}
```

## Extending the config

For advanced customization, you can extend the configuration by including a "rules" key in your settings.

This empowers you to either modify existing rules or introduce new ones.

For instance, if you wish to disable the selector-class-pattern rule,
incorporate the following code into your configuration:

```json
{
  "extends": "@fylgja/stylelint-config",
  "rules": {
    "selector-class-pattern": null
  }
}
```

## Syntax Support

Our configuration is intelligently tailored based on the file type,
ensuring the appropriate rules are applied automatically.

If your file is written in SCSS,
the SCSS rules will be seamlessly integrated alongside our default rules.

### SCSS

The Fylgja stylelint-config extends support for SCSS by incorporating [stylelint scss](https://github.com/stylelint-scss/stylelint-scss) and its standard rules.

While some rules are customized to align with our style guide,
the majority remains the same.

### TailwindCSS

Adds full compatibility with [TailwindCSS](https://tailwindcss.com/),
enabling you to freely utilize `theme()` and at-rules directly from TailwindCSS.

### Svelte

Adds full compatibility with [inline styles in Svelte](https://svelte.dev/docs/svelte-components#style),
ensuring seamless integration.

### Vue

Adds full compatibility with [inline styles in Vue](https://vuejs.org/api/sfc-css-features.html),
ensuring seamless integration.

### HTML, PHP, Astro, and More

The configuration effortlessly handles inline styles within HTML-based languages.

No additional rules are necessary,
and we've even incorporated support for camelCase custom properties without the need for extra directives when working with [Astro](https://docs.astro.build/en/guides/styling/#css-variables).

## Rules

To gain deeper insights into the behavior of each rule and its associated settings, refer to the following resources:

- [stylelint.io Rule Documentation](https://stylelint.io/user-guide/rules)
- [stylelint-scss Rule Documentation](https://github.com/stylelint-scss/stylelint-scss#list-of-rules)
