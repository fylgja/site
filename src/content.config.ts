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
	faq: z
		.array(
			z.object({
				question: z.string(),
				answer: z.string(),
			})
		)
		.optional(),
});

/**
 * Categories a UI component can belong to.
 * Drives both the sidebar grouping and the gallery filter chips.
 * Keep in sync with CATEGORIES in src/pages/ui/_collection.ts.
 */
export const uiCategories = [
	"actions",
	"forms",
	"navigation",
	"overlays",
	"feedback",
	"data-display",
	"layout",
] as const;

const uiSchema = docsSchema.extend({
	// Which category the component is grouped and filtered under.
	category: z.enum(uiCategories),
	// Free-form tags for gallery search/filtering.
	tags: z.array(z.string()).default([]),
	// Publication state, also used to badge planned/beta components.
	status: z.enum(["stable", "beta", "planned"]).default("stable"),
	// Which implementation variants ship for this component. HTML is always present.
	languages: z.array(z.enum(["html", "astro", "alpine", "js"])).default(["html"]),
	// Fylgja packages this component needs or benefits from. `required` means it
	// will not look/behave right without it; `recommended` means it works standalone
	// but is better with it (e.g. @fylgja/base for native element styling).
	requires: z
		.array(
			z.object({
				pkg: z.string(),
				level: z.enum(["required", "recommended"]).default("required"),
				reason: z.string().optional(),
			})
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
