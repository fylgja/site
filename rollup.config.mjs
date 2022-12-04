import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { minify } from "rollup-plugin-esbuild";

const config = {
    input: "src",
    output: "_site",
};
const isProd = process.env.NODE_ENV === "production";
const pluginsProd = [nodeResolve(), commonjs(), minify()];
const pluginsDev = [nodeResolve(), commonjs()];
const plugins = isProd ? pluginsProd : pluginsDev;
const sourcemap = isProd ? false : true;
const watch = isProd ? { clearScreen: false } : {};

export default () => {
    return [
        {
            input: `${config.input}/assets/js/main.js`,
            output: { dir: `${config.output}/js`, format: "iife", sourcemap },
            watch,
            plugins,
        },
        {
            input: `${config.input}/assets/js/search.js`,
            output: { dir: `${config.output}/js`, format: "umd", sourcemap },
            watch,
            plugins,
        },
        {
            input: `${config.input}/assets/js/scroller.js`,
            output: { dir: `${config.input}/_includes/js`, format: "iife" },
            plugins: pluginsProd,
        },
        {
            input: `${config.input}/assets/js/sw.js`,
            output: { file: `${config.output}/sw.js`, format: "cjs" },
            watch,
            plugins,
        },
    ];
};
