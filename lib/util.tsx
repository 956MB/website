import { Content } from "contentlayer/generated";
import { IEntry, IEntryGroup } from "lib/interfaces";
import { HiMiniLanguage } from "react-icons/hi2";
import { PiFigmaLogo } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

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

export function getLangColor(
    lang: string | undefined,
    prefix: string = "",
): string {
    const langColors: { [key: string]: string } = {
        JavaScript: "#F1E05A",
        TypeScript: "#3078C6",
        Python: "#3572A5",
        Lua: "#000080",
        Zig: "#F7A31E",
        C: "#555555",
        "C++": "#F34B7D",
        "C#": "#188601",
        Rust: "#DEA584",
        Swift: "#F05137",
        CSS: "#663399",
        Vue: "#40B983",
        none: "neutral-300",
    };

    const color = langColors[lang || "none"] || langColors["none"];
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

export function findEntryById(
    id: string,
    groups: IEntryGroup[],
): IEntry | null {
    const allEntries = groups.flatMap((group) => group.items);
    return allEntries.find((item) => item.id === id) || null;
}

export function CategoryIcon({
    large,
    category,
}: {
    large: boolean;
    category: string | undefined;
}) {
    // prettier-ignore
    return (
        <div className="child:text-neutral-300">
            {!category
                ? null
                : (() => {
                    switch (category) {
                        case "figma":
                            return PiFigmaLogo({ size: large ? 24 : 21 });
                        case "photoshop":
                            return SiAdobephotoshop({ size: large ? 21 : 18 });
                        case "illustrator":
                            return SiAdobeillustrator({ size: large ? 21 : 18 });
                        case "react":
                            return RiReactjsLine({ size: large ? 24 : 21 });
                        case "script":
                            return HiMiniLanguage({ size: large ? 24 : 21 });
                        default:
                            return null;
                    }
                })()}
        </div>
    );
}
