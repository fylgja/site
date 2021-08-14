// TODO: add your own endpoint logic and replace shields.io with our own
const badgeNpm = (npmUrl) => {
    // The inline width will make sure the image does not get shrinked
    // Since the badge content can be different in size
    const badgeStyle = "for-the-badge";
    let badges = "";
    badges += `<a href="https://www.npmjs.org/package/${npmUrl}"
        class="inline-block text-reset"
        target="_blank"
        rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/v/${npmUrl}?color=%23333&label=%20&logo=npm&style=${badgeStyle}"
            alt="NPM version"
            width="87"
            height="28"
            loading="eager"
            class="block w-auto">
    </a>`;
    badges += `<a href="https://www.npmjs.org/package/${npmUrl}"
        class="inline-block text-reset"
        target="_blank"
        rel="noopener noreferrer">
        <img src="https://img.shields.io/npm/dm/${npmUrl}?color=%23c12127&label=%20&style=${badgeStyle}"
            alt="NPM downloads"
            width="196"
            height="28"
            loading="eager"
            class="block w-auto">
    </a>`;

    return badges;
};

const badgeCodepen = (id) => {
    const url = `https://codepen.io/Fylgja/pen/${id}`;
    const icon =
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031a.443.443 0 01-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739a.58.58 0 01.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12z"/></svg>';
    const text = "Try on Codepen";
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="badge -shield -codepen">${icon}${text}</a>`;
};

const badgeGit = (
    src,
    domain = "https://github.com/fylgja/fylgja/tree/main/"
) => {
    const url = domain + src;
    const icon =
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
    const text = "View source";
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="badge -shield -git">${icon}${text}</a>`;
};

module.exports = { badgeNpm, badgeCodepen, badgeGit };
