class TabGroup extends HTMLElement {
	/**
	 * The tabs, read on use so the element works even when it is defined before its children are parsed.
	 * @returns {HTMLButtonElement[]}
	 */
	get tabs() {
		return [...this.querySelectorAll('[role="tab"]')];
	}

	connectedCallback() {
		this.addEventListener("click", this);
		this.addEventListener("keydown", this);
	}

	/**
	 * Selects a tab on click, and moves between tabs with the arrow, Home, and End keys.
	 * @param {MouseEvent | KeyboardEvent} event
	 * @returns {void}
	 */
	handleEvent(event) {
		const current = event.target.closest('[role="tab"]');
		if (!current) return;

		if (event.type === "click") {
			this.select(current);
			return;
		}

		const tabs = this.tabs;
		const index = tabs.indexOf(current);
		const last = tabs.length - 1;
		const vertical = current.parentElement.getAttribute("aria-orientation") === "vertical";
		const next = {
			[vertical ? "ArrowDown" : "ArrowRight"]: index === last ? 0 : index + 1,
			[vertical ? "ArrowUp" : "ArrowLeft"]: index === 0 ? last : index - 1,
			Home: 0,
			End: last,
		}[event.key];

		if (next === undefined) return;
		event.preventDefault();
		this.select(tabs[next]);
		tabs[next].focus();
	}

	/**
	 * Marks one tab as selected and shows its panel, hiding the others.
	 * @param {HTMLButtonElement} tab
	 * @returns {void}
	 */
	select(tab) {
		for (const item of this.tabs) {
			const selected = item === tab;
			item.setAttribute("aria-selected", String(selected));
			item.tabIndex = selected ? 0 : -1;
			document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
		}
	}
}

customElements.define("tab-group", TabGroup);
