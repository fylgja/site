const { socials } = require("./meta");
const { github, twitter, mastodon } = socials;

module.exports = [
    {
        title: "GitHub Discussions",
        text: 'Questions or Support<br class="hidden lg-block">ask them in the community.',
        url: `${github.url}/fylgja/discussions`,
        icon: github.icon,
        iconStyle: {
            bg: "#181717",
            color: "#fff",
        },
    },
    {
        title: mastodon.name,
        text: `Follow the Fylgja ${mastodon.name} account<br class="hidden lg-block">for news and updates.`,
        url: mastodon.url,
        icon: mastodon.icon,
        iconStyle: {
            bg: "#6364FF",
            color: "#fff",
        },
    },
    {
        title: twitter.name,
        text: `Follow the Fylgja ${twitter.name} account<br class="hidden lg-block">for news and updates.`,
        url: twitter.url,
        icon: twitter.icon,
        iconStyle: {
            bg: "#1da1f2",
            color: "#fff",
        },
    },
];
