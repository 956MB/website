export interface IEntryItem {
    caption?: string;
    path: string;
    width: number;
    height: number;
}

export interface IEntry {
	id: string;
	title: string;
    date?: string;
	link?: string;
    count?: number;
	summary?: string[];
	tags?: string[];
    category?: string;
    new?: boolean;
    useLinkPreview?: IEntryItem;
    credit?: string;
    aspectRatio?: boolean;
    groups?: string[];
    linkBlog?: string;
    thumbnail?: IEntryItem;
	items: IEntryItem[];
}

export interface IEntryGroups extends Array<IEntryGroup>{}
export interface IEntryGroup {
	title: string;
	category: string;
	description?: string;
	items: IEntry[];
    credit?: boolean;
}
export interface IEntryGroupLinks extends IEntryGroup{
    title: string;
	category: string;
	description?: string;
	items: IEntry[];
    credit?: boolean;
    links: string[];
    useFirsts?: number[];
}