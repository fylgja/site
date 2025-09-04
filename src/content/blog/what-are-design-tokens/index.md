---
title: "What Are Design Tokens, and Why Should You Care?"
tagline: "TODO"
description: "TODO"
publishDate: 2025-01-01
tags: ["design-tokens", "css props", "css variables", "css", "props-builder"]
---

As developers and designers, we've all been there. You're working on a new feature, and you need to use the brand's primary color. You open the inspector, find a button that looks right, and copy the hex code: `#3B82F6`. A week later, another developer does the same but samples it from a slightly different banner and gets `#3B83F7`.

Individually, these tiny inconsistencies are harmless. But they accumulate. Over time, your application's UI becomes a patchwork of "almost-right" values, leading to a messy user experience and a maintenance nightmare.

This is the problem that **Design Tokens** solve.

## What Exactly Are Design Tokens?

At their core, **design tokens are a methodology for managing your design decisions**. They are named entities that store the individual, low-level values of your design system, like colors, spacing, typography, and corner radii.

Think of them as variables for your design. Instead of hard-coding a value like `#3B82F6` directly in your CSS or UI component, you reference a token, for example, `color-brand-primary`.

These tokens are typically stored in a technology-agnostic format like JSON or YAML. A simple token file might look like this:

```json
{
  "color": {
    "brand": {
      "primary": "#3B82F6",
      "secondary": "#EC4899"
    },
    "text": {
      "base": "#1F2937",
      "subtle": "#6B7280"
    }
  },
  "font": {
    "family": {
      "sans": "Inter, sans-serif"
    },
    "size": {
      "base": "1rem",
      "lg": "1.125rem"
    }
  },
  "spacing": {
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem"
  }
}
```

This file becomes the **single source of truth** for your entire design system.

## Why Do They Matter?

Adopting a token-based approach might seem like extra work upfront, but it pays off massively by establishing a robust and scalable foundation for your UI.

### 🚀 Unbreakable Consistency

When every part of your application—from CSS styles to JavaScript components—references the same set of tokens, your UI becomes inherently consistent. If the brand's primary color ever needs to change, you update it in one place, and the change propagates everywhere automatically.

### 🤝 A Shared Language for Designers and Developers

Tokens bridge the communication gap between design and development. Designers can create their layouts in Figma or Sketch using tokens like `spacing-md`, and developers can implement the exact same token in the code. There's no more guesswork or manual value conversion.

### 🎨 Effortless Theming

Want to add a dark mode? Or support white-labeling for different clients? With design tokens, it's simple. You can create different token files for each theme. The application's structure remains the same; you just swap out the token values.

### A Familiar Face: Comparison to Tailwind CSS

If you've ever used a utility-first CSS framework like Tailwind, you're already familiar with the concept of design tokens, even if you didn't call them that.

The `theme` object in your `tailwind.config.js` file is essentially a design token system.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
    },
    // ...etc
  },
}
```

When you use a class like `bg-blue` or `p-1`, you are referencing a design token. The power of a dedicated design token system is that it decouples these decisions from a specific framework, allowing you to use them across any platform or technology you need.

## Bringing Tokens to Life with the Fylgja Props Builder

So, you have your beautiful JSON file with all your design decisions. How do you turn that into usable CSS?

That's where a tool like the **[Fylgja Props Builder](https://fylgja.dev/library/extensions/props-builder/)** comes in.

The Props Builder is a powerful NPM package that takes your design token files as input and compiles them into a variety of formats. Whether you need CSS Custom Properties, Sass variables, or even JavaScript objects, the builder handles the conversion for you.

This allows you to maintain a single, canonical source for your design system while empowering developers to use those values in the format that makes the most sense for their work. It's the final, critical step in making your design tokens a truly integrated part of your development workflow.

By embracing design tokens, you're not just organizing your styles; you're investing in a more consistent, scalable, and collaborative future for your user interface.