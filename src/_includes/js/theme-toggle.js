const storageKey = "theme-preference";
const mqIsDark = window.matchMedia("(prefers-color-scheme: dark)");
const btnTogglePreference = "[data-color-preference]";

const getColorPreference = () => {
    const preference = localStorage.getItem(storageKey);
    return preference ? preference : mqIsDark.matches ? "dark" : "light";
};

const theme = {
    value: getColorPreference(),
};

const saveColorPreference = () => {
    localStorage.setItem(storageKey, theme.value);
};

const applyColorPreference = () => {
    document.documentElement.setAttribute("data-theme", theme.value);

    document.querySelectorAll(btnTogglePreference).forEach((element) => {
        element.setAttribute("aria-label", theme.value);
    });
};

applyColorPreference();

document.addEventListener("click", (e) => {
    if (!e.target.closest(btnTogglePreference)) return;
    theme.value = theme.value === "light" ? "dark" : "light";
    saveColorPreference();
    applyColorPreference();
});

mqIsDark.addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    saveColorPreference();
    applyColorPreference();
});
