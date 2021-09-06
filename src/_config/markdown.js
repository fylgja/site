const slugify = require("slugify");
const md = require("markdown-it");
const anchor = require("markdown-it-anchor");
const externalAnchor = require("markdown-it-external-anchor");
const { url } = require("../_data/meta");

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

const mdOptions = {
    html: true,
};

const anchorOptions = {
    level: [2, 3],
    slugify: slugifyStr,
    permalink: anchor.permalink.ariaHidden({
        symbol: "",
        placement: "after",
    }),
};

const externalAnchorOptions = {
    domain: url,
    class: "external",
};

const markdownConfig = md(mdOptions)
    .use(externalAnchor, externalAnchorOptions)
    .use(anchor, anchorOptions);

module.exports = markdownConfig;
