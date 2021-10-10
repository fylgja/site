---
title: "How to use with an existing framework"
description: "How to use fylgja in a existing framework like Tailwind"
thumb: "guide-thumb/bootstrap-tailwindcss.jpg"
---

As we mention multiple times 😅,
Fylgja is component based framework.

Meaning you can download and add each CSS component separately.

Making it easier to combine it with other CSS frameworks
or to add it to an existing project.

So how do you actually do this?

First make sure to understand what compiler your running.
There are 2 use cases;

- SCSS based
- PostCSS based with `postcss-import`

Any other tools do not mather for using Fylgja.

## How to use with Utility based frameworks, like TailwindCSS

So for example if we where running a [TailwindCSS](https://tailwindcss.com/)
or any other utility CSS based framework, like [WindiCSS](https://windicss.org/).

You are using one of the easiest use cases.

_The only components that might conflict are the Utilpack, Transition and Transform components,_
_since these are also utility based CSS components._

So for a TailwindCSS use case you can simply install the `@fylgja/form` component
and include it in your CSS just like this.

```css
@import "tailwindcss/base";
@import "tailwindcss/components";

@import "@fylgja/form/form.css";

@import "tailwindcss/utilities";
```

And now you don't need to add any CSS classes for your form elements,
since the `@fylgja/form` component styles them directly now.

![Noice](/images/noice.webp)

And with this you can also add more and more CSS components,
without having to create them with utility classes.

So instead having to us `@apply` to create a Card component.
You can just include it, just as with the form.
Only difference this CSS component uses classes but that is just wat we want.

Moving to a more DRY approach and still using the flexibly of utility classes.

## How to use with Component based frameworks, like Bootstrap

This is a little but harder since some components already exists.

So make sure to disable the CSS Component you want to replace
or don't use the Fylgja version.

This very depended on the framework.
But CSS Components that add CSS that don't exist yet work great.

For Bootstrap you could extend the utilities with our Utilpack component.
Adding more utility power.
Or add some Native CSS components like the form to simplify the HTML.

So how to you actually remove CSS components from bootstrap?

First make sure to not Bootstrap via 1 import.
Instead load everting from the `bootstrap.scss` separately.
