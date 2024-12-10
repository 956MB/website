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
    lang?: string;
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
    items?: IEntryItem[];
}

export interface IEntryGroup {
    title: string;
    category: string;
    description?: string;
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
    path,
    width,
    height,
    ...(caption && { caption }),
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
