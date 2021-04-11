const { src, dest, parallel, series, watch } = require("gulp");
const { input, output } = require("./src/_data/meta.js");
const isProduction = process.env.NODE_ENV === "production";

const Fiber = require("fibers");
const sass = require("gulp-sass");
sass.compiler = require("sass");

const terser = require("gulp-terser");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

const sassTask = () => {
    const sourcemaps = !isProduction;
    const sassConfig = {
        fiber: Fiber,
        includePaths: ["node_modules"],
    };

    return src(`${input}/_sass/**/*.scss`, { sourcemaps })
        .pipe(sass(sassConfig).on("error", sass.logError))
        .pipe(dest(`${output}/css`, { sourcemaps: "." }));
};

const minifyJs = () => {
    return src([`${output}/js/*.js`, `!${output}/js/main.js`])
        .pipe(terser({ warnings: true }))
        .pipe(dest(`${output}/js`));
};

const minifyCss = () => {
    const presetEnvConfig = {
        stage: 3,
    };

    const cssnanoConfig = {
        preset: ["default", { calc: false }],
    };

    const purgecssConfig = {
        content: ["_site/**/*.html"],
        safelist: [/^\:/, /lite-youtube/, /backdrop/],
    };

    const plugins = [
        postcssPresetEnv(presetEnvConfig),
        cssnano(cssnanoConfig),
        purgecss(purgecssConfig),
    ];

    return src(`${output}/css/*.css`)
        .pipe(postcss(plugins))
        .pipe(dest(`${output}/css`));
};

const watcher = () => {
    watch(`${input}/_sass/`, { ignoreInitial: true }, sassTask);
};

exports.default = parallel(sassTask, series(minifyJs, minifyCss));
exports.styles = sassTask;
exports.minify = series(minifyJs, minifyCss);
exports.watch = series(sassTask, watcher);
