---
title: "Stylelint Config - LESS"
description: "A sharable stylelint config object that enforces Fylgja's CSS rules."
npm: "@fylgja/stylelint-config"
tags: ["config", "plugins"]
preview: "stylelint.png"
permalink: "/components/stylelint-config/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Stylelint Config: "/components/stylelint-config/",
}
eleventyExcludeFromCollections: true,
---

There no specific rules set for LESS.
And we don't really work with LESS anymore.

If there are still rules that conflict with your LESS code.
Than please share with us what.
So we can add this to our rules.

That said there are some rules set here,
that unset some rules that conflict with the LESS code.

## Usage

Same as for the main stylelint config.
But now add less to the end to also load these rules.

```json
{
  "extends": "@fylgja/stylelint-config/less"
}
```

## List of Rules

**At-rule**

- `at-rule-no-unknown`: true
  - ignoreAtRules: plugin
  - severity: warning

**Media feature**

- media-feature-name-no-unknown: null
  - _Error for LESS variables_

**General / Sheet**

- `no-extra-semicolons`: null
  - _Error for rulesets_

**Selector**

- `selector-max-compound-selectors`: 6
  - _Give a little more space to use LESS mixin's_
- `selector-max-id`: 1
  - _Allows the use of LESS Maps_
