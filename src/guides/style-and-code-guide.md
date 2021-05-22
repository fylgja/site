---
title: "Style and code guide"
description: "The way how we write our code and name it"
thumb: "guide-thumb/css-awesome.jpg"
---

At Fylgja we use specific style and code guides.
That we try to follow when possible.
There are always exceptions.
But we try to keep this to a minimal.

Theses style and code guides are not specific to Fylgja and can be also used by any one.

## Single layered styles for multi layered Components

Fylgja uses the concept of single layered styles.
This means we try to avoid any styles set via nested classes.
So we use the power of inheritance of CSS as much as we can.

A good example is our table component vs other table styles.
In most cases you will see this type of style for a `td` element.

```css
table tr > td {
    border-color: #ccc;
}
```

In Fylgja you will find it like this, _Normally with CSS variables_;

```css
table {
    border-color: #ccc;
}

td {
    border-color: inherit;
}
```

What we do is set the style as generic as possible.
And inherit the styles from the parent element if it exists.
This allows you to override any styles via the `table` or `td`.
Without having to write the entire CSS level of dept.

At first this looks as more CSS, 
but actually save you bytes as you add new custom styles.
Since you can use 1 class to override every styles set by the component.

This principal can be used for any Native elements and CSS components.
And gets even better if you add CSS variables 🤗

## CSS class variables (class modifier)

This little convention helps us name things when we need a extra classes to our component, 
to override specific styles.
Which will clearly show that this a class to changes stuff for main class.

Sample;

```css
.class.-clipped {}
```

The only thing we change is adding a hyphen in front of any class
that will just change styles from a CSS Component.

Our most common class variables is `.-theme`.
This will add the color-theme styles to any component that supports this.

More practical sample of a button toolbar;

```html
<div class="flex">
    <button class="btn -theme">Submit</button>
    <button class="btn -outline">Cancel</button>
</div>
```

As you can see the 2 modifier styles are clearly visible.
And has the same affect as if you would use BEM syntax
with the extra btn in front of the modifier class.

We use this naming convention mostly to bundle CSS variables in to one class.
That is needed to be reused allot.
