---
title: "Print"
description: "Print component will add solid foundation for printing."
npm: "@fylgja/print"
git: "components/print"
tags: ["print", "typography"]
preview: "print.png"
---

Print component will add solid foundation for printing.

## Installation

```bash
npm install @fylgja/print
```

Then include the component in to your code via;

```scss
@use "@fylgja/print";
// Or via PostCSS import
@import "@fylgja/print";
```

## How to use

No instruction are really needed.
The print styles are automatically added when loaded.

That said no site is the same.
And if you need more than this basis.
Then consider adding you own styles to improve on this basis.

## Config

Need to show color in printing.
Or don't like the link urls in your print.
You can do so via the following variables;

```scss
$enable-print-economic: true !default;
$enable-print-urls: true !default;
```
