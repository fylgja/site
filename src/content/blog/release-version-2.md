---
title: "Fylgja Version 2 is Out"
description: "Introducing Core Package Separation and Streamlined Architecture"
publishDate: 2025-03-17
tags: ["releases"]
---

We're thrilled to announce a significant evolution in Fylgja!

This release marks a major architectural shift, focusing on modularity, performance, and streamlined development.

We've completely rebuilt our core, resulting in a more efficient and flexible CSS Library.

## Key Changes:

* **Modular Core:** We've decoupled Fylgja into three distinct, highly optimized packages:
    * `@fylgja/base`: A comprehensive starter, normalization, and preflight CSS solution. It consolidates core v1 classless components, previously distributed across multiple packages like `@fylgja/forms`, into a single, lean package.
    * `@fylgja/tokens`: A focused package containing all core v1 token components, now consolidated and optimized.
    * `@fylgja/utilities`: A complete rebuild of the former Utilpak, now providing a powerful set of utility classes.
* **Decoupled CSS Components:** CSS components are no longer included in the meta package `fylgja`. They now need to be installed separately, giving you greater control over your project's dependencies.
* **Meta Package Refinement:** The `fylgja` meta package has been refined to solely manage dependencies. It no longer includes any code, ensuring a lighter footprint.

## Deep Dive into Core Packages:

* **`@fylgja/base`:**
    * Completely rebuilt from the ground up.
    * Consolidates core v1 classless components for a unified experience.
    * Designed for minimal size without compromising essential features.
    * Provides a robust foundation with starter, normalization, and preflight CSS.
* **`@fylgja/tokens`:**
    * Completely rebuilt for enhanced performance and maintainability.
    * Consolidates core v1 token components into a single, optimized package.
* **`@fylgja/utilities`:**
    * A complete overhaul of the previous Utilpak.
    * Renamed to `@fylgja/utilities` to better reflect its functionality.
    * Provides a powerful and flexible set of utility classes.

## Why This Change?

This modular approach empowers you to:

* **Optimize Performance:** Install only the packages you need, reducing your project's footprint.
* **Enhance Flexibility:** Customize your setup by choosing specific components and utilities.
* **Simplify Maintenance:** Benefit from focused packages with clear responsibilities.

## Explore the Changelogs:

We encourage you to explore the individual changelogs for each package to understand the full scope of changes and improvements.

* `@fylgja/base`
* `@fylgja/tokens`
* `@fylgja/utilities`

We're confident that these changes will significantly enhance your Fylgja experience. We're excited to see what you build with this new, modular core!
