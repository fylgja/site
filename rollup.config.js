import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const { input, output } = require("./src/_data/meta.js");
const isProd = process.env.NODE_ENV === "production";

const plugins = isProd
    ? [commonjs(), nodeResolve(), terser()]
    : [commonjs(), nodeResolve()];
const watch = isProd ? { clearScreen: false } : {};

export default () => {
    return [
        {
            input: `${input}/assets/js/main.js`,
            output: {
                file: `${output}/js/main.js`,
                format: "cjs",
            },
            watch,
            plugins,
        },
        {
            input: `${input}/assets/js/scroll-slider.js`,
            output: {
                file: `${input}/_includes/js/scroll-slider.js`,
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
