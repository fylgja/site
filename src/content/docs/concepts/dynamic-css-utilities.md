---
title: "Dynamic CSS Utilities"
description: "Dynamic CSS Utilities in Fylgja are designed to be flexible and customizable through the use of CSS variables"
---

Dynamic CSS Utilities in Fylgja are designed to be flexible and customizable through the use of CSS variables.

Instead of creating separate utilities for every possible variation (e.g., spacing sizes),
each utility serves a single purpose,
while the actual values are customizable via CSS variables
or combined with other CSS Components and Utilities.

## Benefits

This approach keeps your CSS lightweight and flexible,
ensuring you're not tied to predefined, hard-coded values.

It also allows you to adjust values easily without needing to create
or import new classes for every possible scenario,
making your styles reusable and adaptable.

## Basic Example

One of the simplest ways to use Dynamic CSS Utilities is by setting values directly via inline styles.

Here's an example:

```html
<div class="auto-grid" style="--max-cols-size: 15ch">...</div>
```

In this example, the `--max-cols-size` variable controls the maximum size of each column,
and the value can be customized on a per-instance basis.

## Customizing with Predefined Utilities

If you prefer not to use inline styles,
you can define your own utilities in your stylesheet and apply them with predefined classes.

For example:

```html
<div class="auto-grid grid-size-lg">...</div>
```

Here, the class `grid-size-lg` corresponds to a predefined value in your stylesheet,
allowing for consistent and reusable grid sizing throughout your project.

## Flexibility and Scalability

The inline style method scales well as it scopes styles to specific content.

However, we understand that preferences vary,
and Fylgja Utilities give you the flexibility to choose the method that best fits your needs.

## Advanced Examples

### Margin Utilities

Let’s compare Fylgja’s approach to setting margins with the traditional CSS utility method:

```html
<div style="--my: 1rem; --lg_my: 2rem">...</div>
<!-- vs -->
<div class="my-4 lg:my-8">...</div>
```

With Fylgja’s method, margin values for different breakpoints
(e.g., `--my` for mobile and `--lg_my` for larger screens) are set using CSS variables,
eliminating the need for specific utility classes for each size and breakpoint.

In contrast, the traditional method requires generating separate classes (e.g., `my-4` and `lg:my-8`),
which can lead to larger CSS files.

### Integrating with PHP, JavaScript, or Other Languages

Another advantage of Fylgja’s Dynamic CSS Utilities is that CSS values can be accessed
and manipulated by server-side or client-side languages,
like PHP or JavaScript. For example, setting a CSS variable dynamically via PHP:

```html
<div class="auto-grid" style="--max-cols-size: <?= $productMaxGridSize ?>">...</div>
```

In other frameworks, you'd typically have to manually define such dynamic behavior,
but with Fylgja,
CSS variables provide built-in flexibility to interact with other languages without extra overhead.

## Key Advantages

- **No CSS Bloat**: Since you're not generating a new class for every combination of values, your CSS file remains compact and efficient.
- **Integration with CSS Tokens**: Fylgja's utilities are fully compatible with any CSS token system, whether you use Fylgja's own tokens or popular ones like [Open Props](https://open-props.style/).

By leveraging this dynamic approach, you get the power and convenience of traditional utilities, but with greater flexibility and significantly less code overhead.
