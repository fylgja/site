const htmlmin = require("html-minifier");

function minifyHtml(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            removeComments: true,
            sortClassName: true,
            sortAttributes: true,
            useShortDoctype: true,
            minifyCSS: false, // TODO findout why styles in svg's are stripped
            minifyJS: true,
        });
        return minified;
    }

    return content;
}

module.exports = { html: minifyHtml };
