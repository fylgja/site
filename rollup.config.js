import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const { input, output } = require("./src/_data/meta.js");
const isProd = process.env.NODE_ENV === "production";

const terserOptions = {
    toplevel: false, // Force to false to avoid minification errors with the dialogPolyfill
};
const plugins = isProd
    ? [commonjs(), nodeResolve(), terser(terserOptions)]
    : [commonjs(), nodeResolve()];
const watch = isProd ? { clearScreen: false } : {};

export default () => {
    return [
        {
            input: [
                `${input}/assets/js/main.js`,
                `${input}/assets/js/scroller.js`,
            ],
            output: {
                dir: `${output}/js`,
                format: "cjs",
            },
            watch,
            plugins,
        },
        {
            input: `${input}/assets/js/sw.js`,
            output: {
                file: `${output}/sw.js`,
                format: "cjs",
            },
            watch,
            plugins,
        },
    ];
};
