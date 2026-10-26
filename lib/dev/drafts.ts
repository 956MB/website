import { IEntry, IEntryItem } from "lib/interfaces";
import { defaultDate, IDevGroupConfig, slugify } from "./config";

export interface IDevImage {
    name: string;
    path: string;
    width: number;
    height: number;
    source: string;
    bytes: number;
    originalWidth?: number;
    originalHeight?: number;
    resized?: boolean;
}

export interface IDevDraft {
    key: string;
    groupKey: string;
    image: IDevImage;
    thumb?: IDevImage;
    id: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    link: string;
    credit: string;
    tags: string;
    imageDir: string;
    imageFile: string;
    isNew: boolean;
    altThumb: boolean;
    aspectRatio: boolean;
    saturation: boolean;
    previewed: boolean;
    updatedAt: number;
}

export function newDraft(group: IDevGroupConfig): IDevDraft {
    return {
        key: `draft-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        groupKey: group.key,
        image: {
            name: "",
            path: "",
            width: 0,
            height: 0,
            source: "",
            bytes: 0,
        },
        id: "",
        title: "",
        date: defaultDate(group.dateFormat),
        category: group.defaultCategory,
        summary: "",
        link: "",
        credit: "",
        tags: "",
        imageDir: group.imageDir,
        imageFile: "",
        isNew: false,
        altThumb: true,
        aspectRatio: false,
        saturation: false,
        previewed: false,
        updatedAt: Date.now(),
    };
}

export function summaryLines(summary: string): string[] {
    return summary
        .split(/\n{2,}/)
        .map((part) => part.trim())
        .filter(Boolean);
}

export function tagList(tags: string): string[] {
    return tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
}

export function suggestedId(name: string): string {
    return slugify(name.replace(/\.[a-z0-9]+$/i, ""));
}

export function suggestedFile(id: string): string {
    return `${slugify(id) || "image"}.webp`;
}

export function suggestedThumbFile(id: string): string {
    return `${slugify(id) || "image"}-thumb.webp`;
}

export function titleFromName(name: string): string {
    return name
        .replace(/\.[a-z0-9]+$/i, "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export function isDraftComplete(draft: IDevDraft): boolean {
    return Boolean(
        draft.image.path &&
        draft.id.trim() &&
        draft.title.trim() &&
        draft.imageFile,
    );
}

function toItem(image: IDevImage, saturation?: boolean): IEntryItem {
    return {
        path: image.path,
        width: image.width,
        height: image.height,
        ...(saturation && { saturation: true }),
    };
}

export function draftToEntry(draft: IDevDraft): IEntry {
    const thumbnail = toItem(draft.thumb ?? draft.image);
    const summary = summaryLines(draft.summary);
    const tags = tagList(draft.tags);

    return {
        id: draft.id || draft.key,
        title: draft.title || "Untitled",
        date: draft.date,
        category: draft.category,
        items: [toItem(draft.image, draft.saturation)],
        thumbnail,
        ...(summary.length > 0 && { summary }),
        ...(draft.link && { link: draft.link }),
        ...(draft.credit && { credit: draft.credit }),
        ...(tags.length > 0 && { tags }),
        ...(draft.isNew && { new: true }),
        ...(!draft.altThumb && { altThumb: false }),
        ...(draft.aspectRatio && { aspectRatio: true }),
    };
}
