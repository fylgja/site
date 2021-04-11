module.exports = function svgUse(path, props = "") {
    const config = JSON.parse(props);
    const { size, className, hidden, title } = config;

    const svgSize = size || 24;
    const classes = className || "icon";
    const isHidden = hidden ? 'aria-hidden="true"' : "";
    const hasTitle = title || false;

    let svg = `<svg class="${classes}" role="img" ${isHidden} width="${svgSize}" height="${svgSize}">`;

    if (hasTitle) {
        svg += `<title>${title}</title>`;
    }

    svg += `<use href="${path}"></use>`;
    svg += "</svg>";

    return svg;
};
