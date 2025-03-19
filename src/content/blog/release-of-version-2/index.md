---
title: "Fylgja 2: A New Era of Modular and Performant CSS"
description: "Introducing Core Package Separation and Streamlined Architecture for a Better CSS Experience"
publishDate: 2025-03-19
tags: ["releases", "css", "library"]
coverImage: "cover.jpg"
coverColor: "hsl(90 50% 40%)"
---

Get ready for a significant evolution in Fylgja! We're excited to unveil **Fylgja 2**, a release that marks a fundamental shift in our CSS library's architecture. This new version is built from the ground up with a focus on **modularity, enhanced performance, and a streamlined development experience**. We've listened to your feedback and addressed key areas for improvement, resulting in a more powerful and user-friendly CSS solution.

This release represents a complete rebuild of our core, making Fylgja 2 a brand new foundation for your projects.

## Why a New Foundation? Addressing V1's Challenges and Enhancing Developer Experience

In our journey with Fylgja v1, we learned a lot. While its modularity was a strength, managing numerous npm dependencies became a maintenance burden. We recognized the need to simplify this aspect and enhance the overall developer experience.

**Fylgja 2 tackles this by introducing a more streamlined package structure.** We've bundled our three core concepts – **Classless (now named Base), Tokens (CSS Props), and Utilities** – into three dedicated packages.

* **Fylgja Base:** Encompasses the classless styles, including components like forms and buttons previously found in separate v1 packages.
* **Fylgja Tokens:** Houses our CSS properties for colors, spacing, and more.
* **Fylgja Utilities:** Provides a curated set of helpful utility classes.

This bundling doesn't compromise modularity. Each of the three core packages offers individual imports, allowing you to include only the specific parts you need. For example, if you only require the form styles from Fylgja Base, you can import just that component. This approach simplifies dependency management while retaining our core modular design.

## Embracing Modern CSS for Enhanced Flexibility and Performance

With this architectural overhaul, we've also embraced modern CSS features that we had planned for v1 but held back on to ensure stability. This includes the use of the `:is()` and `:where()` selectors, which significantly improve the ease of overriding styles and contribute to an even smaller overall footprint compared to v1.

The bundling of core components has also led to noticeable size improvements. The **Fylgja Base package, which includes all the essential default styles, clocks in at a lean 14kb**.

Beyond the bundling and size optimizations, we've also refined each of the three core packages:

## Fylgja Base: A Solid Foundation for Classless Styling

Fylgja Base is now laser-focused on providing an exceptional classless styling experience. It's designed to make working with HTML (or HTML-like languages like JSX) feel intuitive and efficient.

By using semantic HTML, you can achieve well-styled pages without the need to apply numerous classes.

It's important to note that Fylgja Base is not intended to be a traditional CSS Reset or Normalize. Instead, it aims to establish a sensible and improved browser default that you can build upon.

We understand that integrating Fylgja Base into existing projects might require a slightly different approach. However, the inherent modularity allows you to pick and choose the specific components you need.

We're also excited to introduce a **scoped version of typography styles, named `prose`**, inspired by Tailwind CSS's approach. However, our implementation differs by prioritizing CSS inheritance, a fundamental strength of CSS that we believe is often overlooked.

> We have plans to release presets, including one specifically for Tailwind CSS users, allowing you to leverage the best of both worlds in your projects.

## Fylgja Tokens: A Refined and Dynamic Color System

Fylgja Tokens have been reworked and streamlined, building upon the solid foundation of previous Fylgja packages for color, sizes, borders, shadows, and layers.

The most significant change lies in how we handle colors. Unlike some other CSS property libraries like Open Props, our color system is dynamic. Instead of a long list of static values that can introduce unnecessary overhead and require build tools, we utilize a dynamic list of colors that can be modified using **hue** and **chroma** modifiers.

This allows you to easily set your own or predefined hues on the element or root selector:

```css
:root {
    --hue: var(--hue-blue);
}

.my-test-element {
    background-color: var(--color-10);
    color: var(--color-1);
}
````

This provides you with complete control while ensuring a consistent and manageable color system.

Furthermore, we've refined the token values to be more consistent and removed unnecessary ones, making Fylgja Tokens as lean as possible without sacrificing functionality.

## Fylgja Utilities: Empowering You with Dynamic and Curated Tools

Similar to Fylgja v1, Fylgja Utilities are not intended to replace comprehensive CSS utility systems like Tailwind CSS or UnoCSS. Instead, they are designed to **complement these systems or provide a lightweight utility solution** when you prefer to avoid a full build toolchain.

Fylgja Utilities are built to be used directly without requiring build tools, but they are also compatible with them if you choose to integrate them.

This curated set of CSS utilities offers a range of handy features and now includes improved versions of some v1 components that fit well within a utility-first approach, such as the Auto Grid and the compact Container.

We're also introducing new concepts for utilities, starting with **[Dynamic Utilities](/docs/concepts/dynamic-css-utilities)**. This approach ensures that utilities are applied at the component or page level, preventing unnecessary bloat in your global CSS.

A prime example is our approach to modifiers often seen in utility systems, like alignment utilities. In Fylgja, we offer a single alignment utility that can be customized using the power of CSS variables.

We're taking this a step further with spacing utilities, allowing you to add padding to an element simply by using:

```html
<button style="--px: 2rem">Dynamic Utilities in action</button>
```

This makes CSS utilities truly dynamic, ensuring that each value doesn't contribute to an ever-growing global CSS size.

## What's Next? Expanding the Fylgja Ecosystem

Our journey doesn't stop here\! We're already working on expanding the Fylgja ecosystem with new **CSS Components**, with the first ones already available for Input and Button Groups.

We firmly believe in the value of CSS Components alongside Classless design, CSS Props (Tokens), and CSS Utilities.

We're also bringing back improved versions of certain CSS Components from Fylgja v1. Keep an eye on our Github Issues to see the components we're reintroducing and the exciting new additions we have planned. 😉

## Updating from Fylgja v1: A Gradual Transition

Since Fylgja 2 represents a complete rebuild, there isn't a direct automated upgrade path or script.

However, due to the modular nature of even v1, you can gradually replace features from v1 with the new version.

For instance, you can replace specific Fylgja packages like `@fylgja/form` and `@fylgja/control` with `@fylgja/base` and import `@fylgja/base/form` to achieve a similar result.

Other parts, such as the Fylgja Utilities, are different enough that they can often be used alongside most v1 Fylgja packages.

We will continue to maintain the older Fylgja packages for a while as we complete the initial rollout of new CSS components. Subsequently, we will begin adding deprecation notices and providing guidance on how to migrate from each v1 package to the new ones.

In the coming weeks, we'll also publish more blog posts specifically focused on the process of updating to v2, including guides for integrating with other CSS frameworks.

We are incredibly excited about Fylgja 2 and the wealth of new features and improvements it brings. While a major version change necessitates some breaking changes, we've prioritized a fresh start to deliver a more robust and future-proof CSS library.

Instead of including extensive update notes in this release post, we wanted to ensure a smooth and well-documented transition.

## Ready to Dive In? Get Started with Fylgja 2 Today\!

You can start exploring Fylgja CSS v2 right now using the CDN links for each core package:

```html
<link href="[https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css](https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css)" rel="stylesheet">
<link href="[https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css](https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css)" rel="stylesheet">
<link href="[https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css](https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css)" rel="stylesheet">
```

Or, install it via npm:

```bash
npm install @fylgja/base @fylgja/tokens @fylgja/utilities
```

For more in-depth information and documentation on Fylgja, please visit our Library and Docs.

## Share Your Thoughts and Support Fylgja\!

If you're as excited about Fylgja 2 as we are, please take a moment to **star our Github Repository** ![GitHub Repo stars](https://img.shields.io/github/stars/fylgja/fylgja?style=social). Your support helps us grow and reach more developers\!

We'd also love to hear your feedback\! Share your suggestions and opinions on our [Github Discussions](https://github.com/orgs/fylgja/discussions). If you write a blog post about Fylgja 2, please share it with us on your favorite social media platform using our social media handle. We're eager to see what you build with Fylgja 2\!
