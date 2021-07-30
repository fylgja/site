---
title: "Stylelint Config - Order"
description: "A sharable stylelint config object that enforces Fylgja's CSS order rules."
npm: "@fylgja/stylelint-config"
preview: "stylelint.png"
permalink: "/components/stylelint-config/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Stylelint Config: "/components/stylelint-config/"
}
currentBreadcrumbTitle: "Order"
---

> NO PLUGIN and CONFIG required!

## Reason

Why don't we believe in a strict code order?

While code linting is great,
the order of the code is something that should be left to the developer.

We do follow a specific order of our styles,
but never strict for the following reasons.

- New css properties that are not in the order of the style config,
  causing high maintenace.
- Cases where the code order makes no sense, yes they exist.
- CSS properties that work for multiple parent properties,
  for example, `gap` with Grid, Flex or Columns.

## What CSS order to follow.

We follow a DOM Like order, other options are the Alphabetical order or something else 🤷‍.

So the DOM order is;

* Var's/special setters
* Positioning
* Layout
* Shape
* Visual
* Typographic
* Misc

<details class="faq-panel"><summary>View a code sample of the order.</summary>

```scss
.order-example {
    // var's/special setters
    --color-theme: rebeccapurple;
    content: attr();
    counter-reset: section;
    counter-increment: section;
    quotes: '"' '"' "'" "'";
    // Positioning
    box-sizing: border-box;
    position: absolute;
    right: 0;
    // Layout
    display: block;
    float: left;
    grid-column: span 2;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    table-layout: fixed;
    // Shape
    width: auto;
    max-width: 100%;
    min-width: 100%;
    height: auto;
    clip-path: circle();
    shape-outside: img();
    margin: auto;
    padding: 0;
    border-radius: 50%;
    border: 1px solid currentColor;
    box-shadow: 0 0 0 #fff2;
    outline: none;
    // Visual
    background-color: #eee;
    color: #333;
    fill: currentColor; // svg
    stroke: currentColor; // svg
    // Typographic
    font-family: system-ui, sans-serif;
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    white-space: pre;
    hyphens: auto;
    overflow-wrap: break-word;
    // Misc
    transform: scaleX(1);
    opacity: 1;
    animation: 3s infinite;
    transition: transform 0.2s linear;
    appearance: none;
    overflow: visible;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
```

</details>

Fylgja uses a set of groups, that specify the order of our code, the logic is to keep properties bundeled together.

For example the properties like, text-overflow, overflow-wrap and overflow are better together than split,

based on the role they have.

The same goes for the position properties top, right, bottom and left,

they should be bundeld together, not randomly somewhere in your class.

So **DON'T** do this 😫

```css
.class {
    left: -5px;
    position: absolute;
    border-color: currentColor;
    top: 3px;
}
```

### FAQ

<details open class="faq-panel"><summary>Is there also an order for each group?</summary>

Yes the properties that have a direction should follow the DOM order.

That is: top, right, bottom, left or block, inline, also width comes before height.

</details>

<details class="faq-panel"><summary>Why is the variables/special setters group before the box group?</summary>

The properties in this group are specifically used to set values.

CSS variables should always come before all, similar to SCSS variables.

Other properties are used to set values used by the content property.

</details>

<details class="faq-panel"><summary>Should all browser specific styles come at the end?</summary>

That depends on the style.

Browsers prefixes should be avoided!
Use [autoprefixer](https://github.com/postcss/autoprefixer) instead.

But if they are needed,
and they it only exist for 1 specific brower,
then _Yes_ but that property should come at the end.

</details>

<details class="faq-panel"><summary>Why is float part of the box group</summary>

Float moves the box, like position, while flex and grid move the children.

</details>

<details class="faq-panel"><summary>Why is list-style part of the layout group</summary>

Not really sure.
Still working out the best position for it.

Momentarily Fylgja is using the default order used by Chrome and Firefox.

Another reason is that the `display` property can have the value `list-item`.

_Suggestions are welcome_

</details>

## Exceptions & Preprocessors

There are some exceptions in the code order, Preprocessors are using some code order rules.

- `extends` before
- `mixins` before but after `extends`
- `inline variables` before but after `mixins`

For CSS this also applies to inline variables.

```css
.icon {
    --size: 15px;
    width: var(--size);
    height: var(--size);
}
```
