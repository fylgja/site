---
title: "Utilpack - Default utility classes"
description: "All of the default prebuild CSS utility classes build with the Fylgja utilpack."
npm: "@fylgja/utilpack"
git: "components/utilpack"
preview: "utilpack.png"
permalink: "/components/utilpack/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Utilpack: "/components/utilpack/"
}
currentBreadcrumbTitle: "Default utilities"
tocHeadings: ["h2"]
style: "table { width: 100%; }"
---

Here you will find all default utility classes.

If you looking for how to modify theme or unset them.

Then please check out the [main docs](/components/utilpack) here.

## Typography

{% include "utils/color.md" %}

{% include "utils/typography.md" %}

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

{% include "utils/margin.md" %}

{% include "utils/padding.md" %}

{% include "utils/space.md" %}

## Borders

{% include "utils/border.md" %}

{% include "utils/divider.md" %}

## Sizing

{% include "utils/sizing.md" %}

## Layout

{% include "utils/position.md" %}

{% include "utils/z-layer.md" %}

{% include "utils/float.md" %}

{% include "utils/overflow.md" %}

## Display Layout

{% include "utils/display.md" %}

{% include "utils/visibility.md" %}

## Media Layout (Images, Video)

{% include "utils/object.md" %}

## Flex

{% include "utils/flex.md" %}

## Box Alignment (Flex & Grid)

{% include "utils/box-alignment.md" %}

## Responsive classes

Each util that supports it, als ship with a responsive class.

For more on what it can do [see the main utilpack docs here ->](/components/utilpack/#breakpoints)
