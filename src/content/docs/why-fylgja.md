---
title: "Why Choose Fylgja CSS?"
description: "Discover how Fylgja CSS offers a modern, flexible, and lightweight solution for building web projects with ease."
sortOrder: 0
---

Fylgja CSS is a library designed to help developers streamline their work with HTML and CSS.

Unlike traditional CSS frameworks,
Fylgja CSS provides modular solutions that focus on simplicity, flexibility, and customization.

## Our Mission

Fylgja CSS was developed to address common challenges in front-end development,
particularly the need for maintainable, scalable, and performant user interfaces.

It offers a collection of robust **foundational** styles and **utilities**,
aiming to simplify the process of building consistent and high-quality web experiences.

It's designed to be a versatile toolkit, suitable for new projects or for integration into existing ones.

Our primary goal for Fylgja CSS is to provide a valuable resource for developers. We aim to:
- **Simplify Development**:
	By offering a highly modular and intuitive CSS library,
  	we aim to significantly accelerate your development cycles and drastically reduce boilerplate code.
- **Promote Maintainability**:
  	We champion best practices through a component-based approach,
  	leading to cleaner, more organized, and effortlessly maintainable stylesheets.
- **Foster Developer Control**:
  	We are keenly aware of the evolving CSS landscape,
  	where developers increasingly seek greater ownership and flexibility over their styling decisions.
  	Our modular philosophy reinforces this, providing you with powerful building blocks without dictating your entire design structure.

Ultimately, Fylgja CSS aims to free developers from common CSS complexities,
allowing more focus on innovation and creativity. We believe in a more efficient and enjoyable approach to web styling.

## The Core Packages

To achieve our goals, Fylgja is built around a set of core packages.
These are designed to be used individually or together, giving you the flexibility to only use what you need.

### Fylgja Base

More than just a reset or normalize stylesheet—it’s a practical foundation for your web projects.
Instead of resetting styles and then overwriting them, it sets smart defaults that work across browsers.

By applying classless styling, common HTML elements like forms and buttons are automatically styled,
leaving you free to focus on the design itself. It’s a better browser default that ensures consistency without the bloat.

### Fylgja Tokens

Also referred to as **Fylgja Props**,
these tokens provide a set of design values (like colors, spacing, etc.) available as SCSS or CSS variables.
You can customize them easily using Fylgja CSS's build tools if the defaults don’t fit your project’s needs.

### Fylgja Utilities

This package offers a curated selection of CSS utilities designed to complement tools like TailwindCSS or UnoCSS.
Rather than replacing those, Fylgja's utilities are flexible and work seamlessly with Fylgja Tokens, Open Props, or any similar system.

### Fylgja Components

Fylgja also includes a library of **CSS components**, which provide ready-to-use,
single-class solutions for building more complex UI elements. These components save time and simplify your workflow.

## Modular Approach

While Fylgja CSS may sound like a framework, it is highly modular.

This allows you to include only the parts you need for a specific project.

For instance, with **Fylgja Base**, you can opt to include just the form styles without pulling in everything else.

This modularity extends to all parts of the Fylgja CSS library,
ensuring that your project stays lean and efficient.

## Lightweight by Design

Fylgja CSS is designed to be compact.

You only load what you need, so the overall size of your CSS is determined by your selections.

For example, the minified **Fylgja Base** Preflight is just 5kb,
smaller than many other classless CSS libraries and frameworks with similar features.

## Easy to Customize

Fylgja CSS is built with low CSS specificity, allowing you to override styles easily,
and with **Fylgja Base**, specificity is kept at zero using the `:where` selector,
meaning your custom styles won't be disrupted.

In addition, Fylgja CSS includes CSS variables where appropriate,
making customization quick and straightforward with just a few lines of code.
