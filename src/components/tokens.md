---
title: "Tokens"
description: "A collection of all Fylgja tokens offered for specific design tools or frameworks."
npm: "@fylgja/tokens"
git: "components/tokens"
tags: ["tokens", "addons"]
preview: "theme.png"
---

A collection of all Fylgja tokens offered for specific design tools or frameworks.

## Installation

You can add Fylgja Tokens in a variety of ways.
However, the two choices are typically through a CDN or with NPM.

### Design tools (e.g. Sketch or Figma)

For design tools use the CDN link as entry,
or download the tokens trough the github repo.

These tokens can be used with any design tool that follows the new [design tokens specification](https://design-tokens.github.io/community-group/format/).

```
https://unpkg.com/@fylgja/tokens/fylgja.tokens.json
```

These tokens are specific for [Figma compatibility](https://github.com/six7/figma-tokens);

```
https://unpkg.com/@fylgja/tokens/fylgja.figma-tokens.json
https://unpkg.com/@fylgja/tokens/fylgja.figma-tokens.sync.json
```

### Javascript token based systems like Tailwind

```bash
npm install @fylgja/tokens
```

Afterward, include the tokens into your code using;

```js
const props = require("@fylgja/fylgja.tokens.json"); // cjs
// Or
import props from "@fylgja/fylgja.tokens.json"; // mjs
```

These tokens are specific for Tailwind compatibility:

```js
const props = require("@fylgja/fylgja.tailwind.json"); // cjs
// Or
import props from "@fylgja/fylgja.tailwind.json"; // mjs
```

## How to use

This depends on your tool of choice.

But each token that is offered by Fylgja can be found here as 1 file.

See the [Fylgja Components](https://fylgja.dev/components/) for all CSS Props (Design Tokens),
to see what is includes here.
