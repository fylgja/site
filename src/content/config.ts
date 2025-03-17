import { z, defineCollection } from "astro:content";

const baseSchema = {
	draft: z.boolean().optional().default(false),
	sortOrder: z.number().optional().default(10),
	title: z.string(),
	pageTitle: z.string().optional(),
	description: z.string(),
	// TODO meta data
};

const blogSchema = z.object({
	...baseSchema,
	author: z.string().default("Anonymous"),
	publishDate: z.date(),
	tags: z.array(z.string()),
});

const docsSchema = z.object({
	...baseSchema,
	git: z.string().url().optional(),
	npm: z.string().optional(),
	version: z
		.string()
		.regex(/^\d+\.\d+\.\d+$/, "Invalid Version format, use for example 1.0.0")
		.optional(),
	changelog: z.string().url().optional(),
});

export const collections = {
	blog: defineCollection({
		type: "content",
		schema: blogSchema,
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
