# Fylgja.dev Website

[![Fylgja](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffylgja%2F.github%2Frefs%2Fheads%2Fmain%2Fassets%2Fbadge%2Fv1.0.0.json)](https://fylgja.dev/)

This repository contains the source code for the official Fylgja website and documentation,
available at [fylgja.dev](https://fylgja.dev).

The site is built with [Astro](https://astro.build/)
and serves as a comprehensive resource for the [Fylgja CSS library](https://github.com/fylgja/fylgja),
which is in a separate repository.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm (see `.nvmrc` for the recommended version)

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/fylgja/site.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```

## 💻 Development

To start the development server, run the following command:

```sh
npm start
```

This will start a local development server, typically at `http://localhost:4321`.

## 📜 Available Scripts

In the project directory, you can run:

-   `npm start` or `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the static site for production to the `dist/` folder.
-   `npm run preview`: Serves the production build locally to preview changes.

## 📂 Project Structure

Here is a brief overview of the project's directory structure:

-   `src/pages`: Contains the site's pages.
-   `src/layouts`: Contains page layouts.
-   `src/components`: Contains reusable Astro components.
-   `src/content`: Contains Markdown content for documentation and the blog.
-   `public/`: Contains static assets that are copied directly to the build output.

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

Please read our [contributing.md](./.github/contributing.md)
for details on our code of conduct and the process for submitting pull requests.
