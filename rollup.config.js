import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
const { input, output } = require("./src/_data/meta.js");

const copyConfig = {
    targets: [
        {
            src: "node_modules/lite-youtube-embed/src/lite-yt-embed.js",
            dest: `${output}/js`,
        },
    ],
};

const devConfig = {
    input: `${input}/_js/main.js`,
    output: {
        file: `${output}/js/main.js`,
        format: "cjs",
    },
    watch: { clearScreen: false },
    plugins: [nodeResolve(), copy(copyConfig)],
};

const productionConfig = {
    input: `${input}/_js/main.js`,
    output: {
        file: `${output}/js/main.js`,
        format: "cjs",
    },
    plugins: [nodeResolve(), terser(), copy(copyConfig)],
};

export default () => {
    if (process.env.NODE_ENV === "production") {
        return productionConfig;
    }
    return devConfig;
};
