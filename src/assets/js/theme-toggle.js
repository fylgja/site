export function themeToggle(eventElement) {
    const root = document.documentElement;
    let theme = "";

    // Check for dark mode preference at the OS level
    const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        root.setAttribute("data-theme", currentTheme);
    }

    // Handel the toggle
    if (!eventElement.target.closest("[data-toggle-color-scheme]")) return;
    if (root.getAttribute("data-theme")) {
        theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    } else {
        theme = prefersDarkScheme ? "light" : "dark";
    }
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}
