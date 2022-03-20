---
title: "Props Builder"
description: "Build your own CSS props a.k.a Design Tokens, with ease."
# npm: "@fylgja/text"
git: "components/props-builder"
tags: ["addons"]
preview: "theme.png"
eleventyExcludeFromCollections: true
---

Build your own CSS props a.k.a Design Tokens, with ease.

> This package is mainly used for our own CSS props components,
> but also available to any one that wants to build there own CSS props.

## Installation

```bash
npm install @fylgja/props-builder
```

## How to use

This is a Javascript function and is used in combination with your own Javascript build file.

First create an javascript file, for example `build.js`

import the props builder in your build js;

```js
import { propsBuilder } from "@fylgja/props-builder";
```

and call it with at least a filename and some props;

```js
const spacers = {
    "size-1": "0.5em",
    "size-2": "1em",
    "size-3": "1.5em",
};

propsBuilder({
    filename: "spacers.css",
    props: spacers
});
```

Now you have a css file with your own spacers;

```css
/* File: spacers.css */
:root {
    --size-1: 0.5em;
    --size-2: 1em;
    --size-3: 1.5em;
}
```

### Tweak the build options

Lets say you want a different parent class, or you want a prefix,
you can do so, by using the available options.

Each option is visible if your using an IDE that supports JSDoc or/and Typescript.

But here are the options,
just in case if you don't have an editor with those super powers.

| Option        | Type                                  | default   |
| ------------- | ------------------------------------- | --------- |
| filename      | string                                | ...       |
| props         | { `[key: string]`: string \| number } | ...       |
| selector      | string                                | `":root"` |
| prefix        | string                                | `""`      |
| varOnly       | boolean                               | `false`   |
| varSyntax     | string                                | `"--"`    |
| frameOnly     | boolean                               | `false`   |
| keepCamelCase | boolean                               | `false`   |


