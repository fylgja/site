---
title: "Dynamic CSS Utility"
description: "Dynamic CSS Utilities are designed to be flexible and customizable through CSS variables"
---

Dynamic CSS Utilities are designed to be flexible and customizable through CSS variables.

With Fylgja Utilities, our goal is to avoid creating separate utilities for every possible spacing size or variation.

Instead, each utility is focused on performing one task, while the actual values can be customized through CSS variables,
or combined with other CSS Components and Utilities.

### Benefits

This approach keeps your CSS lightweight and flexible, as you're not tied to specific, hard-coded values.

You can easily adjust values without needing to create or import new classes for every scenario.

### Basic Example

One of the simplest ways to use Dynamic CSS Utilities is by setting values directly with inline styles. For example:

```html
<div class="auto-grid" style="--max-cols-size: 15ch">..</div>
```

In this example, the `--max-cols-size` variable controls the max size of each column,
and the value can be customized for each instance.

### Customizing with Predefined Utilities

If you prefer to avoid inline styles and use predefined classes,
you can also define your own utilities in your stylesheet. Here's an example:

```html
<div class="auto-grid grid-size-lg">..</div>
```

In this case, the class `grid-size-lg` is linked to a predefined value in your stylesheet,
making the grid size consistent and reusable throughout your project.

### Flexibility and Scalability

In our experience, the inline style method scales well, as it scopes styles to specific content on the page.

However, we recognize that styling preferences vary, and with Fylgja Utilities, the choice is yours.

### Advanced Example: Margin Utilities

Let's look at a more advanced example, comparing Fylgja's method for setting margins with the traditional CSS Utility approach.

```html
<div style="--my: 1rem; --lg_my: 2rem">..</div>
<!-- vs -->
<div class="my-4 lg:my-8">..</div>
```

With Fylgja's method,
margin values for different breakpoints (e.g., `--my` for mobile and `--lg_my` for larger screens) are already set via CSS variables,
without the need to generate specific utility classes for each value. 

In contrast, the traditional method requires generating separate classes like `my-4` and `lg:my-8` for each margin size and breakpoint,
leading to larger CSS files.

### Key Advantages

- **No CSS Bloat**: The size of your CSS remains compact, as you're not generating a new class for every possible combination of values.
- **Integration with CSS Tokens**: You can easily use these utilities with any CSS token system,
  whether it's Fylgja's own tokens or popular ones like [Open Props](https://open-props.style/).

By using this dynamic approach, you gain all the benefits of traditional utilities,
but with more flexibility and significantly less code overhead.
