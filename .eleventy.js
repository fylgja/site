// Build tools
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const markdownConfig = require("./src/_config/markdown");
const browserSyncConfig = require("./src/_config/browserSync");
const minifyHtml = require("./src/_config/minifyHtml");
const CleanCSS = require("clean-css");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

// Components
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const imageShortcode = require("./src/_config/shortcodes/image");
const svgContents = require("eleventy-plugin-svg-contents");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const menuItem = require("./src/_config/shortcodes/menu-item");
const {
    badgeNpm,
    badgeCodepen,
    badgeGit,
} = require("./src/_config/shortcodes/badges");

// Helpers
const { sortByName, sortByOrder } = require("./src/_config/filters/sortby");

// Data
const {
    componentsAll,
    componentsFeatured,
    componentsGroup,
} = require("./src/_config/collections/components");

// Config
const { isProd, input, output, url, hash } = require("./src/_data/meta");
const codeSettings = {
    preAttributes: { tabindex: 0 },
};

module.exports = function (config) {
    config.setQuietMode(!isProd);
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
    config.addPlugin(syntaxHighlight, codeSettings);
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
            const code = syntaxHighlight.pairedShortcode(
                content,
                language,
                "",
                codeSettings
            );
            return `<div class="code-sample">
            <div class="preview${className}"${style}>${content}</div>
            <div class="code">${code}</div>
        </div>`;
        }
    );

    // Filters
    config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
    config.addFilter("sortByName", sortByName);
    config.addFilter("sortByOrder", sortByOrder);
    config.addFilter("assetUrl", (url) => url + hash);
    config.addFilter("limit", (arr, limit) => arr.slice(0, limit));

    // Collections
    config.addCollection("componentsGroup", componentsGroup);
    config.addCollection("componentsFeatured", componentsFeatured);
    config.addCollection("componentsAll", componentsAll);

    if (isProd) {
        config.addTransform("minify", minifyHtml);
    }

    return {
        dir: { input, output, layouts: "_layouts" },
        templateFormats: ["md", "njk", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};
