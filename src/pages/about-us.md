---
layout: "@/layouts/PostLayout.astro"
title: "About Fylgja"
description: "About Fylgja, what the name means and how it was created"
---

Fylgja is a project by Sean van Zuidam ([@GrimLink](https://grimlink.com)),
with key contributions from Ruud van Zuidam (@Allrude) and other friends from the open-source community.

It exists because the same block styles get written again in every project.
Fylgja collects them once, so you start from a foundation instead of from an empty file.

## The Name

Fylgja is Old Norse, said roughly as *FILG-ya*, and it comes from the verb *fylgja*: to follow, to accompany.
In the sagas a fylgja is a spirit that attaches itself to a person and stays with them,
usually appearing as an animal whose nature says something about the one it follows.
A bear for someone formidable, a fox for someone cunning.
It goes where they go, and it asks nothing of them.

That turned out to be the right name for what this library became.
Fylgja started as an add-on, a pack of extras bolted onto whatever framework a project already used.
It is now something you carry between projects instead:
take a single part, take the whole library, or run it alongside the framework you already like.
It follows the project rather than the project having to follow it.

Hence the line the site opens with: your CSS companion.

## How it was Built

The first version, never released, was a CSS utility pack for Bootstrap 2 and 3.
It added flex features to the float grid, simplified button styling,
and introduced the spacer utilities everyone now recognizes, like `.mb-4`.

Later versions moved from LessCSS to SCSS and grew blocks of their own,
until the Bootstrap extension had quietly turned into a full framework.

The first release candidates looked like every other CSS framework of the time:
early variables, a pile of mixins, opinions baked in.
That was the wrong direction.
We wanted modularity and plug and play, not prescription,
and realizing it triggered the first of many complete rebuilds. 😅

What followed was shaped by changing insights, by lessons from CSS pioneers,
and by a lot of real work: e-commerce on Magento 1 and 2, CMS builds on WordPress and Joomla!,
and headless setups with React and Vue.
Each of those pushed the library somewhere it would not have gone on its own,
and gradually shaped it into the CSS library you see today.

## Our Mission and Goals

Fylgja is built for the parts of front-end work that are easy to get wrong at scale:
keeping a codebase maintainable, keeping it consistent, and keeping it fast.

It ships **foundational** styles and **utilities**, and stays out of the way of everything else.
That makes it as usable in a new project as in one that already carries years of CSS.

For a detailed look at our goals and the key principles behind Fylgja CSS,
see the [Why Choose Fylgja CSS?](/docs/why-fylgja/) page.

## Inspirations

Fylgja owes a lot to the work that came before it,
including the parts that taught us what not to do,
from other CSS frameworks and from developers at Google and Mozilla.

A special shout-out to:

- **[Bootstrap](https://getbootstrap.com/)**:
	it has modularity problems of its own, but it undeniably kickstarted this project.
- **[Bulma](https://bulma.io/) and [Material Components](https://material.io/components?platform=web)**:
	for demonstrating effective modularity with SCSS and CSS.
- **[TailwindCSS](https://tailwindcss.com/)**:
	for insights into effective CSS utility usage, and, crucially, how *not* to overuse them.
- **[Open Props](https://open-props.style/)**:
	for providing a comprehensive set of CSS design tokens.
- Gone but not forgotten:
    - **Native Elements**:
  		for classless styling that looks good without taking your design decisions away.
    - **Iota grid**:
  		for a fully customizable CSS grid with almost no footprint.
		It inspired our own `@fylgja/flex-grid`,
		which we have since dropped now that CSS grid does the job better.
