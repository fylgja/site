---
title: "Fylgja CSS 2.0 is Live"
tagline: ""
description: "Introducing Core Package Separation and Streamlined Architecture for a Better CSS Experience"
publishDate: 2025-03-19
tags: ["Releases"]
coverImage: "cover.jpg"
---

<p class="lead">Get ready for a significant evolution in Fylgja CSS!</p>

We're excited to release Fylgja CSS 2, a fundamental shift in our CSS library's architecture.

This new version is built from the ground up with a focus on _modularity_, enhanced performance, and a streamlined _development experience_. We've improved all facets, resulting in a more powerful and user-friendly CSS solution.

This release represents a complete rebuild of our core, making Fylgja CSS 2 a solid foundation for your projects.

## Why a New Foundation? _Addressing V1's Challenges and Enhancing Developer Experience_

In our journey working with Fylgja CSS v1, we learned a lot. While its modularity was a strength, managing numerous npm dependencies became a maintenance burden. We recognized the need to simplify this aspect and enhance the overall developer experience.

Fylgja CSS 2 tackles this by introducing a more streamlined package structure. We've bundled our three core concepts into three dedicated packages.

* **Fylgja Base**  
  Encompasses the classless styles, including components like forms and buttons.
* **Fylgja Tokens**  
  Houses our CSS properties for colors, spacing, and more.
* **Fylgja Utilities**  
  Provides a curated set of helpful utility classes.

Each of the three core packages offers individual imports, allowing you to include only the specific parts you need, without compromising modularity.

## Embracing Modern _CSS for Enhanced Flexibility and Performance_

With this architectural overhaul, we've also embraced modern CSS features that we planned but held back on to ensure stability. This includes the use of the `:is()` and `:where()` selectors, which significantly improve the ease of overriding styles and contribute to an even smaller overall footprint.

The bundling of core components has also led to noticeable size improvements. The Fylgja Base package, which includes all the essential default styles, clocks in at a lean 14kb.

Beyond the bundling and size optimizations, we've also refined each of the three core packages:

### Fylgja Base _A Solid Foundation for Classless Styling_

Fylgja Base is now providing an exceptional classless styling experience. It's designed to make working with HTML or JSX feel intuitive and efficient.

By using semantic HTML, you can achieve well-styled pages, without the need to apply numerous classes.

> [!Note]
> Fylgja Base is not intended to be a traditional CSS Reset or Normalize.  
> Instead, it aims to establish a sensible and improved browser default that you can build upon.

We're also excited to introduce a scoped version of typography styles, named `prose`, inspired by TailwindCSS's approach. Our implementation differs by prioritizing CSS inheritance, a often overlooked fundamental strength of CSS.

We plan to release presets for UnoCSS and TailwindCSS, allowing you to use the best of both worlds in your projects.

### Fylgja Tokens _A Refined and Dynamic Color System_

Fylgja Tokens have been optimized and streamlined, building upon the solid foundation of previous Fylgja packages for color, sizes, borders, shadows, and layers.

Unlike some other CSS property libraries like Open Props, our color system is dynamic. Instead of a long list of static values that can introduce unnecessary overhead and require build tools, we utilize a dynamic list of colors that can be modified using **hue** and **chroma** modifiers.

This allows you to easily set your own or predefined hues on the element or root selector:

```css
:root {
    --hue: var(--hue-blue);
}

.my-test-element {
    background-color: var(--color-10);
    color: var(--color-1);
}
```

And provides you with complete control while ensuring a consistent and manageable color system, and we've refined the token values, making Fylgja Tokens as lean as possible without sacrificing functionality.

### Fylgja Utilities _Empowering You with Dynamic and Curated Tools_

Fylgja Utilities are not intended to replace comprehensive CSS utility systems like Tailwind CSS or UnoCSS. Instead, they are designed to complement these systems or provide a _lightweight utility solution_ when you prefer to avoid a full build toolchain.

They can be used directly without requiring build tools, and also offer compatibility when integrated with them.

This curated set of CSS utilities offers a range of handy features such as the Auto Grid and Snap.

We're also introducing new concepts for utilities, starting with _[Dynamic Utilities](/docs/concepts/dynamic-css-utilities)_. This approach ensures that utilities are applied at the component or page level, preventing unnecessary bloat in your global CSS.

A prime example is our approach to modifiers, like alignment utilities _(often seen in utility systems)_. In Fylgja, we offer a single alignment utility that can be customized using the power of CSS variables.

And we're taking this a step further with spacing utilities, allowing you to add padding to an element simply by using:

```html
<button style="--px: 2rem">Dynamic Utilities in action</button>
```

This makes CSS utilities truly dynamic, ensuring that each value doesn't contribute to an ever-growing global CSS size.

## What's Next? _Expanding the Fylgja Ecosystem_

Our journey doesn't stop here! We're already working on expanding the Fylgja ecosystem with new _CSS Components_, the Input and Button Groups are already available.

### Updating from Fylgja CSS v1.x

Since Fylgja CSS 2 represents a complete rebuild, there isn't a direct automated upgrade path or script, however, due to the modular nature of even v1, you can gradually replace features from v1 with the new version.

For detailed information, please refer to our extensive [Library](/library/) and [Documentation](/docs).

## Share Your Thoughts and Support Fylgja CSS!

If you're as excited about Fylgja CSS 2 as we are, please take a moment to **star our Github Repository** ![GitHub Repo stars](https://img.shields.io/github/stars/fylgja/fylgja?style=social). Your support helps us grow and reach more developers!

We'd also love to hear your feedback! Share your suggestions and opinions on our [Github Discussions](https://github.com/orgs/fylgja/discussions). If you write a blog post about Fylgja CSS 2, please share it with us on your favorite social media platform using our social media handle. We're eager to see what you build with Fylgja CSS 2!
