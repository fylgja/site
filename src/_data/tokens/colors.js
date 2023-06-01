const colors = require("@fylgja/colors");

const contrast = [
    ".02",
    ".04",
    ".12",
    ".18",
    ".2",
    ".22",
    ".21",
    ".2",
    ".18",
    ".14",
    ".12",
    ".08",
    ".04",
];
const light = [
    "99%",
    "94%",
    "88%",
    "80%",
    "74%",
    "67%",
    "59%",
    "52%",
    "44%",
    "36%",
    "24%",
    "18%",
    "10%",
];
const colorToShow = [
    "red-gray",
    "green-gray",
    "blue-gray",
    "gray",
    "pink",
    "violet",
    "purple",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
];

const colorsMap = {
    keys: colorToShow,
    "red-gray": light.map((weight) => `oklch(${weight} 0.03 18)`),
    "green-gray": light.map((weight) => `oklch(${weight} 0.03 152)`),
    "blue-gray": light.map((weight) => `oklch(${weight} 0.03 258)`),
    gray: light.map((weight) => `oklch(${weight} 0 0)`),
    pink: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 350)`
    ),
    purple: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 330)`
    ),
    violet: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 310)`
    ),
    indigo: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 290)`
    ),
    cyan: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 220)`
    ),
    teal: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 170)`
    ),
    green: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 140)`
    ),
    lime: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 125)`
    ),
    blue: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 260)`
    ),
    yellow: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 100)`
    ),
    orange: light.map(
        (weight, index) => `oklch(${weight} ${contrast[index]} 70)`
    ),
    red: light.map((weight, index) => `oklch(${weight} ${contrast[index]} 30)`),
};

module.exports = colorsMap;
