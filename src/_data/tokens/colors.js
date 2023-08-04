// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const oklch = require("@fylgja/colors/oklch-static");
const hsl = require("@fylgja/colors/hsl");
const hex = require("@fylgja/colors/hex");

const colors = {
    keys: Object.keys(oklch),
    count: Object.keys(oklch.gray).length,
    oklch,
    hsl,
    hex,
};

module.exports = colors;
