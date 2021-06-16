const url =
    process.env.ELEVENTY_ENV === "prod"
        ? "https://fylgja.dev"
        : "http://localhost:8080";

module.exports = {
    output: "_site",
    input: "src",
    url,
    themeColor: "#1565c0",
    themeColorDark: "#08274a",
    siteName: "Fylgja",
    siteDescription:
        "A Modular and customizable front-end framework for building UI components for the web.",
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
