import { entry, group, IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: ui

const ui = [
    entry(
        "ui_tdb_landing",
        "TDB Landing Site",
        "2023",
        "figma",
        [
            {
                path: "/images/tdb-landing/tdb-landing-2.png",
                width: 2880,
                height: 2160,
            }
        ],
        {
            summary: [
                "Very simple and VERY static landing page design for my iOS/iPadOS/macOS app, TDB. The idea of the app and it's overall functionality is super easy to understand, so I thought it's landing site should be the same. There's no need for a bunch of animations or slides advertising what it can do, one page with a demo and a download button should be enough. (NOT on the App Store yet.)",
            ],
            thumbnail: {
                path: "/thumbnails/tdb-landing-thumb.png",
                width: 1920,
                height: 1920,
            }
        }
    ),
    entry(
        "ui_wallpaper_sync",
        "WallpaperSync",
        "2023",
        "figma",
        [
            {
                path: "/images/wallpaper-sync/wallpaper-sync.png",
                width: 3616,
                height: 3662,
            }
        ],
        {
            summary: [
                "This is another spontaneous project idea for a desktop app to set and automatically handle your different wallpapers on multiple devices. I'm personally a Synergy user, and have been for a long time, but I also manually switch back and forth between my Mac and PC. So, my intended use case came from having a folder of auto-rotating wallpapers on my Mac that I wanted to apply the exact same way to my PC, without any manually transferring of files through Google Drive or something.",
            ],
            thumbnail: {
                path: "/thumbnails/wallpaper-sync-thumb.png",
                width: 1458,
                height: 1458,
            }
        }
    ),
    entry(
        "ui_tx4",
        "TX4",
        "2023",
        "figma",
        [
            { path: "/images/tx4-for-real/map.png", width: 2680, height: 1810 },
            { path: "/images/tx4-for-real/main.png", width: 2680, height: 1810 },
            { path: "/images/tx4-for-real/viewer.png", width: 2680, height: 1810 },
            { path: "/images/tx4-for-real/loading.png", width: 2680, height: 1810 },
        ],
        {
            summary: [
                "An actual attempt at my previously shown app, TX4. I tried to keep the same general ideas and structure of the original Qt creation, but with a much more thought out design before going into development. This was crucial because doing things on the fly with no plan, in Qt no less, lead to a terrible look and feel. Development on it has already started in React, but is very early stages.",
            ],
            thumbnail: {
                path: "/thumbnails/tx4-thumb.png",
                width: 1260,
                height: 1260,
            }
        }
    ),
    entry(
        "ui_comma_interface_challenge",
        "Comma Interface Challenge",
        "2023",
        "figma",
        [
            {
                path: "/images/comma-interface-challenge/home.png",
                width: 2160,
                height: 1080,
            },
            {
                path: "/images/comma-interface-challenge/popup.png",
                width: 2160,
                height: 1080,
            },
            {
                path: "/images/comma-interface-challenge/update.png",
                width: 2160,
                height: 1080,
            },
            {
                path: "/images/comma-interface-challenge/maps.png",
                width: 2160,
                height: 1080,
            },
        ],
        {
            summary: [
                "This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
            ],
            thumbnail: {
                path: "/thumbnails/comma-interface-thumb.png",
                width: 1480,
                height: 1480,
            }
        }
    ),
    entry(
        "ui_intros",
        '"Tro"... "Frame"... idk',
        "2023",
        "figma",
        [
            { path: "/images/tro-io/ImagePage.png", width: 1920, height: 947 },
            { path: "/images/tro-io/SimilarImages.png", width: 1920, height: 1189 },
            { path: "/images/tro-io/Banner.png", width: 1920, height: 368 },
            { path: "/images/tro-io/intros.png", width: 2560, height: 1440 },
            { path: "/images/tro-io/Titlebars.png", width: 1920, height: 1074 },
        ],
        {
            summary: [
                "This is a concept for a website I've had for a long time. It's a website where any and all TV show or movie intro 'frames' are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
            ],
            thumbnail: {
                path: "/thumbnails/troio-thumb.png",
                width: 1104,
                height: 1104,
            }
        }
    ),
    entry(
        "ui_opgg_spectate",
        'OP.GG "Spectate pros"',
        "2021",
        "figma",
        [
            { path: "/images/concepts/pros/liiv.png", width: 2208, height: 999 },
            { path: "/images/concepts/pros/mundo.png", width: 2415, height: 843 },
            { path: "/images/concepts/pros/t1.png", width: 2300, height: 694 },
            { path: "/images/concepts/OPGG.png", width: 1575, height: 885 },
        ],
        {
            summary: [
                "This is a concept for the OP.GG 'Pro Matches' feature, integrated into their desktop client. I really liked the 'Spectate Pro Players' part of OP.GG's website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
            ],
            thumbnail: {
                path: "/thumbnails/opgg-thumb.png",
                width: 824,
                height: 824,
            }
        }
    ),
    entry(
        "ui_lol_icon_tool",
        "LoL Icon Tool",
        "2021",
        "react",
        [{ path: "/images/concepts/LoL.png", width: 1794, height: 1009 }],
        {
            summary: [
                "This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
            ]
        }
    ),
];

// NOTE: drawings / photo manipulation

const drawings = [
    entry(
        "still_nothing",
        "I still don't know how",
        "2024",
        "photoshop",
        [
            {
                caption: "Not nearly as impressive when they're separated... I don't know what this first thing is, a gem or something maybe?",
                path: "/images/drawings/sketches/gem-or-something.png",
                width: 2642,
                height: 2642,
            },
            {
                caption: "Trying to understand and practice folds. I need waayyyy more of these.",
                path: "/images/drawings/sketches/hoodie-folds.png",
                width: 2642,
                height: 2642,
            }
        ],
        {
            thumbnail: {
                path: "/images/drawings/sketches/still-nothing.png",
                width: 1024,
                height: 1024,
            }
        }
    ),
    entry(
        "figma_tattoo",
        '"Figma tattoo"',
        "2024",
        "figma",
        [
            {
                path: "/images/figma-tattoo/figma-tattoo-horizontal.png",
                width: 2488,
                height: 1781,
            },
            {
                path: "/images/figma-tattoo/figma-tattoo-mockup.png",
                width: 2160,
                height: 2700,
            }
        ],
        {
            summary: [
                "Idea I had for a wrist/forearm tattoo done off the top of my head, constructed in Figma. I easily could have done it in Illustrator or something else, but I was already using Figma... This sort of thing has probably been done a million times, guessing by how INCREDIBLY simple it was to make... but I like it. The thicker 'band' with the gradients wraps around the wrist like a bracelet, and of course being me, the colors are likely to change at any time.",
            ],
            useLinkPreview: {
                path: "/images/figma-tattoo/figma-tattoo-preview-flip.png",
                width: 1920,
                height: 384,
            }
        }
    ),
    entry(
        "sketch_box",
        "A box of some kind",
        "2023",
        "photoshop",
        [
            {
                path: "/images/drawings/sketches/IMG_0180.jpg",
                width: 2625,
                height: 2625,
            },
        ],
        {
            summary: []
        }
    ),
    entry(
        "painting_power_lines",
        "Power lines in random town",
        "2023",
        "photoshop",
        [
            {
                path: "/images/drawings/power-lines/power-lines.png",
                width: 3000,
                height: 4000,
            },
            {
                path: "/images/drawings/power-lines/power-lines-bw.png",
                width: 3000,
                height: 4000,
            }
        ],
        {
            summary: [
                "Use link preview: " + JSON.stringify({
                    path: "/images/drawings/power-lines/power-lines.png",
                    width: 3000,
                    height: 4000,
                })
            ],
            thumbnail: {
                path: "/images/drawings/power-lines/power-lines-thumb.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
    entry(
        "painting_cybertruck_texas",
        "Cybertruck 2 (Texas)",
        "2023",
        "photoshop",
        [
            {
                path: "/images/drawings/cybertruck-texas/cybertruck-texas.png",
                width: 5120,
                height: 2880,
            },
            {
                path: "/videos/cybertruck-texas-timelapse.mp4",
                width: 1920,
                height: 1080,
            }
        ],
        {
            summary: [
                'My second Procreate painting of a Cybertruck, again original photograph by <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/PhotoKaz/">u/PhotoKaz</a>. Maybe this one is an improvement on the first, maybe not? I need to get more confident at drawing clean lines and work towards more photorealism.',
            ],
            thumbnail: {
                path: "/images/drawings/cybertruck-texas/cybertruck-texas-thumb.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
    entry(
        "painting_cybertruck",
        'Cybertruck "painting"',
        "2023",
        "photoshop",
        [
            {
                path: "/images/drawings/cybertruck/cybertruck-red.png",
                width: 2174,
                height: 2933,
            },
            {
                path: "/images/drawings/cybertruck/cybertruck-green.png",
                width: 2174,
                height: 2933,
            },
            {
                path: "/images/drawings/cybertruck/cybertruck-yellow.png",
                width: 2174,
                height: 2933,
            },
            { path: "/videos/cybertruck-timelapse.mp4", width: 1440, height: 1080 },
        ],
        {
            summary: [
                'My first ever painting / photo manipuation like this using Procreate (I literally just got my iPad 2 days ago to get into this stuff). I\'m a huge Cybertruck fan, and I wanted my first attempt to be something related to it or another Tesla product. Credit to <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/PhotoKaz/">u/PhotoKaz</a> for the great photos, and thanks to him for letting me use it as a base layer.',
            ],
            thumbnail: {
                path: "/images/drawings/cybertruck/cybertruck-thumb-red.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
    entry(
        "redesign_cybertruck",
        "Cybertruck redesign by ???",
        "2023",
        "photoshop",
        [
            {
                path: "/images/drawings/cybertruck-redesign/cybertruck-redesign.png",
                width: 3840,
                height: 2160,
            },
        ],
        {
            summary: [
                'My photo manipulation (all the white) of a Cybertruck concept from <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/">(IDK he deleted his account... but it wasn\'t me!)</a>. Credit to whoever the guy was for the original modification of Cybertruck design.',
            ],
            thumbnail: {
                path: "/images/drawings/cybertruck-redesign/cybertruck-redesign-thumb.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
];

// NOTE: logos

const logos = [
    entry(
        "etherspent",
        'Etherspent',
        "2025",
        "photoshop",
        [
            {
                path: "/images/concepts/etherspent/eth-thumb.png",
                width: 857,
                height: 857,
            },
            {
                path: "/images/concepts/etherspent/eth-x.png",
                width: 984,
                height: 1472,
            },
            {
                path: "/images/concepts/etherspent/eth-logo.png",
                width: 1024,
                height: 1024,
            },

        ],
        {
            summary: [
                "Don't ask me what it means, it's just a sketch. Not even close to \"done\". Just a quick thing.",
            ],
            thumbnail: {
                path: "/images/concepts/etherspent/eth-thumb.png",
                width: 857,
                height: 857,
            }
        }
    ),
    entry(
        "ta956mb_logo",
        '"TA956MB" (My logo)',
        "2025",
        "illustrator",
        [],
        {
            summary: [
                "Refined version of my personal logo, based on a character in a prototype \"GYEA\" script. Contains the letters 'TAB' (for my initials) and '956mb' (my alias).",
            ],
            thumbnail: {
                path: "/images/concepts/ta956mb-logo.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
    entry(
        "n_wear",
        "T! / N! Variation (v2)",
        "2024",
        "illustrator",
        [
            {
                path: "/images/t_wear/n!-preview.png",
                width: 3325,
                height: 2318,
            },
            {
                path: "/images/t_wear/t!-preview.png",
                width: 3325,
                height: 2318,
            },
            {
                path: "/images/t_wear/x-concept-shohei.png",
                width: 1797,
                height: 1785,
            },
        ],
        {
            thumbnail: {
                path: "/images/t_wear/n-wear-thumb-2.png",
                width: 1024,
                height: 1024,
            }
        }
    ),
    entry(
        "t_wear",
        "E! / T! / !T (v1)",
        "2024",
        "illustrator",
        [
            {
                path: "/images/t_wear/t-wear-logos-2.jpg",
                width: 3152,
                height: 1064,
            },
            {
                caption: "Three versions... can't make my mind up about anything",
                path: "/images/t_wear/t-wear-italy.jpg",
                width: 3152,
                height: 1064,
            },
            { path: "/images/t_wear/t-wear-x-2.jpg", width: 1837, height: 2651 },
            {
                caption: "Initial ideas sketched in Concepts",
                path: "/images/t_wear/IMG_0722_2.PNG",
                width: 2778,
                height: 1940,
            },
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
            thumbnail: { path: "/images/t_wear/t!-thumb.gif", width: 857, height: 857 }
        }
    ),
    entry(
        "icons_rosetta",
        "Adobe 2024 Rosetta Icons",
        "2024",
        "illustrator",
        [
            {
                path: "/images/adobe-icons/Photoshop.png",
                width: 4942,
                height: 2780,
            },
            {
                path: "/images/adobe-icons/Illustrator.png",
                width: 4942,
                height: 2780,
            },
            { path: "/images/adobe-icons/Bridge.png", width: 4942, height: 2780 },
            { path: "/images/adobe-icons/Audition.png", width: 4942, height: 2780 },
            { path: "/images/adobe-icons/InDesign.png", width: 4942, height: 2780 },
        ],
        {
            summary: [
                'Rosetta (macOS) versions of Adobe 2024 app iconc. I use this for a duplicate "Adobe Photoshop 2024 (Rosetta).app" executable to differentiate my normal app and the "Open in Rosetta" one. You can download it on <a rel="noopener noreferrer" target="_blank" href="https://store.956mb.com/l/adobe-rosetta-icons">Gumroad</a>.',
            ],
            thumbnail: {
                path: "/images/extras/icons/adobe-icons.gif",
                width: 1024,
                height: 1024,
            }
        }
    ),
    entry(
        "logo_d",
        '"D" / "O"',
        "2023",
        "photoshop",
        [
            { path: "/images/concepts/d/o-logo.png", width: 2571, height: 2571 },
            { path: "/images/concepts/d/o-x-banner.png", width: 1797, height: 857 },
            { path: "/images/concepts/d/d-logo.png", width: 2571, height: 2571 },
            { path: "/images/concepts/d/d-x-banner.png", width: 1797, height: 857 },
            { path: "/videos/d-timelapse.mp4", width: 1440, height: 1440 },
        ],
        {
            summary: ["I have NO idea what this is, I just started painting."],
            useLinkPreview: {
                path: "/images/concepts/d/d-banner.png",
                width: 1764,
                height: 588,
            },
            thumbnail: {
                path: "/images/concepts/d/o-thumb-1000.png",
                width: 1000,
                height: 1000,
            }
        }
    ),
    entry(
        "logo_plan",
        '"pLan"',
        "2020",
        "photoshop",
        [
            {
                path: "/images/concepts/pLan/pLan-logo.png",
                width: 1600,
                height: 1600,
            },
            { path: "/images/concepts/pLan/pLan-x.png", width: 1168, height: 571 },
            {
                path: "/images/concepts/pLan/pLan-mockup.png",
                width: 3840,
                height: 2160,
            },
        ],
        {
            summary: [
                "\"Logo\" and \"brand aesthetics\" for my first programming language, pLan. Which of course doesn't actually exist yet. It'll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
            ],
            thumbnail: {
                path: "/thumbnails/plan-thumb.png",
                width: 571,
                height: 571,
            }
        }
    ),
    entry(
        "logo_tdb",
        "TDB App Icon / X",
        "2023",
        "illustrator",
        [
            { path: "/thumbnails/tdb-circle-thumb.png", width: 1024, height: 1024 },
            { path: "/thumbnails/tdb-square-thumb.png", width: 1024, height: 1024 },
        ],
        {
            summary: [
                "App icon for my iOS/iPadOS/macOS Tesla database app, TDB. Two versions, the square being the initial iOS app icon, and the circle one for profile pictures and various other things. (Still in development, NOT on the App Store yet.)",
            ],
            thumbnail: {
                path: "/images/tdb-landing/tdb-landing-thumb.png",
                width: 857,
                height: 857,
            }
        }
    ),
    entry(
        "d_logo_2019",
        'Warp Logo concept',
        "2019~",
        "photoshop",
        [],
        {
            summary: [
                "Similar to the 'X' logo concept, this is a logo concept I made FOREVER ago. Like 2018/2019. ",
            ],
            thumbnail: {
                path: "/images/concepts/d-borders-logo-2019.gif",
                width: 1024,
                height: 1024,
            }
        }
    ),
    entry(
        "x_logo_2013",
        '"X" Logo concept',
        "2013~",
        "illustrator",
        [],
        {
            summary: [
                'This is a logo concept I made of the letter "X" a VERY long time ago. Somewhere around 2013~2016, I think. I sold this logo to some random person on Shopify for around $10 I believe, and I\'m not even sure if it was ever used. Not that bad for being so early in my Illustrator skills from back then.',
            ],
            thumbnail: {
                path: "/images/concepts/x-logo-2013.png",
                width: 1024,
                height: 1024,
            }
        }
    ),
];

// NOTE: sections

export const designGroups: IEntryGroups = [
    group(
        "UI / UX",
        "concept",
        "Collection of UI prototypes and ideas for past / future projects",
        ui
    ),
    group(
        "Logos, Icons and Miscelaneous",
        "logo",
        "A few logos/icons I've made for projects or personal use",
        logos
    ),
    group(
        "Sketches, Photo Manipulations and Misc art",
        "drawings",
        "Stuff I draw in Procreate or edit in Photoshop / Illustrator",
        drawings
    )
];
