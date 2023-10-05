const { socials } = require("./meta");
const { github, twitter, mastodon, devTo } = socials;

module.exports = {
    main: [
        {
            text: "Get started",
            url: "/getting-started/",
        },
        {
            text: "Guides",
            url: "/guides/",
        },
        {
            text: "Components",
            url: "/components/",
        },
    ],
    about: [
        {
            text: "About us",
            url: "/about/",
        },
        {
            text: "Support us",
            url: "/support/",
        },
        {
            text: "All components",
            url: "/components/",
        },
        {
            text: "Get Fylgja",
            url: "/download/",
        },
    ],
    support: [
        {
            text: "Get started",
            url: "/getting-started/",
        },
        {
            text: "Guides",
            url: "/guides/",
        },
        {
            text: "Starter projects",
            url: "/starter-projects/",
        },
        {
            text: "Changelog",
            url: "https://github.com/fylgja/fylgja/releases/",
            external: true,
        },
    ],
    socials: [
        {
            icon: github.icon,
            text: github.name,
            url: github.url,
        },
        {
            icon: mastodon.icon,
            text: mastodon.name,
            url: mastodon.url,
        },
        {
            icon: twitter.icon,
            text: twitter.name,
            url: twitter.url,
        },
        {
            icon: devTo.icon,
            text: devTo.name,
            url: devTo.url,
        },
    ],
    home: [
        {
            text: "Get Started",
            alt: "Get started with Fylgja",
            url: "/getting-started/",
            classList: "hidden xs-inline-flex",
        },
        {
            text: "Guides",
            alt: "View all of Fylgja's Guides",
            url: "/guides/",
        },
        {
            text: "Components",
            alt: "View all of Fylgja's Components, Utilities and Design Tokens",
            url: "/components/",
        },
        {
            text: "Try in browser",
            url: "https://stackblitz.com/edit/fylgja-playground",
            external: true,
            classList: "hidden md-inline-flex",
        },
    ],
};
