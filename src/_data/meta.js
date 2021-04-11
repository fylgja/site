let url = "http://localhost:8080";

if (process.env.ELEVENTY_ENV === "prod") {
    url = "https://getfylgja.test";
}

module.exports = {
    output: "_site",
    input: "src",
    url,
    themeColor: "#1565c0",
    siteName: "Fylgja",
    siteDescription:
        "A Modular and customizable front-end framework for building UI components for the web.",
    email: "info@getfylgja.com",
    phone: false,
    address: false,
    socials: {
        twitter: "FylgjaCode",
        github: "fylgja",
    },
    componentsMedia: "./src/components/images/",
};
