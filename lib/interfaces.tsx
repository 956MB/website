export interface IEntryImage {
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
    useLinkPreview?: IEntryImage;
    credit?: string;
    aspectRatio?: boolean;
    groups?: string[];
    linkBlog?: string;
    thumbnail?: IEntryImage;
	images: IEntryImage[];
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