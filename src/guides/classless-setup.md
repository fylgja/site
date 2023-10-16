---
title: "Simplifying Styling: A Classless Approach"
description: "Unlock the power of minimal CSS frameworks with Fylgja's classless styling"
thumb: "logo-icon-orange.png"
order: 2
---

[Native Elements]: /features/native-styles/

Have you ever come across minimal CSS frameworks that embrace the concept of shipping little to no CSS at all?
One such revolutionary approach is known as [Native Elements],
and it's all about embracing a classless, styleless ethos.

This innovative approach streamlines your HTML structure significantly and offers a user-friendly entry point to web design without ever delving into the intricacies of CSS.

Even with zero CSS expertise, you can construct a robust foundation for a stunning webpage.

You might be wondering,
how does this differ from a CSS normalize or reset? Well, the distinction is clear.

Native Elements functions as a starting point or a standard foundation.

Yes, it does come with its own set of opinions, but in today's world, with the advent of CSS Props (CSS Variables),
you can effortlessly customize it to match your unique vision with just a few lines of code.

So, why opt for Native Elements?

Using [Native Elements] empowers you to initiate your website, blog, or web application without the headache of deciding which classes to apply.

If you ever need to fine-tune something,
you can leverage CSS Props, Components, and Utilities.

Since this provides a more solid foundation than what browsers inherently provide,
you can commence your project swiftly.

## How to Get Started

Wondering how to harness CSS from [Native Elements] for your project?

Firstly, ensure that you have a project set up in your preferred framework, such as AstroJS, NextJS, Eleventy, and more.

Next, decide whether you want to go down the SCSS or PostCSS route (don't forget to check out our [starting setup guide](guides/default-setup/) for these steps).

> If you're starting from scratch or feeling a bit lost, you can explore our [showcase codepen](https://codepen.io/Fylgja/pen/ExGOZaE) to witness and experiment with it firsthand.

Now, with Fylgja, you have two options.

For the sake of simplicity, we will use the primary package in both cases during the npm installation step.

Start by installing all of Fylgja CSS components using:

```sh
npm install fylgja
```

In this scenario, you'll only include the CSS component you need.

Let's say you're building a contact form, but you don't want to deal with creating CSS for the form styles.

In that case, you can add the Fylgja Form and Control Components to set up a complete contact form with form fields and checkboxes.

Use these two imports:

```scss
@use "@fylgja/form";
@use "@fylgja/control";
// Or, via PostCSS and other options as native CSS
@import "@fylgja/form";
@import "@fylgja/control";
```

You may also need the button styles to enhance your design.

In that case, add the button styles as a native element:

```scss
@use "@fylgja/button" with ($enable-native-btn: true);
// Or, via PostCSS and other options as native CSS
@import "@fylgja/button/native";
```

Now, all you need to do is add the HTML for your form:

```html
<form action="#" method="POST">
    <label for="name">Name</label>
    <input id="name" name="name" type="name" autocomplete="name" required>

    <label for="email">Email</label>
    <input id="email" name="email" type="email" autocomplete="email" required>

    <label for="question">Question</label>
    <textarea id="question" name="question"></textarea>

    <label for="get-copy">
        <input id="get-copy" name="get-copy" type="checkbox">
    </label>

    <button type="submit">Submit</button>
</form>
```

And there you have it!

As you can see, you can create a contact form in just a few simple steps using only CSS and HTML,
without the need to dive into class-based styling.

For your next step, you can add additional styles using classes or tap into the power of CSS Props to fine-tune any of the [Native Elements].

### The Alternative Import/Setup Option

If you prefer a slightly different approach, you can opt to import all [Native Elements] through the Fylgja HTML bundle.

Use the following code to make this setup:

```scss
@use "fylgja/bundles/fylgja-html";
// Or, via PostCSS and other options as native CSS
@import "fylgja/fylgja-html";
```

Alternatively, if you'd rather bypass CSS logic entirely using SCSS and PostCSS,
you can integrate the CDN directly into your HTML, and you're good to go:

```html
<link href="https://unpkg.com/fylgja/fylgja-html.css" rel="stylesheet">
```

With these straightforward steps, you can embrace the simplicity and elegance of classless web design with Fylgja's [Native Elements].
