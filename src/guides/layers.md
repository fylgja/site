---
title: "CSS Layers"
description: "CSS layers to tame specificity"
draft: true
eleventyExcludeFromCollections: true
---

CSS recently introduced a new feature called layers to the cascade specification.

This important feature allows more granularity and control over CSS specificity and overrides, especially when discussing shared libraries and design systems.

Layers allow authors and Wanda consumers to define specificity layers independently from when a specific style appears on the page and the parsing order.

Here is a quick example, in the code belove, if we remove the @layer reset declaration the p element would be blue. Still, since the browser parses the CSS placed outside any layer (implicit final layer) after all the styles coming from layers, the p element is red even if p[data-blue] has higher specificity.
