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
            url: GithubUrl,
            external: true,
        },
        {
            icon: "twitter",
            text: "Twitter",
            url: TwitterUrl,
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
            url: GithubUrl,
            external: true,
        },
    ],
};
