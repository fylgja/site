---
title: "Design Tokens (CSS Props)"
description: "Adding style to your component with prebuilt design tokens, a.k.a. CSS Props."
style: {
    inline: "
        #token-use-case-samples {
            --cols-size: 320px;
            --pre-margin-start: 0;
            --pre-margin-end: 0;
        }
    "
}
---

Whenever possible, Fylgja Components are styleless by default.

Each Fylgja Component has a default style, although the emphasis is on core styles, so to speak.

As a result, using CSS and CSS variables to easily apply your own style to each component avoids sacrificing the flexibility that most CSS frameworks struggle with.

What happens, however, if you desire one but don't have a design or style ready?

Design tokens, also known as CSS Props, are useful in this situation.

You can use a prebuilt library of design tokens available in CSS, SCSS, and Javascript using Fylgja Design Tokens.

{% include "related/tokens.njk" %}
