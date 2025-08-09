import siteConfig from "site.config";
import { z, defineCollection } from "astro:content";

const { themeColor, author } = siteConfig;

const baseSchema = {
	draft: z.boolean().optional().default(false),
	sortOrder: z.number().optional().default(10),
	title: z.string(),
	description: z.string(),
	image: z
		.object({
			src: z.string().default("/og/social.jpg"),
			alt: z.string().default("Build the web you want"),
		})
		.default({}),
};

const docsSchema = z.object({
	...baseSchema,
	pageTitle: z.string().optional(),
	git: z.string().url().optional(),
	npm: z.string().optional(),
	changelog: z.string().url().optional(),
});

export const collections = {
	blog: defineCollection({
		type: "content",
		schema: ({ image }) =>
			z.object({
				...baseSchema,
				socialImage: z.string().optional(),
				coverImage: image().optional(),
				coverColor: z.string().optional().default(themeColor),
				author: z
					.object({
						name: z.string(),
						url: z.string().url(),
					})
					.optional()
					.default(author),
				publishDate: z.date(),
				updateDate: z.date().optional(),
				tags: z.array(z.string()),
			}),
	}),
	docs: defineCollection({
		type: "content",
		schema: docsSchema,
	}),
	library: defineCollection({
		type: "content",
		schema: docsSchema,
	}),
};
