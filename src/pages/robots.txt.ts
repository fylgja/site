import type { APIRoute } from "astro";

const getRobotsTxt = (site: URL) => {
	const sitemapURL = new URL("sitemap-index.xml", site);

	return `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
Host: ${site}
`;
};

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		const message = "No site configured in the Astro Config";
		console.error(message);
		return new Response(message);
	}
	return new Response(getRobotsTxt(site));
};
