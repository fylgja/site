---
layout: "@/layouts/PostLayout.astro"
title: "About Fylgja"
description: "About Fylgja and how it was created"
---

Fylgja is a project by Sean van Zuidam (@GrimLink),
with key contributions from Ruud van Zuidam (@Allrude) and other friends from the open-source community.

The goal of Fylgja is to simplify front-end development by providing common, reusable block styles.
This eliminates the need to repeatedly define them in every project, offering a robust default foundation to build upon.

## How it was Built
		
The original, unreleased version of Fylgja was built as a CSS utility pack for Bootstrap 2 and 3.
Its primary purpose was to introduce specific flex features to the float grid,
simplify button styling, and add the now-familiar spacer utility class like `.mb-4`.

Later versions transitioned from LessCSS to SCSS,
gradually evolving from a simple Bootstrap extension into a comprehensive CSS framework by incorporating its own distinct blocks.

Initial release candidates resembled most CSS frameworks, featuring early and simplified variables and mixins.
However, we quickly realized this direction was misaligned with Fylgja CSS's core vision.
Our goal was greater modularity, prioritizing a 'plug-and-play' approach over prescriptive styling.
This realization sparked the first of many complete rebuilds. 😅

The framework evolved, benefiting from changing insights, lessons learned from pioneers and CSS experts,
and extensive real-world application.
It has been successfully used in diverse projects, including e-commerce (Magento 1 and 2),
CMS (WordPress and Joomla!), and headless setups with JavaScript frameworks like React and Vue.

This continuous development gradually shaped it into the CSS library you see today.

## Our Mission and Goals

Fylgja CSS was developed to address common challenges in front-end development,
particularly the need for maintainable, scalable, and performant user interfaces.

It offers a collection of robust **foundational** styles and **utilities**,
aiming to simplify the process of building consistent and high-quality web experiences.

It's designed to be a versatile toolkit, suitable for new projects or for integration into existing ones.

For a detailed look at our goals and the key principles behind Fylgja CSS,
please see the [Why Choose Fylgja CSS?](/docs/why-fylgja/) page.

## Inspirations

Fylgja's development is rooted in numerous inspirations.
We've learned valuable lessons about 'do's and don'ts' from other CSS frameworks and from developers at Google and Mozilla.

We'd like to give a special shout-out to:

- **[Bootstrap](https://getbootstrap.com/)**:
	While it has its own modularity challenges, it undeniably kickstarted the Fylgja CSS project.
- **[Bulma](https://bulma.io/) and [Material Components](https://material.io/components?platform=web)**:
	for demonstrating effective modularity with SCSS and CSS.
- **[TailwindCSS](https://tailwindcss.com/)**:
	for insights into effective CSS utility usage, and, crucially, how *not* to overuse them.
- **[Open Props](https://open-props.style/)**:
	for providing a comprehensive set of CSS Design Tokens.
- Gone but not forgotten:
    - **Native Elements**:
  		for demonstrating how to achieve aesthetically pleasing classless styling without sacrificing personal design freedom.
    - **Iota grid**:
  		showed how to create a fully customizable CSS grid with a minimal footprint.
		This inspired our own `@fylgja/flex-grid` solution,
		which we no longer support due to the availability of superior modern grid options.
