---
title: "Stylelint Config - SCSS"
description: "A sharable stylelint config object that enforces Fylgja's SCSS/SASS CSS rules."
npm: "@fylgja/stylelint-config"
preview: "stylelint.png"
permalink: "/components/stylelint-config/{{ page.fileSlug }}/"
breadcrumbs: {
    Components: "/components/",
    Stylelint Config: "/components/stylelint-config/"
}
currentBreadcrumbTitle: "SCSS"
---

Extra rules for when you use SCSS.

## Usage

Same as for the main stylelint config.
But now add scss to the end to also load these rules.

```json
{
  "extends": "@fylgja/stylelint-config/scss"
}
```

## List of Rules

For information on what each rule does.
[Checkout the SCSS Stylelint plugin DOC](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules).

**@else**

- `at-else-closing-brace-newline-after`: always-last-in-chain
- `at-else-closing-brace-space-after`: always-intermediate
- `at-else-empty-line-before`: never
- `at-else-if-parentheses-space-before`: always

**@extend**

- `at-extend-no-missing-placeholder` true

**@function**

- `at-function-parentheses-space-before`: never

**@if**

- `at-if-closing-brace-newline-after`: always-last-in-chain
- `at-if-closing-brace-space-after`: always-intermediate
- `at-if-no-null`: true

**@import**

- `at-import-no-partial-leading-underscore`: true

**@mixin**

- `at-mixin-argumentless-call-parentheses`: never
- `at-mixin-parentheses-space-before`: never
- `no-duplicate-mixins`: true

**At-rule**

- `at-rule-no-unknown`: true
  - _Unsets core rule `at-rule-no-unknown`_

**$variable**

- `dollar-variable-colon-newline-after`: null
  - _should be always-multi-line but it has a bug with maps_
- `dollar-variable-colon-space-after`: always-single-line
- `dollar-variable-colon-space-before`: never
- `dollar-variable-first-in-block`: true
  - ignore: comments, imports
- `dollar-variable-no-missing-interpolation`: true

**Function**

- `function-color-relative`: true
  - severity: warning
  - _Use the new scss color functions instead!_

**Declaration**
- `declaration-nested-properties-no-divided-groups`: true

**Comments**

- `comment-no-empty`: always
  - severity: warning
- `double-slash-comment-whitespace-inside`: always

**Media feature**

- `media-feature-value-dollar-variable`: true
  - severity: warning

**Operator**

- `operator-no-newline-after`: null
- `operator-no-newline-before`: true
- `operator-no-unspaced`: null

**Selector**

- `selector-no-redundant-nesting-selector`: true,
