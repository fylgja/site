# Fylgja Site Project Context

This document provides context for the Fylgja website project, helping to ensure that future interactions are informed and consistent with the project's conventions.

## Project Overview

The Fylgja website is built with [Astro](https://astro.build/) and serves as the official documentation and marketing site for the Fylgja CSS library. The site is configured to be a static site, with content written in Markdown.

## Tech Stack

*   **Framework**: Astro
*   **Language**: TypeScript
*   **Styling**: Fylgja CSS library, with some additional custom CSS.
*   **Package Manager**: npm

## Project Structure

*   `src/pages`: Contains the pages of the site. Each `.astro` or `.md` file in this directory becomes a page on the site.
*   `src/layouts`: Contains the layouts for the pages. Layouts are used to wrap content and provide a consistent look and feel.
*   `src/components`: Contains reusable Astro components.
*   `src/content`: Contains the Markdown content for the documentation and blog.
*   `site.config.ts`: Contains the main configuration for the site, such as the site name, description, and social media links.
*   `astro.config.js`: Contains the configuration for Astro, including integrations and Markdown settings.
*   `tsconfig.json`: Contains the configuration for TypeScript, including path aliases.

## Conventions

*   **Imports**: Use path aliases defined in `tsconfig.json` for imports within the `src` directory. For example, use `@/components/MyComponent.astro` instead of `../components/MyComponent.astro`.
*   **Site Configuration**: The site configuration is stored in `site.config.ts`. When you need to access site-wide information, import it from this file.
*   **Styling**: The site uses the Fylgja CSS library. When adding new styles, try to use Fylgja's utility classes and components as much as possible.
*   **Components**: Create reusable components for any UI elements that are used in multiple places.
*   **Markdown Content**: When creating or editing Markdown files (`.md`), if the file includes a `title` in its frontmatter, do not add a separate H1 heading (e.g., `# My Title`) in the body of the document. The layout templates will automatically render the title from the frontmatter.
*   **Deadlines**: Avoid adding any time-based commitments, such as response times, to the content.

## Available Scripts

*   `npm start` or `npm run dev`: Starts the development server.
*   `npm run build`: Builds the site for production.
*   `npm run preview`: Previews the production build.
