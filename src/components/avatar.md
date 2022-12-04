---
title: "Avatar"
description: "The avatar component allows you to make an avatar style with ease."
npm: "@fylgja/avatar"
git: "components/avatar"
tags: "elements"
preview: "avatar.png"
order: 1
preconnect: { placeimg: "https://placekitten.com/" }
style: {
    progress: "../../node_modules/@fylgja/avatar/avatar.css"
}
---

The avatar component allows you to make an avatar style with ease.

## Installation

```bash
npm install @fylgja/avatar
```

Then include the component in to your code via;

```scss
@use "@fylgja/avatar";
// Or via PostCSS import
@import "@fylgja/avatar";
```

## How to use

To use the avatar create element with the class `.avatar`.

{% codeSample html, "flex flex-wrap items-center gap-4" %}
<img class="avatar" style="--avatar-size: 6em; --avatar-bg: #8a4d19;" src="https://placekitten.com/120/120?img=1" width="120" height="120">
<img class="avatar" src="https://placekitten.com/60/60?img=2" width="60" height="60">
{% endcodeSample %}

Avatars are by default round and are `3em` big, allowing to scale with your text.

You can change this via the CSS variables or via the SCSS variables, if it is your default style.

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$avatar-size: 3em !default;
$avatar-radius: 50% !default;
$avatar-bg: #eee !default;
$avatar-color: null !default;
```
