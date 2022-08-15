const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: { "custom-properties": false },
        }),
        cssnano({
            preset: ["default", { calc: false }],
        }),
        purgecss({
            content: [
                "_site/404.html",
                "_site/index.html",
                "_site/components/*.html",
                "_site/features/**/*.html",
                "_site/getting-started/**/*.html",
                "_site/guides/**/*.html",
                "_site/ui-components/**/*.html",
            ],
            safelist: [/^\:/, /lite-youtube/, /backdrop/, /DocSearch/, "kbd"],
        }),
    ],
};
