import { themeToggle } from "./theme-toggle";
import { newDialog } from "./dialog";
import dialogPolyfill from "dialog-polyfill/dist/dialog-polyfill.js";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

// Add polyfill logic
if (typeof HTMLDialogElement !== "function") {
    dialogPolyfill.registerDialog("#offcanvas-menu");
}

document.addEventListener("click", (event) => {
    themeToggle(event);
});

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
});
