import siteConfig from "site.config";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
		.default({ src: "", alt: "" }),
};

const docsSchema = z.object({
	...baseSchema,
	pageTitle: z.string().optional(),
	git: z.url().optional(),
	npm: z.string().optional(),
	changelog: z.url().optional(),
});

export const collections = {
	blog: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
		schema: ({ image }) =>
			z.object({
				...baseSchema,
				socialImage: z.string().optional(),
				coverImage: image().optional(),
				coverColor: z.string().optional().default(themeColor),
				author: z
					.object({
						name: z.string(),
						url: z.url(),
					})
					.optional()
					.default(author),
				publishDate: z.date(),
				updateDate: z.date().optional(),
				tags: z.array(z.string()),
			}),
	}),
	docs: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
		schema: docsSchema,
	}),
	library: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/library" }),
		schema: docsSchema,
	}),
};
