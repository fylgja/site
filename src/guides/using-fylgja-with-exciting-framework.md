---
title: "How to use Fylgja with another framework"
description: "Adding the power of Fylgja to existing project"
thumb: "guide-thumb/frameworks.jpg"
order: 5
---

As we mention multiple times 😅,
Fylgja is component based framework,
meaning you can download and use each CSS component separately.

Making it easier to combine and use with other CSS frameworks
or to add it to an existing project.

So how do you actually do this?

First make sure to understand what compiler your running.
There are 2 use cases;

- SCSS based
- PostCSS based with `postcss-import`

most other tools have no impact with using Fylgja.

## How to use with Utility based frameworks, like TailwindCSS

So for example if you are running a [TailwindCSS](https://tailwindcss.com/)
or other utility CSS based framework, like [WindiCSS](https://windicss.org/),
thats one of the easiest use cases.

_The only components that might conflict are the Utilpack, Transition and Transform components,_
_since these are also utility based CSS components._

So if you are using TailwindCSS you can simply install the `@fylgja/form` component
and include it in your CSS like this.

```css
@import "tailwindcss/base";
@import "tailwindcss/components";

@import "@fylgja/form";

@import "tailwindcss/utilities";
```

And now you don't need to add any CSS classes for your form elements,
since the `@fylgja/form` component styles them directly.

![Noice](/images/noice.webp)

And this way you can also add more and more Fylgja CSS components
without having to create them with utility classes.

So instead having to use `@apply` to create a Card component,
You can just include it, just as with the form.
The only difference is the Fylgja Card component uses classes, but that is just wat we want,
moving to a more DRY approach and still using the flexibly of utility classes. 😄

## How to use with Component based frameworks, like Bootstrap

This is a little harder since some components already exists,
so make sure to disable the CSS Component you want to replace.

So you can add CSS Components that don't exist in Bootstrap, or replace existing ones with Fylgja CSS components.

For Bootstrap you could extend the utilities with our Utilpack component,
adding more utility power, or add some Native CSS components like the form to simplify the HTML.

So how do you actually remove CSS components from Bootstrap?

First make sure that you don't import Bootstrap using a single import.
Instead load everything from the `bootstrap.scss` file separately,

```scss
@import "bootstrap";
```

load everything separately, like this;

```scss
// Configuration
@import "functions";
@import "variables";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
...
@import "offcanvas";
@import "placeholders";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```

and include this in your `main.css` with the newer `@use` syntax.

Now in your `main.css` add your Fylgja Components like you normally do.
And in your custom Bootstrap import, you can disable unused components
or components you want to replace with Fylgja Components.
