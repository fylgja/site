const { socials } = require("./meta");
const GithubUrl = `https://github.com/fylgja/${socials.github}/discussions`;
const TwitterUrl = `https://twitter.com/${socials.twitter}`;

module.exports = [
    {
        title: "GitHub Discussions",
        text: 'Questions or Support<br class="hidden lg-block">ask them in the community.',
        url: GithubUrl,
        external: true,
        icon: "/src/_static/icons/socials/github.svg",
        iconStyle: {
            bg: "#181717",
            color: "#fff",
        },
    },
    {
        title: "Twitter",
        text: 'Follow the Fylgja Twitter account<br class="hidden lg-block">for news and updates.',
        url: TwitterUrl,
        external: true,
        icon: "/src/_static/icons/socials/twitter.svg",
        iconStyle: {
            bg: "#1da1f2",
            color: "#fff",
        },
    },
];
