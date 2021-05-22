---
title: "Flex Grid"
description: "Create a complete grid using flexbox. And only set the columns you need."
npm: "@fylgja/flex-grid"
tags: ["layout", "plugins"]
preview: "flex-grid.png"
---

Create a complete grid using flexbox.
And only set the columns you need.

Making it even smaller than other flex grids.

## Installation

```bash
npm install @fylgja/flex-grid
```

Now include the component in to your code via;

```scss 
@import "@fylgja/flex-grid"; // DartSass or LibSass >= 3.6
@import "@fylgja/flex-grid/index"; // LibSass <= 3.5
@import "@fylgja/flex-grid/flex-grid.css"; // CSS or PostCSS
```

## How to use

This grid does not work with a 12 columns or 24 columns layout,
unlike other frameworks.
This only makes your CSS bigger with unused columns.

The power of the flex-grid is
that for each media query there are specific amount of columns set.

So for example on mobile you might only need 2 columns.
Then you can set the flex-grid to only load 2 columns.

```html
<div class="flex-grid">
    <div class="cell sm-2"></div>
    <div class="cell sm-2"></div>
</div>
```

Each cell size is 100% divided by `$i`.

Making it way more clear what size you can set.
And unlike 12 column grid you can set a 5 column grid row.
Since each column you create is based on the 100% divided by `$i`.

### Classes

_$mq = @media, e.g. `.sm-2` or `.lg-2`_

`.flex-grid`: Sets the grid and this is also the wrapper class. (required)

`.cell`: Sets the grid item (required)

* `.${mq}-${1}`: the grid item size
* `.${mq}-grow`: the grid item size that grows to fit the available space
* `.${mq}-shrink`: the grid item size that shrinks to fit the content size

**Depends on the booleans set, [see config](#config)**

`.-gap`: modifier class to set grid gap

`.-fill`: modifier class to makes each cells content equal height.
Works great with cards and other flexable componets.

`.offset-${mq}-${i}`: set the cell offset, from left.

`.cell` and `.offset` Chunks: allow you to create more complex flows.

Example:

```html
<div class="flex-grid">
    <div class="cell md-3-2">I am taking 2/3 of the space</div>
    <div class="cell md-3">I am taking 1/3 of the space</div>
</div>
```

## Config

By default the config is set for the smallest use case.
So many configs are disabled to load only what is needed.

### Booleans

| Var                 | Default | Description                              |
| ------------------- | ------- | ---------------------------------------- |
| $enable-flex-gap    | true    | Load the gap directly without gap class  |
| $enable-flex-fill   | false   | Enable the fill class                    |
| $enable-flex-offset | false   | Enable the cell offset classes           |
| $enable-flex-chunks | true    | Enable the cell and offset chunk classes |

### Setters

| Var              | Default                      | Description             |
| ---------------- | ---------------------------- | ----------------------- |
| $flex-grid-gaps  | ()                           | Additional gaps         |
| $flex-grid-cells | xs 2, sm 3, md 3, lg 4, xl 5 | Amount of cells, per MQ |
| $gap-size        | 1rem                         | The default gap size    |

### Breakpoints

All breakpoints are set via the SCSS map `$breakpoints`.
Each point is based on the Bootstrap naming.

See the upcoming `@fylgja/core` module for more information.

## Helper (mixins)

The flex grid is build using a few helper mixins.
You can use the helpers if you need a little more than the config can offer you.

| mixin             | options       | Description                   |
| ----------------- | ------------- | ----------------------------- |
| flex-grid-mq      | $mq           | Create a mq with if statement |
| flex-grid-gap     | $size, $class | Create a grid gap             |
| flex-grid-cells   | $mq, $i       | Create a cell sizes           |
| flex-grid-offsets | $mq, $i       | Create a cell offset sizes    |

## FAQ

<details class="faq-panel" open><summary>What is mq?</summary>

As stated under the section [How to use, classes](#Classes)

mq is shorthand for media query.

</details>

<details class="faq-panel"><summary>Why is there a hyphen before some classes?</summary>

Some classes are modifier classes.
And we wanted to have different naming,
to separate them from normal CSS class naming.

In the upcoming framework you will see a little more of this.
And we will also add a section to explain our CSS naming convention.

So good stuff to come 😉

</details>

<details class="faq-panel"><summary>Why should I still use a flex-grid instead of a CSS Grid</summary>

It's not an valid answer to say browser support,
since you can use CSS grid in IE11, via Explicit grid (fixed size).

Flex-grid makes sense for flexable grids.
Where you don't know the layout before hand.

</details>
