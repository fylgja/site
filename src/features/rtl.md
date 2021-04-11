---
title: "RTL"
description: "Fylgja works out of the box for right-to-left (RTL) languages such as Arabic and Hebrew."
---

Fylgja works out of the box for right-to-left (RTL) languages such as Arabic and Hebrew.

To be semantically appropriate,
in addition to translating the texts,
you need to also mirror the layout to match the text direction.

To enable this behavior.
You must have the follwing html tags set

- Set `dir="rtl"` on the `<html>` element.
- Add an appropriate lang attribute, like `lang="ar"`, on the `<html>` element.

So no additional CSS or plugins needed 😉

## How can force a direction

In case you need something to be in a LTR direction.
No mather the language or direction.

Set the `dir="ltr"` on the html element where you need this behavior.
Or use the CSS property `direction: ltr;`
