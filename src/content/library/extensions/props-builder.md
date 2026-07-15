---
title: "Props Builder"
pageTitle: "Fylgja Props Builder"
description: "Effortlessly generate Design Tokens (CSS custom properties) from JavaScript objects or JSON files."
npm: "@fylgja/props-builder"
git: "https://github.com/fylgja/fylgja/tree/main/props-builder"
faq:
  - question: Do I need inputTypeTokens for a plain key-value JSON file?
    answer: No. Plain key-value JSON/JS objects (like the color example above) work
      with the default options; inputTypeTokens is only needed when your input
      already follows a design-token spec format (W3C Design Tokens or Figma
      Tokens).
  - question: Can I generate SCSS or JS output instead of CSS?
    answer: The filename argument's extension determines the output format when
      parseAs is left as "auto". For an explicit format, set parseAs directly;
      your editor's autocomplete (via the package's types) will show you the
      full list of accepted values as you type.
  - question: How are nested objects turned into variable names?
    answer: 'Nested keys are joined with a dash, so { color: { red: "#f00" } }
      becomes --color-red: #f00;. This applies recursively, so deeper nesting
      follows the same dash-joined pattern.'
  - question: What values can the wrapper option take?
    answer: This page only describes what wrapper is for, not the full list of
      accepted values. Your editor's autocomplete (via the package's types)
      will show you the options as you type.
  - question: Does propsBuilder overwrite an existing output file?
    answer: Yes, silently. It writes with a default flag that creates or truncates
      the file, with no check for whether it already exists.
  - question: If I set both stripPrefix and rename, which one runs first?
    answer: stripPrefix runs first, then rename is applied to whatever keys remain.
  - question: What exactly does the Figma "redundant nested color group" unwrapping do?
    answer: 'It only fires when a color or colors key directly contains another
      color or colors key nested one level inside it, and it drops the inner
      one. For example, { colors: { color: { primary: "#1d4ed8" } } } becomes
      --colors-primary, not --colors-color-primary. Any other nested group
      name is left as-is.'
---

The Fylgja Props Builder simplifies the creation of Design Tokens (CSS custom properties)
by converting JavaScript objects or JSON files into CSS variables or other token formats.

This tool empowers you to construct comprehensive Design Token sets with ease.

## Installation

You can install Fylgja Props Builder via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/props-builder
```

## Usage

### Basic Usage with JavaScript

Import the propsBuilder function into your Node.js scripts:

```js
import { propsBuilder } from "@fylgja/props-builder";
```

Then, use it to generate output files based on your configuration:

```js
import { propsBuilder } from "@fylgja/props-builder";

propsBuilder(
	props, // Required: JavaScript object containing your design tokens.
    filename, // Required: Name of the output file.
    {
        parseAs: "auto", // Optional: Specifies the output format. Defaults to "auto".
        writeToFile: true, // Optional: If false, outputs the generated content to the console. Defaults to true.
        selector: ":where(:root)", // Optional: CSS selector for custom property declarations (CSS output only).
        wrapper: "", // Optional: Wrapper for design system-specific formatting (e.g., Figma).
        banner: "", // Optional: Prepended to the output as-is, e.g. for a license header.
        inputTypeTokens: false, // Optional: Set to true if the input `props` are in a design token format. Defaults to false.
        inputTypeSyntax: "default", // Optional: Specifies the syntax of the input tokens if `inputTypeTokens` is true.
        stripPrefix: "", // Optional: Dot/dash separated key path (or array of keys) to unwrap, dropping wrapping keys (e.g. "tokens.values").
        rename: null, // Optional: Map of `{ [currentKey]: newKey }` applied recursively, to align naming (e.g. `{ colors: "color" }`).
    }
)
```

For basic usage, only the `props` and `filename` arguments are necessary.

The optional parameters provide flexibility for advanced scenarios.

```js
import { propsBuilder } from "@fylgja/props-builder";

propsBuilder(
	{
		color: {
			red: "#f00",
			green: "#0f0",
			blue: "#00f",
		}
	},
	"output.css"
);
```

This will generate output.css with the following content:

```css
:where(:root) {
	--color-red: #f00;
	--color-green: #0f0;
	--color-blue: #00f;
}
```

This example demonstrates a simple use case with a plain JavaScript object.

For more advanced scenarios, including how to use different JSON file formats, see the "From Design Tokens to CSS" section below.

### From Design Tokens to CSS

Using the Props Builder with a JSON file is a common use case. The process is straightforward, with a small adjustment depending on the format of your JSON file.

#### 1. Create your Design Tokens file

Your JSON file can be a simple key-value object, or it can follow a standard format like the W3C Design Tokens spec, the format exported by the Figma Tokens plugin, or a Markdown export from [Google Stitch](https://stitch.withgoogle.com/). Exports from other AI design tools, such as [Claude Design](https://claude.com/product/design), tend to work too, as long as they're reduced to a plain key-value JSON or one of the formats above.

#### 2. Create a build script

Create a Node.js script (e.g., `build.js`) to read your tokens file and run the builder.

```js
import { readFileSync } from "node:fs";
import { propsBuilder } from "@fylgja/props-builder";

// Read and parse the JSON file
const tokens = JSON.parse(readFileSync("path/to/your/tokens.json", "utf-8"));

// 👇 Configure the builder based on your token format
const options = {
    // inputTypeTokens: ...,
    // inputTypeSyntax: ...,
};

// Build the CSS file
propsBuilder(tokens, "tokens.css", options);

console.log("Successfully built tokens.css!");
```

#### 3. Configure the builder

The key step is to configure the `options` object based on your JSON file's format.

* **For a simple, key-value JSON file:**
    You don't need any special options. The builder handles it by default.
    ```js
    const options = {};
    ```

* **For a W3C Design Tokens spec file:**
    Set `inputTypeTokens` to `true`.
    ```js
    const options = { inputTypeTokens: true };
    ```

* **For a Figma Tokens file:**
    Set `inputTypeTokens` to `true` and `inputTypeSyntax` to `'figma'`.
    ```js
    const options = {
        inputTypeTokens: true,
        inputTypeSyntax: "figma"
    };
    ```
    Figma exports commonly wrap tokens in nested structural groups. Only a top-level `other` group and a
    redundant nested color group are unwrapped automatically; for any other group, use the `stripPrefix`
    and `rename` options to unwrap and rename keys to your own naming convention.

* **For a [Google Stitch](https://stitch.withgoogle.com/) Markdown export:**
    Set `inputTypeTokens` to `true` and `inputTypeSyntax` to `'stitch'`, and pass the raw Markdown file
    content (a string) as `props` rather than a parsed object. Only the YAML frontmatter is used, and
    every key in it is converted to tokens, except for known metadata keys (`name`, `description`). The
    `colors` group is automatically renamed to the singular `color` (unless a `color` group already exists).
    ```js
    const options = {
        inputTypeTokens: true,
        inputTypeSyntax: "stitch"
    };
    ```

#### 4. Run the build script

Finally, run your script from the terminal:

```sh
node build.js
```

This will generate a `tokens.css` file with your design tokens converted to CSS Custom Properties.

## Also used in

- [Hyvä Themes Tailwind Utilities](https://github.com/hyva-themes/hyva-modules-tailwind-js)

_Have you used the Fylgja Props Builder in your own package? Let us know on GitHub or social media, and we might feature it here!_
