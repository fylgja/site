import { getCollection } from "astro:content";
import { sortByOrder } from "@/utils";

async function filterCollection(path: string) {
	return sortByOrder(
		await getCollection("docs", ({ id, data }: { id: string; data: any }) => {
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

const topLevel = await filterCollection("/");
const indexEntry = topLevel.find(({ id }) => id === "index");

export default [
	{
		items: [
			{
				id: "",
				data: {
					title: indexEntry?.data.title ?? "Getting Started",
				},
			},
			...topLevel.filter(({ id }) => id !== "index"),
		],
	},
	{
		title: "Concepts",
		items: await filterCollection("concepts/"),
	},
	{
		title: "Supports",
		items: await filterCollection("supports/"),
	},
	{
		title: "Intergrations",
		items: await filterCollection("intergrations/"),
	},
];
