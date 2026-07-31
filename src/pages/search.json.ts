import { getCollection, render } from "astro:content";

/**
 * Static search index, built once at build time and fetched by <site-search>
 * the first time a reader opens the search dialog.
 *
 * A page contributes one record for itself and one per heading, so a hit can
 * deep link to the exact section. Body prose is not indexed, only what a page
 * declares about itself. Keys are single letters to keep the payload small,
 * since the whole index is downloaded in one go.
 */
type SearchRecord = {
	/** Page url, with the section anchor when the chunk sits under a heading */
	u: string;
	/** Page title */
	t: string;
	/** Collection label, shown as the result's group */
	s: string;
	/** Heading this chunk belongs to, absent for the intro chunk of a page */
	h?: string;
	/** Plain text searched against and used for the result snippet */
	c: string;
	/** Lowercase terms from `keywords`, weighted like the title. Page level only. */
	k?: string[];
	/** Lowercase `tags`, weighted above prose but below the title. Page level only. */
	g?: string[];
	/** Score multiplier from `searchBoost`, omitted when it is the default 1 */
	b?: number;
};

/** `weight` scales every record of a collection, to rank one above another. */
const SOURCES = [
	{
		name: "docs",
		label: "Docs",
		url: (id: string) => (id === "index" ? "/docs/" : `/docs/${id}/`),
		weight: 1,
	},
	{
		name: "library",
		label: "Library",
		url: (id: string) => `/library/${id}/`,
		weight: 1,
	},
	{
		name: "ui",
		label: "UI",
		url: (id: string) => `/ui/${id}/`,
		weight: 1,
	},
	{
		name: "blog",
		label: "Blog",
		url: (id: string) => `/blog/${id}/`,
		weight: 0.6,
	},
] as const;

/** Pages outside the content collections, indexed on title and description only. */
const STATIC_PAGES: SearchRecord[] = [
	{
		u: "/",
		t: "Fylgja CSS",
		s: "Site",
		c: "Your CSS companion. A modular CSS library for modern web design: lean, maintainable and scalable.",
		k: ["home", "homepage", "fylgja"],
	},
	{
		u: "/library/components/",
		t: "Fylgja Components",
		s: "Library",
		c: "Overview of every Fylgja component package.",
	},
	{
		u: "/library/extensions/",
		t: "Fylgja Extensions",
		s: "Library",
		c: "Presets and extensions that integrate Fylgja with other frameworks, such as Tailwind CSS and UnoCSS.",
	},
	{
		u: "/ui/",
		t: "Fylgja UI",
		s: "UI",
		c: "Copy paste UI components built on plain, accessible HTML. Filter by category and drop them into any project.",
	},
	{
		u: "/faq/",
		t: "Frequently Asked Questions",
		s: "Site",
		c: "Answers to common questions about Fylgja, its packages, browser support and how it compares to other CSS frameworks.",
		k: ["faq", "questions", "help"],
	},
	{
		u: "/about-us/",
		t: "About Fylgja",
		s: "Site",
		c: "About Fylgja, what the name means and how it was created.",
		k: ["about", "name", "origin"],
	},
	{
		u: "/about-us/#the-name",
		t: "About Fylgja",
		s: "Site",
		h: "The Name",
		c: "What a fylgja is in Old Norse mythology, and why the library carries the name.",
	},
	{
		u: "/contributing/",
		t: "Contributing to Fylgja",
		s: "Site",
		c: "How to work in the Fylgja CSS monorepo: getting set up, building packages, code style, commit messages and changelogs.",
		k: ["contributing", "contribute", "monorepo", "pr"],
	},
	{
		u: "/accessibility/",
		t: "Accessibility Statement",
		s: "Site",
		c: "Accessibility statement for Fylgja CSS and the WCAG 2.1 AA standards the site aims to meet.",
	},
	{
		u: "/privacy/",
		t: "Privacy and Cookie Policy",
		s: "Site",
		c: "Privacy and cookie policy for Fylgja.dev.",
	},
];

/** Skipped when harvesting custom properties: `--save-dev` is not one of ours. */
const NON_STYLE_FENCES = new Set([
	"sh",
	"bash",
	"shell",
	"zsh",
	"console",
	"powershell",
	"json",
	"yaml",
	"yml",
	"text",
	"txt",
	"diff",
	"md",
]);

/** Terms are matched against a lowercased query, so both sources come through here. */
const toTerms = (list: string[] = []) => list.map((term) => term.trim().toLowerCase()).filter(Boolean);

/**
 * Custom properties a page names, in prose or in a CSS example. The body itself
 * is not indexed, but a reader searching "--btn-bg" still expects the page that
 * documents it, and those names often appear nowhere else.
 */
function toCustomProperties(body: string) {
	const props = new Set<string>();
	let inFence = false;
	let fenceLang = "";

	for (const line of body.split("\n")) {
		const fence = /^\s*(```|~~~)\s*([\w-]+)?/.exec(line);
		if (fence) {
			if (!inFence) fenceLang = (fence[2] ?? "").toLowerCase();
			inFence = !inFence;
			continue;
		}
		// A long CLI option is spelled like a custom property, so skip those fences.
		if (inFence && NON_STYLE_FENCES.has(fenceLang)) continue;

		for (const [prop] of line.matchAll(/--[a-z][\w-]*/gi)) props.add(prop);
	}

	return [...props];
}

/**
 * Headings a collection repeats on most of its pages, such as the Preview and
 * Accessibility sections every UI component carries. They say nothing about
 * which page a reader wants, so indexing them turns those words into a wall of
 * every component.
 */
function commonHeadings(rendered: { anchors: { text: string }[] }[]) {
	const counts = new Map<string, number>();
	for (const { anchors } of rendered) {
		for (const text of new Set(anchors.map(({ text }) => text))) {
			counts.set(text, (counts.get(text) ?? 0) + 1);
		}
	}

	const limit = Math.max(2, rendered.length / 3);
	return new Set([...counts].filter(([, seen]) => seen > limit).map(([text]) => text));
}

export async function GET() {
	const records: SearchRecord[] = STATIC_PAGES.map((page) => (page.k ? { ...page, k: toTerms(page.k) } : page));

	for (const source of SOURCES) {
		const entries = await getCollection(source.name, ({ id, data }: any) => {
			if (id.startsWith("_")) return false;
			return import.meta.env.PROD ? data.draft !== true : true;
		});

		// Astro slugs headings as it renders, so reuse those rather than
		// reimplementing the rule and drifting out of sync.
		const rendered = await Promise.all(
			entries.map(async (entry: any) => ({
				entry,
				anchors: (await render(entry)).headings.filter(({ depth }: any) => depth >= 2 && depth <= 4),
			})),
		);
		const boilerplate = commonHeadings(rendered);

		for (const { entry, anchors } of rendered) {
			const { title, description, tags, category, keywords, searchBoost } = entry.data as any;
			const url = source.url(entry.id);
			// Authored importance travels with every record of the page, so its
			// sections rank alongside it rather than being left behind.
			const weight = Math.round(source.weight * (searchBoost ?? 1) * 100) / 100;
			const boost = weight !== 1 ? { b: weight } : {};
			const push = (record: Omit<SearchRecord, "u" | "t" | "s">, anchor = "") => {
				if (!record.c) return;
				records.push({ u: url + anchor, t: title, s: source.label, ...boost, ...record });
			};

			// `keywords` is a deliberate claim, so it carries a title's weight. A tag is
			// a lighter claim, worth more than a passing mention in the prose but not
			// enough to outrank a title: "card" is a tag on Media Card, which must not
			// beat the page called Card. `category` is a bucket, so it stays prose.
			const declared = toTerms(keywords);
			const tagged = toTerms(tags);
			const meta = {
				...(declared.length ? { k: declared } : {}),
				...(tagged.length ? { g: tagged } : {}),
			};

			// The custom properties keep "--btn-bg" pointing at the page that documents
			// it, trailing the description so that stays the snippet.
			const props = toCustomProperties(entry.body ?? "").join(" ");
			push({ c: `${description} ${category ?? ""} ${props}`.replace(/\s+/g, " ").trim(), ...meta });

			// A heading is what its section is about, and the only part of the body
			// worth a record of its own, since it is what a hit can link to. The
			// description carries as the snippet, there being no prose to quote.
			for (const { text, slug } of anchors) {
				if (boilerplate.has(text)) continue;
				push({ h: text, c: description }, `#${slug}`);
			}

			// An FAQ entry is a section like any other, so it takes the same shape:
			// the question labels it, the description carries as the snippet.
			for (const { question } of (entry.data as any).faq ?? []) {
				push({ h: question, c: description }, "#faq");
			}
		}
	}

	return new Response(JSON.stringify(records), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
}
