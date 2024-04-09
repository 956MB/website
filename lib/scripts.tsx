import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

export const script_circles_only: IEntry = {
    id: "script_circles_only",
    title: "Circles only, apparently",
    date: "11.12.2023",
    category: "script",
    tags: ["Circles"],
    linkBlog: "https://www.956mb.com/blog/circles-only-apparently",
    items: [
        {
            path: "/images/circles-only-apparently/circles_only_1.png",
            width: 1038,
            height: 504,
        },
        {
            path: "/images/circles-only-apparently/circles_only_2.png",
            width: 1041,
            height: 2411,
        },
        {
            path: "/images/circles-only-apparently/circles_only_3.png",
            width: 1284,
            height: 1272,
        },
        {
            path: "/images/circles-only-apparently/circles_only_4.png",
            width: 1236,
            height: 1770,
        },
    ],
};

export const script_eggers_posters_gyea: IEntry = {
    id: "script_eggers_gyea",
    title: "Movie Posters",
    date: "7.19.2023",
    category: "script",
    tags: ["GYEA"],
    items: [
        {
            path: "/images/poster-edits/the-northman.png",
            width: 1500,
            height: 2202,
        },
        {
            path: "/images/poster-edits/the-revenant.png",
            width: 2000,
            height: 3000,
        },
        { path: "/images/poster-edits/alien.png", width: 2000, height: 3000 },
        {
            path: "/images/poster-edits/the-lighthouse.png",
            width: 1778,
            height: 2667,
        },
    ],
};

export const script_gyea: IEntry = {
    id: "script_hokj",
    title: '"GYEA"',
    date: "6.21.2023",
    category: "script",
    tags: ["GYEA"],
    linkBlog: "https://www.956mb.com/blog/is-this-anything",
    items: [{ path: "/images/concepts/gyea.png", width: 1745, height: 789 }],
};

export const script_brands: IEntry = {
    id: "script_brands_tab_hokj",
    title: "Brand logos",
    date: "5.25.2023",
    category: "script",
    tags: ["Tab"],
    items: [
        {
            path: "/images/brand-logos-scripts/IMG_V678.png",
            width: 1920,
            height: 1080,
        },
        {
            path: "/images/brand-logos-scripts/IMG_R78968.png",
            width: 2021,
            height: 1096,
        },
        {
            path: "/images/brand-logos-scripts/IMG_R121234.png",
            width: 2021,
            height: 1096,
        },
        {
            path: "/images/brand-logos-scripts/IMG_R90636.png",
            width: 2021,
            height: 1096,
        },
    ],
};

export const script_tab: IEntry = {
    id: "script_tab",
    title: '"Tab"',
    date: "5.18.2023",
    category: "script",
    tags: ["Tab"],
    linkBlog: "https://www.956mb.com/blog/very-different-look-now",
    items: [{ path: "/images/concepts/tab.png", width: 1358, height: 929 }],
};

export const script_before_tab: IEntry = {
    id: "script_before_tab",
    title: "Before Tab",
    date: "4.23.2023",
    category: "script",
    tags: ["Tab"],
    linkBlog: "https://www.956mb.com/blog/something-new",
    items: [
        {
            path: "/images/something-new/IMG_54322.jpg",
            width: 1358,
            height: 929,
        },
    ],
};

export const script_hokj: IEntry = {
    id: "script_hokj",
    title: '"Hokj"',
    date: "3.30.2023",
    category: "script",
    tags: ["Hokj"],
    linkBlog: "https://www.956mb.com/blog/continuation-variation",
    items: [{ path: "/images/concepts/hokj.png", width: 1362, height: 720 }],
};

export const script_pLang: IEntry = {
    id: "script_pLang",
    title: '"pLang"',
    date: "1.23.2024",
    category: "script",
    tags: ["pLang"],
    summary: [
        'A script I was messing around with only using "p" and "L". This script makes no sense, and it\'s beyond rough right now. I\'ll probably refine it later.',
    ],
    thumbnail: {
        path: "/images/pLang/pLang-thumb.png",
        width: 1647,
        height: 1647,
    },
    items: [
        { path: "/images/pLang/pLang.gif", width: 2368, height: 2368 },
        { path: "/images/pLang/pLang-layout.png", width: 1835, height: 1202 },
    ],
};

export const scripts = [
    script_pLang,
    script_circles_only,
    script_eggers_posters_gyea,
    script_gyea,
    script_brands,
    script_tab,
    script_before_tab,
    script_hokj,
];
export const scripts_section: IEntryGroup = {
    title: "Scripts",
    category: "script",
    description:
        "Construced scripts (and eventually conlangs) I draw for fun (r/neography)",
    items: scripts,
};

export const neographyGroups: IEntryGroups = [scripts_section];
