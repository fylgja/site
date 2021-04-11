const { input, output, url } = require("./src/_data/meta");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const markdownConfig = require("./src/_utils/libaries/markdown");
const svgContents = require("eleventy-plugin-svg-contents");

const browserSyncConfig = require("./src/_utils/libaries/browserSync");
const minify = require("./src/_utils/minify");

const imageShortcode = require("./src/_utils/shortcodes/image");
const npmBadges = require("./src/_utils/shortcodes/npm-badges");
const svgUse = require("./src/_utils/shortcodes/svgUse");
const eleventyFilters = require("./src/_utils/filters");
const eleventyCollections = require("./src/_utils/collections");
const extLink = require("./src/_utils/shortcodes/extLink");

module.exports = function (config) {
    config.setLibrary("md", markdownConfig);
    config.setBrowserSyncConfig(browserSyncConfig);
    config.addWatchTarget("./src/_sass/");
    config.addWatchTarget("./src/_js/");

    // Copy
    config.addPassthroughCopy({ "src/**/*.{jpg,jpeg,png,svg}": "images" });
    config.addPassthroughCopy({ "src/_static/webapp": "./" });
    config.addPassthroughCopy({ "src/_static/fonts": "fonts" });

    if (process.env.ELEVENTY_ENV !== "prod") {
        config.addPassthroughCopy({ "src/_static/css/*.map": "css" });
    }

    const liteYtSrc = "node_modules/lite-youtube-embed/src";
    config.addPassthroughCopy({
        [liteYtSrc + "/lite-yt-embed.css"]: "css/lite-yt-embed.css",
    });
    config.addPassthroughCopy({
        [liteYtSrc + "/lite-yt-embed.js"]: "js/lite-yt-embed.js",
    });

    // Plugins
    config.addPlugin(syntaxHighlight);
    config.addPlugin(embedYouTube, {
        lite: {
            css: { path: "/css/lite-yt-embed.css" },
            js: { path: "/js/lite-yt-embed.js" },
        },
    });
    config.addPlugin(sitemap, { sitemap: { hostname: url } });
    config.addPlugin(pluginRss);
    config.addPlugin(pluginTOC, { tags: ["h2", "h3"] });
    config.addPlugin(svgContents);

    // Shortcodes
    config.addShortcode("year", () => `${new Date().getFullYear()}`);
    config.addShortcode("npmBadges", npmBadges);
    config.addNunjucksAsyncShortcode("image", imageShortcode);
    config.addShortcode("svgUse", svgUse);
    config.addShortcode("extLink", extLink);

    // Filters
    eleventyFilters(config);

    // Collections
    eleventyCollections(config);

    // Transform
    // These transforms should always go last
    // Because they look at the final HTML.
    if (process.env.ELEVENTY_ENV === "prod") {
        config.addTransform("minify", minify.html);
    }

    return {
        dir: {
            output,
            input,
            includes: "_includes",
            layouts: `_layouts`,
            data: "_data",
        },
        templateFormats: ["html", "md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true,
    };
};
