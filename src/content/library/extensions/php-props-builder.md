---
title: "Props Builder for PHP"
pageTitle: "Fylgja Props Builder for PHP"
description: "Generate Design Tokens (CSS custom properties) from PHP arrays or JSON files, with the same output as the Node version."
composer: "fylgja/props-builder"
git: "https://github.com/fylgja/php-props-builder"
sortOrder: 11
keywords: ["php", "composer", "inline style", "magento", "laravel"]
faq:
  - question: Is the output the same as the Node version?
    answer: Yes. Every release matches the Node release with the same version
      number, and CI runs a shared set of cases through both versions and fails
      on any difference in the output. The only difference is the order of
      some properties, since JavaScript sorts integer keys of an object first.
  - question: Why is my scale keyed from 0 joined with commas?
    answer: A PHP array keyed 0, 1, 2 is a list, and lists are treated as value
      lists, the same as a JSON array. Pass the scale as an object, e.g.
      (object) ['#f8f9fa', '#f1f3f5'], or decode JSON files with json_decode()
      without the associative flag, so every JSON object stays a map.
  - question: Does it work in frameworks like Laravel or Magento 2?
    answer: Yes. It needs PHP 8.1 or newer and has no other dependencies, so it
      installs next to any framework. It does not print warnings or notices, so
      strict error handlers, like the one in Magento's developer mode, do not
      throw on it.
  - question: Where do the warnings for skipped dtcg tokens go?
    answer: To error_log() by default. Pass a callable as the onWarning option
      to handle them yourself, e.g. to send them to your framework's logger.
---

The Fylgja Props Builder for PHP converts PHP arrays or JSON files into CSS custom properties, SCSS variables or Design Token files.
It is a port of the [Node version](/library/extensions/props-builder/), so the same tokens can be built from backend logic without Node.

## Installation

```sh
composer require fylgja/props-builder
```

Requires PHP 8.1 or newer.

## Usage

```php
use Fylgja\PropsBuilder\PropsBuilder;

PropsBuilder::build(
    [
        'color' => [
            'red' => '#f00',
            'green' => '#0f0',
            'blue' => '#00f',
        ],
    ],
    'output.css',
);
```

This writes `output.css` with the following content:

```css
:where(:root) {
	--color-red: #f00;
	--color-green: #0f0;
	--color-blue: #00f;
}
```

`build()` always returns the generated output, so it can also be used without writing a file.

### Options

The options are named arguments, the same as the options object in the Node version.

```php
PropsBuilder::build(
    $props, // Required: array, object or (for Stitch input) a Markdown string.
    $filename, // Required: name of the output file, also picks the output format.
    parseAs: 'auto', // Output format, defaults to the format of the filename.
    writeToFile: true, // Write the output to $filename.
    selector: ':where(:root)', // CSS selector for the custom properties (css output only).
    wrapper: '', // Nests the Design Tokens under this key (e.g. for Figma).
    name: 'Design Tokens', // Name of the Design Tokens Resolver (dtcg output only).
    description: '', // Description of the Design Tokens Resolver (dtcg output only).
    banner: '', // Prepended to the output as is.
    inputTypeTokens: false, // Set to true if $props is a Design Tokens file.
    inputTypeSyntax: 'default', // Syntax of the input tokens: default, figma, style-dictionary or stitch.
    stripPrefix: '', // Dot/dash separated key path (or list of keys) to unwrap (e.g. 'tokens.values').
    rename: null, // Map of [currentKey => newKey], applied recursively (e.g. ['colors' => 'color']).
    onWarning: null, // Receives warnings, such as skipped dtcg tokens. Defaults to error_log().
);
```

Options can also be passed from an array with `PropsBuilder::build($props, $filename, ...$options)`.

The output formats and options work the same as in the Node version, see its [output formats](/library/extensions/props-builder/#output-formats) and [Design Tokens 2025.10](/library/extensions/props-builder/#to-design-tokens-202510) sections.

### Lists and scales

PHP arrays are both lists and maps, so a list is treated as a value list, the same as a JSON array.
A value list is joined with a comma, e.g. the layers of a shadow or a font stack.

```php
'shadow' => [
    1 => ['0 1px 2px #0002', '0 2px 4px #0002'], // --shadow-1: 0 1px 2px #0002, 0 2px 4px #0002;
],
```

A scale keyed from `0` is also a list in PHP. Pass it as an object to keep it a scale:

```php
'gray' => (object) ['#f8f9fa', '#f1f3f5', '#e9ecef'], // --gray-0, --gray-1, --gray-2
```

For JSON files, decode them as objects (the default of `json_decode()`), so every JSON object stays a map:

```php
$tokens = json_decode(file_get_contents('tokens.json'));

PropsBuilder::build($tokens, 'tokens.css', inputTypeTokens: true);
```

## Direct output

Set `writeToFile: false` to only get the output as a string, for example to render the tokens in a `<style>` tag.
The filename is still required, since it picks the output format, but nothing is written to it.

```php
<?php

use Fylgja\PropsBuilder\PropsBuilder;

$css = PropsBuilder::build(
    [
        'color' => [
            'primary' => '#1d4ed8',
            'surface' => '#ffffff',
        ],
        'radius' => '0.5rem',
    ],
    'tokens.css',
    writeToFile: false,
);
?>
<style><?= $css ?></style>
```

Instead of a filename with the right extension, you can also set the format with `parseAs`, e.g. `PropsBuilder::build($props, 'inline', parseAs: 'css', writeToFile: false)`.

To scope the tokens to a part of the page, such as a theme picked in the backend, set the `selector`:

```php
$css = PropsBuilder::build(
    $brandTokens,
    'tokens.css',
    writeToFile: false,
    selector: '[data-theme="brand"]',
);
```

Every output format works this way.
For example, `parseAs: 'json'` or `parseAs: 'css-jit'` gives the tokens as JSON, to pass them to JavaScript in a `<script type="application/json">` tag.

> [!Important]
> The output is not escaped for HTML.
> If the token values come from user input, such as colors set in an admin panel, a value containing `</style>` can break out of the tag.
> Validate those values, or escape the `<` character before printing the output:
> `str_replace('<', '\3C ', $css)` for CSS, and `str_replace('<', '<', $json)` for JSON.

### Use case: a theme set in the backend

A common case is letting store owners or editors pick the brand colors in an admin panel.
The default tokens stay in your stylesheet, and only the brand values are built per request and printed in the page head.

```php
<?php

use Fylgja\PropsBuilder\PropsBuilder;

$settings = loadThemeSettings(); // e.g. from the database or a config file

$theme = [
    'color' => [
        'primary' => $settings['primary'],
        'surface' => $settings['surface'],
    ],
    'color-@media:dark' => [
        'primary' => $settings['primary_dark'],
        'surface' => $settings['surface_dark'],
    ],
];

$css = PropsBuilder::build($theme, 'theme.css', writeToFile: false);
?>
<head>
    <link rel="stylesheet" href="/css/app.css">
    <style><?= str_replace('<', '\3C ', $css) ?></style>
</head>
```

The `-@media:dark` group becomes a dark mode block with the same custom property names:

```css
:where(:root) {
	--color-primary: #1d4ed8;
	--color-surface: #ffffff;
}

@media (prefers-color-scheme: dark) {
	:where(:root) {
		--color-primary: #93c5fd;
		--color-surface: #0f172a;
	}
}
```

Print the `<style>` tag after the stylesheet. Both use the same selector, so the one that comes last wins.

When the settings rarely change, you can also build a file once when they are saved, instead of on every request.
The browser can then cache it like any other stylesheet:

```php
PropsBuilder::build($theme, __DIR__ . '/public/css/theme.css');
```
