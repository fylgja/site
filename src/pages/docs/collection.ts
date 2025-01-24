import { getCollection } from "astro:content";
import { isProdMode, sortByOrder } from "@/utils";

async function filterCollection(path: string) {
	return sortByOrder(
		await getCollection("docs", ({ id, data }: { id: string; data: any }) => {
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
		items: [
			{
				slug: "",
				data: {
					title: "Getting Started",
				},
			},
			...(await filterCollection("/")),
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
