import { Content } from "contentlayer/generated";

export function replaceSlash(date: string) {
    return date.replace(/\//g, ".");
}
export function toTitleCase(str: string) {
    return str
        .toLowerCase()
        .replace(/(?:^|[\s-/])\w/g, function (match) {
            return match.toUpperCase();
        })
        .replaceAll("-", " ");
}

export function toFormattedDate(date: string) {
    const givenDate = new Date(date);
    return givenDate.toLocaleDateString("en-us", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
export function toFormattedDateLocal(date: string) {
    return new Date(date).toLocaleDateString();
}
export function toFormattedDateShort(date: string) {
    return date.slice(0, -4) + date.slice(-2);
}

export function rsplitPath(path: string) {
    const parts = path.split("/");
    const result = parts[parts.length - 1];

    return result;
}

export function getLangColor(lang: string | undefined, prefix: string = ""): string {
    const langColors: { [key: string]: string } = {
        "JavaScript": "#F1E05A",
        "TypeScript": "#3078C6",
        "Python": "#3572A5",
        "Lua": "#000080",
        "Zig": "#F7A31E",
        "C": "#555555",
        "C++": "#F34B7D",
        "C#": "#188601",
        "Rust": "#DEA584",
        "Swift": "#F05137",
        "CSS": "#663399",
        "none": "neutral-300",
    };
    
    const color = langColors[lang || 'none'] || langColors['none'];
    // Return with bg- prefix and bracket notation for hex colors
    if (color.startsWith("#")) {
        return `${prefix}bg-[${color}]`;
    }
    return `${prefix}bg-${color}`;
}

export function filterContentTags(blogs: Content[], tag: string): Content[] {
    return blogs.filter((blog): blog is Content => {
        return blog && blog.tags !== undefined && blog.tags?.includes(tag);
    });
}

export function sortContent(blogs: Content[]): Content[] {
    return blogs.sort((a, b) => {
        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
        }
        return 1;
    });
}
