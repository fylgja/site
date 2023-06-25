// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

// const colors = require("@fylgja/colors/hsl");
const colors = require("@fylgja/colors/oklch-static");

const colorsMap = {
    keys: Object.keys(colors),
    redGray: Object.values(colors.redGray),
    greenGray: Object.values(colors.greenGray),
    blueGray: Object.values(colors.blueGray),
    gray: Object.values(colors.gray),
    pink: Object.values(colors.pink),
    purple: Object.values(colors.purple),
    violet: Object.values(colors.violet),
    indigo: Object.values(colors.indigo),
    cyan: Object.values(colors.cyan),
    teal: Object.values(colors.teal),
    green: Object.values(colors.green),
    lime: Object.values(colors.lime),
    blue: Object.values(colors.blue),
    yellow: Object.values(colors.yellow),
    orange: Object.values(colors.orange),
    red: Object.values(colors.red),
};

module.exports = colorsMap;
