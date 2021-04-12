---
title: "Utilpack"
description: "Build and use your own CSS util classes with Sass via the Fylgja utilpack."
tags: ["utils", "utilpack"]
preview: "utilpack.png"
featured: true
order: 1
---

Build and use your own CSS util classes with Sass via the Fylgja utilpack.

## Installation

```bash
npm install @fylgja/utilpack
```

And include the component in to your code via;

```scss
@use "@fylgja/utilpack";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/utilpack/utilpack.css";
```

## How to use

The util pack out of the box comes with some common used util classes.
That can be used directly.
See the docs for what is available or see the defaults <!-- LINK -->.

## Config

If you want to add or configure the util classes to your own taste.
Look no further, down here.

### Adding util classes

Change the SCSS variable `$utilpack()`.
And use one of the following sample use cases in this map.

> By default the key will be used with the value for the class name.
> If you want to change this behavior make use of the prop `class`
> and add a key to the value.
> As seen below.

**Simple Sample**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right left
    )
));
// Output =
// .text-align-right{ text-align:right; }
// .text-align-left{ text-align:left; }
```

**Sample with number/key values**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "font-weight": (
        "values": (
            "normal": 400,
            "bold": 700
        )
    )
));
// Output =
// .font-weight-normal{ font-weight:400; }
// .font-weight-bold{ font-weight:700; }
```

**Sample with class**

If you want to use different value for the class.
Than what the util key name is.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "class": "text",
        "values": right left
    )
));
// Output =
// .text-right{ text-align:right; }
// .text-left{ text-align:left; }
```

**Sample with property**

If you want to use different value for the property.
Than what the util key name is.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "flex-fill": (
        "property": "flex",
        "class": "flex",
        "values": (
            "fill": 1 1 auto
        )
    )
));
// Output = .flex-fill{ flex:1 1 auto; }
```

**Sample responsive**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "responsive": true
    )
));
// Output =
// .text-align-right{ text-align:right; }
// @media(min-width: 768px){.md-text-align-right{ text-align:right; }}
```

**Sample print**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "print": true
    )
));
// Output =
// .text-align-right{ text-align:right; }
// @media print{.md-text-align-right{ text-align:right; }}
```

**Sample important**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "important": true
    )
));
// Output = .text-align-right{ text-align:right !important; }
```

**Sample with states (e.g. focus, hover, etc)**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "states": hover focus
    )
));
// Output =
// .focus-text-right:focus,
// .hover-text-right:hover,
// .text-right{ text-align: right; }
```

### Changing the default util classes

You can start fresh by setting the default utils map to false or an empty map.

```scss
@use "@fylgja/utilpack" with (
    $utilpack-defaults: false
);
```

Or unset a specific default, like the typography.

```scss
@use "@fylgja/utilpack" with (
    $utilpack-defaults-typography: false
);
```

You can also quickly edit certain default settings without changing the config.
This can be done via the;

```scss
$enable-utilpack-UTIL-responsive: false;
$enable-utilpack-UTIL-print: false;
$enable-utilpack-UTIL-important: false;
// Sample:
$enable-utilpack-typography-responsive: true;
```

If you want to edit any values in the defaults, not mentioned above.
You can also map merge your own values in the default utils map.
{% extLink "See the Sass docs for how to use map merge", "https://sass-lang.com/documentation/modules/map" %}.

### Breakpoints

The response mode will use the breakpoint values set in the map `$utilpack-breakpoints`.
This by default;

```scss
$utilpack-breakpoints: (
    "xs": 420px, // Mobile larger
    "sm": 640px, // Tablet
    "md": 768px, // Tablet large
    "lg": 1024px, // Laptop
    "xl": 1440px // Desktop
) !default;
```

The key will be used as the prefix name for the util.
And the value is always the min-width media query.

```css
@media (min-width: 420px) {
    .xs-text-bolder {
        font-weight: bolder;
    }
}
```

It will use the hyphen as default separator.

But if prefer the same separator as seen in TailwindCSS.
You can by changing the `$utilpack-separator: "\:"`. 

_The Tailwind separator can conflict with specific tools and linters._
_Since it uses specific characters that are normally marked as unsafe._

## FAQ

<details class="faq-panel" open><summary>Do I need CSS Purge?</summary>

If you are using the CSS version instead the SCSS.
Then yes, for sure.

If you are using the SCSS version.
Use the map remove function instead.
Keeping your dependencies small.

But if you plan to use this for all of your CSS needs, similar to TailwindCSS.
Then yes use it.
But we do advice against a utility only approach.
Always combine it with CSS components for a better HTML and CSS.

</details>

<details class="faq-panel"><summary>Why are there no colors utils?</summary>

We advices to use CSS variables for color management.

If you want to use utils for almost everything.
Consider adding the following utilpack config.

Instead using static colors.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "color": (
        "values": (
            "theme": "var(--color-theme)",
            "accent": "var(--color-accent)"
        )
    )
));
```

</details>

<details class="faq-panel"><summary>Why are there no grid utils?</summary>

Most grid solution still rely on the older grid solution, like 12 columns.
But now use CSS grid spec instead.
This is considered a bad solution for the way how we handel layouts.
And creates still a lot of 1 time uses, even with utilities.

If you must really rely on a util class.
We would advise to use our own CSS grid component to make your own.
That uses CSS variables instead.
Or use the `@fylgja/autogrid`.
Which fully uses the power of CSS variables and the grid spec.

</details>
