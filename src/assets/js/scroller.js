import { rovingIndex } from "roving-ux";

document
    .querySelectorAll(".section-slider")
    .forEach((scroller) => rovingIndex({ element: scroller, target: "a" }));
