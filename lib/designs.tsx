import { entry, group, IEntryGroups, item } from "./interfaces";

// NOTE: logos

const logos = [
    entry(
        "etherspent",
        "Etherspent",
        "2025",
        "dotgrid",
        [
            item("/images/concepts/etherspent/eth-logo.png", 1000, 1000),
            item("/images/concepts/etherspent/eth-card.png", 984, 1472),
        ],
        {
            summary: [
                `Don't ask me what it means. SHOCKINGLY easy to make in <a rel="noopener noreferrer" target="_blank" href="https://100r.co/site/dotgrid.html">Dotgrid (100r.co)</a>. Those two are so impressive it makes me sad.`,
            ],
            thumbnail: item(
                "/images/concepts/etherspent/eth-sketch.png",
                1024,
                1024,
            ),
        },
    ),
    entry(
        "my-logo",
        '"TA956MB" (My logo)',
        "2025",
        "illustrator",
        [item("/images/concepts/ta956mb-logo.png", 1000, 1000)],
        {
            summary: [
                "Refined version of my personal logo, based on a character in a prototype \"GYEA\" script. Contains the letters 'TAB' (for my initials) and '956mb' (my alias).",
            ],
            thumbnail: item("/images/concepts/ta956mb-logo.png", 1000, 1000),
        },
    ),
    entry(
        "n-wear",
        "T! / N! Variation (v2)",
        "2024",
        "illustrator",
        [
            item("/images/t_wear/n!-preview.png", 3325, 2318),
            item("/images/t_wear/t!-preview.png", 3325, 2318),
            item("/images/t_wear/x-concept-shohei.png", 1797, 1785),
        ],
        {
            thumbnail: item("/images/t_wear/n-wear-thumb-2.png", 1024, 1024),
        },
    ),
    entry(
        "t-wear",
        "E! / T! / !T (v1)",
        "2024",
        "illustrator",
        [
            item("/images/t_wear/t-wear-logos-2.jpg", 3152, 1064),
            item(
                "/images/t_wear/t-wear-italy.jpg",
                3152,
                1064,
                "Three versions... can't make my mind up about anything",
            ),
            item("/images/t_wear/t-wear-x-2.jpg", 1837, 2651),
            item(
                "/images/t_wear/IMG_0722_2.PNG",
                2778,
                1940,
                "Initial ideas sketched in Concepts",
            ),
        ],
        {
            summary: [
                "This Is one of a few logo ideas for a clothing brand that popped into my head watching the Australian Open this year. I've always been interested in the idea of custom equipment / clothing, and what those things would look like if I designed them for myself. Whether it was hockey in my past, snowboarding or tennis. There's three because I can't make up my mind with this concept... but #1 is probably front runner. (Jannik is the absolute man.)",
            ],
            useLinkPreview: {
                path: "/images/t_wear/t-wear-preview-6.png",
                width: 1797,
                height: 384,
            },
            thumbnail: item("/images/t_wear/t!-thumb.gif", 857, 857),
        },
    ),
    entry(
        "d",
        '"D" / "O"',
        "2023",
        "photoshop",
        [
            item("/images/concepts/d/o-logo.png", 2571, 2571),
            item("/images/concepts/d/o-x-banner.png", 1797, 857),
            item("/images/concepts/d/d-logo.png", 2571, 2571),
            item("/images/concepts/d/d-x-banner.png", 1797, 857),
            item("/videos/d-timelapse.mp4", 1440, 1440),
        ],
        {
            summary: ["I have NO idea what this is, I just started painting."],
            useLinkPreview: item("/images/concepts/d/d-banner.png", 1764, 588),
            thumbnail: item("/images/concepts/d/o-thumb-1000.png", 1000, 1000),
        },
    ),
    entry(
        "plan",
        '"pLan"',
        "2020",
        "photoshop",
        [
            item("/images/concepts/pLan/pLan-logo.png", 1600, 1600),
            item("/images/concepts/pLan/pLan-x.png", 1168, 571),
            item("/images/concepts/pLan/pLan-mockup.png", 3840, 2160),
        ],
        {
            summary: [
                '"Logo" and "brand aesthetics" for my first programming language, pLan. Which of course doesn\'t actually exist yet. It\'ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.',
            ],
            thumbnail: item("/thumbnails/plan-thumb.png", 571, 571),
        },
    ),
    entry(
        "tdb",
        "TDB App Icon / X",
        "2023",
        "illustrator",
        [
            item("/thumbnails/tdb-circle-thumb.png", 1024, 1024),
            item("/thumbnails/tdb-square-thumb.png", 1024, 1024),
        ],
        {
            summary: [
                "App icon for my iOS/iPadOS/macOS Tesla database app, TDB. Two versions, the square being the initial iOS app icon, and the circle one for profile pictures and various other things. (Still in development, NOT on the App Store yet.)",
            ],
            thumbnail: item(
                "/images/tdb-landing/tdb-landing-thumb.png",
                857,
                857,
            ),
        },
    ),
    entry("warp-logo", "Warp Logo concept", "2019~", "photoshop", [], {
        summary: [
            "Similar to the 'X' logo concept, this is a logo concept I made FOREVER ago. Like 2018/2019. ",
        ],
        thumbnail: item("/images/concepts/d-borders-logo-2019.gif", 1024, 1024),
    }),
    entry("x-logo", '"X" Logo concept', "2013~", "illustrator", [], {
        summary: [
            'This is a logo concept I made of the letter "X" a VERY long time ago. Somewhere around 2013~2016, I think. I sold this logo to some random person on Shopify for around $10 I believe, and I\'m not even sure if it was ever used. Not that bad for being so early in my Illustrator skills from back then.',
        ],
        thumbnail: item("/images/concepts/x-logo-2013.png", 1024, 1024),
    }),
];

// NOTE: ui

const ui = [
    entry(
        "tdb-landing",
        "TDB Landing Site",
        "2023",
        "figma",
        [item("/images/tdb-landing/tdb-landing-2.png", 2880, 2160)],
        {
            summary: [
                "Very simple and VERY static landing page design for my iOS/iPadOS/macOS app, TDB. The idea of the app and it's overall functionality is super easy to understand, so I thought it's landing site should be the same. There's no need for a bunch of animations or slides advertising what it can do, one page with a demo and a download button should be enough. (NOT on the App Store yet.)",
            ],
            thumbnail: item("/thumbnails/tdb-landing-thumb.png", 1920, 1920),
        },
    ),
    entry(
        "wallpaper-sync",
        "WallpaperSync",
        "2023",
        "figma",
        [item("/images/wallpaper-sync/wallpaper-sync.png", 3616, 3662)],
        {
            summary: [
                "This is another spontaneous project idea for a desktop app to set and automatically handle your different wallpapers on multiple devices. I'm personally a Synergy user, and have been for a long time, but I also manually switch back and forth between my Mac and PC. So, my intended use case came from having a folder of auto-rotating wallpapers on my Mac that I wanted to apply the exact same way to my PC, without any manually transferring of files through Google Drive or something.",
            ],
            thumbnail: item("/thumbnails/wallpaper-sync-thumb.png", 1458, 1458),
        },
    ),
    entry(
        "tx4",
        "TX4",
        "2023",
        "figma",
        [
            item("/images/tx4-for-real/map.png", 2680, 1810),
            item("/images/tx4-for-real/main.png", 2680, 1810),
            item("/images/tx4-for-real/viewer.png", 2680, 1810),
            item("/images/tx4-for-real/loading.png", 2680, 1810),
        ],
        {
            summary: [
                "An actual attempt at my previously shown app, TX4. I tried to keep the same general ideas and structure of the original Qt creation, but with a much more thought out design before going into development. This was crucial because doing things on the fly with no plan, in Qt no less, lead to a terrible look and feel. Development on it has already started in React, but is very early stages.",
            ],
            thumbnail: item("/thumbnails/tx4-thumb.png", 1260, 1260),
        },
    ),
    entry(
        "comma-interface-challenge",
        "Comma Interface Challenge",
        "2023",
        "figma",
        [
            item("/images/comma-interface-challenge/home.png", 2160, 1080),
            item("/images/comma-interface-challenge/popup.png", 2160, 1080),
            item("/images/comma-interface-challenge/update.png", 2160, 1080),
            item("/images/comma-interface-challenge/maps.png", 2160, 1080),
        ],
        {
            summary: [
                "This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
            ],
            thumbnail: item(
                "/thumbnails/comma-interface-thumb.png",
                1480,
                1480,
            ),
        },
    ),
    entry(
        "intros",
        '"Tro"... "Frame"... idk',
        "2023",
        "figma",
        [
            item("/images/tro-io/ImagePage.png", 1920, 947),
            item("/images/tro-io/SimilarImages.png", 1920, 1189),
            item("/images/tro-io/Banner.png", 1920, 368),
            item("/images/tro-io/intros.png", 2560, 1440),
            item("/images/tro-io/Titlebars.png", 1920, 1074),
        ],
        {
            summary: [
                "This is a concept for a website I've had for a long time. It's a website where any and all TV show or movie intro 'frames' are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
            ],
            thumbnail: item("/thumbnails/troio-thumb.png", 1104, 1104),
        },
    ),
    entry(
        "opgg-spectate",
        'OP.GG "Spectate pros"',
        "2021",
        "figma",
        [
            item("/images/concepts/pros/liiv.png", 2208, 999),
            item("/images/concepts/pros/mundo.png", 2415, 843),
            item("/images/concepts/pros/t1.png", 2300, 694),
            item("/images/concepts/OPGG.png", 1575, 885),
        ],
        {
            summary: [
                "This is a concept for the OP.GG 'Pro Matches' feature, integrated into their desktop client. I really liked the 'Spectate Pro Players' part of OP.GG's website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
            ],
            thumbnail: item("/thumbnails/opgg-thumb.png", 824, 824),
        },
    ),
    entry(
        "lol-icon-tool",
        "LoL Icon Tool",
        "2021",
        "react",
        [item("/images/concepts/LoL.png", 1794, 1009)],
        {
            summary: [
                "This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
            ],
        },
    ),
];

// NOTE: sections

export const designGroups: IEntryGroups = [
    group(
        "UI / UX",
        "concept",
        "Collection of UI prototypes and ideas for past / future projects",
        ui,
    ),
    group(
        "Logos & Icons",
        "logo",
        "A few logos/icons I've made for projects or personal use",
        logos,
    ),
];
