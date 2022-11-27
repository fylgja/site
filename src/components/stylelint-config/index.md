---
title: "Stylelint Config"
description: "A sharable stylelint config object that enforces Fylgja's CSS rules."
npm: "@fylgja/stylelint-config"
git: "stylelint-config"
gitDomain: "https://github.com/fylgja/"
tags: ["addons"]
preview: "stylelint.png"
order: 11
---

A sharable stylelint config object that enforces Fylgja's CSS rules.

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

_SCSS, Tailwind and Inline CSS support found under the [Extra Syntax Support](#extra-syntax-support)_

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

## Extra Syntax Support

The core rules take some preprocessors rules in account,
if they do not impact any CSS defaults.

For better support pre-processors and post-processors support,
use the following options below.

### SCSS

This adds support for Sass (scss syntax) support.

To include these rules, add `scss` to the end of the extend path;

```json
{
    "extends": "@fylgja/stylelint-config/scss",
}
```

[For more infomation checkout the SCSS Doc on fylgja.dev.](/stylelint-config/scss/)

### TailwindCSS

This adds support for TailwindCSS functions in CSS.

To include these rules, add `tailwind` to the end of the extend path;

```json
{
    "extends": "@fylgja/stylelint-config/tailwind",
}
```

### CSS Order

There are no rules,
since we do feel there should be a form flexibility on that part.

But we do follow a specific style of ordering for our CSS,
it's is described in our [CSS order DOC at fylgja.dev](/stylelint-config/order/).

### Inline CSS support (HTML and more)

Any of the Fylgja Stylelint Config options will, as of v5.0 also check any inline CSS by default.

This done thx to the Stylelint plugin [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html).

This plugin will add support to check your project not just for errors in CSS files,
but also checks in the style tags in your HTML.

_You can opt out of this behavior by using the rules directly,_
_found in the rules folder._

## Rules

All rules are base on the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-standard),
you should also checkout the rules set there.

Down here are only the rules we have set.

_We have not set any [allowed/disallowed]-list values._
_it's better to set those project specific, if needed._

**At-rule**

- `at-rule-empty-line-before`: always
  - except: blockless-after-same-name-blockless, first-nested
  - ignore: after-comment, inside-block
  - ignoreAtRules: import, if, else
- `at-rule-no-vendor-prefix`: true
- `at-rule-semicolon-space-before`: never
  - _If there was a option for never, it would be never_

**Block**

- `block-closing-brace-newline-after`: always-multi-line
  - ignoreAtRules: if, else
- `block-closing-brace-newline-before`: always-multi-line
- `block-opening-brace-space-before`: always
  - ignoreAtRules: if, else

**Color**

- `alpha-value-notation`: null
- `color-hex-case`: lower
- `color-hex-length`: short

**Comment**

- `comment-empty-line-before`: always
  - except: first-nested
  - ignore: after-comment, stylelint-commands

**Custom Property**

- `custom-property-empty-line-before`: never

**Declaration**

- `declaration-block-no-redundant-longhand-properties`: true
- `declaration-block-semicolon-newline-before`: never-multi-line
- `declaration-block-trailing-semicolon`: always
  - ignore: single-declaration
- `declaration-colon-newline-after`: null
  - _Works better with Prettier and does not always makes sense anyway._
    _So giving freedom to the dev._
- `declaration-empty-line-before`: never
- `declaration-no-important`: true

**Font family**

- `font-family-no-duplicate-names`: true
  - severity: warning
- `font-family-no-missing-generic-family-keyword`: true
  - severity: warning

**Function**

- `function-name-case`: lower
  - ignoreFunctions: _Starting with: get, (e.g getColor)_
- `function-url-no-scheme-relative`: true

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

**Media**

- `media-feature-name-no-unknown`: true
  - severity: warning
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

- `selector-class-pattern`: ^(?:[a-z]|-)([a-z0-9]*)(-[a-z0-9]+)*$
- `selector-list-comma-newline-before`: never-multi-line
- `selector-list-comma-space-after`: always-single-line
- `selector-max-attribute`: 2
- `selector-max-class`: 4
- `selector-max-compound-selectors`: 4
- `selector-max-empty-lines`: 0,
- `selector-max-id`: 1
- `selector-max-type`: 2
- `selector-max-universal`: 2
- `selector-no-qualifying-type`: true
  - ignore: attribute, class
- `selector-type-no-unknown`: true
  - severity: warning

**Value**

- `value-keyword-case`: lower
  - ignoreProperties: with the name `family`
  - _Font families may have uppercase letters_
- `value-list-comma-newline-after`: null,
- `value-list-comma-newline-before`: never-multi-line
- `value-no-vendor-prefix`: true
  - ignoreValues: tap-highlight-color
