// Fylgja (getfylgja.com)
// Licensed under MIT Open Source

import dialogPolyfill from "dialog-polyfill/dist/dialog-polyfill.js";
import tabLock from "../tablock";

export function newDialog(id, button, backdrop = true) {
    const dialog = document.querySelector(id);
    const btn = document.querySelector(button);
    if (!dialog || !btn) return;
    if (typeof HTMLDialogElement !== "function") {
        dialogPolyfill.registerDialog(dialog);
    }

    const dialogScrollLock = (use = true) => {
        document.body.style.overflow = use ? "hidden" : "";
    };

    const dialogClose = (target, event, dialog) => {
        if (!event.target.closest(target)) return;
        dialog.close();
        btn.setAttribute("aria-expanded", "false");
    };

    const dialogCloseOnBackdrop = (event, dialog) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;

        if (!isInDialog) {
            dialog.close();
        }
    };

    btn.addEventListener("click", () => {
        btn.setAttribute("aria-expanded", "true");

        if (backdrop) {
            dialog.showModal();
            dialogScrollLock();
            tabLock(dialog);
        } else {
            dialog.show();
        }
    });

    dialog.addEventListener("click", (event) => {
        dialogClose(".close", event, dialog);
    });

    dialog.addEventListener("mouseup", (event) => {
        dialogCloseOnBackdrop(event, dialog);
    });

    if (backdrop) {
        dialog.addEventListener("close", () => dialogScrollLock(false));
        dialog.addEventListener("cancel", () => dialogScrollLock(false));
    }
}
