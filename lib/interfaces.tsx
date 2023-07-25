import { StaticImageData } from "next/image";

export interface IEntry {
	id: string;
	title: string;
	link?: string;
	summary?: string[];
	tags?: string[];
    category?: string;
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
	description: string;
	items: IEntry[];
}