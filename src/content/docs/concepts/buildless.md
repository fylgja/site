---
title: "Buildless"
description: "Use Fylgja without any build tools, perfect for quick demos or simple projects."
faq:
  - question: Do I lose any features by using Fylgja without a build step?
    answer: You lose build-time optimizations like unused-style purging and easy
      design-token customization, but the CSS itself works exactly the same
      either way.
  - question: Can I switch from the CDN/buildless setup to npm later without
      rewriting my HTML?
    answer: Yes, the class names and CSS variables are identical between the CDN
      files and the npm packages, so you can swap the <link> tags for an
      @import-based build later without changing your markup.
  - question: What does npx fylgja@latest add <name> actually do?
    answer: It copies the requested CSS file into your project (src/css, src/styles,
      or src/assets if one exists, otherwise the current directory) so you have
      a local, editable copy without adding it as an npm dependency.
  - question: Is jsDelivr required, or can I use a different CDN?
    answer: The examples use jsDelivr, but since these are just static CSS files,
      any CDN that can serve npm packages (or the GitHub release download) will
      work.
---

At Fylgja, we believe in flexibility and freedom of choice. That's why one of our core concepts is being "buildless." This means you can start using Fylgja's CSS components and styles without needing any complex build tools or setup.

## What does "Buildless" mean?

Simply put, you can use Fylgja by just linking to the CSS file in your HTML. There's no mandatory requirement for ViteJs, Bun, or any other bundler. You can download the CSS files and host them yourself, or link directly to them from a CDN.

This approach offers several advantages:

*   **Simplicity:** Get started in seconds. Just add a `<link>` tag to your HTML, and you're ready to go.
*   **Perfect for Prototyping:** Ideal for quick demos, proof-of-concepts, or small projects where a build process would be overkill.
*   **Focus on Creativity:** Spend your time designing and building your page, not configuring tools.

## Getting files without installing

You can copy individual Fylgja CSS files directly into your project using npx, without needing to install anything permanently:

```sh
npx fylgja@latest add tokens
```

This copies the file into `src/css`, `src/styles`, or `src/assets` if any of those exist, or falls back to the current directory. Run `npx fylgja@latest help` to see all available files.

## Downloading from GitHub

You can also download a pre-built release directly from GitHub and include the CSS files in your project manually. This requires no Node.js or package manager at all.

The latest release is always available at [github.com/fylgja/fylgja/releases/latest](https://github.com/fylgja/fylgja/releases/latest).

## Using a CDN

The fastest way to get started is to link the CSS files directly from a CDN, with no installation or download required:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css" rel="stylesheet">
```

## Does this mean I shouldn't use build tools?

Not at all! While Fylgja is proud to be buildless, we also embrace the power and efficiency that build tools offer for larger, more complex projects.

Using a build process with tools like PostCSS, Tailwind CSS (with our preset), or UnoCSS can unlock advanced features like:

*   **Purging unused styles:** Keep your final CSS bundle as small as possible.
*   **Customization:** Easily modify design tokens and component styles.
*   **Integrating with frameworks:** Seamlessly use Fylgja with frameworks like React, Vue, or Svelte.

The choice is yours. Fylgja is designed to fit your workflow, whether it's a simple HTML file or a sophisticated single-page application.
