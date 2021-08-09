---
title: "Stylelint Config"
description: "A sharable stylelint config object that enforces Fylgja's CSS rules."
npm: "@fylgja/stylelint-config"
git: "stylelint-config"
gitDomain: "https://github.com/fylgja/"
tags: ["config", "plugins"]
preview: "stylelint.png"
---

A sharable stylelint config object that enforces Fylgja's CSS rules.

Extends [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard).

## Installation

```bash
npm install @fylgja/stylelint-config --save-dev
```

## Usage

If you've installed @fylgja/stylelint-config, just set your stylelint config to:

```json
{
  "extends": "@fylgja/stylelint-config"
}
```

_SCSS support found under the [Extensions](#extensions)_

## Extending

Simply add a `"rules"` key to your config,
then add your overrides and additions there.

```json
{
  "extends": "@fylgja/stylelint-config",
  "rules": {
    "rule-empty-line-before": [
        "always-multi-line", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }
    ],
  }
}
```

## Extensions

While the core rules already take preprocessors in account,

some times extra rules are needed,
to add support for a specific preprocessor.

### SCSS

We have added the stylelint plugin SCSS to better support SCSS styles

To include these rules, add `scss` to the end of the extend path 

```json
{
    "extends": "@fylgja/stylelint-config/scss",
}
```

[For more infomation checkout the SCSS DOC.](/components/stylelint-config/scss/)

### LESS

We have a super small config to unset some rules,
that conflict with the LESS naming.

```json
{
    "extends": "@fylgja/stylelint-config/less",
}
```

[For more infomation checkout the LESS DOC.](/components/stylelint-config/less/)

### Order

We do follow a specific style of ordering our code, it's is described in our [CSS order DOC](/components/stylelint-config/order/).

## Rules

For information on what each rule does.
[Checkout the original DOC](https://stylelint.io/user-guide/rules/)
or the rules folder on [Stylelint Github Page](https://github.com/stylelint/stylelint/tree/master/lib/rules).

Since we extend on the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard). You should also checkout the rules set there.

Down here are only the rules we have set.

_We have not set any [allowed/disallowed]-list values._
_it's better to set those project specific, if needed._

**At-rule**

- `at-rule-empty-line-before`: always
  - except: blockless-after-same-name-blockless, first-nested
  - ignore: after-comment, inside-block
  - ignoreAtRules: use, forward, import, if, else
- `at-rule-no-unknown`: true
  - ignoreAtRules: for, each, if, else, mixin, mixin-*, include, screen
    - _Includes support for PostCSS plugins and TailwindCSS_
- `at-rule-no-vendor-prefix`: true
- `at-rule-semicolon-space-before`: never
  - _If there was a option for never, it would be never_

**Block**

- `block-closing-brace-newline-after`: always-multi-line
  - ignoreAtRules: if, else
- `block-closing-brace-newline-before`: always-multi-line

**Color**

- `color-hex-case`: lower
  - _Lowercase letters are easier to distinguish from numbers_
- `color-hex-length`: short
- `color-no-invalid-hex`: true

**Comment**

- `comment-empty-line-before`: always
  - except: first-nested
  - ignore: after-comment, stylelint-commands

**Custom Property**

- `custom-property-empty-line-before`: never

**Declaration**

- `declaration-colon-newline-after`: null
  - _Works better with Prettier and does not always makes sense anyway._
    _So giving freedom to the dev._
- `declaration-block-no-redundant-longhand-properties`: true
- `declaration-block-semicolon-newline-before`: never-multi-line
  - _Would be never if this was an option_
- `declaration-empty-line-before`: never
- `declaration-no-important`: true

**Font family**

- `font-family-name-quotes`: always-where-recommended
  - severity: warning
- `font-family-no-missing-generic-family-keyword`: true
  - severity: warning

**Function**

- `function-name-case`: lower
  - ignoreFunctions: _Starting with: get, (e.g getColor)_
- `function-url-no-scheme-relative`: true
- `function-url-quotes`: always

**General / Sheet**

- `indentation`: 4
- `max-line-length`: 80
  - ignorePattern: URI's
  - severity: warning
- `max-nesting-depth`: 5
  - _5 allows easier setting of `if`'s and `mixins`._
  _The CSS dept is enforced via `selector-max`._
- `no-descending-specificity`: true
  - severity: warning
- `no-empty-first-line`: true

**Media**

- `media-feature-name-no-unknown`: true
  - severity: warning
- `media-feature-name-no-vendor-prefix`: true
- `media-query-list-comma-newline-before`: never-multi-line
  - _Would be never if this was an option_

**Number**

- `number-max-precision`: 5

> Notes about `number-leading-zero`.
> Just as Bootstrap & Google we support no leading zero's.
> 
> But since pretty much all compilers and prettier use leading zero's,
> we have kept the rule set to the default value.

**Property**

- `property-no-vendor-prefix`: true
  - ignoreProperties: appearance, text-size-adjust, tap-highlight-color

**Rule**

- `rule-empty-line-before`: always-multi-line
  - except: first-nested,
  - ignore: after-comment, inside-block

**Selector**

- `selector-attribute-quotes`: always
- `selector-list-comma-newline-before`: never-multi-line
  - _Would be never if this was an option_
- `selector-list-comma-space-after`: always-single-line
- `selector-max-attribute`: 2
- `selector-max-class`: 4
- `selector-max-compound-selectors`: 4
- `selector-max-empty-lines`: 0,
- `selector-max-id`: 0
- `selector-max-type`: 2
- `selector-max-universal`: 1
- `selector-no-qualifying-type`: true
  - ignore: attribute, class
- `selector-no-vendor-prefix`: true
- `selector-type-no-unknown`: true
  - severity: warning

**Shorthand property**

- `shorthand-property-no-redundant-values`: true

**String**

- `string-quotes`: double

**Value**

- `value-keyword-case`: lower
  - ignoreProperties: with the name `family`
  - _Font families may have uppercase letters_
- `value-list-comma-newline-before`: never-multi-line
- `value-no-vendor-prefix`: true
  - ignoreValues: tap-highlight-color
