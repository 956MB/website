import { siteImagePath } from "./config";
import {
    IDevDraft,
    suggestedFile,
    suggestedThumbFile,
    summaryLines,
    tagList,
} from "./drafts";

const q = (value: string) => JSON.stringify(value);

export function buildEntrySnippet(draft: IDevDraft): string {
    const file = draft.imageFile || suggestedFile(draft.id);
    const thumb = draft.thumb ?? draft.image;
    const thumbPath = draft.thumb
        ? siteImagePath(draft.imageDir, suggestedThumbFile(draft.id))
        : siteImagePath(draft.imageDir, file);
    const summary = summaryLines(draft.summary);
    const tags = tagList(draft.tags);

    const options = [
        summary.length > 0 && `summary: [${summary.map(q).join(", ")}],`,
        `thumbnail: item(${q(thumbPath)}, ${thumb.width}, ${thumb.height}),`,
        draft.link.trim() && `link: ${q(draft.link.trim())},`,
        draft.credit.trim() && `credit: ${q(draft.credit.trim())},`,
        tags.length > 0 && `tags: [${tags.map(q).join(", ")}],`,
        draft.isNew && "new: true,",
        !draft.altThumb && "altThumb: false,",
        draft.aspectRatio && "aspectRatio: true,",
    ].filter((option): option is string => Boolean(option));

    const item = `item(${q(siteImagePath(draft.imageDir, file))}, ${draft.image.width}, ${draft.image.height}${draft.saturation ? ", true" : ""})`;

    return [
        "    entry(",
        `        ${q(draft.id)},`,
        `        ${q(draft.title)},`,
        `        ${q(draft.date)},`,
        `        ${q(draft.category)},`,
        `        [${item}],`,
        "        {",
        ...options.map((option) => `            ${option}`),
        "        },",
        "    ),",
    ].join("\n");
}
