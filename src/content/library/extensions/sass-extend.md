---
title: "Sass Extend"
pageTitle: "Fylgja Sass Extend"
description: "Add more super powers to your Sass project."
npm: "@fylgja/sass"
git: "https://github.com/fylgja/fylgja-sass"
sortOrder: 30
faq:
  - question: How do I import just one function, like contrast-ratio?
    answer: 'Import the module named after its Type column, not the function itself.
      For example, contrast-ratio, contrast, gray, and luminance are all in the
      color module: @use "@fylgja/sass/color" as color;, then call
      color.contrast-ratio.'
  - question: Do these functions have default values for their optional parameters?
    answer: 'Yes. For example, contrast defaults to $dark: #000, $light: #fff,
      $font-size: 16px, $ratio: "AA", and gray defaults to $strength: 50%. Pass
      only the arguments you want to override.'
  - question: Does this require Dart Sass, or does it work with the older node-sass?
    answer: Since the library is used via the modern @use module system (rather than
      @import), it requires Dart Sass. Legacy node-sass-based toolchains that
      only support @import aren't compatible.
  - question: Why do you recommend a prefixed @use instead of a wildcard import?
    answer: Using @use "@fylgja/sass/string" as str; namespaces the functions
      (str.replace), avoiding naming collisions with your own Sass
      functions or other libraries. It's the same reasoning behind namespacing
      Sass's own built-in modules like sass:string.
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

| Function Name  | Type   | Description                                        | Example                                                    |
| -------------- | ------ | --------------------------------------------------- | ----------------------------------------------------------- |
| luminance      | color  | Calculate the luminance for a color                  | `color.luminance(#2196f3)`                                   |
| contrast-ratio | color  | Calculate the contrast ratio between two colors      | `color.contrast-ratio(#fff, #2196f3)`                        |
| contrast       | color  | Sets a dark or light color based on the contrast     | `color.contrast(#2196f3, $font-size: 34px)`                  |
| gray           | color  | Get a specific gray based on a given percentage      | `color.gray(10%)`                                            |
| nth-side       | list   | Extract value based on shorthand sizing property     | `list.nth-side(10px 11px 9px, right)`                        |
| negative       | map    | Converts a map with units to negative units          | `map.negative(("1": 0.875em, "2": 1em), $change-key: true)`  |
| strip-unit     | math   | Removes the unit (e.g. px, em, rem) from a value     | `math.strip-unit(1.5em)`                                     |
| replace        | string | Replace part of a string with a new value            | `str.replace("Hello World", "World", "🌍")`                  |
| url-encode     | string | Encode unsafe URLs to safe URLs                      | `str.url-encode('<svg>...</svg>')`                           |
| svg-url        | string | Use SVG anywhere as a dataUri (inline background)    | `str.svg-url('<svg viewBox="0 0 24 24"><path d="M12 2 2 12 12 22 22 12z"/></svg>')` |
