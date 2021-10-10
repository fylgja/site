---
title: "Style and code guide"
description: "How we write our code and name it"
thumb: "guide-thumb/css-awesome.jpg"
---

At Fylgja we use specific style and code guides, we try to follow where possible.

There are always exceptions, we try to keep them to a minimal.

Style and code guides are not specific to Fylgja and be used at large.

## Single layered styles for multi layered Components

Fylgja uses the concept of single layered styles.
This means that we try to avoid any styles set via nested classes.

We use the power of inheritance of CSS as much as we can.

A good example is our table component vs other table styles.
In most cases you will see this type of style for a `td` element.

```css
table tr > td {
    border-color: #ccc;
}
```

In Fylgja you will find it like this, _Mostly with CSS variables_;

```css
table {
    border-color: #ccc;
}

td {
    border-color: inherit;
}
```

What we do is set the style as generic as possible,
and inherit the styles from the parent element if it exists.

This allows you to override any styles via the `table` or `td`,
without having to write the entire CSS level of dept.

At first this looks as more CSS,
but actually it saves you bytes as you add new custom styles, 
since you can use 1 class to override every style set by the component.

This principle can be used for Native elements and CSS components,
and gets even better if you add CSS variables 🤗

## CSS class variables (class modifier)

This convention helps us name things when we need to ad extra classes to our components,
to override specific styles,
it clearly shows that it's a class to change the main class.

example;

```css
.class.-clipped { .. }
```

The only change is adding a hyphen in front of any class
that will just change styles from a CSS Component.

Our most commonly used class variable is `.-theme`.
It will add the color-theme styles to any component that supports this.

Practical example of a button toolbar;

```html
<div class="flex">
    <button class="btn -theme">Submit</button>
    <button class="btn -outline">Cancel</button>
</div>
```

The 2 modifier styles are clearly visible, and have the same affect as if you would use BEM syntax
with the extra btn in front of the modifier class.

We use this naming convention mostly to bundle CSS variables in to one class,
that wil be reused a lot. We consider this a more readable and DRY way.

## Stylelint config

We also ship with a config for Stylelint.
Works both for SCSS and CSS syntaxes.
So if your interested in knowing more about our CSS formatting,
[checkout our Stylelint config package](/components/stylelint-config/).
