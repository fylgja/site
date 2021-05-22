import newDialog from "./dialog";
import { rovingIndex } from "roving-ux";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

document.querySelectorAll(".scroll-slider").forEach((scroller) =>
    rovingIndex({
        element: scroller,
        target: "a",
    })
);

const root = document.documentElement;
let theme = "";

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    root.setAttribute("data-theme", currentTheme);
}

function toggleColorScheme(e) {
    if (!e.target.closest("[data-toggle-color-scheme]")) return;
    if (root.getAttribute("data-theme")) {
        theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    } else {
        theme = prefersDarkScheme ? "light" : "dark";
    }
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

document.addEventListener("click", (event) => {
    toggleColorScheme(event);
});
