---
title: "Input-group"
description: "The input group extends upon the `@fylgja/form`.
By providing a wrapper that allows for more complex form field styles."
npm: "@fylgja/input-group"
git: "components/input-group"
codepen: "mdwOgJV"
tags: ["layouts", "forms"]
preview: "input-group.png"
style: {
    input-group: "../../node_modules/@fylgja/input-group/input-group.css"
}
---

The input group extends upon the `@fylgja/form`, 

by providing a wrapper that allows for more complex form field styles,

like a search bar with button in the same form field.

## Installation

```bash
npm install @fylgja/input-group
```

Then include the component in to your code via;

```scss
@use "@fylgja/input-group";
// Or via PostCSS import
@import "@fylgja/input-group";
```

### Styles

By default the form style is set to our default style.

To use the **field** or **box** style.
Change the variable `$input-group-style`.
To one of the options, via;

```scss
@use "index" with ($input-group-style: box);
```

Or if you are a importing this as plain CSS in PostCSS or any other option.
Import the style directly via;

```css
@import "@fylgja/input-group/field.css";
/* Or */
@import "@fylgja/input-group/box.css";
```

_For versions older than v1.2 use `style-{field|box}.css`_

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/input-group" with ($input-group-layer: "components");
// Or via PostCSS and other options as native CSS
@import "@fylgja/input-group" layer(components);
```

## How to use

The input group allows you to build simple things,
like a search form with a submit button in the same form field.

{% codeSample %}
<div class="input-group">
    <input type="search" name="search" />
    <button class="btn -icon">
        <span class="aria-only">Search</span>
        <svg width="24" height="24" fill="currentcolor"><use href="/images/sprite.svg#search"/></svg>
    </button>
</div>
{% endcodeSample %}

To more complex things.

The main focus is that you have the freedom to add anything,
so down here are all the classes that you have to your disposal.

### Input group

The main component and required for this component to do anything.
Simply create a wrapper element with this class and everything is a input child.

### Input extra & Input icon

The child components for just rendering child form elements, text or an icon.

The `.input-extra` can act as many things.
But its main focus is the flex-shrink style.
So this element will fit nicely next to the main form element.

The `.input-extra` can also be used for custom elements,
like Checkboxes.

The `.input-icon` is the same.
Except one thing.
It will also receive the focus color when any form element has focus.

## Config

The `@fylgja/input-group` inherits all of its variable values,
from the `@fylgja/form` component.

So for what each variable you can do.
See the the doc from the `@fylgja/form` component.

Or override it directly.
Via the variables found down here;

```scss
$input-group-style: default !default;
$input-group-styles: (
    field: (
        padding: 0.375em 1px,
        border-width: 0 0 1px,
        border-style: solid,
        border-color: currentcolor,
        radius: 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: transparent,
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 3px 3px 0 0
    ),
    box: (
        padding: 0.375em 0.625em,
        border-width: 0 0 1px,
        border-style: solid,
        border-color: currentcolor,
        radius: 4px 4px 0 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: if($root-fg == #000, #eee, #222),
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 4px 4px 0 0
    )
) !default;
$input-group-styles: map.merge($input-group-styles, $form-styles);

$input-group-border-width: $form-border-width !default;
$input-group-border-style: $form-border-style !default;
$input-group-border-color: var(--form-stroke, #{$form-border-color}) !default;
$input-group-radius: var(--form-radius, #{$form-radius}) !default;
$input-group-bg: var(--form-bg, #{$form-bg}) !default;
$input-group-color: var(--form-color, #{$form-color}) !default;
$input-group-focus-color: $form-focus-color !default;
$input-group-focus-style: $form-focus-style !default;
```
