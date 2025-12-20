import { Metadata } from "next";
import { imgUrl, stripHtml } from "./util";

export interface IEntryItem {
    caption?: string;
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
    caption?: string,
): IEntryItem => ({
    path: imgUrl(path),
    width,
    height,
    ...(caption && { caption }),
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

export const slugMetadata = (
    baseUrl: string,
    name: string,
    og: string,
    entry: IEntry,
): Metadata => {
    const image =
        entry.thumbnail?.path ||
        (entry.items && entry.items.length > 0 ? entry.items[0].path : null);

    return {
        title: entry.title,
        authors: [{ name }],
        keywords: entry.tags,
        description: stripHtml(entry.summary?.join(" ") ?? ""),
        openGraph: {
            title: entry.title,
            description: stripHtml(entry.summary?.join(" ") ?? ""),
            url: image ? `${baseUrl}${image}` : undefined,
            images: [
                {
                    url: image ?? "",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: entry.title,
            description: stripHtml(entry.summary?.join(" ") ?? ""),
            images: image ?? "",
        },
    };
};
