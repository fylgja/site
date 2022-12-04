---
title: "Table"
description: "The table component is super easy to use,
since it is a zero config module that styles the table directly.
Allowing you to focus on the table it self."
npm: "@fylgja/table"
git: "components/table"
codepen: "MWOggqm"
tags: ["nativeElements", "typography"]
preview: "table.png"
---

The table component is super easy to use,
since it is a zero config module that styles the table directly.

Allowing you to focus on the table it self.

## Installation

```bash
npm install @fylgja/table
```

Then include the component in to your code via;

```scss
@use "@fylgja/table";
// Or via PostCSS import
@import "@fylgja/table";
```

## How to use

No instruction are really needed,
the table styles are automatically added when loaded.

{% codeSample %}
<table>
    <thead>
        <tr><th>title 1</th><th>title 2</th><th>Long title 3</th><th>title 4</th><th>title 5</th></tr>
    </thead>
    <tbody>
        <tr><td>item 01</td><td>item 02</td><td>item 03</td><td>item 04</td><td>item 05</td></tr>
        <tr><td>item 11</td><td>item 12</td><td>item 13</td><td>item 14</td><td>item 15</td></tr>
        <tr><td>item 21</td><td>item 22</td><td>item 23</td><td>item 24</td><td>item 25</td></tr>
    </tbody>
</table>
{% endcodeSample %}

That said no site is the same, and if you need more than this basis,

then consider adding you own styles to improve on this basis.

For example,
a simple stripped style can be made with just this bit of code;

```scss
.table-striped {
    tr:nth-child(even) {
        --table-bg: rgba(0 0 0 / 10%);
    }
}
```

### Single level styled by default

The table styles are unlike other frameworks set on a single level basis.

Making overriding the behavior or adding anything super easy,
since there is no styles set to deep, to block your styles.

### Overflow

Tables are as responsive as the content,
so it is hard to make a responsive behavior that fits all table data types.

Use the `@fylgja/utilpack` overflow util class,
that allows your table not the break the page

and can be scrolled instead, giving a basic user experience.

```html
<div class="overflow-x-auto">
    <table>..</table>
</div>
```

If you really want your table to shine on mobile devices,

use some custom CSS for collapsing the expected data in the layout you want.

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Here are the following SCSS variables can you modify.

```scss
$table-margin: 1rem 0 !default;
$table-padding: 5px 8px !default;

$table-border-collapse: collapse !default;
$table-border-gap: 2px !default;
$table-border-width: 0 0 1px !default;
$table-border-style: solid !default;
$table-border-color: #ccc !default;

$table-bg: transparent !default;
$table-color: inherit !default;

$table-head-border: 2px $table-border-style !default;
$table-head-border-color: $table-color !default;
```
