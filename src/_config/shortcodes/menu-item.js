module.exports = function menuItem(content, url, options) {
    const {
        classList = "",
        isExternal = false,
        pageUrl = "",
        rel = "",
    } = options;

    const isActive = pageUrl === url;
    const current = isActive ? 'aria-current="page"' : "";
    const relValue = rel + (isExternal ? "nofollow" : "");
    let classes = classList;
    if (isActive) classes += " is-active";

    return `<a href="${url}" ${current}${relValue && ` rel="${relValue}"`}${
        classes && ` class="${classes}"`
    }>${content}</a>`;
};
