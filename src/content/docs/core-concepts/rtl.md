---
title: "RTL (Right to Left)"
description: "Fylgja works out of the box for right-to-left (RTL) languages such as Arabic and Hebrew."
---

Fylgja works out of the box for right-to-left (RTL) languages such as Arabic and Hebrew.

To be semantically appropriate, in addition to translating the texts,
you need to mirror the layout to match the text direction.

To enable this behavior, You must have the following html tags set

- Set `dir="rtl"` on the `<html>` element.
- Add an appropriate lang attribute, like `lang="ar"`, on the `<html>` element.

So no additional CSS or plugins needed 😉

<button onclick="toggleRtl()">Try it out here</button>

<script>
	function toggleRtl() {
		const root = document.documentElement;

		root.getAttribute('dir') !== 'rtl'
			? root.setAttribute('dir', 'rtl')
			: root.setAttribute('dir', 'ltr')
	}
</script>

## How can I force a direction

In case you need something to be in a LTR direction, no mather the language or direction.

Set the `dir="ltr"` on the html element where you need this behavior
or use the CSS property `direction: ltr;`

## How does this work

Fylgja uses the already supporting CSS properties and values that support RTL Styling.

Instead of using tools like [RTLCSS](https://rtlcss.com/),
or adding more utility classes, like [TailwindCSS](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) does,
just to add the RTL support.

But please take note while many note that RTL support is experimental.
You might find it to be less the case.

For example both CSS Grid and flex are already RTL aware out of the box,
you don't need any tools to make this work.

With Fylgja many of our CSS Component ship with start and end features,
that are already supported in all moderne browsers.

So working with Fylgja means, you can create component and it is already RTL aware,
without any tools or extra classes.
