---
title: "Sass Extend"
pageTitle: "Fylgja Sass Extend"
description: "Add more super powers to your Sass project."
npm: "@fylgja/sass"
git: "https://github.com/fylgja/fylgja-sass"
---

Add more super powers to your Sass project.

This repo will add more functions and adds options not found in the core sass project.

## Installation

```sh
npm install @fylgja/sass
```

## How to use

Since this is a Sass function library it require only usages where it is needed.

So if you need to string replace something.

Then include the specific sass typed function via;

```scss
@use "@fylgja/sass/string" as str;

.str-replace {
    content: str.replace("Hello World", "World", "🌍");
}
```

We advice to use the library with a prefixed `@use`.
Similar to an `@use "sass:string"`.

This package offers the following functions.

| Function Name  | Type   | Description                                       |
| -------------- | ------ | ------------------------------------------------- |
| luminance      | color  | Calculate the luminance for a color               |
| contrast-ratio | color  | Calculate the contrast ratio between two colors   |
| contrast       | color  | Sets an dark or light color based on the contrast |
| gray           | color  | Get a specific gray based an a given precentage   |
| nth-side       | list   | Extract value based on shorthand sizing property  |
| negative       | map    | Converters a map with units to a negative units   |
| strip-unit     | math   | Removes the unit (e.g. px, em, rem) from a value  |
| replace        | string | Replace part of a string with new value           |
| url-encode     | string | Encode Unsafe urls to safe urls                   |
| svg-url        | string | Use SVG anywhere as dataUri (inline background)   |
