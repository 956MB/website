import { entry, group, IEntryGroups, item, reference } from "./interfaces";

const scripts = [
    entry(
        "10.29.2025",
        "10.29.2025",
        "",
        "script",
        [item("/images/scripts/10292025_1.jpg", 1940, 1940)],
        {
            references: [reference("11.22.2024", "/neography/11.22.2024")],
            thumbnail: item("/images/scripts/10292025_thumb.jpg", 1000, 1000),
        },
    ),
    entry(
        "11.22.2024",
        "11.22.2024",
        "",
        "script",
        [
            item("/images/scripts/03092024_1.png", 2778, 1850),
            item("/images/scripts/03092024_2.png", 1020, 1147),
            item("/images/scripts/03092024_3.png", 1259, 1096),
            item("/images/scripts/03092024_4.png", 1029, 886),
            item("/images/scripts/03092024_5.png", 979, 859),
            item("/images/scripts/03092024_6.png", 1015, 772),
            item("/images/scripts/03092024_7.png", 1061, 593),
            item("/images/scripts/03092024_8.png", 940, 805),
        ],
        {
            references: [reference("10.29.2025", "/neography/10.29.2025")],
            thumbnail: item("/images/scripts/03092024_thumb.png", 1000, 1000),
        },
    ),
    entry(
        "03.09.2024",
        "03.09.2024",
        "",
        "script",
        [
            item("/images/scripts/12022023_1.png", 1920, 1519),
            item("/images/scripts/12022023_2.png", 1972, 1400),
            item("/images/scripts/12022023_3.png", 1833, 1121),
            item("/images/scripts/12022023_4.png", 2153, 1445),
        ],
        {
            thumbnail: item("/images/scripts/12022023_thumb.png", 2778, 1850),
        },
    ),
    entry(
        "pLang",
        '"pLang"',
        "2024",
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
        "circles-only",
        "Circles only, apparently.",
        "2023",
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
            references: [
                reference(
                    'r/neography - "I can only do circles, apparently"',
                    "https://www.reddit.com/r/neography/comments/17tjpwg/i_can_only_do_circles_apparently/",
                ),
            ],
            summary: [
                'An experimental attempt at a script using circles and lines. Apparently they look like... something... I won\'t say what, but <a href="https://www.reddit.com/r/neography/comments/17tjpwg/comment/k8xkc8f/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button">this comment</a> explains it. :|',
            ],
        },
    ),
    entry(
        "eggers-gyea",
        "Movie Posters",
        "2023",
        "script",
        [
            item("/images/poster-edits/the-northman.png", 1500, 2202),
            item("/images/poster-edits/the-revenant.png", 2000, 3000),
            item("/images/poster-edits/alien.png", 2000, 3000),
            item("/images/poster-edits/the-lighthouse.png", 1778, 2667),
        ],
        {
            tags: ["GYEA"],
            references: [reference('"GYEA"', "/neography/gyea")],
        },
    ),
    entry(
        "gyea",
        '"GYEA"',
        "2023",
        "script",
        [item("/images/concepts/gyea.png", 1745, 789)],
        {
            tags: ["GYEA"],
            references: [
                reference("Movie Posters", "/neography/eggers-gyea"),
                reference(
                    "r/neography - Is this anything?",
                    "https://www.reddit.com/r/neography/comments/13wk0t6/is_this_anything/",
                ),
            ],
        },
    ),
    entry(
        "brands-tab-hokj",
        "Brand logos",
        "2023",
        "script",
        [
            item("/images/brand-logos-scripts/IMG_V678.png", 1920, 1080),
            item("/images/brand-logos-scripts/IMG_R78968.png", 2021, 1096),
            item("/images/brand-logos-scripts/IMG_R121234.png", 2021, 1096),
            item("/images/brand-logos-scripts/IMG_R90636.png", 2021, 1096),
        ],
        {
            tags: ["Tab"],
            references: [
                reference('"Tab"', "/neography/tab"),
                reference('"Before Tab"', "/neography/before-tab"),
                reference('"Hokj"', "/neography/hokj"),
                reference(
                    "r/neography - Star Wars: Visions",
                    "https://www.reddit.com/r/neography/comments/13r9iw8/star_wars_visions/",
                ),
                reference(
                    "r/neography - Wanted to do the Reddit logo...",
                    "https://www.reddit.com/r/neography/comments/129gdiq/wanted_to_do_the_reddit_logo_thing_with_this/",
                ),
            ],
        },
    ),
    entry(
        "tab",
        '"Tab"',
        "2023",
        "script",
        [item("/images/concepts/tab.png", 1358, 929)],
        {
            tags: ["Tab"],
            references: [
                reference('"Before Tab"', "/neography/before-tab"),
                reference(
                    "r/neography - Very different look now",
                    "https://www.reddit.com/r/neography/comments/13cmyrp/very_different_look_now/",
                ),
            ],
        },
    ),
    entry(
        "before-tab",
        "Before Tab",
        "2023",
        "script",
        [item("/images/something-new/IMG_54322.jpg", 1358, 929)],
        {
            tags: ["Tab"],
            references: [
                reference(
                    "r/neography - First draft of something...",
                    "https://www.reddit.com/r/neography/comments/12pdpky/first_draft_of_something_new_some_minor/",
                ),
            ],
        },
    ),
    entry(
        "hokj",
        '"Hokj"',
        "2023",
        "script",
        [item("/images/concepts/hokj.png", 1362, 720)],
        {
            tags: ["Hokj"],
            references: [
                reference(
                    "r/neography - I have no idea what I'm doing",
                    "https://www.reddit.com/r/neography/comments/1281xvo/i_have_no_idea_what_im_doing/",
                ),
                reference(
                    "r/neography - Continuation/variation...",
                    "https://www.reddit.com/r/neography/comments/12ia74d/continuationvariation_on_my_fish_hook_script/",
                ),
            ],
        },
    ),
];

export const scripts_section = group(
    "Neography",
    "neography",
    "Most of the language scripts (and eventually conlangs) I've created for the r/neography subreddit, or my own personal use.",
    scripts,
    {
        credit: true,
        keywords: [
            "scripts",
            "language",
            "conlang",
            "r/neography",
            "reddit",
            "concepts",
        ],
    },
);

export const neographyGroups: IEntryGroups = [scripts_section];
