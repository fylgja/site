const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const slugifyStr = (str) => {
    if (str instanceof String) {
        str = str.toString();
    } else if (typeof str !== "string") {
        return "";
    }

    return slugify(str, {
        replacement: "-",
        lower: true,
    });
};

const markdownItOptions = { html: true };
const markdownItAnchorOptions = {
    level: [2, 3],
    permalink: true,
    permalinkClass: "hashlink",
    permalinkSymbol: "",
    permalinkAttrs: () => ({
        "aria-hidden": true,
        tabindex: "-1",
    }),
    slugify: slugifyStr,
};

module.exports = markdownConfig = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
);
