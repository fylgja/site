const { siteName, siteDescription, themeColor, hash } = require("./_data/meta");
const assetUrl = (url) => url + hash;

const webmanifest = {
    id: "/",
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    icons: [
        {
            src: assetUrl("/icon-192x192.png"),
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: assetUrl("/icon-192x192.png"),
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: assetUrl("/icon-512x512.png"),
            sizes: "512x512",
            type: "image/png",
        },
        {
            src: assetUrl("/icon-512x512.png"),
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
    ],
    theme_color: themeColor,
    background_color: themeColor,
    display: "standalone",
    orientation: "any",
    shortcuts: [
        {
            name: "Components",
            description: `View all ${siteName} components`,
            url: "/components/",
            icons: [
                {
                    src: assetUrl("/shortcuts/components.png"),
                    sizes: "192x192",
                    type: "image/png",
                },
            ],
        },
    ],
};

exports.data = {
    permalink: "/site.webmanifest",
    layout: null,
    eleventyExcludeFromCollections: true,
};

exports.render = function () {
    return JSON.stringify(webmanifest);
};
