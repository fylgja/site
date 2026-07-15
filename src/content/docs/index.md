---
title: "Getting Started"
description: "New to Fylgja? Here's how to get started using the CSS foundation, design tokens, and utilities."
faq:
  - question: Do I need to install all three core packages, or can I use just one?
    answer: You can use just one. Fylgja is modular, so Base, Tokens, and Utilities
      each work fine on their own. The meta fylgja package is only a convenience
      for installing all three together.
  - question: What's the difference between installing fylgja and installing the
      packages individually?
    answer: The fylgja meta package installs @fylgja/base, @fylgja/tokens, and
      @fylgja/utilities together with one command. Installing them individually
      lets you skip any of the three you don't need.
  - question: Do I need a build tool to get started?
    answer: No. You can link the CSS files from a CDN or copy them into your project
      with npx fylgja@latest add, with no bundler required. See the buildless
      approach for details.
  - question: Will importing @fylgja/base conflict with my existing CSS or component library?
    answer: Unlikely. Base is classless and kept at low specificity, so it styles
      plain HTML elements without fighting your own classes or component styles.
  - question: What should I look at after installing the core packages?
    answer: From there, Fylgja Utilities cover quick styling adjustments and Fylgja
      Components cover more complex, ready-to-use UI elements.
---

New to Fylgja? Here’s how to get started.

The most straightforward way to begin is by using Fylgja as your CSS foundation. Although
it's a library at its core, it’s designed to work like a framework out of the box.

You can integrate Fylgja in several ways, but the easiest and most recommended approach is
to use the meta package.

## Our Core Packages

Fylgja is built around three core packages, each designed to embody our goals: simplifying
development, promoting maintainability, and giving you control. You can use them together
for a complete solution or pick only what you need.

- [**Fylgja Base:**](/library/base) A classless CSS foundation that provides smart, consistent
  styling for all standard HTML elements. It's the perfect starting point to avoid boilerplate code.
- [**Fylgja Tokens:**](/library/tokens) Standardize your design with a flexible set of CSS Custom
  Properties (Design Tokens) for consistency in colors, spacing, and typography.
- [**Fylgja Utilities:**](/library/utilities) A curated collection of utility classes to speed up
  your styling workflow, complementing any methodology.

Together, these packages create a powerful toolkit. For more information, explore the
[Fylgja Library documentation](/library).

## Installation & Quick Start

Install the meta package using npm:

```sh
npm install fylgja
```

This single command installs the core packages: `@fylgja/base`, `@fylgja/tokens`, and `@fylgja/utilities`.

Once installed, import them into your main CSS file:

```css
@import "@fylgja/base";
@import "@fylgja/tokens/css";
@import "@fylgja/utilities";
```

### No install needed

Prefer not to install anything? You can copy individual Fylgja CSS files directly into your
project using npx:

```sh
npx fylgja@latest add theme
```

Run `npx fylgja@latest help` to see all available files, or read more about the
[buildless approach](/docs/concepts/buildless).

### What does this do?

By importing `@fylgja/base`, your project now has a "classless" foundation. This
means all standard HTML elements, like buttons, forms, and typography, will have a clean,
modern style out of the box—no need to add CSS classes everywhere. This approach is perfect
for getting started quickly, especially for content-heavy sites.

For a deeper dive into this concept, see our documentation on
[classless CSS](/docs/concepts/classless).

For example, the following HTML markup will be automatically styled without any extra CSS:

```html
<article>
  <h2>My First Fylgja Article</h2>
  <p>This content is styled by the classless <b>@fylgja/base</b> package.</p>
  <button>Click Me</button>
</article>
```

From here, you can use [utility classes](/library/utilities) for quick adjustments
or dive into [CSS Components](/library/components) to build more complex UI.
