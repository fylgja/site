---
title: "Utilpack - Default utility classes"
description: "All  of the default prebuild CSS utility classes build with the Fylgja utilpack."
tags: ["utils", "utilpack"]
preview: "utilpack.png"
permalink: "/components/utilpack/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Utilpack: "/components/utilpack/",
}
eleventyExcludeFromCollections: true,
---

Here you will find all default utility classes.

If you looking for how to modify theme or unset them.

Then please check out the [main docs](/components/utilpack) here.

## Typography

### Text Color

| class      | value                  |
| ---------- | ---------------------- |
| text-reset | `color: currentColor;` |

### Text Decoration

| class        | value                            |
| ------------ | -------------------------------- |
| underline    | `text-decoration: underline;`    |
| line-through | `text-decoration: line-through;` |
| no-underline | `text-decoration: none;`         |

It also has the following options available:
- Responsive classes

### Text Align

| class       | value                 |
| ----------- | --------------------- |
| text-start  | `text-align: start;`  |
| text-center | `text-align: center;` |
| text-end    | `text-align: end;`    |

It also has the following options available:
- Responsive classes

### Vertical Align

| class             | value                          |
| ----------------- | ------------------------------ |
| align-baseline    | `vertical-align: baseline;`    |
| align-top         | `vertical-align: top;`         |
| align-middle      | `vertical-align: middle;`      |
| align-bottom      | `vertical-align: bottom;`      |
| align-text-top    | `vertical-align: text-top;`    |
| align-text-bottom | `vertical-align: text-bottom;` |

It also has the following options available:
- Responsive classes

### Text Wrap

| class       | value                  |
| ----------- | ---------------------- |
| text-wrap   | `white-space: wrap;`   |
| text-nowrap | `white-space: nowrap;` |

It also has the following options available:
- Responsive classes

### Text Break

| class        | value                                |
| ------------ | ------------------------------------ |
| break-normal | `overflow-wrap: normal;`             |
| break-word   | `overflow-wrap: break-word;`         |
| break-any    | `overflow-wrap: anywhere;`           |
| break-auto   | `overflow-wrap: auto; hypens: auto;` |

It also has the following options available:
- Responsive classes

### Font Weight

| class             | value                   |
| ----------------- | ----------------------- |
| weight-thin       | `font-weight: 100;`     |
| weight-extralight | `font-weight: 200;`     |
| weight-light      | `font-weight: 300;`     |
| weight-normal     | `font-weight: 400;`     |
| weight-strong     | `font-weight: 500;`     |
| weight-semibold   | `font-weight: 600;`     |
| weight-bold       | `font-weight: 700;`     |
| weight-extrabold  | `font-weight: 800;`     |
| weight-black      | `font-weight: 900;`     |
| weight-lighter    | `font-weight: lighter;` |
| weight-bolder     | `font-weight: bolder;`  |

It also has the following options available:
- Responsive classes

### Font Style

| class        | value                 |
| ------------ | --------------------- |
| slant-normal | `font-style: normal;` |
| slant-italic | `font-style: italic;` |

It also has the following options available:
- Responsive classes

## Spacers

Spacer have been around for some time,
and are on of the most useful utilities when used to with CSS components.

Available sizes for the Margin, Padding and Space utilities.

| class         | value                 |
| ------------- | --------------------- |
| `{PREFIX}`-0  | `{PROPERTY}: 0;`      |
| `{PREFIX}`-1  | `{PROPERTY}: 0.25em;` |
| `{PREFIX}`-2  | `{PROPERTY}: 0.5em;`  |
| `{PREFIX}`-3  | `{PROPERTY}: 0.75em;` |
| `{PREFIX}`-4  | `{PROPERTY}: 1em;`    |
| `{PREFIX}`-5  | `{PROPERTY}: 1.25em;` |
| `{PREFIX}`-6  | `{PROPERTY}: 1.5em;`  |
| `{PREFIX}`-7  | `{PROPERTY}: 1.75em;` |
| `{PREFIX}`-8  | `{PROPERTY}: 2em;`    |
| `{PREFIX}`-9  | `{PROPERTY}: 2.25em;` |
| `{PREFIX}`-10 | `{PROPERTY}: 2.5em;`  |
| `{PREFIX}`-11 | `{PROPERTY}: 2.75em;` |
| `{PREFIX}`-12 | `{PROPERTY}: 3em;`    |

To extend this, use the `$utilpack-spacers` map.

### Margin

The following options/direction are available.

- `m` = margin
- `my` = margin-block-start margin-block-end
- `mt` = margin-block-start
- `mb` = margin-block-end
- `mx` = margin-inline-start margin-inline-end
- `ms` = margin-inline-start
- `me` = margin-inline-end

> Each option is using the writing direction.
> in LTR `margin-inline-start` is the same as `margin-left`.

It also has the following options available:
- Responsive classes

### Padding

The following options/direction are available.

- `p` = padding
- `py` = padding-block-start padding-block-end
- `pt` = padding-block-start
- `pb` = padding-block-end
- `px` = padding-inline-start padding-inline-end
- `ps` = padding-inline-start
- `pe` = padding-inline-en

> Each option is using the writing direction.
> in LTR `padding-inline-start` is the same as `padding-left`.

It also has the following options available:
- Responsive classes

### Space

Space works similar to the margin y and x version,
Except you can set the class on parent element.

This class will give each child after another child spacing per the value.
Similar to the gap property.
Except this can also be used on elements that are not part of a grid or flex container.

The following options/direction are available.

- `space-y` = margin-block-start
- `space-x` = margin-inline-start

> Each option is using the writing direction.
> in LTR `margin-inline-start` is the same as `margin-left`.

It also has the following options available:
- Responsive classes

## Border

Available sizes for the border utility.

| class              | value                                                                           |
| ------------------ | ------------------------------------------------------------------------------- |
| `{PREFIX}`-default | `{PROPERTY}: 1px var(--border-style, solid) var(--border-color, currentColor);` |
| `{PREFIX}`-0       | `{PROPERTY}: 0;`                                                                |
| `{PREFIX}`-2       | `{PROPERTY}: 2px var(--border-style, solid) var(--border-color, currentColor);` |
| `{PREFIX}`-3       | `{PROPERTY}: 3px var(--border-style, solid) var(--border-color, currentColor);` |

To extend this, use the `$utilpack-border-sizes` map.

The following options/direction are available.

- `b` = border
- `by` = border-block-start border-block-end
- `bt` = border-block-start
- `bb` = border-block-end
- `bx` = border-inline-start border-inline-end
- `bs` = border-inline-start
- `be` = border-inline-end

> Each option is using the writing direction.
> in LTR `border-inline-start` is the same as `border-left`.

It also has the following options available:
- Responsive classes

## Divider

Divider works similar to the border y and x version,
Except you can set the class on parent element.

This class will give each child after another child a border per the value.

The following options/direction are available.

- `divider-y` = margin-block-start
- `divider-x` = margin-inline-start

> Each option is using the writing direction.
> in LTR `border-inline-start` is the same as `border-left`.

It also has the following options available:
- Responsive classes

## Sizing

Available sizes for the `width` and `height` utilities.

| class             | value                           |
| ----------------- | ------------------------------- |
| `{PREFIX}`-auto   | `{PROPERTY}: auto;`             |
| `{PREFIX}`-none   | `{PROPERTY}: 0;`                |
| `{PREFIX}`-25     | `{PROPERTY}: 25%;`              |
| `{PREFIX}`-33     | `{PROPERTY}: calc(100% / 3);`   |
| `{PREFIX}`-50     | `{PROPERTY}: 50%;`              |
| `{PREFIX}`-66     | `{PROPERTY}: calc(100% / 1.5);` |
| `{PREFIX}`-75     | `{PROPERTY}: 75%;`              |
| `{PREFIX}`-full   | `{PROPERTY}: 1.75em;`           |
| `{PREFIX}`-screen | `{PROPERTY}: 100vh;`            |

Available sizes for the `min-width` and `min-height` utilities.

| class                 | value                     |
| --------------------- | ------------------------- |
| `min-{PREFIX}`-none   | `min-{PROPERTY}: 0;`      |
| `min-{PREFIX}`-full   | `min-{PROPERTY}: 1.75em;` |
| `min-{PREFIX}`-screen | `min-{PROPERTY}: 100vh;`  |

Available sizes for the `max-width` and `max-height` utilities.

| class                 | value                     |
| --------------------- | ------------------------- |
| `max-{PREFIX}`-none   | `max-{PROPERTY}: 0;`      |
| `max-{PREFIX}`-full   | `max-{PROPERTY}: 1.75em;` |
| `max-{PREFIX}`-screen | `max-{PROPERTY}: 100vh;`  |

It also has the following options available:
- Responsive classes

## Layout

### Display

| class        | value                    |
| ------------ | ------------------------ |
| block        | `display: block;`        |
| hidden       | `display: none;`         |
| inline-block | `display: inline-block;` |
| flex         | `display: flex;`         |
| inline-flex  | `display: inline-flex;`  |
| flow-root    | `display: flow-root;`    |

> Grid is not by default part of this group.
> And should be part of it own utility or component.

It also has the following options available:
- Responsive classes

### Float

| class       | value           |
| ----------- | --------------- |
| float-right | `float: right;` |
| float-left  | `float: left;`  |
| float-none  | `float: none;`  |

It also has the following options available:
- Responsive classes

> Tip1: although we use flex or grid for many layouts.
> Floats still have there uses with inline image in a article and more.
> 
> Tip2: Use the flow-root class as a wrapper to keep everting inside the box
> and clear for inline element that may not have any floating elements next to it.

### Clear

| class       | value           |
| ----------- | --------------- |
| clear-right | `clear: right;` |
| clear-left  | `clear: left;`  |
| clear-both  | `clear: both;`  |
| clear-none  | `clear: none;`  |

It also has the following options available:
- Responsive classes

### Object Fit

| class             | value                     |
| ----------------- | ------------------------- |
| object-contain    | `object-fit: contain;`    |
| object-cover      | `object-fit: cover;`      |
| object-fill       | `object-fit: fill;`       |
| object-none       | `object-fit: none;`       |
| object-scale-down | `object-fit: scale-down;` |

### Object Position

| class         | value                      |
| ------------- | -------------------------- |
| object-top    | `object-position: top;`    |
| object-right  | `object-position: right;`  |
| object-bottom | `object-position: bottom;` |
| object-left   | `object-position: left;`   |

### Overflow

| class            | value                |
| ---------------- | -------------------- |
| overflow-auto    | `overflow: auto;`    |
| overflow-hidden  | `overflow: hidden;`  |
| overflow-visible | `overflow: visible;` |
| overflow-scroll  | `overflow: scroll;`  |

Or use the `overflow-y` and `overflow-x` version.

### Position

| class    | value                 |
| -------- | --------------------- |
| static   | `position: static;`   |
| relative | `position: relative;` |
| absolute | `position: absolute;` |
| fixed    | `position: fixed;`    |
| sticky   | `position: sticky;`   |

The Utilpack also ship's with the position inset options;

- inset
- top
- right
- bottom
- left
- inset-y
- inset-x

> the inset property still uses the older spec until the newer spec is better supported.

And the following values are available;

| class        | value            |
| ------------ | ---------------- |
| `{PREFIX}`-0 | `{PROPERTY}: 0;` |

To extend this, use the `$utilpack-positions` map.

It also has the following options available:
- Responsive classes

## Flex

### Direction

| class            | value                             |
| ---------------- | --------------------------------- |
| flex-row         | `flex-direction: row;`            |
| flex-row-reverse | `flex-direction: row-reverse;`    |
| flex-col         | `flex-direction: column;`         |
| flex-col-reverse | `flex-direction: column-reverse;` |

It also has the following options available:
- Responsive classes

### Wrap

| class             | value                      |
| ----------------- | -------------------------- |
| flex-nowrap       | `flex-wrap: nowrap;`       |
| flex-wrap         | `flex-wrap: wrap;`         |
| flex-wrap-reverse | `flex-wrap: wrap-reverse;` |

It also has the following options available:
- Responsive classes

### Flex Size

| class        | value             |
| ------------ | ----------------- |
| flex-fill    | `flex: 1 1 0%;`   |
| flex-auto    | `flex: 1 1 auto;` |
| flex-shrink  | `flex: 0 0 auto;` |
| flex-grow    | `flex: 1 0 auto;` |
| flex-initial | `flex: 0 1 auto;` |
| flex-none    | `flex: none;`     |

It also has the following options available:
- Responsive classes

### Order

| class       | value        |
| ----------- | ------------ |
| order-first | `order: -1;` |
| order-0     | `order: 0;`  |
| order-1     | `order: 1;`  |
| order-last  | `order: 9;`  |

It also has the following options available:
- Responsive classes

## Box Alignment (Flex & Grid)

### Justify Content

| class           | value                             |
| --------------- | --------------------------------- |
| justify-start   | `justify-content: flex-start;`    |
| justify-end     | `justify-content: flex-end;`      |
| justify-center  | `justify-content: center;`        |
| justify-between | `justify-content: space-between;` |
| justify-around  | `justify-content: space-around;`  |
| justify-evenly  | `justify-content: space-evenly;`  |

It also has the following options available:
- Responsive classes

### Justify Items

| class                 | value                     |
| --------------------- | ------------------------- |
| justify-items-start   | `justify-items: start;`   |
| justify-items-end     | `justify-items: end;`     |
| justify-items-center  | `justify-items: center;`  |
| justify-items-stretch | `justify-items: stretch;` |

It also has the following options available:
- Responsive classes

### Justify Self

| class                | value                    |
| -------------------- | ------------------------ |
| justify-self-start   | `justify-self: start;`   |
| justify-self-end     | `justify-self: end;`     |
| justify-self-center  | `justify-self: center;`  |
| justify-self-stretch | `justify-self: stretch;` |

It also has the following options available:
- Responsive classes

### Align Content

| class           | value                           |
| --------------- | ------------------------------- |
| content-start   | `align-content: flex-start;`    |
| content-end     | `align-content: flex-end;`      |
| content-center  | `align-content: center;`        |
| content-between | `align-content: space-between;` |
| content-around  | `align-content: space-around;`  |
| content-evenly  | `align-content: space-evenly;`  |

It also has the following options available:
- Responsive classes

### Align Items

| class          | value                      |
| -------------- | -------------------------- |
| items-start    | `align-items: flex-start;` |
| items-end      | `align-items: flex-end;`   |
| items-center   | `align-items: center;`     |
| items-baseline | `align-items: baseline;`   |
| items-stretch  | `align-items: stretch;`    |

It also has the following options available:
- Responsive classes

### Align Self

| class        | value                     |
| ------------ | ------------------------- |
| self-start   | `align-self: flex-start;` |
| self-end     | `align-self: flex-end;`   |
| self-center  | `align-self: center;`     |
| self-stretch | `align-self: stretch;`    |

It also has the following options available:
- Responsive classes

## Responsive classes

Each util that supports it, als ship with a responsive class.

For more on what it can do [see the main utilpack docs here ->](/components/utilpack/#breakpoints)
