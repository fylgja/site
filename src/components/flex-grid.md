---
title: "Flex Grid"
description: "Create a complete grid using flexbox, and only set the columns you need."
npm: "@fylgja/flex-grid"
git: "fylgja-flex-grid"
gitDomain: "https://github.com/fylgja/"
tags: ["plugins"]
preview: "flex-grid.png"
order: 20
---

> This our legacy grid following the more static column approach used by many.
> 
> We moved to a more flexible approach with the [Auto Grid](https://fylgja.dev/components/auto-grid/),
> that follows a content based approach instead.
> 
> The Flex Grid did get an upgrade in version 3,
> which is support for the newer Sass version, with the new module syntax.
> but with this version we will also started to stop supporting any development on this grid,
> and will just support the Flex Grid with bug fixes.

Create a complete grid using flexbox, and only set the columns you need.

Making it even smaller than other flex grids.

## Installation

```bash
npm install @fylgja/flex-grid
```

Then include the component in to your code via;

```scss
@use "@fylgja/flex-grid";
// Or via PostCSS import
@import "@fylgja/flex-grid";
```

## How to use

This grid does not work with a 12 columns or 24 columns layout,
unlike other frameworks.

This only makes your CSS bigger with unused columns.

The power of the flex-grid is that for each media query,
there are specific amount of columns set.

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

`.-fill`: modifier class to make each cells content equal height,
works great with cards and other flexable components.

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

By default the config is set for the smallest use case,
so many configs are disabled to load only what is needed.

### Booleans

| Var                 | Default | Description                              |
| ------------------- | ------- | ---------------------------------------- |
| $enable-flex-gap    | true    | Load the gap directly without gap class  |
| $enable-flex-fill   | false   | Enable the fill class                    |
| $enable-flex-offset | false   | Enable the cell offset classes           |
| $enable-flex-chunks | true    | Enable the cell and offset chunk classes |

### Setters

| Var              | Default                              | Description             |
| ---------------- | ------------------------------------ | ----------------------- |
| $flex-grid-gaps  | ()                                   | Additional gaps         |
| $flex-grid-cells | xxs: 2, xs 3, sm 3, md 4, lg 4, xl 5 | Amount of cells, per MQ |
| $gap-size        | 1rem                                 | The default gap size    |

### Breakpoints

All breakpoints are set via the Fylgja component helper [`@fylgja/mq`](https://fylgja.dev/components/mq/),
and can be changed from there or directly with `$flex-grid-breakpoints` map.

`xxs` is the version of the cell sizes and breakpoint'less version, this value is required in the map.,
but the key name can be anything you want it to be.

## Helper (mixins)

The flex grid is build using a few helper mixins.
You can use the helpers if you need a little more than the config can offer you.

| mixin             | options       | Description                   |
| ----------------- | ------------- | ----------------------------- |
| flex-grid-mq      | $mq           | Create a mq with if statement |
| flex-grid-gap     | $size, $class | Create a grid gap             |
| flex-grid-cells   | $mq, $i       | Create a cell sizes           |
| flex-grid-offsets | $mq, $i       | Create a cell offset sizes    |
