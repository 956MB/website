import {
    entry,
    group,
    IEntry,
    IEntryGroup,
    IEntryGroups,
    item,
} from "./interfaces";

// NOTE: icons

const icons = [
    entry(
        "icon_sketch",
        "Sketch Dark Glow",
        "12.10.2024",
        "icon",
        [item("/images/extras/icons/sketch-1.png", 1024, 1024)],
        {
            summary: [
                'Dark mode version of the <a href="https://www.sketch.com/">Sketch</a> app icon, with a bit more glow.',
            ],
            link: "https://macosicons.com/#/u/956mb",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.sketch.com/home/">Sketch</a>',
        },
    ),
    entry(
        "icon_flipper",
        "Flipper Icon Recolor",
        "12.4.2024",
        "icon",
        [item("/images/extras/icons/flipper-1.png", 1024, 1024)],
        {
            summary: [
                'Recolor and resize of the <a href="https://flipperzero.one/">Flipper</a> app icons, by me. (iOS, macOS, Windows)',
            ],
            link: "https://macosicons.com/#/u/956mb",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://flipperzero.one/design-guide#!/tab/282742113-4">Flipper</a>',
        },
    ),
    entry(
        "icon_photoshop",
        "Adobe Rosetta Icons",
        "1.1.2024",
        "icon",
        [item("/images/extras/icons/adobe-icons.gif", 1024, 1024)],
        {
            summary: [
                "Variant Rosetta style icons for various Adobe applications (Photoshop, Illustrator, Bridge, InDesign, Audition). Made by me.",
            ],
            link: "https://store.956mb.com/l/adobe-rosetta-icons",
        },
    ),
    entry(
        "icon_vscodium",
        "VSCodium",
        "10.28.2023",
        "icon",
        [item("/images/extras/icons/vscodium-1.png", 1024, 1024)],
        {
            summary: [
                "B/W versions of an unofficial VSCodium icon. Credit to <a href=\"https://github.com/VSCodium/vscodium/issues/491#issuecomment-729040072\">@setanarut</a> for the original variation of the 'C' logo.",
            ],
            link: "https://macosicons.com/#/u/956mb",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://github.com/VSCodium/vscodium/issues/491#issuecomment-729040072">@setanarut</a>',
        },
    ),
    entry(
        "icon_parallels",
        "Parallels",
        "09.08.2023",
        "icon",
        [item("/images/extras/icons/parallels-1.png", 1024, 1024)],
        {
            summary: [
                'My edits to a custom Parallels icon by <a href="https://www.reddit.com/r/MacOS/comments/mucnsz/i_got_tired_of_the_parallels_desktop_icon_not/2">u/JonMarksbury</a>, using the Windows 11 background. Credit to him for the original concept.',
            ],
            link: "https://macosicons.com/#/u/956mb",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/MacOS/comments/mucnsz/i_got_tired_of_the_parallels_desktop_icon_not/2">u/JonMarksbury</a>',
        },
    ),
    entry(
        "icon_tdb",
        "TDB",
        "09.03.2023",
        "icon",
        [item("/images/extras/icons/tdb.png", 1024, 1024)],
        {
            summary: [
                'App icon for my iOS/iPadOS/macOS app <a href="https://www.tdb.fyi/">TDB</a>. Made by me.',
            ],
        },
    ),
    entry(
        "icon_2048we",
        "2048WE",
        "06.22.2023",
        "icon",
        [item("/images/extras/icons/2048we-1.png", 704, 704)],
        {
            summary: [
                "The custom app icon for my Apple Watch app, 2048WE (Apple Watch Edition). Made by me.",
            ],
            link: "https://store.956mb.com/l/2048we-icon",
        },
    ),
];

// NOTE: wallpapers
const wallpapers = [
    entry(
        "extra_nord_monster",
        "Nord Monster (Invert, HEIC)",
        "12.01.2024",
        "wallpaper",
        [item("/images/extras/wallpapers/nord-monster-1.png", 1920, 1080)],
        {
            summary: [
                'Existing wallpaper of nord monster I found on <a href="https://www.reddit.com/r/wallpaper/s8cvai/nord_monster_1920_x_1080/">Reddit</a> I upscaled to 6K, as well as applied a color correct and invert. I also merge the inverts into a dark/light HEIC for macOS.',
            ],
            link: "https://drive.google.com/drive/folders/1uNQ8AGsyLr9E2KWc_JWM674buIVsIl5w?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/wallpaper/s8cvai/nord_monster_1920_x_1080/">u/StyLeadz</a>',
        },
    ),
    entry(
        "model_3_performance_trace",
        "Model 3 Performance (Trace Contour)",
        "04.25.2024",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/model-3-performance-trace-contour-1.png",
                1920,
                1080,
            ),
        ],
        {
            summary: [
                '2024 Model 3 Performance with the Trace Contour effect (Photoshop)... just a random idea. I tried upscaling to 6k, but there were some weird artifacting going on... All credit to the <a href="https://www.tesla.com/tesla-gallery">Tesla Gallery</a> for the original photos.',
            ],
            link: "https://drive.google.com/drive/folders/1PiO6OjZeZClEnoyhkNOlapOvrjHY2NPk?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.tesla.com/">Tesla</a>',
        },
    ),
    entry(
        "extra_hongdae_variants",
        "Apple Store 홍대 Variants",
        "1.15.2024",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/hongdae-variants-thumb.png",
                1920,
                1080,
            ),
        ],
        {
            summary: [
                "Eight color variations of the Apple Store Hongdae (홍대) wallpapers. The grey brought down to black, and several Lightroom changes to add some variety. I did not design these!",
            ],
            link: "https://drive.google.com/drive/folders/1lJRSJZwxUlsaq0SXEuaK57L-cK8vq4sH?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.apple.com/kr/retail/hongdae/">Apple 홍대.</a>',
        },
    ),
    entry(
        "extra_graffiti_variants",
        "Graffiti Variants",
        "12.29.2023",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/graffiti-variant-thumb.png",
                1920,
                1245,
            ),
        ],
        {
            summary: [
                'Several color variants of the great graffiti wallpaper by <a href="https://twitter.com/BasicAppleGuy">@BasicAppleGuy</a>. I DID NOT DESIGN THESE, ONLY MODIFIED. Credit to him for the amazing art.',
            ],
            link: "https://drive.google.com/drive/folders/1oI_40YXzpUyvsNE6RHtasf7fuyO_lcD8?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://basicappleguy.com/haberdashery/graffiti">@BasicAppleGuy</a>',
        },
    ),
    entry(
        "extra_d",
        '"D" / "O"',
        "12.29.2023",
        "wallpaper",
        [item("/images/concepts/d/d-wallpaper-thumb.png", 2304, 1296)],
        {
            summary: [
                'I have NO idea what this is, I just started painting. Made by me. <a href="https://www.956mb.com/designs/#logo_d">"D" / "O"</a>.',
            ],
            link: "https://drive.google.com/drive/folders/1mYTo3YpLKCwEOMqpEMnuSm0Sqar4z5qj?usp=sharing",
        },
    ),
    entry(
        "extra_pLan",
        "pLan",
        "12.29.2023",
        "wallpaper",
        [item("/images/concepts/pLan/pLan-thumb.png", 2048, 1152)],
        {
            summary: [
                'Painting used as the banner/background of my fake programming language "brand", <a href="https://www.956mb.com/designs/#logo_plan">pLan</a>. Made by me.',
            ],
            link: "https://drive.google.com/drive/folders/1HNcP5ZXG5qLHVh9LqCcKtsjbRhOXWd_s?usp=sharing",
        },
    ),
    entry(
        "extra_polestar_synergy",
        "Polestar Synergy (Collection)",
        "09.14.2023",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/Polestar-Synergy-Back.png",
                1920,
                2242,
            ),
        ],
        {
            summary: [
                'Photos of the Polestar Synergy prototype from the Polestar Design Contest 2022/23. All credit to <a href="hhttps://about.polestar.com/polestar-design-contest/2022/">Polestar</a> for the photogrpahs.',
            ],
            link: "https://drive.google.com/drive/folders/1-naPWu9jKup8hzA-rwvFCK-5hIV5vpP7?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://about.polestar.com/polestar-design-contest/2022/">Polestar</a>',
        },
    ),
    entry(
        "extra_ghibli_colors",
        "スタジオジブリ作品: Colors",
        "09.12.2023",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/ghibli-colors-green3.png",
                1920,
                1080,
            ),
        ],
        {
            summary: [
                'The beautiful Studio Ghibli wordmark and logo modified by me in many color combinations. Logo property of <a href="https://www.ghibli.jp/">Studio Ghibli</a>.',
            ],
            link: "https://drive.google.com/drive/folders/1zuMZQfx7B_pTh7Y1vErBXOpoWqe6ik1k?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.ghibli.jp/">Studio Ghibli</a>',
        },
    ),
    entry(
        "extra_westworld_s3",
        "Westworld S3 (Collection, Video)",
        "09.10.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/WWF-deepred.png", 1920, 1080)],
        {
            summary: [
                'Remade the Westworld "W" logo, as well as upscaled frames from the season 3 intro. All credit to <a href="http://elastic.tv/">Elastic.tv</a>, the creator of the great intro sequence.',
            ],
            link: "https://drive.google.com/drive/folders/1S2GS2Dw7t_RnFX1U4yl_rjJ0-mOjkZWa?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="http://elastic.tv/">Elastic.tv</a>',
        },
    ),
    entry(
        "extra_armored_core_vi",
        "ARMORED CORE VI FIRES OF RUBICON (Collection, Video)",
        "09.08.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/ACVI-00027.png", 1920, 1080)],
        {
            summary: [
                'Frames from the \'ARMORED CORE VI FIRES OF RUBICON\' reveal trailer, upscaled to 5K. Images from the trailer property of <a href="https://www.fromsoftware.jp/ww/">FromSoftware</a> and <a href="https://www.bandainamcoent.com/">Bandai Namco</a>.',
            ],
            link: "https://drive.google.com/drive/folders/1MMuairvZA4f0Gb8miA26VI1_ytuXxEyl?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.fromsoftware.jp/ww/">Bandai Namco</a>',
        },
    ),
    entry(
        "extra_colors_and_shapes",
        "Colors and Shapes (Collection, Video)",
        "09.07.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/CASWF-00169.png", 1920, 1080)],
        {
            summary: [
                'Frames from <a href="https://www.macmillerswebsite.com/">Mac Miller</a>\'s (RIP) music video for \'Colors and Shapes\'. All credit to <a href="https://www.stashmedia.tv/mac-miller-colors-and-shapes-by-sam-mason-and-hornet/">Hornet/Sam Mason/Stash</a> for creation of the video.',
            ],
            link: "https://drive.google.com/drive/folders/15pwpAQRDgW4TadCb07zq2TUDR5GtgMLk?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.stashmedia.tv/mac-miller-colors-and-shapes-by-sam-mason-and-hornet/">Hornet/Sam Mason/Stash</a>. RIP Mac.',
        },
    ),
    entry(
        "extra_hassan_massoudy",
        "Hassan Massoudy",
        "09.07.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/_0010_HM326.png", 1920, 1502)],
        {
            summary: [
                'Almost every <a href="https://www.massoudy.net/">Hassan Massoudy</a> piece, upscaled to 5K and modified to dark black and white. All credit to him for the absolutey phenomenal calligraphy.',
            ],
            link: "https://drive.google.com/drive/folders/1i0Zf3II5JaSc4s6JnyORfPiu5Lnzm5gT?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.massoudy.net/">Hassan Massoudy</a>',
        },
    ),
    entry(
        "extra_cybertruck",
        "Cybertruck Redesign",
        "09.04.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/cybertruck-redesign.png", 1920, 1080)],
        {
            summary: [
                'My photo manipulation and upscaling of a Cybertruck concept from <a href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3">???</a> on Reddit. Credit to him for the original modification of Cybertruck design.',
            ],
            link: "https://drive.google.com/drive/folders/1d2DtdnDqvSqY4KfGYtSjHVkodIIr9mjn?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3">???</a>',
        },
    ),
];

// NOTE: groups

export const icons_section = group(
    "App Icons",
    "icons",
    "Icons I have personally created or just slightly changed",
    icons,
);

export const wallpapers_section = group(
    "Wallpapers & Screenshots",
    "wallpapers",
    "Collection of wallpapers I like, have slightly modified, or are my own creations",
    wallpapers,
);

export const groups: IEntryGroups = [icons_section, wallpapers_section];
