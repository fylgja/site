import { newDialog } from "./dialog";
import dialogPolyfill from "dialog-polyfill/dist/dialog-polyfill.js";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

// Add polyfill logic
if (typeof HTMLDialogElement !== "function") {
    dialogPolyfill.registerDialog("#offcanvas-menu");
}

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
});
