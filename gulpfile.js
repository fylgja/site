const { src, dest, series, watch } = require("gulp");
const { input, output } = require("./src/_data/meta.js");
const isProd = process.env.NODE_ENV === "production";

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

const sassTask = () => {
    const sourcemaps = !isProd;
    const sassConfig = {
        includePaths: ["node_modules"],
    };

    return src(`${input}/assets/sass/**/*.scss`, { sourcemaps })
        .pipe(sass(sassConfig).on("error", sass.logError))
        .pipe(dest(`${output}/css`, { sourcemaps: "." }));
};

const cssTask = () => {
    const presetEnvConfig = {
        stage: 3,
        features: { "custom-properties": false },
    };

    const cssnanoConfig = {
        preset: ["default", { calc: false }],
    };

    const purgecssConfig = {
        content: [`${output}/**/*.html`],
        safelist: [/^\:/, /lite-youtube/, /backdrop/, /DocSearch/],
    };

    const pluginsDev = [postcssImport()];
    const pluginsProd = [
        postcssPresetEnv(presetEnvConfig),
        cssnano(cssnanoConfig),
        postcssImport(),
        purgecss(purgecssConfig),
    ];
    const plugins = isProd ? pluginsProd : pluginsDev;

    return src(`${output}/css/*.css`)
        .pipe(postcss(plugins))
        .pipe(dest(`${output}/css`));
};

const watcher = () => {
    watch(
        `${input}/assets/sass/`,
        { ignoreInitial: true },
        series(sassTask, cssTask)
    );
};

exports.default = series(sassTask, cssTask);
exports.dev = series(sassTask, cssTask, watcher);
