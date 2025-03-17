import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "site.config";

export async function GET(context: any) {
	const blog = await getCollection("blog");

	return rss({
		site: context.site,
		title: `The ${siteConfig.name} Blog`,
		description: `News and updates about ${siteConfig.name}`,
		items: blog.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${post.slug}/`,
		})),
	});
}
