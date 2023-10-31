export interface IEntry {
	id: string;
	title: string;
    date?: string;
	link?: string;
    count?: number;
	summary?: string[];
	tags?: string[];
    category?: string;
    credit?: boolean;
    groups?: string[];
    linkBlog?: string;
	images: IEntryImage[];
}

export interface IEntryImage {
    path: string;
    width: number;
    height: number;
}

export interface IEntryGroups extends Array<IEntryGroup>{}
export interface IEntryGroup {
	title: string;
	category: string;
	description: string;
	items: IEntry[];
    credit?: boolean;
}