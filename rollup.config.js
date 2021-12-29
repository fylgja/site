import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const { input, output } = require("./src/_data/meta.js");
const isProd = process.env.NODE_ENV === "production";

// Force to false to avoid minification errors with the dialogPolyfill
const terserOptions = { toplevel: false };
const pluginsProd = [nodeResolve(), commonjs(), terser(terserOptions)];
const pluginsDev = [nodeResolve(), commonjs()];
const plugins = isProd ? pluginsProd : pluginsDev;
const sourcemap = isProd ? false : true;
const watch = isProd ? { clearScreen: false } : {};

export default () => {
    return [
        {
            input: `${input}/assets/js/main.js`,
            output: { dir: `${output}/js`, format: "iife", sourcemap },
            watch,
            plugins,
        },
        {
            input: `${input}/assets/js/search.js`,
            output: { dir: `${output}/js`, format: "umd", sourcemap },
            watch,
            plugins,
        },
        {
            input: `${input}/assets/js/scroller.js`,
            output: { dir: `${input}/_includes/js`, format: "iife" },
            plugins: pluginsProd,
        },
        {
            input: `${input}/assets/js/sw.js`,
            output: { file: `${output}/sw.js`, format: "cjs" },
            watch,
            plugins,
        },
    ];
};
