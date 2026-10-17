import type { APIRoute } from "astro";
import template from "@/llms.md?raw";
import docsCollection from "@/pages/docs/_collection";
import { componentsCollection, extensionsCollection } from "@/pages/library/_collection";
import { collection as uiCollection } from "@/pages/ui/_collection";

type Entry = { id: string; data: { title: string; description?: string } };

/**
 * Formats collection entries as a markdown link list.
 * @param base Path prefix for the entry ids, e.g. "/library/".
 * @param indent Prefix for each line, for lists nested under a bullet.
 */
function linkList(entries: Entry[], base: string, site: URL, indent = ""): string {
	return entries
		.map(({ id, data }) => {
			const url = new URL(`${base}${id ? `${id}/` : ""}`, site).href;
			const text = data.description?.trim();
			const description = text ? `: ${/[.?!]$/.test(text) ? text : `${text}.`}` : "";
			return `${indent}- [${data.title}](${url})${description}`;
		})
		.join("\n");
}

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		const message = "No site configured in the Astro Config";
		console.error(message);
		return new Response(message);
	}

	const ui = uiCollection
		.map(({ title, items }) => `### ${title}\n\n${linkList(items, "/ui/", site)}`)
		.join("\n\n");

	const body = template
		.replace("{{components}}", linkList(componentsCollection, "/library/", site, "  "))
		.replace("{{extensions}}", linkList(extensionsCollection, "/library/", site))
		.replace("{{ui}}", ui)
		.replace("{{docs}}", linkList(docsCollection.flatMap(({ items }) => items), "/docs/", site));

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
