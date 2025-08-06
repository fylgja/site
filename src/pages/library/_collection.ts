import { getCollection } from "astro:content";
import { sortByOrder } from "@/utils";

async function filterCollection(path: string) {
	return sortByOrder(
		await getCollection("library", ({ id, data }: { id: string; data: any }) => {
			if (data.draft) {
				console.log("Is draft", data.title);
				if (import.meta.env.PROD) return;
			}

			if (path === "/") {
				return !id.includes("/");
			} else {
				return id.startsWith(path);
			}
		}),
	);
}

const baseCollection = await filterCollection("/");
const componentsCollection = await filterCollection("components");
const extensionsCollection = await filterCollection("extensions");
const collection = [
	{
		items: baseCollection,
	},
	{
		title: "Components",
		items: componentsCollection,
	},
	{
		title: "Extensions",
		items: extensionsCollection,
	},
];

export {
	baseCollection,
	componentsCollection,
	extensionsCollection,
	collection,
	collection as default,
};
