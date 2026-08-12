---
title: "Introducing Fylgja UI"
description: "A new section of the site with copy-paste UI components, built on plain accessible HTML and styled by Fylgja CSS. This is the first batch, and more are on the way."
publishDate: 2026-08-12
tags: ["FylgjaCSS", "UI", "Release"]
coverImage: cover.webp
---

Fylgja CSS has always focused on the layer below components. Good defaults, design tokens,
and utilities that let you build whatever you need. But one question kept coming back. How
do you actually build a modal, a carousel, or a pagination bar with it?

[Fylgja UI](/ui/) is the answer. It is a growing collection of components you can read,
copy, and paste into any project.

### What it is

This is not another React UI library. There is no package to install, no component API to
learn, and no build step to adopt. What you get is markup, which means it works in Astro,
Laravel, Svelte, Rails, a single HTML file, and yes, in React too if that is where you
happen to be.

All of it is free. Where a lot of component collections keep their better half behind a
license, a subscription, or a pro tier, there is no paid version of Fylgja UI, and none is
planned. No account, no license key, no blocks that turn out to be locked once you need
them.

Every component is plain HTML. No wrapper divs to hold a layout together and no utility
class soup. Where the platform already gives you an element, the component uses it. Modals
and offcanvas panels are a native `<dialog>` opened with invoker commands, the accordion is
`<details>`, the progress bar is `<progress>`, and the rating input is a group of radio
buttons. That means focus handling, keyboard support, and assistive technology semantics
come from the browser instead of from code we would have to maintain.

The markup is classless wherever Fylgja already styles the bare element, so what you copy
stays close to what you would have written by hand. Each component page lists which Fylgja
packages it needs and which ones simply make it better, so you know exactly what you are
signing up for. A handful of components also ship a vanilla JavaScript or Alpine.js version
for the cases where state is genuinely needed.

The first batch covers thirty components across actions, forms, navigation, overlays,
feedback, data display, layout, and sliders.

### This is only the beginning

That is a start, not a finished library. The gaps are obvious to anyone
who goes looking: tabs, tooltips, popovers, date pickers, steppers, and plenty more. Those
are coming, along with more variants and more framework versions of the components that are
already there.

CLI support is on the list too. Copy and paste works, but pulling a component into your
project should be as quick as `npx fylgja@latest add` already is for the
[CSS files themselves](/blog/npx-fylgja-add/). Same idea, one command, no dependency added
to your project.

What lands next depends a lot on what people actually need. If a component you were looking
for is missing, or an existing one does not cover your case,
[open an issue](https://github.com/fylgja/site/issues/new). Ideas, requests, and
"this markup could be simpler" notes are all welcome. That feedback is the most reliable way
to keep the collection pointed at real problems instead of hypothetical ones.

### A thank you to Anthropic

Fylgja UI exists in this form because [Anthropic] gave the project six months of [Claude] Max
for free, through the program they run for open source projects. Fylgja is a passion project
maintained in evenings and weekends, and writing thirty components with documentation,
examples, and previews is a lot of hours. Having Claude work through the drafts, the
repetitive parts, and the review passes turned something that would have taken months into
something that shipped. Thanks to Anthropic for making that possible.

The direction, the markup decisions, and the standards each component is held to are still
ours. The help was in getting there faster.

Go have a look at [Fylgja UI](/ui/), copy what you need, and tell us what is missing.

[Claude]: https://claude.com/contact-sales/claude-for-oss
[Anthropic]: https://www.anthropic.com/
