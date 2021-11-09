---
title: "Stylelint Config - LESS"
description: "A sharable stylelint config object that enforces Fylgja's LESS CSS rules."
npm: "@fylgja/stylelint-config"
preview: "stylelint.png"
permalink: "/components/stylelint-config/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Stylelint Config: "/components/stylelint-config/",
}
currentBreadcrumbTitle: "LESS"
---

> ⚠️ The LessCSS feature has been dropped since version 4 of the `@fylgja/stylelint-config`,
> 
> Use the CSS version or use any version before this version.

There no specific rules set for LESS, since we don't use with LESS anymore.

If you find any rules that conflict with your LESS code, 
please share those with us, so we can add/fix this in our rules.

For all that, there are some rules set here,
they unset some rules that conflict with the LESS code.

## Usage

Same as for the main stylelint config,
but now add less to the end to also load these rules.

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
