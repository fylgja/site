# Fylgja LLM Context

This document provides context for LLMs working with the Fylgja CSS library, a modular CSS library that emphasizes native HTML, design tokens, and dynamic utilities.

**GitHub Repository:** [https://github.com/fylgja/fylgja](https://github.com/fylgja/fylgja)

## Packages

Fylgja is built on native HTML, not on utility classes for every value. Classes like `my-4` or `justify-center` do not exist. Read the reference for the part you are working on, it lists the real classes, variables, and imports.

- **Fylgja Base**: classless defaults for HTML, with an optional theme. [Docs](https://fylgja.dev/library/base/), [reference](https://raw.githubusercontent.com/fylgja/skills/main/skills/fylgja-css/references/base.md)
- **Fylgja Tokens**: design tokens as CSS variables. [Docs](https://fylgja.dev/library/tokens/), [reference](https://raw.githubusercontent.com/fylgja/skills/main/skills/fylgja-css/references/tokens.md)
- **Fylgja Utilities**: utilities tuned with CSS variables instead of new classes. [Docs](https://fylgja.dev/library/utilities/), [reference](https://raw.githubusercontent.com/fylgja/skills/main/skills/fylgja-css/references/utilities.md)

## Components

Fylgja embraces native HTML over heavy, class-based component structures. Instead of relying on complex custom classes for every component, it leverages **Fylgja Base** styles applied to semantic HTML elements.

- **GitHub**: [https://github.com/fylgja/fylgja/tree/main/components](https://github.com/fylgja/fylgja/tree/main/components)
- **Native HTML First**: For example, a **Button** actually uses the Fylgja Base directly. By simply using the native `<button>` element or adding the `.btn` class to an `<a>` tag, you inherit the Fylgja Base styles without needing a dedicated component library import.
- **Styling**: For visual styling of these components, you can reference the **Fylgja Base Theme** import (`@fylgja/base/theme.css`). The theme provides the actual colors, dark mode support, and interactive states (like primary button styles) on top of the base HTML functionality.
- **Reference**: [https://raw.githubusercontent.com/fylgja/skills/main/skills/fylgja-css/references/components.md](https://raw.githubusercontent.com/fylgja/skills/main/skills/fylgja-css/references/components.md)
- **Custom Components**: For UI elements not covered by native HTML, Fylgja provides lightweight CSS components that follow the same token-driven design principles:
{{components}}

## UI Components

Copy and paste recipes for common interface patterns, built from native HTML, Fylgja Base, the utilities, and the components above. They are the best reference for how Fylgja is meant to be written: native elements first (`<dialog>`, `<details>`, the Popover API, invoker commands), classless markup, and dynamic utilities set through inline CSS variables instead of Tailwind style classes.

- **Gallery**: [https://fylgja.dev/ui](https://fylgja.dev/ui)
- **Source**: Each component is a folder in [https://github.com/fylgja/site/tree/main/src/content/ui](https://github.com/fylgja/site/tree/main/src/content/ui), with its docs in `index.mdx` and the plain HTML demos beside it (`example.html`, plus `example.css` or `example.js` when a component needs them). The raw demo files are the quickest way to get working markup.

{{ui}}

## Extensions

Optional integrations that connect Fylgja to other tools and workflows.

{{extensions}}

## Documentation

{{docs}}

## FAQ

Every package, component, and docs page has its own FAQ, present as a `faq` field in that
page's frontmatter when reading the raw markdown source directly, so you don't need to fetch
a separate page to get it. For general questions about Fylgja as a whole (not tied to a
specific package), see [Frequently Asked Questions](https://fylgja.dev/faq).
