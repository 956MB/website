import {
    entry,
    group,
    IEntry,
    IEntryGroup,
    IEntryGroups,
    item,
} from "./interfaces";

const scripts = [
    entry(
        "script_pLang",
        '"pLang"',
        "1.23.2024",
        "script",
        [
            item("/images/pLang/pLang.gif", 2368, 2368),
            item("/images/pLang/pLang-layout.png", 1835, 1202),
        ],
        {
            tags: ["pLang"],
            summary: [
                'A script I was messing around with only using "p" and "L". This script makes no sense, and it\'s beyond rough right now. I\'ll probably refine it later.',
            ],
            thumbnail: item("/images/pLang/pLang-thumb.png", 1647, 1647),
        },
    ),
    entry(
        "script_circles_only",
        "Circles only, apparently",
        "11.12.2023",
        "script",
        [
            item(
                "/images/circles-only-apparently/circles_only_1.png",
                1038,
                504,
            ),
            item(
                "/images/circles-only-apparently/circles_only_2.png",
                1041,
                2411,
            ),
            item(
                "/images/circles-only-apparently/circles_only_3.png",
                1284,
                1272,
            ),
            item(
                "/images/circles-only-apparently/circles_only_4.png",
                1236,
                1770,
            ),
        ],
        {
            tags: ["Circles"],
        },
    ),
    entry(
        "script_eggers_gyea",
        "Movie Posters",
        "7.19.2023",
        "script",
        [
            item("/images/poster-edits/the-northman.png", 1500, 2202),
            item("/images/poster-edits/the-revenant.png", 2000, 3000),
            item("/images/poster-edits/alien.png", 2000, 3000),
            item("/images/poster-edits/the-lighthouse.png", 1778, 2667),
        ],
        {
            tags: ["GYEA"],
        },
    ),
    entry(
        "script_gyea",
        '"GYEA"',
        "6.21.2023",
        "script",
        [item("/images/concepts/gyea.png", 1745, 789)],
        {
            tags: ["GYEA"],
        },
    ),
    entry(
        "script_brands_tab_hokj",
        "Brand logos",
        "5.25.2023",
        "script",
        [
            item("/images/brand-logos-scripts/IMG_V678.png", 1920, 1080),
            item("/images/brand-logos-scripts/IMG_R78968.png", 2021, 1096),
            item("/images/brand-logos-scripts/IMG_R121234.png", 2021, 1096),
            item("/images/brand-logos-scripts/IMG_R90636.png", 2021, 1096),
        ],
        {
            tags: ["Tab"],
        },
    ),
    entry(
        "script_tab",
        '"Tab"',
        "5.18.2023",
        "script",
        [item("/images/concepts/tab.png", 1358, 929)],
        {
            tags: ["Tab"],
        },
    ),
    entry(
        "script_before_tab",
        "Before Tab",
        "4.23.2023",
        "script",
        [item("/images/something-new/IMG_54322.jpg", 1358, 929)],
        {
            tags: ["Tab"],
        },
    ),
    entry(
        "script_hokj",
        '"Hokj"',
        "3.30.2023",
        "script",
        [item("/images/concepts/hokj.png", 1362, 720)],
        {
            tags: ["Hokj"],
        },
    ),
];

export const scripts_section = group(
    "Scripts",
    "script",
    "Construced scripts (and eventually conlangs) I draw for fun (r/neography)",
    scripts,
    { credit: true },
);

export const neographyGroups: IEntryGroups = [scripts_section];
