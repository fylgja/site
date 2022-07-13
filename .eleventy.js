const { input, output, url } = require("./src/_data/meta");
const isProd = process.env.ELEVENTY_ENV === "prod";

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const embedYouTube = require("eleventy-plugin-youtube-embed");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const svgContents = require("eleventy-plugin-svg-contents");

const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");

const markdownConfig = require("./src/_config/markdown");
const browserSyncConfig = require("./src/_config/browserSync");
const minifyHtml = require("./src/_config/minifyHtml");
const CleanCSS = require("clean-css");
const imageShortcode = require("./src/_config/shortcodes/image");
const menuItem = require("./src/_config/shortcodes/menu-item");
const {
    badgeNpm,
    badgeCodepen,
    badgeGit,
} = require("./src/_config/shortcodes/badges");
const {
    componentsAll,
    componentsFeatured,
    componentsGroup,
} = require("./src/_config/collections/components");
const { sortByName, sortByOrder } = require("./src/_config/filters/sortby");
const {
    isArray,
    isBoolean,
    isNumber,
    isObject,
    isString,
} = require("./src/_config/filters/types");
const { assetUrl } = require("./src/_config/filters/asset-url");

module.exports = function (config) {
    config.setQuietMode(true);
    config.setLibrary("md", markdownConfig);
    config.setBrowserSyncConfig(browserSyncConfig);

    config.addWatchTarget("./src/assets/js/**/*.js");

    // Copy
    config.addPassthroughCopy({
        "src/assets/images/**/*.{jpg,png,svg,webp}": "images",
    });
    config.addPassthroughCopy({
        "src/components/images/**/*.{jpg,png,svg}": "images",
    });
    config.addPassthroughCopy({ "src/assets/webapp": "./" });
    config.addPassthroughCopy({ "src/assets/fonts/*.{woff,woff2}": "fonts" });

    // Plugins
    config.addPlugin(eleventySass, { sass, outputPath: "css" });
    config.addPlugin(syntaxHighlight, {
        preAttributes: { tabindex: 0 },
    });
    config.addPlugin(embedYouTube, {
        lite: {
            css: { inline: true },
            js: { inline: true },
        },
    });
    config.addPlugin(sitemap, {
        sitemap: { hostname: url },
    });
    config.addPlugin(pluginRss);
    config.addPlugin(pluginTOC, {
        tags: ["h2", "h3"],
    });
    config.addPlugin(svgContents);

    // Shortcodes
    config.addNunjucksAsyncShortcode("image", imageShortcode);
    config.addAsyncShortcode("badgeNpm", badgeNpm);
    config.addShortcode("badgeCodepen", badgeCodepen);
    config.addShortcode("badgeGit", badgeGit);
    config.addShortcode("year", () => `${new Date().getFullYear()}`);
    config.addPairedShortcode("menuItem", menuItem);
    config.addPairedShortcode(
        "codeSample",
        (content, language = "html", previewClass = "", previewStyle = "") => {
            const className = previewClass ? ` ${previewClass}` : "";
            const style = previewStyle ? ` style="${previewStyle}"` : "";
            const code = syntaxHighlight.pairedShortcode(content, language);
            return `<div class="code-sample">
            <div class="preview${className}"${style}>${content}</div>
            <div class="code">${code}</div>
        </div>`;
        }
    );

    // Filters
    config.addFilter("isArray", isArray);
    config.addFilter("isBoolean", isBoolean);
    config.addFilter("isNumber", isNumber);
    config.addFilter("isObject", isObject);
    config.addFilter("isString", isString);

    config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
    config.addFilter("sortByName", sortByName);
    config.addFilter("sortByOrder", sortByOrder);
    config.addFilter("assetUrl", assetUrl);
    config.addFilter("limit", (arr, limit) => arr.slice(0, limit));

    // Collections
    config.addCollection("componentsGroup", componentsGroup);
    config.addCollection("componentsFeatured", componentsFeatured);
    config.addCollection("componentsAll", componentsAll);

    if (isProd) {
        config.addPlugin(require("@11ty/eleventy-plugin-directory-output"));
        config.addTransform("minify", minifyHtml);
    }

    return {
        dir: { input, output, layouts: "_layouts" },
        templateFormats: ["md", "njk", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};
