import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const { input, output } = require("./src/_data/meta.js");
const isProd = process.env.NODE_ENV === "production";
const plugins = isProd ? [nodeResolve(), terser()] : [nodeResolve()];

const devConfig = [
    {
        input: `${input}/_js/main.js`,
        output: {
            file: `${output}/js/main.js`,
            format: "cjs",
        },
        watch: { clearScreen: false },
        plugins,
    },
    {
        input: `${input}/_js/sw.js`,
        output: {
            file: `${output}/sw.js`,
            format: "cjs",
        },
        watch: { clearScreen: false },
        plugins,
    },
];

const productionConfig = [
    {
        input: `${input}/_js/main.js`,
        output: {
            file: `${output}/js/main.js`,
            format: "cjs",
        },
        plugins,
    },
    {
        input: `${input}/_js/sw.js`,
        output: {
            file: `${output}/sw.js`,
            format: "cjs",
        },
        plugins,
    },
];

export default () => {
    if (process.env.NODE_ENV === "production") {
        return productionConfig;
    }
    return devConfig;
};
