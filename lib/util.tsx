import { IEntry, IEntryGroup } from "lib/interfaces";
import { HiMiniLanguage } from "react-icons/hi2";
import { PiFigmaLogo } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

export const imgBase = "https://img.956mb.com";

export const hl = function (text: string) {
    return `<span class='large-highlight'>${text}</span>`;
};

export const a = function (
    href: string,
    text: string,
    className: string = "p-link large-highlight",
) {
    return `<a class="${className}" rel="noopener noreferrer" target="_blank" href="${href}">${text}</a>`;
};

export function imgUrl(path: string): string {
    if (path.startsWith("http")) {
        return path;
    }

    if (path.startsWith("./")) {
        return path.replace("./", "/");
    }

    return `${imgBase}${path}`;
}

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

export const stripHtml = (htmlString: string): string => {
    return htmlString
        .replace(/<code>(.*?)<\/code>/g, "$1")
        .replace(/<a[^>]*>(.*?)<\/a>/g, "$1")
        .replace(/<[^>]*>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
};

export const generateRandomDelays = (
    itemCount: number,
    baseDelay: number = 0.1,
): number[] => {
    const delays = Array.from({ length: itemCount }, (_, i) => i * baseDelay);
    for (let i = delays.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [delays[i], delays[j]] = [delays[j], delays[i]];
    }
    return delays;
};

export const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0,
        },
    },
};

export const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};
