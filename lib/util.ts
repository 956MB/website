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

export function getLangColor(lang: string | undefined): string {
    const langColors: { [key: string]: string } = {
        "JavaScript": "bg-[#F1E05A]",
        "TypeScript": "bg-[#3078C6]",
        "Python": "bg-[#3572A5]",
        "Lua": "bg-[#000080]",
        "C": "bg-[#555555]",
        "C++": "bg-[#F34B7D]",
        "C#": "bg-[#188601]",
        "Rust": "bg-[#DEA584]",
        "Swift": "bg-[#F05137]",
        "CSS": "bg-[#663399]",
        "none": "bg-neutral-300",
    };
    
    return langColors[lang || 'none'] || langColors['none'];
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
