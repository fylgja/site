---
title: "Fylgja Code and Style Guidelines"
description: "Best practices and naming conventions at Fylgja"
thumb: "guide-thumb/css-awesome.jpg"
order: 8
---

At Fylgja, we prioritize clean, efficient,
and consistent code practices to enhance readability and maintainability across our projects.

## Embracing Single Layered Styles for Multi-Layered Components

At Fylgja, we embrace the concept of single layered styles, aiming to minimize the use of nested classes.
By leveraging the power of CSS inheritance, we ensure a more organized and streamlined codebase.

For instance, consider our table component and compare it to other table styles.
While typical implementations involve nested class structures for elements like `td` element.

```css
table tr > td {
    border-color: #ccc;
}
```

In the Fylgja style, often using CSS variables, you will find a more concise structure:

```css
table {
    border-color: #ccc;
}

td {
    border-color: inherit;
}
```

Our approach aims to establish a more generic style definition that inherits properties from parent elements when present.

This strategy facilitates easy overrides for specific styles,
without the need for extensive CSS nesting.

Though it may initially appear to be more CSS code,
this approach proves efficient as you add new custom styles,
minimizing the volume of code required to achieve customization.

This principle can be applied to both native HTML elements and custom CSS components,
particularly when integrated with CSS variables for even more flexibility 🤗

## Finding Harmony: A Mix of CSS Components and Utilities

Here at Fylgja, we're all about offering a dynamic mix of CSS Components and Utilities, understanding that there's no one-size-fits-all rule in the world of CSS. Our goal is to make the most of CSS's capabilities while keeping our HTML code tidy and organized.

- **CSS Components:** Opt for CSS Components when you're looking to reuse styles across your website. They help maintain a consistent look and speed up development.

- **CSS Utilities:** Embrace CSS Utilities for specific, targeted styling needs. They're perfect for tackling individual style requirements efficiently and are easy to create specific layouts without adding new custom styles.

- **Inline Styles:** When you have unique styles that don't quite fit with CSS Components or Utilities, go for inline styles. If possible, consider expanding them with CSS Props (CSS variables). This enhances flexibility and makes maintenance easier.

Our philosophy is all about flexibility and adaptability. By combining different CSS techniques, we empower developers to craft engaging, efficient, and responsive web designs.

## Our approach for Component Modifiers

To enhance clarity when adding extra classes for style overrides,
we employ a naming convention for class modifiers.

This convention distinguishes classes intended to modify the main class by adding a hyphen prefix:

```css
.class.-clipped { .. }
```

This clear distinction signifies that the class serves to modify styles within a CSS component.
A common example of this convention is the widely used `.-theme` class modifier,
which applies color-themed styles to supporting components.

For instance, consider a button toolbar implementation:

```html
<div class="flex">
    <button class="btn -theme">Submit</button>
    <button class="btn -outline">Cancel</button>
</div>
```

The two modifier styles are easily recognizable and deliver the same effect as the BEM syntax with the additional btn prefix for the modifier class.

This naming convention simplifies the bundling of CSS variables into a reusable class,
promoting readability and adhering to the DRY (Don't Repeat Yourself) principle.

## Linting with our stylelint-config

To ensure code uniformity and adherence to our style guide,
we provide a comprehensive Stylelint configuration.
Our configuration is compatible with both SCSS and CSS syntaxes,
offering insights into our preferred CSS formatting practices.

If you're interested in delving deeper into our CSS formatting guidelines,
feel free to explore our [Stylelint config package](/components/stylelint-config/).

By following these guidelines,
we aim to create a unified and streamlined development process that results in maintainable,
efficient,
and visually appealing code.
