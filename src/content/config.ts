import fs from "fs";
import path from "path";
import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

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
	ui: defineCollection({
		loader: file("src/data/ui-library.json", {
			parser: (input) => {
				const rawJson = JSON.parse(input);
				const snippetsDir = path.join(process.cwd(), "src/data/ui-snippets");

				return rawJson.map((item: { id: string; [key: string]: any }) => {
					const htmlPath = path.join(snippetsDir, `${item.id}.html`);
					let snippet = "";
					try {
						snippet = fs.readFileSync(htmlPath, "utf8");
					} catch (e) {
						// File not found, leave snippet empty
					}
					return { ...item, snippet };
				});
			},
		}),
		schema: z.object({
			...baseSchema,
			dependencies: z.array(z.string()),
			snippet: z.string().default(""),
		}),
	}),
};
