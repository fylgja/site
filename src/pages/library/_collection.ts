import { getCollection } from "astro:content";
import { sortByOrder } from "@/utils";
import baseSocialImage from "@/assets/social/base.png";
import tokensSocialImage from "@/assets/social/tokens.png";
import utilitiesSocialImage from "@/assets/social/utilities.png";
import baseCardImage from "@/assets/social/base-card.png";
import tokensCardImage from "@/assets/social/tokens-card.png";
import utilitiesCardImage from "@/assets/social/utilities-card.png";

const socialImages: Record<string, ImageMetadata> = {
	base: baseSocialImage,
	tokens: tokensSocialImage,
	utilities: utilitiesSocialImage,
};

/** The social banner without its headline, for the library landing page cards. */
const cardImages: Record<string, ImageMetadata> = {
	base: baseCardImage,
	tokens: tokensCardImage,
	utilities: utilitiesCardImage,
};

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
	socialImages,
	cardImages,
	collection as default,
};
