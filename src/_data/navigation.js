const { socials } = require("./meta");
const githubUrl = `https://github.com/fylgja/fylgja`;
const twitterUrl = `https://twitter.com/${socials.twitter}`;
const devToUrl = `https://dev.to/${socials.devTo}`;

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
            icon: "github",
            text: "View on Github",
            url: githubUrl,
            external: true,
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
    ],
    socials: [
        {
            icon: "github",
            text: "Github",
            url: githubUrl,
            external: true,
        },
        {
            icon: "twitter",
            text: "Twitter",
            url: twitterUrl,
            external: true,
        },
        {
            icon: "devto",
            text: "dev.to",
            url: devToUrl,
            external: true,
        },
    ],
    intro: [
        {
            icon: "download",
            text: "Download Fylgja",
            url: "/download/",
        },
        {
            icon: "code",
            text: "Components",
            url: "/components/",
        },
        {
            icon: "github",
            text: "View on Github",
            url: githubUrl,
            external: true,
        },
    ],
};
