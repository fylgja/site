/**
 * Checks if the href is the same as the currentPath and returns the 'page' if true
 */
export const isCurrentPage = (href: string, currentPath: string) =>
	currentPath === href ? "page" : null;

/**
 * Checks if the href contains a trailingSlash and add one if configured
 */
export function parseUrl(path: string, trailingSlash: string) {
	if (trailingSlash === "never") {
		return path;
	} else {
		return path.endsWith("/") ? path : path + "/";
	}
}

/**
 * Sort a Astro collection by sortOrder
 */
export const sortByOrder = (collection: any[]) => {
	return collection.sort((a, b) => {
		return a.data.sortOrder - b.data.sortOrder;
	});
};

/**
 * Convert Date to language format
 */
export const parseDate = (
	date: Date,
	lang = "en-US",
	options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	} as Intl.DateTimeFormatOptions,
) => {
	const newDate = new Date(date);
	return new Intl.DateTimeFormat(lang, options).format(newDate);
};

export const capitalized = (string: string) => {
	return string
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
