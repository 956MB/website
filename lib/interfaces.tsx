import { Metadata } from "next";
import { imgUrl } from "./util";

export interface IEntryItem {
    saturation?: boolean;
    path: string;
    width: number;
    height: number;
}

export interface IReference {
    title: string;
    url: string;
}

export interface IEntry {
    id: string;
    title: string;
    date?: string;
    lang?: string;
    link?: string;
    count?: number;
    summary?: string[];
    tags?: string[];
    category?: string;
    new?: boolean;
    nested?: boolean;
    children?: IEntry[];
    useLinkPreview?: IEntryItem;
    credit?: string;
    aspectRatio?: boolean;
    groups?: string[];
    linkBlog?: string;
    thumbnail?: IEntryItem;
    altThumb?: boolean;
    items?: IEntryItem[];
    references?: IReference[];
}

export interface IEntryGroup {
    title: string;
    titleLink?: string;
    category: string;
    description?: string;
    keywords?: string[];
    og?: string;
    items: IEntry[];
    credit?: boolean;
    links?: string[];
    useFirsts?: number[];
}

export type IEntryGroups = IEntryGroup[];

export const item = (
    path: string,
    width: number,
    height: number,
    saturation?: boolean,
): IEntryItem => ({
    path: imgUrl(path),
    width,
    height,
    ...(saturation && { saturation }),
});

export const reference = (title: string, url: string): IReference => ({
    title,
    url,
});

export const entry = (
    id: string,
    title: string,
    date: string,
    category: string,
    items: IEntryItem[],
    options: Partial<
        Omit<IEntry, "id" | "title" | "date" | "category" | "items">
    > = {},
): IEntry => ({
    id,
    title,
    date,
    category,
    items,
    ...options,
});

export const group = (
    title: string,
    category: string,
    description: string,
    items: IEntry[],
    options: Partial<
        Omit<IEntryGroup, "title" | "category" | "description" | "items">
    > = {},
): IEntryGroup => ({
    title,
    category,
    description,
    items,
    ...options,
});

export const pageMetadata = (
    baseUrl: string,
    name: string,
    og: string,
    group: IEntryGroup,
): Metadata => {
    return {
        title: group.title,
        authors: [{ name }],
        keywords: group.keywords,
        description: group.description,
        openGraph: {
            title: group.title,
            description: group.description,
            url: `${baseUrl}/${group.category}`,
            images: [
                {
                    url: og,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: group.title,
            description: group.description,
            images: og,
        },
    };
};
