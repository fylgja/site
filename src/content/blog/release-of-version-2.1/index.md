---
title: "Fylgja 2.1 is Live: New Utilities, Performance Boosts, and More"
tagline: "Discover what's new in the latest version of Fylgja"
description: "This release brings a host of improvements across the Fylgja library, focusing on new features, performance enhancements."
publishDate: 2025-08-06
tags: ["releases", "css", "library"]
coverImage: "cover.jpg"
---

We're excited to announce the release of Fylgja 2.1!
This update is packed with improvements across the Fylgja library,
focusing on new features, performance enhancements.

Let's dive into what's new.

### **A More Accessible and Performant Foundation with [@fylgja/base]**

Our base styles have received significant upgrades to improve both accessibility and performance.
We've enhanced `aria` attribute support for buttons, making it easier to manage states with JavaScript.

We've also trimmed down the selector for the `::file-selector-button` and performed other cleanups to reduce the overall CSS size.

For a full breakdown of the changes, check out the [@fylgja/base] changelog.

### **More stable [@fylgja/tokens]**

A small but powerful addition, we've introduced the `@property --hue` to our tokens.
This allows for smooth animations on all colors.
If you've seen our homepage, you might have noticed the colors change when scrolling—this is all powered by the new `@property`,
which gracefully falls back if not supported.

In addition, we've fixed and improved the `design-tokens` syntax to be more in line with the specification.

See all the token enhancements in the [@fylgja/tokens] changelog.

### **Powerful New [@fylgja/utilities]**

This release cleans up the divider utility, making it significantly smaller than the previous version.
The gap is now handled through the `flow` or `gap` utility instead of relying on a separate utility.

We've also added several new utilities for text and the all-new `scroll-mask` utility for adding overflow shadows to scrollable elements.

For more details, see the [@fylgja/utilities] changelog.

We're confident that Fylgja 2.1 will help you build better, faster, and more accessible websites. Update to the latest version today to take advantage of all these new features and improvements! We welcome your feedback and look forward to seeing what you create.

Happy coding!

[@fylgja/base]: https://github.com/fylgja/fylgja/blob/main/base/CHANGELOG.md
[@fylgja/tokens]: https://github.com/fylgja/fylgja/blob/main/tokens/CHANGELOG.md
[@fylgja/utilities]: https://github.com/fylgja/fylgja/blob/main/utilities/CHANGELOG.md
