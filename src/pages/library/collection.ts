import { getCollection } from "astro:content";
import { isProdMode, sortByOrder } from "@/utils";

async function filterCollection(path: string) {
	return sortByOrder(
		await getCollection("library", ({ id, data }: { id: string; data: any }) => {
			if (isProdMode ? data.isDraft : false) return;

			if (path === "/") {
				return !id.includes("/");
			} else {
				return id.startsWith(path);
			}
		}),
	);
}

export default [
	{
		items: await filterCollection("/"),
	},
	{
		title: "Components",
		items: await filterCollection("components"),
	},
	{
		title: "Extensions",
		items: await filterCollection("extensions"),
	},
];
