---
title: "Font Face"
description: "Add fonts with ease, via the font-face mixin"
npm: "@fylgja/fontface"
git: "fylgja-fontface"
gitDomain: "https://github.com/fylgja/"
tags: ["plugins"]
preview: "font-face.png"
order: 21
---

The Fylgja font-face mixin makes it super easy to load fonts.

It will set all required settings for a good font-face automatically.
Which are still configurable if needed.

## Installation

```bash
npm i -D @fylgja/fontface
```

## How to use

Include the font-face package in to your code via;

Include the utilkit package in to your code via;

```scss 
@import "@fylgja/fontface"; // (DartSass, LibSass 3.6)
@import "@fylgja/fontface/index"; // old way
```

To load a font.
Call the font-face mixin.
Add your font name + suffix of the font.

_All the other steps will be created by the mixin automatically,_
_(See [config](#config))._

**Input:**

```scss
@include font-face("Roboto", "Bold Italic");
```

**Output:**

```css
@font-face {
  font-family: "Roboto";
  src:
    local("Roboto Bold Italic"),
    local("Roboto-BoldItalic"),
    url("../fonts/Roboto-BoldItalic.woff2") format("woff2"),
    url("../fonts/Roboto-BoldItalic.woff") format("woff");
  unicode-range: "U+0000—00FF";
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
```

## Config

There is no real config except the mixin options that you can pass per font.

Most options are filled in.
_if left to its default value._

For this reason it is better to call a specific option.
Instead changing the complete mixin options.
Until you've reached the option you need to change.

**Examples;**

Bad way:

```scss
@include font-face("Roboto", "Regular", 400, "U+0-10FFFF", "../assets");
```

Good way:

```scss
@include font-face("Roboto", "Regular", $path: "../assets");
```

| Options      | Default value      | Description                         |
| ------------ | ------------------ | ----------------------------------- |
| `$name`      |                    | Name of the font family             |
| `$suffix`    | _null_             | Suffix (e.g. Regular or Bold)       |
| `$styles`    | $suffix            | Styles (e.g. 700i or 700 italic)    |
| `$unicode`   | $u-latin           | Unicode range of the the font face. |
| `$path`      | '../fonts'         | Path to the font file               |
| `$file-name` | _null_             | File name of the font               |
| `$formats`   | local, woff2, woff | The file formats of the font-face.  |
| `$load`      | swap               | Loading option of the font          |

_If an option is NULL it will be filled in by the font-face defaults_

_If an option is missing. Plz leave a feature request._

## Tips

### Loop

You can load the entire Roboto font stack via a foreach loop.

```scss
$fonts-roboto: (
    "Light",
    "Light Italic",
    "Regular",
    "Italic",
    "Bold"
);
