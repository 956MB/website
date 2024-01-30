import {
	IEntry,
	IEntryGroup,
	IEntryGroups,
	IEntryGroupLinks,
} from "./interfaces";

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
	items: [
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
	items: [
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
	items: [
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
	items: [
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
	items: [
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
	items: [
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
	items: [{ path: "/images/concepts/LoL.png", width: 1794, height: 1009 }],
};

export const ui = [
	ui_tdb_landing,
	ui_wallpaper_sync,
	ui_tx4,
	ui_intros,
	ui_comma_interface_challenge,
	ui_opgg_spectate,
	ui_lol_icon_tool,
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
	aspectRatio: true,
	summary: [
		'My second Procreate painting of a Cybertruck, again original photograph by <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/PhotoKaz/">u/PhotoKaz</a>. Maybe this one is an improvement on the first, maybe not? I need to get more confident at drawing clean lines and work towards more photorealism.',
	],
	thumbnail: {
		path: "/images/drawings/cybertruck-texas/cybertruck-texas-thumb.png",
		width: 1000,
		height: 1000,
	},
	items: [
		{
			path: "/images/drawings/cybertruck-texas/cybertruck-texas.png",
			width: 5120,
			height: 2880,
		},
		{
			path: "/videos/cybertruck-texas-timelapse.mp4",
			width: 1920,
			height: 1080,
		},
	],
};

export const painting_cybertruck: IEntry = {
	id: "painting_cybertruck",
	title: 'Cybertruck "painting"',
	date: "11.29.2023",
	category: "photoshop",
	aspectRatio: true,
	summary: [
		'My first ever painting / photo manipuation like this using Procreate (I literally just got my iPad 2 days ago to get into this stuff). I\'m a huge Cybertruck fan, and I wanted my first attempt to be something related to it or another Tesla product. Credit to <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/PhotoKaz/">u/PhotoKaz</a> for the great photos, and thanks to him for letting me use it as a base layer.',
	],
	thumbnail: {
		path: "/images/drawings/cybertruck/cybertruck-thumb-red.png",
		width: 1000,
		height: 1000,
	},
	items: [
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
};

export const redesign_cybertruck: IEntry = {
	id: "redesign_cybertruck",
	title: "Cybertruck redesign by ???",
	date: "9.4.2023",
	category: "photoshop",
	summary: [
		'My photo manipulation (all the white) of a Cybertruck concept from <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/cybertruck/comments/mlshr8/what_are_your_thoughts_about_this_for_farming_or/">(IDK he deleted his account... but it wasn\'t me!)</a>. Credit to whoever the guy was for the original modification of Cybertruck design.',
	],
	thumbnail: {
		path: "/images/drawings/cybertruck-redesign/cybertruck-redesign-thumb.png",
		width: 1000,
		height: 1000,
	},
	items: [
		{
			path: "/images/drawings/cybertruck-redesign/cybertruck-redesign.png",
			width: 3840,
			height: 2160,
		},
	],
};

export const painting_power_lines: IEntry = {
	id: "painting_power_lines",
	title: "Power lines in a random town",
	date: "12.9.2023",
	category: "photoshop",
	aspectRatio: true,
	useLinkPreview: {
		path: "/images/drawings/power-lines/power-lines.png",
		width: 3000,
		height: 4000,
	},
	thumbnail: {
		path: "/images/drawings/power-lines/power-lines-thumb.png",
		width: 1000,
		height: 1000,
	},
	items: [
		{
			path: "/images/drawings/power-lines/power-lines.png",
			width: 3000,
			height: 4000,
		},
		{
			path: "/images/drawings/power-lines/power-lines-bw.png",
			width: 3000,
			height: 4000,
		},
	],
};

export const sketch_box: IEntry = {
	id: "sketch_box",
	title: "A box of some kind",
	date: "12.9.2023",
	category: "photoshop",
	items: [
		{
			path: "/images/drawings/sketches/IMG_0180.jpg",
			width: 2625,
			height: 2625,
		},
	],
};

export const drawings = [
	sketch_box,
	painting_power_lines,
	painting_cybertruck_texas,
	painting_cybertruck,
	redesign_cybertruck,
];
export const drawings_section: IEntryGroup = {
	title: "Sketches, Paintings and Photo Manipulations",
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
	category: "illustrator",
	summary: [
		"App icon for my iOS/iPadOS/macOS Tesla database app, TDB. Two versions, the square being the initial iOS app icon, and the circle one for profile pictures and various other things. (Still in development, NOT on the App Store yet.)",
	],
	thumbnail: {
		path: "/images/tdb-landing/tdb-landing-thumb.png",
		width: 857,
		height: 857,
	},
	items: [
		{ path: "/thumbnails/tdb-circle-thumb.png", width: 1024, height: 1024 },
		{ path: "/thumbnails/tdb-square-thumb.png", width: 1024, height: 1024 },
	],
};

export const logo_tbab: IEntry = {
	id: "logo_tbab",
	title: 'Personal "logo"',
	date: "7.19.2023",
	category: "illustrator",
	summary: [
		"The \"logo\" I made for myself in the process of drawing characters for my \"GYEA\" script. I noticed after the fact that two of the characters sort of looked like the letter combinations 'TB' and 'AB'. Both of course being initials in my name, Trevor Alexander Bays.",
	],
	items: [{ path: "/thumbnails/tbab-thumb.png", width: 1024, height: 1024 }],
};

export const logo_plan: IEntry = {
	id: "logo_plan",
	title: '"pLan"',
	date: "5.30.2020",
	category: "photoshop",
	summary: [
		"“Logo” and “brand aesthetics” for my first programming language, pLan. Which of course doesn’t actually exist yet. It’ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
	],
	thumbnail: {
		path: "/thumbnails/plan-thumb.png",
		width: 571,
		height: 571,
	},
	items: [
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
};

export const logo_d: IEntry = {
	id: "logo_d",
	title: '"D" / "O"',
	date: "12.2.2023",
	category: "photoshop",
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
	},
	items: [
		{ path: "/images/concepts/d/o-logo.png", width: 2571, height: 2571 },
		{ path: "/images/concepts/d/o-x-banner.png", width: 1797, height: 857 },
		{ path: "/images/concepts/d/d-logo.png", width: 2571, height: 2571 },
		{ path: "/images/concepts/d/d-x-banner.png", width: 1797, height: 857 },
		{ path: "/videos/d-timelapse.mp4", width: 1440, height: 1440 },
	],
};

export const icons_rosetta: IEntry = {
	id: "icons_rosetta",
	title: "Adobe 2024 Rosetta Icons",
	date: "1.1.2024",
	category: "illustrator",
	summary: [
		'Rosetta (macOS) versions of Adobe 2024 app iconc. I use this for a duplicate "Adobe Photoshop 2024 (Rosetta).app" executable to differentiate my normal app and the "Open in Rosetta" one. You can download it on <a rel="noopener noreferrer" target="_blank" href="https://store.956mb.com/l/adobe-rosetta-icons">Gumroad</a>.',
	],
	thumbnail: {
		path: "/images/adobe-icons/rosetta-thumb.gif",
		width: 1024,
		height: 1024,
	},
	items: [
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
};

export const figma_tattoo: IEntry = {
	id: "figma_tattoo",
	title: '"Figma tattoo"',
	date: "1.14.2024",
	category: "figma",
	summary: [
		"Idea I had for a wrist/forearm tattoo done off the top of my head, constructed in Figma. I easily could have done it in Illustrator or something else, but I was already using Figma... This sort of thing has probably been done a million times, guessing by how INCREDIBLY simple it was to make... but I like it. The thicker 'band' with the gradients wraps around the wrist like a bracelet, and of course being me, the colors are likely to change at any time.",
	],
	useLinkPreview: {
		path: "/images/figma-tattoo/figma-tattoo-preview-flip.png",
		width: 1920,
		height: 384,
	},
	thumbnail: {
		path: "/images/figma-tattoo/figma-tattoo-thumb.png",
		width: 1024,
		height: 1024,
	},
	items: [
		{
			path: "/images/figma-tattoo/figma-tattoo-horizontal.png",
			width: 2488,
			height: 1781,
		},
		{
			path: "/images/figma-tattoo/figma-tattoo-mockup.png",
			width: 2160,
			height: 2700,
		},
	],
};

export const t_wear: IEntry = {
	id: "t_wear",
	title: "E! / T! / !T (v1)",
	date: "1.26.2024",
	category: "illustrator",
	summary: [
		"This Is one of a few logo ideas for a clothing brand that popped into my head watching the Australian Open this year. I've always been interested in the idea of custom equipment / clothing, and what those things would look like if I designed them for myself. Whether it was hockey in my past, snowboarding or tennis. There's three because I can't make up my mind with this concept... but #1 is probably front runner. (Jannik is the absolute man.)",
	],
	thumbnail: { path: "/images/t_wear/t!-thumb.gif", width: 857, height: 857 },
	items: [
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
};

export const logos = [
	t_wear,
	figma_tattoo,
	icons_rosetta,
	logo_d,
	logo_plan,
	logo_tdb,
	logo_tbab,
];
export const logos_section: IEntryGroup = {
	title: "Logos, Icons and Miscelaneous",
	category: "logo",
	description: "A few logos/icons I've made for projects or personal use",
	items: logos,
};

// NOTE: sections

export const designGroups: IEntryGroups = [
	ui_section,
	logos_section,
	drawings_section,
];

export const recents_group: IEntryGroupLinks = {
	title: "New stuff",
	category: "list",
	links: [
		"designs/figma_tattoo",
		"designs/#painting_power_lines",
		"designs/#logo_d",
	],
	items: [figma_tattoo, painting_power_lines, logo_d],
};
