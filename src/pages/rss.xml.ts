import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "site.config";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: any) {
	const blog = await getCollection("blog", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const collection = blog.sort(
		(a, b) =>
			Date.parse(b.data.publishDate.toString()) - Date.parse(a.data.publishDate.toString()),
	);

	const items = collection.map((post) => ({
		title: post.data.title,
		description: post.data.description,
		pubDate: post.data.publishDate,
		link: `/blog/${post.id}/`,
		author: post.data.author.name,
		categories: post.data.tags,
		content: sanitizeHtml(parser.render(post.body || ""), {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
		}),
	}));

	// console.log(items);

	return rss({
		site: context.site,
		title: `The ${siteConfig.name} Blog`,
		description: `News and updates about ${siteConfig.name} and more...`,
		stylesheet: "/rss-style.xsl",
		customData: `<language>en-us</language>`,
		items,
	});
}
