---
title: "Accessibility"
description: "Fylgja is out of the box fully A11Y ready."
---

All Fylgja Packages are out of the box fully accessible.

So any of the styling from Fylgja will not negatively impact the Accessible of your page,
by providing good default for typography, focus management and respsecting the touch and click sizes.

Next to this Fylgja tries to enforce the best practices in your HTML by using the HTML attributes for setting the state of specific CSS components and CSS utilities instead of using classes.

For example we use the `aria-current="page"` when building a pagination or breadcrumbs:

```html
<nav aria-label="breadcrumbs">
	<ol class="breadcrumbs">
		<li><a href="/">Fylgja</a></li>
		<li><a href="/docs">docs</a></li>
		<li><a href="/docs/core-concepts">Core Concepts</a></li>
		<li><a aria-current="page" href="/docs/core-concepts/accessibility">Accessibility</a></li>
	</ol>
<nav>
```

Another advantage of this pattern is to reduce mental load,
since you only need to remember the right HTML not all of the class names used by other frameworks for the same effect.

We have whole set of [Fylgja UI components](/ui) ready to be copypasted, that are made with Accessability in mind.
