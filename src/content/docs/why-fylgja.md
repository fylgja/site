---
title: "Why Choose Fylgja?"
description: "Discover how Fylgja CSS offers a modern, flexible, and lightweight solution for building web projects with ease."
sortOrder: 0
---

Fylgja CSS is a library designed to help developers streamline their work with HTML and CSS.

Unlike traditional CSS frameworks,
Fylgja provides modular solutions that focus on simplicity, flexibility, and customization.

## Key Features

Fylgja offers several options to integrate into your projects,
whether you're starting from scratch or improving an existing setup:

- **Fylgja Base** is more than just a reset or normalize stylesheet—it’s a practical foundation for your web projects.
  Instead of resetting styles and then overwriting them, it sets smart defaults that work across browsers.  
  By applying classless styling, common HTML elements like forms and buttons are automatically styled,
  leaving you free to focus on the design itself. It’s a better browser default that ensures consistency without the bloat.

- **Fylgja Tokens** also referred to as **Fylgja Props**,
  these tokens provide a set of design values (like colors, spacing, etc.) available as SCSS or CSS variables.
  You can customize them easily using Fylgja's build tools if the defaults don’t fit your project’s needs.

- **Fylgja Utilities** package offers a curated selection of CSS utilities
  designed to complement tools like TailwindCSS or UnoCSS.
  Rather than replacing those, Fylgja's utilities are flexible and work seamlessly with Fylgja Tokens, Open Props, or any similar system.

- Fylgja also includes a library of CSS components, which provide ready-to-use,
  single-class solutions for building more complex UI elements.
  These components save time and simplify your workflow.

## Modular Approach

While Fylgja may sound like a framework, it is highly modular.

This allows you to include only the parts you need for a specific project.

For instance, with **Fylgja Base**, you can opt to include just the form styles without pulling in everything else.

This modularity extends to all parts of the Fylgja library,
ensuring that your project stays lean and efficient.

## Lightweight by Design

Fylgja is designed to be compact.

You only load what you need, so the overall size of your CSS is determined by your selections.

For example, the minified **Fylgja Base** Preflight is just 5kb,
smaller than many other classless CSS libraries and frameworks with similar features.

## Easy to Customize

Fylgja is built with low CSS specificity, allowing you to override styles easily,
and with **Fylgja Base**, specificity is kept at zero using the `:where` selector,
meaning your custom styles won't be disrupted.

In addition, Fylgja includes CSS variables where appropriate,
making customization quick and straightforward with just a few lines of code.
