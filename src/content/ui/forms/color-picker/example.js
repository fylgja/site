class ColorField extends HTMLElement {
	/**
	 * The text field, read on use so the element works even when it is defined before its children are parsed.
	 * @returns {HTMLInputElement}
	 */
	get text() {
		return this.querySelector("input:not([type=color])");
	}

	/** @returns {HTMLInputElement} */
	get picker() {
		return this.querySelector("input[type=color]");
	}

	connectedCallback() {
		this.addEventListener("input", this);
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", () => this.sync(), { once: true });
		} else {
			this.sync();
		}
	}

	/**
	 * Writes a picked color into the text field, or shows a typed color in the swatch.
	 * @param {InputEvent} event
	 * @returns {void}
	 */
	handleEvent(event) {
		if (event.target === this.picker) {
			this.text.value = this.picker.value;
			this.text.dispatchEvent(new Event("input", { bubbles: true }));
			return;
		}
		this.sync();
	}

	/**
	 * Shows the text value in the picker, or marks the field empty when there is no color to show.
	 * @returns {void}
	 */
	sync() {
		const picker = this.picker;
		// Resolving through a color property lets var() and other references reach the picker as a real color.
		// accent-color, since form controls transition color and would report the old value.
		picker.style.accentColor = this.text.value.trim();
		const isColor = picker.style.accentColor !== "";
		if (isColor) picker.value = getComputedStyle(picker).accentColor;
		picker.style.accentColor = "";
		this.toggleAttribute("data-empty", !isColor);
	}
}

customElements.define("color-field", ColorField);
