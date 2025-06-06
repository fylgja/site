---
layout: "@/layouts/ContentLayout.astro"
title: "About us"
description: "About Fylgja and how it was created"
---

> TODO rework text

Fylgja is created by Sean van Zuidam ([@GrimLink](https://twitter.com/grimlink/)),
with help from Ruud van Zuidam ([@Allrude](https://twitter.com/allrude/)).

Fylgja makes it easier to start with a front-end, using common block styles.

So you don't have to repeat them in every project, giving you a good default to start with.

## Backstory

The original version of Fylgja, (that was never released), was build as an utility pack for Bootstrap 2 & 3.
This version was purely to add specific flex features to the grid, made it easier to add button styles,
and added the spacer utility class that's now know as `.mb-4`

Later versions moved to the SCSS syntax and started to add own blocks,
slowly growing and converting that what started as a simple extension for Bootstrap, to a complete CSS framework.

The initial release candidates looked like most CSS frameworks,
with some early and easier variables and mixins.

But we quickly concluded this was the wrong direction for Fylgja.
We wanted Fylgja to be more modular, so plug and play had to be first and style had to be second.

This triggered the first off many complete rebuilds 😅

The framework grew and profited from changing insights and we learn from other pioneers and CSS Hero's.

But also from using it in many projects,
like e-commerce projects in Magento 1 and Magento 2, CMS projects like Wordpress and Joomla! 
and Headless projects with Javascript frameworks as React and Vue.

Slowing growing to the CSS Framework you see here.

## Inspirations

Fylgja is not made out of thin air, it has many inspirations and we learned a lot on do's and don't from other CSS frameworks,
and the dev's from Google and Mozilla.

So a little shout out to;

- [Bootstrap](https://getbootstrap.com/) for always being a great tool. It has its own little modularity flaws, but it did kick start the Fylgja project.
- [Bulma](https://bulma.io/) and [Material Components](https://material.io/components?platform=web)
  On how to do modularity with SCSS and CSS properly.
- [TailwindCSS](https://tailwindcss.com/) on how to do Utility classes
  and most importantly! How to not do Utility classes
- [Open Props](https://open-props.style/) on how to provide a comprehensive set of CSS Design Tokens
- Dead but not forgoten, for what awesome stuff they did;
  - [Native Elements](https://native-elements.dev/) for showing how you can do nice looking Native Elements without losing any freedom on personal style
  - [Iota grid](https://github.com/korywakefield/iota) showed how you can create a fully customizable CSS grid with only a small CSS footprint, inspired some option in the [`@fylgja/flex-grid`](/components/flex-grid/)

Also a little shout out to [Mooore Digital](https://www.mooore.nl/) for assisting this project and utilizing it in their own work.
