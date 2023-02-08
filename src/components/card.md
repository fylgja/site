---
title: "Card"
description: "The card component is a wrapper component.
It allows you to make visual sectioned content,
that is not part of the main flow."
npm: "@fylgja/card"
git: "components/card"
codepen: "KKmOaNv"
tags: ["layouts", "elements"]
preview: "card.png"
preconnect: { picsum: "https://picsum.photos" }
---

The card component is a wrapper component.

It allows you to make visual sectioned content,
that is not part of the main flow.

## Installation

```bash
npm install @fylgja/card
```

Then include the component in to your code via;

```scss
@use "@fylgja/card";
// Or via PostCSS import
@import "@fylgja/card";
```

## How to use

The card is one of the few CSS components that requires a little bit more
classes or/and elements.

A simple card can be just be 1 element,
and so you can collapse the child card classes to the parent,

{% codeSample %}
<div class="card card-content">
    <p>The card component is a wrapper component.</p>
    <p>It allows you to make visual sectioned content,<br>that is not part of the main flow.</p>
</div>
{% endcodeSample %}

and a more complex card case, requires nesting.

{% codeSample %}
<figure class="card inline-flex">
    <img class="card-media" width="520" height="360" src="https://picsum.photos/id/7/500/375" loading="lazy">
    <figcaption class="card-content">Hello there</figcaption>
</figure>
{% endcodeSample %}

We kept the card child classes to 3 use cases;

| Class           | Description                     |
| --------------- | ------------------------------- |
| `.card-content` | For content, that may also grow |
| `.card-media`   | For media (e.g. img or video)   |
| `.card-action`  | For links and buttons           |

Besides that the card is also extremely flexible in style, via CSS variables.

The card style is by default elevated,
but can be made flat via 2 variables.

{% codeSample %}
<style>
    .card.-flat {
        --card-border: 1px solid #aaa;
        --card-elevation: none;
    }
</style>
<div class="card card-content -flat">
    <p>The card component is a wrapper component.</p>
    <p>It allows you to make visual sectioned content,<br>that is not part of the main flow.</p>
</div>
{% endcodeSample %}

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Here are the following SCSS variables can you modify.

```scss
$enable-card-link: true !default;

$card-padding: 1rem !default;
$card-radius: 6px !default;
$card-border: 0 !default;
$card-elevation: var(
    --elevation-z2,
    0 3px 1px -2px rgba(black, 0.2),
    0 2px 2px rgba(black, 0.14),
    0 1px 5px rgba(black, 0.12)
) !default;
$card-bg: color.adjust($root-bg, $lightness: 10%) !default;
$card-color: $color-text !default;

// Only with enable-card-link
$card-link-opacity: 0.1 !default;
$card-link-color: currentcolor !default;
```
