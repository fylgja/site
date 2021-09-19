import { rovingIndex } from "roving-ux";

document.querySelectorAll(".scroll-slider").forEach((scroller) =>
    rovingIndex({
        element: scroller,
        target: "a",
    })
);
