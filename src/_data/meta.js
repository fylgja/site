const { version } = require("../../package.json");
const isProd = process.env.ELEVENTY_ENV === "prod";
const cacheHash = isProd ? version : "dev";

const metaEnv = {
    isProd,
    input: "src",
    output: "_site",
    url: isProd ? "https://fylgja.dev" : "http://localhost:8080",
    hash: "?=v" + cacheHash,
    componentsMedia: "./src/components/images/",
};

module.exports = {
    ...metaEnv,
    author: "Fylgja",
    siteName: "Fylgja",
    siteDescription:
        "Fylgja is your CSS front-end framework for building your own websites or webapps using modular and customizable CSS components, by loading only what you need.",
    email: "info@fylgja.dev",
    phone: false,
    address: false,
    socials: {
        mastodon: {
            name: "Mastodon",
            icon: "mastodon",
            url: "https://fosstodon.org/@fylgja",
            user: "@fylgja",
        },
        twitter: {
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/FylgjaDev",
            user: "FylgjaDev",
        },
        github: {
            name: "Github",
            icon: "github",
            url: "https://github.com/fylgja",
            user: "fylgja",
        },
        devTo: {
            name: "dev.to",
            icon: "devto",
            url: "https://dev.to/fylgja",
            user: "fylgja",
        },
    },
    themeColor: "#1565c0",
    themeColorDark: "#08274a",
};
