---
title: "Design Tokens (CSS Props)"
description: "Adding style to your component with prebuilt design tokens, a.k.a. CSS Props."
---

Fylgja Components are by default as much as possible styleless.

Meaning each Fylgja Component has a default style,
but with a the focus on a foundational styles.

So adding your own style to each component is easy,
trough the power of CSS and CSS variables.,
Without losing the flexibility that most CSS frameworks have issues with.

But what if you don't have any design or style ready,
and you do want one.

This is where design tokens, a.k.a. CSS Props come in.

With Fylgja Design Tokens you get a prebuilt collection of CSS,
Javascript and JSON design tokens to use.

Making it very ease to apply a specific style, to a CSS Component,
using it in almost any languages, as seen below;

<div class="scroll-slider thin-scrollbar" style="--gap-inline: 0; scroll-snap-type: none;">

```jsx
// Javascript Sample, e.g. React or Vue
import { radius, size, shadow } from "@fylgja/props"

const cardStyle = {
    borderRadius: radius[1],
    padding: size[4] size['fluid-3'],
    boxShadow: shadow[2],
}
```

```css
/* CSS Sample */
@import "@fylgja/props";

.card {
    --card-radius: var(--radius-2);
    --card-padding: var(--size-4) var(--size-fluid-3);
    --card-elevation: var(--shadow-2);
}
```

```scss
/* SCSS Sample */
@use "@fylgja/props" as *;
@use "@fylgja/card" with (
    $card-radius: $radius-2;
    $card-padding: $size-4 $size-fluid-3;
    $card-elevation: $shadow-2;
);
```

</div>

{% include "related-tokens.njk" %}
