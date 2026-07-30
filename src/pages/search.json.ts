import { getCollection, render } from "astro:content";

/**
 * Static search index, built once at build time and fetched by <site-search>
 * the first time a reader opens the search dialog.
 *
 * Records are chunks, not pages: every heading in a document starts a new chunk
 * so a hit can deep link to the exact section. Keys are single letters to keep
 * the payload small, since the whole index is downloaded in one go.
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
	/** Score multiplier from `searchBoost`, omitted when it is the default 1 */
	b?: number;
};

const SOURCES = [
	{
		name: "docs",
		label: "Docs",
		url: (id: string) => (id === "index" ? "/docs/" : `/docs/${id}/`),
	},
	{ name: "library", label: "Library", url: (id: string) => `/library/${id}/` },
	{ name: "ui", label: "UI", url: (id: string) => `/ui/${id}/` },
	{ name: "blog", label: "Blog", url: (id: string) => `/blog/${id}/` },
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
		c: "About Fylgja and how it was created.",
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

/** Long sections are split into chunks of roughly this many characters. */
const CHUNK_SIZE = 1200;

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

/** Strips inline markdown/JSX syntax, leaving the words a reader would see. */
function toInlineText(input: string) {
	return input
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
		.replace(/<[^>]*>/g, " ")
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
		.replace(/`+/g, "")
		.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, "$2")
		.replace(/(\*|_)(?=\S)([^*_]*?\S)\1/g, "$2")
		.replace(/~~(?=\S)([\s\S]*?\S)~~/g, "$1")
		.replace(/\s+/g, " ")
		.trim();
}

/** Reduces a line of body markdown to prose, so snippets read like sentences. */
function toPlainText(input: string) {
	return toInlineText(
		input
			.replace(/^\s{0,3}>\s?/gm, "")
			.replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
			.replace(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/gm, " ")
			.replace(/\|/g, " "),
	);
}

type Section = { title: string; text: string; props: Set<string> };

/**
 * Splits a document body into one section per heading.
 *
 * Fenced code is dropped, since the examples repeat across pages and would bloat
 * the index. Their custom properties are kept, because a reader searching
 * "--btn-bg" expects the page documenting it and those names often appear nowhere
 * else. Anchors are not derived here; Astro knows what ids it rendered.
 */
function toSections(body: string): Section[] {
	const newSection = (title = ""): Section => ({ title, text: "", props: new Set() });
	const sections = [newSection()];
	let inFence = false;
	let fenceLang = "";

	for (const line of body.split("\n")) {
		const current = sections[sections.length - 1];

		const fence = /^\s*(```|~~~)\s*([\w-]+)?/.exec(line);
		if (fence) {
			if (!inFence) fenceLang = (fence[2] ?? "").toLowerCase();
			inFence = !inFence;
			continue;
		}
		if (inFence) {
			if (!NON_STYLE_FENCES.has(fenceLang)) {
				for (const [prop] of line.matchAll(/--[a-z][\w-]*/gi)) current.props.add(prop);
			}
			continue;
		}
		// MDX import/export statements are code, not prose.
		if (/^\s*(import|export)\s/.test(line)) continue;

		const heading = /^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(line);
		if (heading) {
			sections.push(newSection(toInlineText(heading[2])));
			continue;
		}

		const text = toPlainText(line);
		if (text) current.text += `${text} `;
	}

	// Keywords trail the prose so the snippet still opens on a readable sentence.
	for (const section of sections) {
		section.text = `${section.text.trim()} ${[...section.props].join(" ")}`.trim();
	}

	return sections;
}

/** Strips casing and punctuation, to compare two strings on their words alone. */
const normalize = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, " ")
		.trim();

/** A description often restates the first sentence then diverges, so compare openings. */
function sharesOpening(a: string, b: string, words = 8) {
	const opening = (value: string) => normalize(value).split(" ").slice(0, words).join(" ");
	return opening(a) === opening(b);
}

/** Splits text over CHUNK_SIZE on word boundaries, so no match falls off the end. */
function toChunks(text: string) {
	if (text.length <= CHUNK_SIZE) return [text];

	const chunks: string[] = [];
	let rest = text;
	while (rest.length > CHUNK_SIZE) {
		const cut = rest.lastIndexOf(" ", CHUNK_SIZE);
		const at = cut > CHUNK_SIZE / 2 ? cut : CHUNK_SIZE;
		chunks.push(rest.slice(0, at).trim());
		rest = rest.slice(at).trim();
	}
	if (rest) chunks.push(rest);
	return chunks;
}

export async function GET() {
	const records: SearchRecord[] = STATIC_PAGES.map((page) => (page.k ? { ...page, k: toTerms(page.k) } : page));

	for (const source of SOURCES) {
		const entries = await getCollection(source.name, ({ id, data }: any) => {
			if (id.startsWith("_")) return false;
			return import.meta.env.PROD ? data.draft !== true : true;
		});

		for (const entry of entries) {
			const { title, description, tags, category, keywords, searchBoost } = entry.data as any;
			const url = source.url(entry.id);
			// Authored importance travels with every record of the page, so its
			// sections rank alongside it rather than being left behind.
			const boost = searchBoost && searchBoost !== 1 ? { b: searchBoost } : {};
			const push = (record: Omit<SearchRecord, "u" | "t" | "s">, anchor = "") => {
				if (!record.c) return;
				records.push({ u: url + anchor, t: title, s: source.label, ...boost, ...record });
			};

			// Astro slugs headings as it renders, so reuse those rather than
			// reimplementing the rule and drifting out of sync.
			const { headings } = await render(entry);
			const anchors = headings.filter(({ depth }: any) => depth >= 2 && depth <= 4);

			const [intro, ...sections] = toSections(entry.body ?? "");
			// A description usually restates the opening paragraph, so only add it
			// when it says something the body does not already say.
			const lead = sharesOpening(intro.text, description) ? intro.text : `${description} ${intro.text}`.trim();
			// `keywords` is a deliberate claim, so it carries a title's weight. `tags`
			// and `category` are shared across pages and stay ordinary text: "card" is
			// a tag on Media Card, which must not outrank the page called Card.
			const declared = toTerms(keywords);
			const loose = [category, ...(tags ?? [])].filter(Boolean).join(" ");
			push({
				c: `${toChunks(lead)[0]} ${loose}`.trim(),
				...(declared.length ? { k: declared } : {}),
			});

			sections.forEach((section, index) => {
				// Both lists come from the same headings in the same order. If they ever
				// disagree, link to the page rather than to an anchor that goes nowhere.
				const heading = anchors[index];
				const matches = heading && normalize(heading.text) === normalize(section.title);
				const anchor = matches ? `#${heading.slug}` : "";

				for (const chunk of toChunks(section.text)) {
					push({ h: section.title, c: chunk }, anchor);
				}
			});

			for (const { question, answer } of (entry.data as any).faq ?? []) {
				push({ h: "FAQ", c: `${question} ${toPlainText(answer)}` }, "#faq");
			}
		}
	}

	return new Response(JSON.stringify(records), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
}
