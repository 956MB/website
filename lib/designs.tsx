import { IEntry, IEntryGroup, IEntryGroups, IEntryGroupLinks } from "./interfaces";

// NOTE: ui

export const ui_tdb_landing: IEntry = {
    id: "ui_tdb_landing",
    title: "TDB Landing Site",
    date: "9.28.2023",
    category: "figma",
    summary: [
        "Very simple and VERY static landing page design for my iOS/iPadOS/macOS app, TDB. The idea of the app and it's overall functionality is super easy to understand, so I thought it's landing site should be the same. There's no need for a bunch of animations or slides advertising what it can do, one page with a demo and a download button should be enough. (NOT on the App Store yet.)",
    ],
    thumbnail: {
        path: "/thumbnails/tdb-landing-thumb.png",
        width: 1920,
        height: 1920,
    },
    content: [
        {
            path: "/images/tdb-landing/tdb-landing-2.png",
            width: 2880,
            height: 2160,
        },
    ],
};

export const ui_wallpaper_sync: IEntry = {
	id: "ui_wallpaper_sync",
	title: "WallpaperSync",
    date: "8.17.2023",
	category: "figma",
	summary: [
		"This is another spontaneous project idea for a desktop app to set and automatically handle your different wallpapers on multiple devices. I'm personally a Synergy user, and have been for a long time, but I also manually switch back and forth between my Mac and PC. So, my intended use case came from having a folder of auto-rotating wallpapers on my Mac that I wanted to apply the exact same way to my PC, without any manually transferring of files through Google Drive or something.",
	],
    thumbnail: {
        path: "/thumbnails/wallpaper-sync-thumb.png",
        width: 1458,
        height: 1458,
    },
	content: [
		{
			path: "/images/wallpaper-sync/wallpaper-sync.png",
			width: 3616,
			height: 3662,
		},
	],
};

export const ui_tx4: IEntry = {
	id: "ui_tx4",
	title: "TX4",
    date: "6.25.2023",
	category: "figma",
	summary: [
		"An actual attempt at my previously shown app, TX4. I tried to keep the same general ideas and structure of the original Qt creation, but with a much more thought out design before going into development. This was crucial because doing things on the fly with no plan, in Qt no less, lead to a terrible look and feel. Development on it has already started in React, but is very early stages.",
	],
    thumbnail: {
        path: "/thumbnails/tx4-thumb.png",
        width: 1260,
        height: 1260,
    },
	content: [
		{ path: "/images/tx4-for-real/map.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/main.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/viewer.png", width: 2680, height: 1810 },
		{ path: "/images/tx4-for-real/loading.png", width: 2680, height: 1810 },
	],
};

export const ui_comma_interface_challenge: IEntry = {
	id: "comma-interface-challeng",
	title: "Comma Interface Challenge",
    date: "11.14.202",
	category: "figma",
	summary: [
		"This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
	],
    thumbnail: {
        path: "/thumbnails/comma-interface-thumb.png",
        width: 1480,
        height: 1480,
    },
	content: [
        { path: "/images/comma-interface-challenge/home.png", width: 2160, height: 1080 },
        { path: "/images/comma-interface-challenge/popup.png", width: 2160, height: 1080 },
        { path: "/images/comma-interface-challenge/update.png", width: 2160, height: 1080 },
        { path: "/images/comma-interface-challenge/maps.png", width: 2160, height: 1080 },
    ],
};

export const ui_intros: IEntry = {
	id: "intros",
	title: '"Tro"... "Frame"... idk',
    date: "5.18.2023",
	category: "figma",
	summary: [
		"This is a concept for a website I’ve had for a long time. It’s a website where any and all TV show or movie intro “frames” are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
	],
    thumbnail: {
        path: "/thumbnails/troio-thumb.png",
        width: 1104,
        height: 1104,
    },
	content: [
		{ path: "/images/tro-io/ImagePage.png", width: 1920, height: 947 },
		{ path: "/images/tro-io/SimilarImages.png", width: 1920, height: 1189 },
		{ path: "/images/tro-io/Banner.png", width: 1920, height: 368 },
		{ path: "/images/tro-io/intros.png", width: 2560, height: 1440 },
		{ path: "/images/tro-io/Titlebars.png", width: 1920, height: 1074 },
	],
};

export const ui_opgg_spectate: IEntry = {
	id: "opgg-spectate",
	title: 'OP.GG "Spectate pro matches" / "Pros"',
    date: "8.21.2021",
	category: "figma",
	summary: [
		"This is a concept for the OP.GG ‘Pro Matches’ feature, integrated into their desktop client. I really liked the ‘Spectate Pro Players’ part of OP.GG’s website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
	],
    thumbnail: {
        path: "/thumbnails/opgg-thumb.png",
        width: 824,
        height: 824,
    },
	content: [
		{ path: "/images/concepts/pros/liiv.png", width: 2208, height: 999 },
		{ path: "/images/concepts/pros/mundo.png", width: 2415, height: 843 },
		{ path: "/images/concepts/pros/t1.png", width: 2300, height: 694 },
		{ path: "/images/concepts/OPGG.png", width: 1575, height: 885 },
	],
};

export const ui_lol_icon_tool: IEntry = {
	id: "lol-icon-tool",
	title: "LoL Icon Tool",
    date: "8.21.2021",
	category: "react",
	summary: [
		"This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
	],
	content: [{ path: "/images/concepts/LoL.png", width: 1794, height: 1009 }],
};

export const ui = [
    ui_tdb_landing,
	ui_wallpaper_sync,
	ui_tx4,
	ui_intros,
	ui_comma_interface_challenge,
	ui_opgg_spectate,
	// ui_lol_icon_tool,
];
export const ui_section: IEntryGroup = {
	title: "UI / UX",
    category: "concept",
	description:
		"Collection of UI prototypes and ideas for past and future projects",
	items: ui,
};

// NOTE: drawings / photo manipulation

export const painting_cybertruck_texas: IEntry = {
	id: "painting_cybertruck_texas",
	title: "Cybertruck 2 (Texas)",
    date: "12.1.2023",
	category: "photoshop",
    new: true,
	summary: [
		"My second Procreate painting of a Cybertruck, again original photograph by <a href=\"https://www.reddit.com/user/PhotoKaz/\">u/PhotoKaz</a>. Maybe this one is an improvement on the first, maybe not? I need to get more confident at drawing clean lines and work towards more photorealism.",
	],
    thumbnail: {
        path: "/images/drawings/cybertruck-texas/cybertruck-texas-thumb.png", width: 1000, height: 1000
    },
	content: [
        { path: "/images/drawings/cybertruck-texas/cybertruck-texas.png", width: 5120, height: 2880, },
        { path: "/videos/cybertruck-texas-timelapse.mp4", width: 1920, height: 1080 },
    ],
};

export const painting_cybertruck: IEntry = {
	id: "painting_cybertruck",
	title: "Cybertruck paining",
    date: "11.29.2023",
	category: "photoshop",
    new: true,
	summary: [
		"My first ever painting / photo manipuation like this using Procreate (I literally just got my iPad 2 days ago to get into this stuff). I'm a huge Cybertruck fan, and I wanted my first attempt to be something related to it or another Tesla product. Credit to <a href=\"https://www.reddit.com/user/PhotoKaz/\">u/PhotoKaz</a> for the great photos, and thanks to him for letting me use it as a base layer.",
	],
    thumbnail: {
        path: "/images/drawings/cybertruck/cybertruck-thumb-red.png",
        width: 1000,
        height: 1000,
    },
	content: [
        { path: "/images/drawings/cybertruck/cybertruck-red.png", width: 2174, height: 2933, },
        { path: "/images/drawings/cybertruck/cybertruck-green.png", width: 2174, height: 2933, },
        { path: "/images/drawings/cybertruck/cybertruck-yellow.png", width: 2174, height: 2933, },
        { path: "/videos/cybertruck-timelapse.mp4", width: 1440, height: 1080 },
    ],
};

export const redesign_cybertruck: IEntry = {
	id: "redesign_cybertruck",
	title: "Cybertruck redesign by u/Wenbell",
    date: "9.4.2023",
	category: "photoshop",
	summary: [
		'My photo manipulation (all the white) of a Cybertruck concept from <a href="https://www.reddit.com/r/ghibli/comments/fo3mnu/thanks_to_ia_ive_made_a_collection_of_flawless_hq/?utm_source=share&utm_medium=web2x&context=3">u/Weenbell</a> on Reddit. Credit to him for the original modification of Cybertruck design.',
	],
    thumbnail: {
        path: "/images/drawings/cybertruck-redesign/cybertruck-redesign-thumb.png",
        width: 1000,
        height: 1000,
    },
	content: [
        {
			path: "/images/drawings/cybertruck-redesign/cybertruck-redesign.png",
			width: 3840,
			height: 2160,
		},
    ],
};

export const drawings = [
    painting_cybertruck_texas,
    painting_cybertruck,
    redesign_cybertruck,
];
export const drawings_section: IEntryGroup = {
	title: "Drawings / Photo Manipulation",
    category: "drawings",
	description:
		"Everything I draw in Procreate or edit Photoshop that falls under photo manipulation or concept art",
	items: drawings,
};

// NOTE: logos

export const logo_tdb: IEntry = {
	id: "logo_tdb",
	title: "TDB App Icon / X",
    date: "9.28.2023",
	category: "photoshop",
	summary: [
		"App icon for my iOS/iPadOS/macOS Tesla database app, TDB. Two versions, the square being the initial iOS app icon, and the circle one for profile pictures and various other things. (Still in development, NOT on the App Store yet.)",
	],
	content: [
        { path: "/thumbnails/tdb-circle-thumb.png", width: 1024, height: 1024, },
        { path: "/thumbnails/tdb-square-thumb.png", width: 1024, height: 1024, },
    ],
};

export const logo_tbab: IEntry = {
	id: "logo_tbab",
	title: "Personal \"logo\"",
    date: "7.19.2023",
	category: "photoshop",
	summary: [
		"The \"logo\" I made for myself in the process of drawing characters for my \"GYEA\" script. I noticed after the fact that two of the characters sort of looked like the letter combinations 'TB' and 'AB'. Both of course being initials in my name, Trevor Alexander Bays.",
	],
	content: [
        { path: "/thumbnails/tbab-thumb.png", width: 1024, height: 1024, },
    ],
};

export const logo_plan: IEntry = {
	id: "logo_plan",
	title: "pLan",
    date: "5.30.2020",
	category: "photoshop",
    new: true,
	summary: [
		"“Logo” and “brand aesthetics” for my first programming language, pLan. Which of course doesn’t actually exist yet. It’ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
	],
    thumbnail: {
        path: "/thumbnails/plan-thumb.png",
        width: 571,
        height: 571,
    },
	content: [
        { path: "/images/concepts/pLan/pLan-logo.png", width: 1600, height: 1600 },
        { path: "/images/concepts/pLan/pLan-x.png", width: 1168, height: 571 },
        { path: "/images/concepts/pLan/pLan-mockup.png", width: 3840, height: 2160 }
    ],
};

export const logo_d: IEntry = {
	id: "logo_d",
	title: "D",
    date: "12.2.2023",
	category: "photoshop",
	summary: [
		"I have NO idea what this is, I just started painting.",
	],
    new: true,
    useLinkPreview: { path: "/images/concepts/d/d-banner.png", width: 1764, height: 588, },
    thumbnail: { path: "/images/concepts/d/d-thumb-1000.png", width: 1000, height: 1000, },
	content: [
        { path: "/images/concepts/d/d-logo.png", width: 2571, height: 2571 },
        { path: "/images/concepts/d/d-x-banner.png", width: 1797, height: 857 },
        { path: "/videos/d-timelapse.mp4", width: 1440, height: 1440 },
    ],
};

export const logos = [
    logo_d,
    logo_plan,
	logo_tdb,
    logo_tbab
];
export const logos_section: IEntryGroup = {
	title: "Logos / Icons",
    category: "logo",
	description:
		"A few logos/icons I've made for projects or personal use",
	items: logos,
};

// NOTE: scripts

export const script_circles_only: IEntry = {
	id: "script_circles_only",
	title: "Circles only, apparently",
    date: "11.12.2023",
	category: "script",
    new: true,
	tags: ["Circles"],
	linkBlog: "https://www.956mb.com/blog/circles-only-apparently",
	content: [
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
	content: [
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
	content: [{ path: "/images/concepts/gyea.png", width: 1745, height: 789 }],
};

export const script_brands: IEntry = {
	id: "script_brands_tab_hokj",
	title: "Brand logos",
    date: "5.25.2023",
	category: "script",
	tags: ["Tab"],
	content: [
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
	content: [{ path: "/images/concepts/tab.png", width: 1358, height: 929 }],
};

export const script_before_tab: IEntry = {
	id: "script_before_tab",
	title: "Before Tab",
    date: "4.23.2023",
	category: "script",
	tags: ["Tab"],
	linkBlog: "https://www.956mb.com/blog/something-new",
	content: [
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
	content: [{ path: "/images/concepts/hokj.png", width: 1362, height: 720 }],
};

export const scripts = [
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

// NOTE: sections

export const groups: IEntryGroups = [ui_section, logos_section, drawings_section, scripts_section];

export const recents_group: IEntryGroupLinks = {
	title: "New stuff",
    category: "list",
    useFirsts: [3],
    links: ["designs/#logo_d", "/designs#painting_cybertruck_texas", "/designs"],
	items: [logo_d, painting_cybertruck_texas, ui_tdb_landing],
};