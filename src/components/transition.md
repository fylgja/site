---
title: "Transition"
description: "Add transitions with ease, with the power of CSS variables."
npm: "@fylgja/transition"
git: "components/transition"
tags: ["utils"]
preview: "addon.png"
---

Add transitions with ease, with the power of CSS variables.

## Installation

```bash
npm install @fylgja/transition
```

Then include the component in to your code via;

```scss
@use "@fylgja/transition";
// Or via PostCSS import
@import "@fylgja/transition";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/transition" with ($transition-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/transition" layer("utilities");
```

## How to use

The transition component can be used 2 ways.

The first one is the CSS only way, where you use the class provided by this Component.

```html
<div class="transition">..</div>
```

By default this makes anything that is part of the default set of properties animatable.

After this you can easily edit the behavior via CSS Variables.

```html
<div class="transition" style="--duration: 0.3s; --easing: cubic-bezier(0.17, 0.67, 0.83, 0.67);">..</div>
```

The CSS Variables are set in the component, and not used as fallback value,
so each variables is scoped and does not inherit.

This way each animation is set specific for that element.

Don't you like inline styles? then use a class instead. Add a inline style tag in the head of your page or via your CSS file.

```html
<style>
    .transition.-take-your-time {
        --duration: 0.3s;
        --easing: cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }
</style>
<div class="transition -take-your-time">..</div>
```

As you can see there are several options by using this basis.

The second option is to use our helper mixin directly, it is Sass only option.

First call the helper and then use the mixin `transition`;

```scss
@use "@fylgja/transition/helper" as *;

.custom {
    @include transition(
        $property, // List of transition properties
        $duration, // Duration in ms or s
        $easing, // Easing via keyword of cubic-bezier
        $delay, // Delay in ms or s
    );
}
```

## Tip

There are a lot of options to use easing,
using the name keywords or by using a cubic-bezier.

Cubic-bezier give more flexibility on how to animate something,

and tools like [cubic-bezier.com](https://cubic-bezier.com/) make this even easier.

But if your animations are simple it is better to stick to the linear and ease-out keywords.
