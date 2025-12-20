import { entry, group, IEntryGroups, item } from "./interfaces";
import { hl } from "./util";

// NOTE: icons

const icons = [
    entry(
        "black-icons",
        "B/W Icons",
        "4.11.2025",
        "icon",
        [item("/images/extras/icons/black-icons.gif", 1024, 1024)],
        {
            summary: [
                "some of the icons i've modified to make the perfect black & white dock in macOS (i am not the orignal designer of these).",
            ],
            link: "https://drive.google.com/drive/folders/1hv3KFVwsjgfq_JdMjK1oM-HKkcbZ8kcf?usp=sharing",
            credit: "Various",
        },
    ),
    entry(
        "yapper-icon",
        "Yapper Icon",
        "1.19.2025",
        "icon",
        [item("/images/extras/icons/yapper-1.png", 1024, 1024)],
        {
            summary: [
                'rendition of the <a href="https://github.com/Next-Flip/qFlipper">qFlipper</a> app icon, but using the Yapper from <a href="https://github.com/Next-Flip">Momentum Firmware</a>. shoutout to Lucky for the :yapsip: emote.',
            ],
            link: "https://macosicons.com/#/Flipper",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://discord.gg/momentum">Lucky</a>',
        },
    ),
    entry(
        "sketch-dark-glow",
        "Sketch Dark Glow",
        "12.10.2024",
        "icon",
        [item("/images/extras/icons/sketch-3.png", 1024, 1024)],
        {
            summary: [
                'dark mode version of the <a href="https://www.sketch.com/">Sketch</a> app icon, with a bit more glow.',
            ],
            link: "https://macosicons.com/#/?icon=coH1yycbca",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.sketch.com/home/">Sketch</a>',
        },
    ),
    entry(
        "flipper-icon-recolor",
        "Flipper Icon Recolor",
        "12.4.2024",
        "icon",
        [item("/images/extras/icons/flipper-4.png", 1024, 1024)],
        {
            summary: [
                'recolor and resize of the <a href="https://flipperzero.one/">Flipper</a> app icons, by me. (iOS, macOS, Windows)',
            ],
            link: "https://macosicons.com/#/?icon=3KGMA5wWih",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://flipperzero.one/design-guide#!/tab/282742113-4">Flipper</a>',
        },
    ),
    entry(
        "claude-icons",
        "Claude",
        "5.15.2024",
        "icon",
        [item("/images/extras/icons/claude-1.gif", 1024, 1024)],
        {
            summary: [
                '<a href="https://www.anthropic.com/claude">Anthropic\'s Claude</a> app icon in black, white and #E77350. i did NOT create the logo, only creating replacement options for the iOS app icon.',
            ],
            link: "https://macosicons.com/#/?icon=mbaJDK7YBC",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://github.com/VSCodium/vscodium/issues/491#issuecomment-729040072">@setanarut</a>',
        },
    ),
    entry(
        "adobe-rosetta-icons",
        "Adobe Rosetta Icons",
        "1.1.2024",
        "icon",
        [item("/images/extras/icons/adobe-ps-1.png", 1024, 1024)],
        {
            summary: [
                `variant Rosetta style icons for various Adobe applications (${hl("Photoshop")}, ${hl("Illustrator")}, ${hl("Bridge")}, ${hl("InDesign")}, ${hl("Audition")}). made by me.`,
            ],
            link: "https://store.956mb.com/l/adobe-rosetta-icons",
        },
    ),
    entry(
        "tdb-icon",
        "TDB",
        "09.03.2023",
        "icon",
        [item("/images/extras/icons/tdb-1.png", 1024, 1024)],
        {
            summary: [
                'app icon for my iOS/iPadOS/macOS app <a href="https://www.tdb.fyi/">TDB</a>. made by me.',
            ],
        },
    ),
    entry(
        "2048we-icon",
        "2048WE",
        "06.22.2023",
        "icon",
        [item("/images/extras/icons/2048we-3.png", 704, 704)],
        {
            summary: [
                "the custom app icon for my Apple Watch app, 2048WE (Apple Watch Edition). made by me.",
            ],
            link: "https://store.956mb.com/l/2048we-icon",
        },
    ),
];

// NOTE: wallpapers

const wallpapers = [
    entry(
        "hpl-gou-tanabe-wallpapers",
        "Mountains of Madness <i>&</i> Call of Cthulhu",
        "12.20.2025",
        "wallpaper",
        [
            item(
                "/images/extras/wallpapers/hpl-gou-tanabe-wallperps.jpg",
                1920,
                1244,
            ),
        ],
        {
            summary: [
                `Stitched, cropped and upscaled pages from Gou Tanabe's (${hl("田邊剛")}) manga adaptations of "<a rel="noopener noreferrer" target="_blank" href="https://www.hplovecraft.com/writings/fiction/mm.aspx">At the Mountains of Madness</a>" and "<a rel="noopener noreferrer" target="_blank" href="https://www.hplovecraft.com/writings/fiction/cc.aspx">The Call of Cthulhu</a>", by <a rel="noopener noreferrer" target="_blank" href="https://www.hplovecraft.com/">H.P. Lovecraft</a>. All credit to him for the INSANE original artwork.`,
            ],
            link: "https://drive.google.com/drive/folders/1LULXaQBAUGOsGQEfFnTD542JHP51hyFZ?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://x.com/gou_tanabe">田邊剛</a>',
        },
    ),
    entry(
        "model-3-performance-trace",
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
                '2024 Model 3 Performance with the trace contour effect (Photoshop)... just a random idea. i tried upscaling to 6k, but there were some weird artifacting going on... all credit to the <a href="https://www.tesla.com/tesla-gallery">Tesla Gallery</a> for the original photos.',
            ],
            link: "https://drive.google.com/drive/folders/1PiO6OjZeZClEnoyhkNOlapOvrjHY2NPk?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.tesla.com/">Tesla</a>',
        },
    ),
    entry(
        "hongdae-variants",
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
                "eight color variations of the Apple Store Hongdae (홍대) wallpapers. the grey brought down to black, and several Lightroom changes to add some variety. i did not design these!",
            ],
            link: "https://drive.google.com/drive/folders/1lJRSJZwxUlsaq0SXEuaK57L-cK8vq4sH?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.apple.com/kr/retail/hongdae/">Apple 홍대.</a>',
        },
    ),
    entry(
        "graffiti-variants",
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
                'several color variants of the great graffiti wallpaper by <a href="https://twitter.com/BasicAppleGuy">@BasicAppleGuy</a>. I DID NOT DESIGN THESE, ONLY MODIFIED. credit to him for the amazing art.',
            ],
            link: "https://drive.google.com/drive/folders/1oI_40YXzpUyvsNE6RHtasf7fuyO_lcD8?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://basicappleguy.com/haberdashery/graffiti">@BasicAppleGuy</a>',
        },
    ),
    entry(
        "d-o",
        '"D" / "O"',
        "12.29.2023",
        "wallpaper",
        [item("/images/concepts/d/d-wallpaper-thumb.png", 2304, 1296)],
        {
            summary: [
                'i have NO idea what this is, i just started painting. made by me. <a href="https://www.956mb.com/designs/#logo_d">"D" / "O"</a>.',
            ],
            link: "https://drive.google.com/drive/folders/1mYTo3YpLKCwEOMqpEMnuSm0Sqar4z5qj?usp=sharing",
        },
    ),
    entry(
        "plan",
        "pLan",
        "12.29.2023",
        "wallpaper",
        [item("/images/concepts/pLan/pLan-thumb.png", 2048, 1152)],
        {
            summary: [
                'painting used as the banner/background of my fake programming language "brand", <a href="https://www.956mb.com/designs/#logo_plan">pLan</a>. made by me.',
            ],
            link: "https://drive.google.com/drive/folders/1HNcP5ZXG5qLHVh9LqCcKtsjbRhOXWd_s?usp=sharing",
        },
    ),
    entry(
        "ghibli-colors",
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
                'the beautiful Studio Ghibli wordmark and logo modified by me in many color combinations. logo property of <a href="https://www.ghibli.jp/">Studio Ghibli</a>.',
            ],
            link: "https://drive.google.com/drive/folders/1zuMZQfx7B_pTh7Y1vErBXOpoWqe6ik1k?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.ghibli.jp/">Studio Ghibli</a>',
        },
    ),
    entry(
        "hassan-massoudy-bw",
        "Hassan Massoudy",
        "09.07.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/_0010_HM326.png", 1920, 1502)],
        {
            summary: [
                'almost every <a href="https://www.massoudy.net/">Hassan Massoudy</a> piece, upscaled to 5K and modified to dark black and white. all credit to him for the absolutey phenomenal calligraphy.',
            ],
            link: "https://drive.google.com/drive/folders/1i0Zf3II5JaSc4s6JnyORfPiu5Lnzm5gT?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.massoudy.net/">Hassan Massoudy</a>',
        },
    ),
    entry(
        "cybertruck-manipulation",
        "Cybertruck Redesign",
        "09.04.2023",
        "wallpaper",
        [item("/images/extras/wallpapers/cybertruck-redesign.png", 1920, 1080)],
        {
            summary: [
                'my photo manipulation and upscaling of a Cybertruck concept from <a href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3">???</a> on Reddit. credit to him for the original modification of Cybertruck design.',
            ],
            link: "https://drive.google.com/drive/folders/1d2DtdnDqvSqY4KfGYtSjHVkodIIr9mjn?usp=sharing",
            credit: '<a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/?utm_source=share&utm_medium=web2x&context=3">???</a>',
        },
    ),
];

// NOTE: groups

export const extras_section = group(
    "Extras",
    "extras",
    "Collection of upscaled/edited wallpapers, and various icons I've made or modified.",
    [],
    {
        keywords: ["extras", "wallpapers", "icons", "resources"],
    },
);

export const icons_section = group(
    "app icons",
    "icons",
    "mostly slight changes to existing icons, but some of my own as well",
    icons,
);

export const wallpapers_section = group(
    "wallpapers & screenshots",
    "wallpapers",
    "collection of wallpapers from others i like, or ones i've made/modified",
    // "collection of wallpapers i've created, modified/upscaled, or that i just like",
    wallpapers,
);

export const groups: IEntryGroups = [icons_section, wallpapers_section];
