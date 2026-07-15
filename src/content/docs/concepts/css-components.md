---
title: "CSS Components"
description: "CSS Components are a traditional method for building UI elements using a minimal number of classes"
sortOrder: 20
faq:
  - question: What does "No Overlapping Child Classes" mean in practice?
    answer: It means a component like .card won't rely on separate child classes
      such as .card__body or .card-header that duplicate naming across
      components. Fewer, more predictable class names to remember.
  - question: If components have low specificity, can utilities always override them?
    answer: Yes, that's the intent. CSS Components are kept close to single-class
      specificity so that CSS Utilities (like those in @fylgja/utilities) or
      your own custom classes can modify or extend them without needing
      !important.
  - question: Are Fylgja's CSS Components the same as component libraries in React/Vue?
    answer: No, these are pure CSS components (a class or a couple of classes plus
      markup conventions), not JavaScript UI components. You can use them with
      any framework, or with no framework at all.
---

CSS Components are a traditional method for building UI elements using a minimal number of classes.

This approach makes it easy to create attractive elements with little effort.

However, a common downside is that these components often look the same across different projects
and can be difficult to customize.

At Fylgja CSS, we aim to improve the concept of CSS Components by addressing these limitations.

We combine the principles of **CSS Utilities** and **Class-less CSS** to offer more flexible
and customizable components without compromising simplicity or efficiency.

## Fylgja CSS's Approach to CSS Components

We follow key guidelines to make our CSS Components more versatile and easy to work with:

- **Single Purpose**: Each CSS Component serves a single purpose, focusing on one task or element.
- **No Overlapping Child Classes**: Components do not rely on child classes with the same name,
  reducing unnecessary complexity.
- **Low Specificity**: The specificity of CSS Components remains close to a single class,
  ensuring they are easy to override.
- **Utility-Compatible**: CSS Components can be modified or extended using CSS utilities,
  allowing for more flexibility.
- **Easy Customization**: While CSS Components can contain complex styles,
  they remain customizable via CSS variables, making modifications straightforward.

By following these principles, Fylgja CSS's CSS Components strike a balance between simplicity,
flexibility, and customization, making it easy to build unique,
well-designed UI elements without repetitive patterns or excessive specificity.
