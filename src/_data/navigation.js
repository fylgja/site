const { socials } = require("./meta");
const GithubUrl = `https://github.com/${socials.github}`;
const TwitterUrl = `https://twitter.com/${socials.twitter}`;

module.exports = {
    main: [
        {
            text: "Get started",
            url: "/getting-started/",
        },
        {
            text: "Components",
            url: "/components/",
        },
        {
            icon: "/src/_static/icons/socials/github.svg",
            text: "Fylgja on Github",
            url: GithubUrl,
            external: true,
        },
        {
            icon: "/src/_static/icons/socials/twitter.svg",
            text: "Fylgja on Twitter",
            url: TwitterUrl,
            external: true,
        },
    ],
    about: [
        {
            text: "About us",
            url: "/about/",
        },
        {
            text: "Support",
            url: "/support/",
        },
        {
            text: "Components",
            url: "/components/",
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
    ],
    socials: [
        {
            icon: "/src/_static/icons/socials/github.svg",
            text: "Github",
            url: GithubUrl,
            external: true,
        },
        {
            icon: "/src/_static/icons/socials/twitter.svg",
            text: "Twitter",
            url: TwitterUrl,
            external: true,
        },
    ],
    intro: [
        {
            icon: "/src/_static/icons/download.svg",
            text: "Download Fylgja",
            url: "/download/",
        },
        {
            icon: "/src/_static/icons/code.svg",
            text: "Components",
            url: "/components/",
        },
        {
            icon: "/src/_static/icons/socials/github.svg",
            text: "View on Github",
            url: GithubUrl,
            external: true,
        },
    ],
};
