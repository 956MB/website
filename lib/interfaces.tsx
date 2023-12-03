export interface IEntryContent {
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
    useLinkPreview?: IEntryContent;
    credit?: boolean;
    groups?: string[];
    linkBlog?: string;
    thumbnail?: IEntryContent;
	content: IEntryContent[];
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