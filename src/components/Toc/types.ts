export type AstroTocProps = {
	depth: number;
	slug: string;
	text: string;
}

export type TocItemProps = {
	depth: number;
	slug: string;
	text: string;
	children: TocItemProps[];
}
