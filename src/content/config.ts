import { z, defineCollection } from "astro:content";

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
	preconnect: z.array(z.string().url()).optional().default([]),
});

export const collections = {
	blog: defineCollection({
		type: "content",
		schema: ({ image }) =>
			z.object({
				...baseSchema,
				socialImage: z.string().optional(),
				coverImage: image().optional(),
				coverColor: z.string().optional().default("hsl(157 50% 40%)"),
				author: z.string().default("Anonymous"),
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
