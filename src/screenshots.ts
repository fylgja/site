export interface Screenshot {
	name: string;
	label: string;
	path: string;
	width: number;
	height: number;
	scale: number;
	formFactor: "wide" | "narrow";
}

export default [
	{
		name: "desktop-home",
		label: "Fylgja CSS homepage on desktop",
		path: "/",
		width: 1920,
		height: 1080,
		scale: 1,
		formFactor: "wide",
	},
	{
		name: "mobile-home",
		label: "Fylgja CSS homepage on mobile",
		path: "/",
		width: 720,
		height: 1440,
		scale: 2,
		formFactor: "narrow",
	},
] satisfies Screenshot[];
