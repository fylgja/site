import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import siteConfig from "@/site.config";
import { uiCategories } from "@/ui-categories";

const { themeColor, author } = siteConfig;

const baseSchema = {
	draft: z.boolean().optional().default(false),
	sortOrder: z.number().optional().default(10),
	title: z.string(),
	description: z.string(),
	// Terms to find this page by that it does not already say, e.g. "install"
	// for Getting Started. Weighted like a title match.
	keywords: z.array(z.string()).optional().default([]),
	// Multiplies this page's search score, keep it near 1. Ranks, never hides:
	// that is what `draft` is for.
	searchBoost: z.number().positive().optional().default(1),
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
	faq: z
		.array(
			z.object({
				question: z.string(),
				answer: z.string(),
			}),
		)
		.optional(),
});

const uiSchema = docsSchema.extend({
	category: z.enum(uiCategories),
	tags: z.array(z.string()).default([]),
	status: z.enum(["stable", "beta", "planned"]).default("stable"),
	// Scale of the demo in the gallery card, for demos that need more room.
	previewZoom: z.number().positive().optional(),
	// `recommended` means the component still works without the package, just better.
	requires: z
		.array(
			z.object({
				pkg: z.string(),
				level: z.enum(["required", "recommended"]).default("required"),
				reason: z.string().optional(),
			}),
		)
		.default([]),
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
	ui: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ui" }),
		schema: uiSchema,
	}),
};
