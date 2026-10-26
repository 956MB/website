export type DevSection = "lightroom" | "designs" | "extras";

export interface IDevGroupConfig {
    key: string;
    section: DevSection;
    label: string;
    dataFile: string;
    target: string;
    imageDir: string;
    categories: string[];
    defaultCategory: string;
    dateFormat: "monthDayYear" | "year";
}

export const devGroups: Record<string, IDevGroupConfig> = {
    lightroom: {
        key: "lightroom",
        section: "lightroom",
        label: "Lightroom",
        dataFile: "lib/lightroom.tsx",
        target: "photos",
        imageDir: "/images/lightroom",
        categories: ["photography"],
        defaultCategory: "photography",
        dateFormat: "monthDayYear",
    },
    "designs-logos": {
        key: "designs-logos",
        section: "designs",
        label: '"logos"',
        dataFile: "lib/designs.tsx",
        target: "logos",
        imageDir: "/images/concepts",
        categories: [
            "illustrator",
            "photoshop",
            "figma",
            "dotgrid",
            "concept",
            "logo",
        ],
        defaultCategory: "illustrator",
        dateFormat: "year",
    },
    "designs-ui": {
        key: "designs-ui",
        section: "designs",
        label: "ui / ux",
        dataFile: "lib/designs.tsx",
        target: "ui",
        imageDir: "/images/concepts",
        categories: [
            "figma",
            "illustrator",
            "photoshop",
            "dotgrid",
            "concept",
            "logo",
        ],
        defaultCategory: "figma",
        dateFormat: "year",
    },
    "extras-icons": {
        key: "extras-icons",
        section: "extras",
        label: "icons",
        dataFile: "lib/extras.tsx",
        target: "icons",
        imageDir: "/images/extras/icons",
        categories: ["icon", "wallpaper"],
        defaultCategory: "icon",
        dateFormat: "monthDayYear",
    },
    "extras-wallpapers": {
        key: "extras-wallpapers",
        section: "extras",
        label: "wallpapers",
        dataFile: "lib/extras.tsx",
        target: "wallpapers",
        imageDir: "/images/extras/wallpapers",
        categories: ["wallpaper", "icon"],
        defaultCategory: "wallpaper",
        dateFormat: "monthDayYear",
    },
};

const titleToKey: Record<string, string> = {
    Lightroom: "lightroom",
    '"logos"': "designs-logos",
    "ui / ux": "designs-ui",
    icons: "extras-icons",
    wallpapers: "extras-wallpapers",
};

export function devGroupForTitle(title?: string): IDevGroupConfig | undefined {
    const key = title ? titleToKey[title] : undefined;
    return key ? devGroups[key] : undefined;
}

export const isDev = process.env.NODE_ENV === "development";

export function slugify(value: string): string {
    return value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/['"“”’]/g, "")
        .replace(/[^a-z0-9!]+/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function defaultDate(format: IDevGroupConfig["dateFormat"]): string {
    const now = new Date();
    if (format === "year") return String(now.getFullYear());
    return `${now.getMonth() + 1}.${now.getDate()}.${now.getFullYear()}`;
}

export function siteImagePath(imageDir: string, file: string): string {
    const dir = imageDir
        .trim()
        .replace(/^\/+|\/+$/g, "")
        .replace(/^images\//, "");
    return `/images${dir ? `/${dir}` : ""}/${file}`;
}
