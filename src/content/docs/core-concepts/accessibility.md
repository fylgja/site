---
title: "Accessibility"
description: "Fylgja is out of the box fully accessible."
---

Fylgja is out of the box fully accessible.

We don't make color choices for you,
and follow the base principles of good typography spacing.

All of the Fylgja click based elements fit in to the minimum touch pixel size,
and most even have the recommended w3c 44 pixel size.

Besides that, a good HTML structure solves most accessibility issues.
and most of the Fylgja Components try to enforce this behavior.

For example Fylgja uses html attributes for specific states, instead a class.

So in the Fylgja breadcrumbs component you will need the `aria-current="page"` attribute,
for the current breadcrumb link style.

Making it easier for you to create your component,
by forcing a specific behavior,
trough proper html,
but you don't need to remember a CSS class for this state.

That said, Fylgja also offers helpers that make it easier to build your site,
without compromising on style in favour of accessibility.
