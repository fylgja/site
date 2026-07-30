/**
 * A search dialog driven by a static JSON index.
 *
 * Configuration comes from attributes and every fixed string from the markup, so
 * the element carries no assumptions about this site. It finds its parts by data
 * attribute, which leaves classes free to change with the styling:
 *
 *   dialog                 the dialog itself
 *   [data-search-open]     opens it
 *   [data-search-close]    closes it
 *   [data-search-keys]     receives the keyboard shortcut hint
 *   [data-search-input]    the query field
 *   [data-search-results]  the listbox results are rendered into
 *   [data-search-status]   the idle, empty and error message
 *
 * Each rendered result carries [data-search-hit].
 *
 * @typedef {object} SearchRecord
 * @property {string} u Page url, carrying the section anchor when the record is a section
 * @property {string} t Page title
 * @property {string} s Collection label, shown as the result's badge
 * @property {string} c Text searched against, and cut down to the snippet
 * @property {string} [h] Heading, absent on a page level record
 * @property {string[]} [k] Lowercase terms the page claims, weighted like its title
 * @property {number} [b] Score multiplier
 *
 * @typedef {object} Match
 * @property {SearchRecord} record
 * @property {number} total Score
 * @property {number} hits Term occurrences, for breaking ties within one anchor
 * @property {number} position Index in the fetched records
 */

const DEFAULTS = {
	index: "/search.json",
	maxResults: 20,
	maxPerPage: 3,
	emptyText: "No results for “{query}”.",
	errorText: "Search is unavailable right now.",
	metaHint: "⌘K",
	ctrlHint: "Ctrl K",
};

export class SiteSearch extends HTMLElement {
	static SNIPPET_LENGTH = 190;
	static SNIPPET_LEAD = 70;

	/** @type {HTMLDialogElement} */ dialog;
	/** @type {HTMLInputElement} */ input;
	/** @type {HTMLElement} */ results;
	/** @type {HTMLElement | null} */ status;
	/** @type {HTMLAnchorElement[]} */ hits = [];
	/** @type {Promise<SearchRecord[]> | null} */ index = null;
	active = -1;
	errored = false;
	idleText = "";

	get indexUrl() {
		return this.getAttribute("index") ?? DEFAULTS.index;
	}

	get maxResults() {
		return Number(this.getAttribute("max-results")) || DEFAULTS.maxResults;
	}

	get maxPerPage() {
		return Number(this.getAttribute("max-per-page")) || DEFAULTS.maxPerPage;
	}

	get emptyText() {
		return this.getAttribute("empty-text") ?? DEFAULTS.emptyText;
	}

	get errorText() {
		return this.getAttribute("error-text") ?? DEFAULTS.errorText;
	}

	get hasShortcut() {
		return this.getAttribute("shortcut") !== "none";
	}

	constructor() {
		super();
		// Bound here so the listeners can be removed by identity.
		this.onShortcut = this.onShortcut.bind(this);
		this.onPageShow = this.onPageShow.bind(this);
	}

	connectedCallback() {
		// Moving the element in the DOM reconnects it, and the light DOM is already
		// wired by then; only the outside listeners need registering again.
		if (!this.dialog) this.setup();
		if (this.hasShortcut) document.addEventListener("keydown", this.onShortcut);
		window.addEventListener("pageshow", this.onPageShow);
	}

	disconnectedCallback() {
		document.removeEventListener("keydown", this.onShortcut);
		window.removeEventListener("pageshow", this.onPageShow);
	}

	setup() {
		this.dialog = this.querySelector("dialog");
		this.input = this.querySelector("[data-search-input]");
		this.results = this.querySelector("[data-search-results]");
		this.status = this.querySelector("[data-search-status]");
		this.idleText = this.status?.textContent.trim() ?? "";

		const keys = this.querySelector("[data-search-keys]");
		if (keys) keys.textContent = this.shortcutHint();

		this.querySelector("[data-search-open]")?.addEventListener("click", () => this.open());
		this.querySelector("[data-search-close]")?.addEventListener("click", () => this.dialog.close());

		this.querySelector("form")?.addEventListener("submit", (event) => event.preventDefault());
		this.input.addEventListener("input", () => this.render());
		this.input.addEventListener("keydown", (event) => this.onKeydown(event));
		this.results.addEventListener("pointermove", (event) => {
			const hit = event.target instanceof Element ? event.target.closest("[data-search-hit]") : null;
			if (hit instanceof HTMLAnchorElement) this.select(this.hits.indexOf(hit), false);
		});
	}

	/** @returns {string} */
	shortcutHint() {
		const isMac = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent || "");
		return isMac
			? (this.getAttribute("meta-hint") ?? DEFAULTS.metaHint)
			: (this.getAttribute("ctrl-hint") ?? DEFAULTS.ctrlHint);
	}

	/** @returns {Promise<SearchRecord[]>} */
	async load() {
		if (!this.index) {
			this.index = fetch(this.indexUrl)
				.then((response) => {
					if (!response.ok) throw new Error(`Search index responded ${response.status}`);
					return response.json();
				})
				.then((records) => {
					this.errored = false;
					return records;
				})
				.catch((error) => {
					// Dropping the cached promise lets the next keystroke retry. Caching
					// the failure would leave search dead for the rest of the page's life.
					this.index = null;
					this.errored = true;
					console.error(error);
					return [];
				});
		}
		return this.index;
	}

	/**
	 * The query survives a close, so reopening picks up where the reader left off.
	 * Selecting it means typing still replaces it in one go.
	 */
	open() {
		if (!this.dialog.open) this.dialog.showModal();
		this.input.focus();
		this.input.select();
	}

	/** Clears the query and its results. */
	reset() {
		this.input.value = "";
		this.render();
	}

	/**
	 * A bfcache restore hands the page back exactly as it was left, so a reader who
	 * followed a result would return into an open dialog holding a stale query.
	 *
	 * @param {PageTransitionEvent} event
	 */
	onPageShow(event) {
		if (!event.persisted) return;
		if (this.dialog.open) this.dialog.close();
		this.reset();
	}

	/** @param {KeyboardEvent} event */
	onShortcut(event) {
		const target = event.target;
		const typing =
			target instanceof HTMLElement &&
			(target.isContentEditable || /^(input|textarea|select)$/i.test(target.tagName));

		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
			event.preventDefault();
			this.open();
		} else if (event.key === "/" && !typing && !this.dialog.open) {
			event.preventDefault();
			this.open();
		}
	}

	/** @param {KeyboardEvent} event */
	onKeydown(event) {
		// A search input eats the first Escape to clear itself, which would
		// otherwise cost the reader two presses to close the dialog.
		if (event.key === "Escape") {
			event.preventDefault();
			this.dialog.close();
		} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			if (!this.hits.length) return;
			event.preventDefault();
			const step = event.key === "ArrowDown" ? 1 : -1;
			this.select((this.active + step + this.hits.length) % this.hits.length);
		} else if (event.key === "Enter") {
			const hit = this.hits[this.active];
			if (!hit) return;
			event.preventDefault();
			this.dialog.close();
			window.location.href = hit.href;
		}
	}

	/**
	 * @param {number} index
	 * @param {boolean} [scroll] Off for pointer selection, where scrolling a half
	 *   visible row into view drags it out from under the cursor.
	 */
	select(index, scroll = true) {
		if (index < 0 || index === this.active) return;
		this.hits[this.active]?.setAttribute("aria-selected", "false");
		this.active = index;

		const hit = this.hits[index];
		hit.setAttribute("aria-selected", "true");
		if (scroll) hit.scrollIntoView({ block: "nearest" });
		this.input.setAttribute("aria-activedescendant", hit.id);
	}

	/**
	 * @param {string} value
	 * @returns {string}
	 */
	escapeHtml(value) {
		return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
	}

	/**
	 * @param {string} value
	 * @returns {string}
	 */
	escapeRegExp(value) {
		return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	/**
	 * Escapes first, then marks, so the terms match the already escaped text.
	 *
	 * @param {string} text
	 * @param {string[]} terms
	 * @returns {string} HTML with each match wrapped in a `<mark>`
	 */
	highlight(text, terms) {
		// An empty pattern matches between every character, marking each one.
		if (!terms.length) return this.escapeHtml(text);

		const pattern = terms
			.map((term) => this.escapeRegExp(this.escapeHtml(term)))
			.sort((a, b) => b.length - a.length)
			.join("|");

		return this.escapeHtml(text).replace(new RegExp(pattern, "gi"), (match) => `<mark>${match}</mark>`);
	}

	/**
	 * A window of text around the first match, so the reader sees why it matched.
	 *
	 * @param {string} text
	 * @param {string[]} terms
	 * @returns {string}
	 */
	snippet(text, terms) {
		const { SNIPPET_LENGTH, SNIPPET_LEAD } = /** @type {typeof SiteSearch} */ (this.constructor);
		const haystack = text.toLowerCase();
		const found = terms.map((term) => haystack.indexOf(term)).filter((index) => index !== -1);
		const at = found.length ? Math.min(...found) : 0;
		if (at < SNIPPET_LEAD + 20) return text.slice(0, SNIPPET_LENGTH);

		// With no space to break on there is nothing to trim, and an ellipsis would
		// claim text was skipped when it was not.
		const space = text.indexOf(" ", at - SNIPPET_LEAD);
		if (space === -1) return text.slice(0, SNIPPET_LENGTH);

		return `…${text.slice(space + 1, space + 1 + SNIPPET_LENGTH)}`;
	}

	/**
	 * Whether two words are the same word, so a page claiming "install" is still
	 * found by "installing". Prefixes only, and the shorter one has to be long
	 * enough that "ui" does not match "building".
	 *
	 * @param {string} a
	 * @param {string} b
	 * @returns {boolean}
	 */
	sameWord(a, b) {
		const [short, long] = a.length <= b.length ? [a, b] : [b, a];
		return short.length >= 4 && long.startsWith(short);
	}

	/**
	 * Override to rank differently.
	 *
	 * @param {SearchRecord} record
	 * @param {string[]} terms Lowercase words of the query
	 * @param {string} query The whole lowercase query
	 * @returns {number} Score, or 0 to drop the record
	 */
	score(record, terms, query) {
		const title = record.t.toLowerCase();
		const heading = (record.h ?? "").toLowerCase();
		const content = record.c.toLowerCase();
		const declared = record.k ?? [];
		let total = 0;

		for (const term of terms) {
			const inTitle = title.includes(term);
			const inHeading = heading.includes(term);
			const inContent = content.includes(term);
			const inDeclared = declared.some((keyword) => keyword.includes(term) || this.sameWord(term, keyword));
			if (!inTitle && !inHeading && !inContent && !inDeclared) return 0;

			if (inTitle) total += title.startsWith(term) ? 14 : 9;
			if (inDeclared) total += 9;
			if (inHeading) total += 5;
			if (inContent) total += 2;
		}

		const aliased = declared.some((keyword) => keyword === query || this.sameWord(query, keyword));
		if (title === query || aliased) total += 30;
		else if (title.includes(query)) total += 12;
		// The intro chunk describes the whole page, so it outranks its own sections.
		if (!record.h) total += 8;

		// Only a positive multiplier is meaningful: zero would drop the record, and a
		// negative one would sort it below records that never matched.
		const boost = Number(record.b);
		return total * (boost > 0 ? boost : 1);
	}

	/**
	 * Only ever compared between chunks of one section, never between pages, since
	 * raw frequency measures how much was written rather than how relevant it is.
	 *
	 * @param {SearchRecord} record
	 * @param {string[]} terms
	 * @returns {number}
	 */
	occurrences(record, terms) {
		const haystack = `${record.t} ${record.h ?? ""} ${record.c}`.toLowerCase();
		return terms.reduce((count, term) => count + haystack.split(term).length - 1, 0);
	}

	async render() {
		const typed = this.input.value.trim();
		const query = typed.toLowerCase();
		const terms = query.split(/\s+/).filter(Boolean);

		if (!terms.length) return this.show([], this.idleText);

		const records = await this.load();
		// A slower fetch must not overwrite results for a newer query.
		if (this.input.value.trim().toLowerCase() !== query) return;
		// "No results" would blame the reader for a network failure.
		if (this.errored) return this.show([], this.errorText);

		// Several chunks can share one anchor, and they are one destination, so keep
		// the chunk most about the query. Its snippet also shows the match best.
		const best = new Map();
		records.forEach((record, position) => {
			const total = this.score(record, terms, query);
			if (!total) return;

			const hits = this.occurrences(record, terms);
			const current = best.get(record.u);
			if (!current || total > current.total || (total === current.total && hits > current.hits)) {
				best.set(record.u, { record, total, hits, position });
			}
		});

		// Scores collide often, being built from a handful of fixed amounts. Ties keep
		// index order: document order within a page, declaration order across pages.
		const matches = [...best.values()].sort((a, b) => b.total - a.total || a.position - b.position);

		this.show(this.limit(matches, terms), this.emptyText.replace("{query}", typed));
	}

	/**
	 * One page can match in many places. Capping how many of its sections appear
	 * makes the list read as a list of destinations rather than of fragments.
	 *
	 * @param {Match[]} matches Sorted best first
	 * @param {string[]} terms
	 * @returns {Match[]}
	 */
	limit(matches, terms) {
		// A Map, not an object: a url of "__proto__" would not take as a plain key,
		// and the cap would silently stop applying.
		const perPage = new Map();
		const answered = new Set();
		const results = [];

		for (const match of matches) {
			const page = match.record.u.split("#")[0];
			if (answered.has(page)) continue;

			const seen = (perPage.get(page) ?? 0) + 1;
			perPage.set(page, seen);
			if (seen > this.maxPerPage) continue;

			results.push(match);
			if (results.length === this.maxResults) break;

			// When the query matches what the page is, by title or by a term it
			// claims, the page is already the answer and its sections would only
			// repeat that destination under a different heading. Matches found in
			// body text are not the page itself, so those still list per section.
			const title = match.record.t.toLowerCase();
			const declared = match.record.k ?? [];
			const isPage = terms.every(
				(term) =>
					title.includes(term) ||
					declared.some((keyword) => keyword.includes(term) || this.sameWord(term, keyword)),
			);
			if (isPage) answered.add(page);
		}

		return results;
	}

	/**
	 * @param {Match[]} matches
	 * @param {string} message Shown instead of the list when there are no matches
	 */
	show(matches, message) {
		const terms = this.input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
		const optionId = (index) => `${this.results.id || "search"}-option-${index}`;

		this.results.innerHTML = matches
			.map(
				({ record }, index) => `
				<a class="search-hit" data-search-hit role="option" aria-selected="false" id="${this.escapeHtml(optionId(index))}" href="${this.escapeHtml(record.u)}">
					<span class="search-hit-title">${this.highlight(record.t, terms)}${
						record.h ? `<span class="search-hit-heading">${this.highlight(record.h, terms)}</span>` : ""
					}</span>
					<span class="badge search-hit-source">${this.escapeHtml(record.s)}</span>
					<span class="search-hit-text">${this.highlight(this.snippet(record.c, terms), terms)}</span>
				</a>`,
			)
			.join("");

		this.hits = /** @type {HTMLAnchorElement[]} */ ([...this.results.querySelectorAll("a[data-search-hit]")]);
		this.active = -1;
		this.input.removeAttribute("aria-activedescendant");
		this.input.setAttribute("aria-expanded", String(this.hits.length > 0));
		if (this.status) this.status.textContent = this.hits.length ? "" : message;
		if (this.hits.length) this.select(0);
	}
}

if (!customElements.get("site-search")) {
	customElements.define("site-search", SiteSearch);
}

export default SiteSearch;
