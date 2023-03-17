module.exports = function menuItem(content, url, options) {
    const {
        classList = "",
        isExternal = false,
        pageUrl = "",
        rel = "",
    } = options;

    const isActive = pageUrl === url;
    const current = isActive ? 'aria-current="page"' : "";
    const relValue = rel + (rel && " ") + (isExternal ? "nofollow" : "");
    let classes = classList;
    if (isActive) classes += " is-active";

    return `<a href="${url}" ${current}${relValue && ` rel="${relValue}"`}${
        isExternal && `target="_blank"`
    }${classes && ` class="${classes}"`}>${content}</a>`;
};
