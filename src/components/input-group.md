---
title: "Input-group"
description: "The input group extends upon the @fylgja/form.
By providing a wrapper that allows for more complex form field elements.
Like a search bar with button in the same field."
npm: "@fylgja/input-group"
tags: ["layout", "forms"]
preview: "input-group.png"
---

The input group extends upon the `@fylgja/form`.
By providing a wrapper that allows for more complex form field styles.
Like a search bar with button in the same form field.

## Installation

```bash
npm install @fylgja/input-group
```

And include the component in to your code via;

```scss
@use "@fylgja/input-group";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/input-group/input-group.css";
```

### Styles

By default the form style is set to our default style.

To use the **field** or **box** style.
Change the variable `$form-style` in `@fylgja/form`.
To the other 2 options, via;

```scss
@use "@fylgja/form/helper" with ($form-style: box);
```

Or if you are a importing this as plain CSS in PostCSS or any other option.
Import the style directly via;

```css
@import "@fylgja/form/form-style-field.css";
/* Or */
@import "@fylgja/form/form-style-box.css";
```

## How to use

The input group allows you to build simple things.
Like a search form with a submit btn in the same form field.

```html
<form id="search-form">
    <label for="search">Search</label>
    <div class="input-group">
        <input type="search" name="search" />
        <button class="btn -icon" style="--btn-radius: 0;">
            <svg>..</svg>
        </button>
    </div>
</form>
```

And to more complex things.

The main focus is that you have the freedom to add anything.
So down here are all the classes that you have to your disposal.

### Input group

The main component and required for this component to do anything.
Simply create a wrapper element with this class.
And everything is a input child.

### Input extra & Input icon

The child components for just rendering child form elements, text or an icon.

The `.input-extra` can act as many things.
But is for its main focus is just like a flex-shrink class.
So that this element will fit nicely next to the main form element.
That will fill the `.input-group`.

The `.input-extra` can also be used for custom elements.

The `.input-icon` is the same.
Except one thing.
It will also receive the focus color when any form element has focus.

## Config

The `@fylgja/input-group` inherits all of its variables from the `@fylgja/form` component.
So for what you can change.
See the readme from the `@fylgja/form` component.
Or use the the CSS variables.
