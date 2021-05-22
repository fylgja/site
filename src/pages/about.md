---
title: "About us"
description: "About Fylgja and how it was created"
---

Fylgja is created by Sean van Zuidam ([@GrimLink](https://twitter.com/grimlink/)).
To make it easier to start with a front-end using common block styles.
That you don't have to repeat in every project.
So that you have good default to start with in your project.

## Backstory

The original version of Fylgja, that was never released.
And was made as an utility pack for Bootstrap 2.
This version was purely to add specific flex features to the grid,
made it easier to add button styles,
and added the spacer utility class.
Which is now know as `.mb-1`

Later versions moved to the SCSS syntax and started to add its own blocks.
Slowly growing to its own thing.
This showed this thing that started as a simple extension on Bootstrap 2.
Had potential as a CSS framework.

The first initial release candidate looked like most CSS frameworks.
With some easier variables and mixin.
But this quickly made clear this was the wrong direction for Fylgja.
It has be just as the first version to be more modular.
Where the plug and play had to be first and style had to be second.

This created the first in many complete rebuilds 😅

The framework grew and learned from Sean van Zuidam and others he works with.
From using it in many project using systems.
Like e-commerce project in Magento 1 and Magento 2,
CMS systems like Wordpress and Joomla
and Headless systems like React and Vue.

Slowing growing to the thing you see here.

## Inspirations

Fylgja is not made out of thin air.
It had many inspirations to look at.
On how to do something wel and on how to not do things.

So a little shout out to;

- [Bootstrap](https://getbootstrap.com/) for alway being a great tool.
  That has its own little modularity flaws.
  But it did kick start this project.
- [Bulma](https://bulma.io/) and [Material Components](https://material.io/components?platform=web)
  On how to do modularity with SCSS and CSS properly.
- [Native Elements](https://native-elements.dev/) for showing how you can do nice looking Native Elements without losing any freedom on personl style.
- [TailwindCSS](https://tailwindcss.com/) on how to do Utility classes
  and most importantly! How to not do Utility classes.
- [iota grid](https://github.com/korywakefield/iota) while the project is dead.
  It did do some cool things on how to make a grid system.
  This did not make it in the core project since we found a better idea.
  Following the idea of container queries in the `@fylgja/autogrid`.
  It did shape plugin [`@fylgja/flex-grid`](/components/flex-grid/)
  Which to this day is a still a great solution for a CSS grid.
