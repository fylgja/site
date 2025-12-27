---
title: "Accessibility"
description: "Fylgja CSS is out of the box fully A11Y ready."
sortOrder: 9
---

All Fylgja CSS packages are designed to be fully accessible right out of the box.

The styling provided by Fylgja CSS will not negatively impact the accessibility of your website,
ensuring best practices for typography, focus management, and appropriate touch/click sizes.

In addition to offering accessible styles,
Fylgja CSS promotes the use of proper HTML attributes to manage state and behavior for CSS components and utilities,
rather than relying solely on class names.

This helps enforce accessibility best practices directly in your markup.

## Accessible HTML Patterns

For example, when building a pagination or breadcrumb navigation,
we use the `aria-current="page"` attribute to indicate the current page:

```html
<nav aria-label="breadcrumbs">
	<ol class="breadcrumbs">
		<li><a href="/">Fylgja</a></li>
		<li><a href="/docs">Docs</a></li>
		<li><a href="/docs/core-concepts">Core Concepts</a></li>
		<li><a aria-current="page" href="/docs/core-concepts/accessibility">Accessibility</a></li>
	</ol>
</nav>
```

This approach not only improves accessibility but also simplifies your development process.

By using semantic HTML attributes,
you reduce the mental load of remembering complex class names often required by other frameworks,
allowing you to focus on proper HTML structure instead.

## Ready-to-Use Accessible Components

Fylgja CSS offers a wide range of [UI components](/ui) that are built with accessibility in mind.

These components are ready to be copied and pasted into your project,
giving you both an accessible and efficient starting point for your user interface.
