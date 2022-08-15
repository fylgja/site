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
                "_site/components/index.html",
                "_site/components/base/index.html",
                "_site/components/range/index.html",
                "_site/components/form/index.html",
                "_site/components/colors/index.html",
                "_site/features/**/*.html",
                "_site/getting-started/**/*.html",
                "_site/guides/**/*.html",
                "_site/ui-components/**/*.html",
            ],
            safelist: [/^\:/, /lite-youtube/, /backdrop/, /DocSearch/, "kbd"],
        }),
    ],
};
