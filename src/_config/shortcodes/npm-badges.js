module.exports = function npmBadges(npmUrl, classes = "npm-badges") {
    // The inline width will make sure the image does not get shrinked
    // Since the badge content can be diffrent in size
    const badgeStyle = "flat-square";
    let badges = "";
    badges += `<a href="https://www.npmjs.org/package/${npmUrl}"
        class="no-underline text-reset"
        target="_blank"
        rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/${npmUrl}?color=%23333&label=%20&logo=npm&style=${badgeStyle}"
            alt="NPM version"
            width="63"
            height="20"
            loading="eager"
            style="width: auto;">
    </a>`;
    badges += `<a href="https://www.npmjs.org/package/${npmUrl}"
        class="no-underline text-reset"
        target="_blank"
        rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/dm/${npmUrl}?color=%23c12127&style=${badgeStyle}"
            alt="NPM downloads"
            width="140"
            height="20"
            loading="eager"
            style="width: auto;">
    </a>`;

    return `<div class="${classes}">${badges}</div>`;
};
