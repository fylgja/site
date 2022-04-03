const { version } = require("../../../package.json");

/**
 * add a cache bust url to each asset filename
 *
 * @param {string} url
 * @return {string} url with cache busting
 */
const assetUrl = (url) => {
    const hash = process.env.ELEVENTY_ENV === "prod" ? "?=v" + version : "";
    return url + hash;
};

module.exports = { assetUrl };
