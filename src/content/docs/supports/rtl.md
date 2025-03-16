---
title: "RTL (Right to Left)"
description: "Fylgja works out of the box for right-to-left (RTL) languages such as Arabic and Hebrew."
---

Fylgja offers seamless support for right-to-left (RTL) languages like Arabic and Hebrew
without requiring additional CSS or prefixed RTL utility classes.

Fylgja automatically applies the correct styles to ensure a proper RTL layout.

## RTL Language Layout

When working with RTL languages,
it's essential not only to translate text but also to mirror the layout
to align with the text direction for a semantically correct presentation.

To enable RTL behavior, ensure the following HTML attributes are set:

- Add `dir="rtl"` to the `<html>` element.
- Set an appropriate language attribute, such as `lang="ar"`, on the `<html>` element.

This setup enables RTL functionality, eliminating the need for extra CSS or plugins. 😉

<button onclick="toggleRtl()">Try it out here</button>

<script>
  function toggleRtl() {
    const root = document.querySelector('main');
    root.getAttribute('dir') !== 'rtl'
      ? root.setAttribute('dir', 'rtl')
      : root.setAttribute('dir', 'ltr');
  }
</script>

## Forcing a Specific Text Direction

If you need to force a left-to-right (LTR) layout regardless of the language or text direction, apply one of the following:

- Add `dir="ltr"` to the specific HTML element where you want this behavior.
- Use the CSS property `direction: ltr;` to enforce LTR on the desired element.
