const { version } = require("../../package.json");
const url =
    process.env.ELEVENTY_ENV === "prod"
        ? "https://fylgja.dev"
        : "http://localhost:8080";

module.exports = {
    env: process.env.ELEVENTY_ENV,
    version,
    output: "_site",
    input: "src",
    url,
    themeColor: "#1565c0",
    themeColorDark: "#08274a",
    siteName: "Fylgja",
    siteDescription:
        "Fylgja is your CSS front-end framework for building your own websites or webapps using modular and customizable CSS components, by loading only what you need.",
    author: "Fylgja",
    email: "info@fylgja.dev",
    phone: false,
    address: false,
    socials: {
        twitter: "FylgjaDev",
        github: "fylgja",
    },
    componentsMedia: "./src/components/images/",
};
