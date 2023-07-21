import { StaticImageData } from "next/image";
import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: concepts

import tx4_i from "../public/images/tx4-for-real/tx4.png";
export const design_tx4: IEntry = {
	id: "design_tx4",
	title: "TX4",
	category: "figma",
	summary: [
		"My actual attempt at the app TX4. I tried to keep the same general ideas and structure of the original Qt creation, but with a much more thought out design before going into development. This was crucial because doing things on the fly with no plan in Qt lead to a terrible look and feel.",
	],
	image: { path: tx4_i, width: 2650, height: 1780 },
};

import comma_i from "../public/images/concepts/comma.png";
export const design_comma_interface_challenge: IEntry = {
	id: "comma-interface-challenge",
	title: "Comma Interface Challenge",
	category: "figma",
	summary: [
		"This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
	],
	image: { path: comma_i, width: 4720, height: 2655 },
};

import intros_i from "../public/images/concepts/intros.png";
export const design_intros: IEntry = {
	id: "intros",
	title: '"Tro"... "Frame"... idk',
	category: "figma",
	summary: [
		"This is a concept for a website idea I’ve had for a long time. It’s a website where any and all TV show or movie intro “frames” are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
	],
	image: { path: intros_i, width: 2560, height: 1440 },
};

import opgg_spectate_i from "../public/images/concepts/OPGG.png";
export const design_opgg_spectate: IEntry = {
	id: "opgg-spectate",
	title: 'OP.GG Client "Spectate pro matches"',
	category: "figma",
	summary: [
		"This is a concept for the OP.GG ‘Pro Matches’ feature, integrated into their desktop client. I really liked the ‘Spectate Pro Players’ part of OP.GG’s website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
	],
	image: { path: opgg_spectate_i, width: 1575, height: 885 },
};

import lol_icon_tool_i from "../public/images/concepts/LoL.png";
export const design_lol_icon_tool: IEntry = {
	id: "lol-icon-tool",
	title: "LoL Icon Tool",
	category: "react",
	summary: [
		"This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
	],
	image: { path: lol_icon_tool_i, width: 1794, height: 1009 },
};

import plan_i from "../public/images/concepts/pLan.png";
export const design_plan: IEntry = {
	id: "pLan",
	title: "pLan",
	category: "photoshop",
	summary: [
		"“Logo” and “brand aesthetics” for my first programming language, pLan. Which of course doesn’t actually exist yet. It’ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
	],
	image: { path: plan_i, width: 3840, height: 2160 },
};

export const designs = [
	design_tx4,
	design_comma_interface_challenge,
	design_intros,
	design_opgg_spectate,
	design_lol_icon_tool,
	design_plan,
];
export const designs_section: IEntryGroup = {
	title: "Concepts",
	description:
		"Collection of UI concepts and ideas for past and future projects",
	items: designs,
};

// NOTE: scripts

import eggers_gyea_i from "../public/images/poster-edits/northman-poster.png";
export const script_eggers_posters_gyea: IEntry = {
	id: "script-eggers-gyea",
	title: "Robert Eggers posters",
	category: "script",
	groups: ["GYEA"],
	linkBlog: "https://www.956mb.com/blog/poster-edits",
	image: { path: eggers_gyea_i, width: 3000, height: 4404 },
};

import gyea_i from "../public/images/concepts/gyea.png";
export const script_gyea: IEntry = {
	id: "script-hokj",
	title: '"GYEA"',
	category: "script",
	linkBlog: "https://www.956mb.com/blog/is-this-anything",
	image: { path: gyea_i, width: 1745, height: 789 },
};

import brands_i from "../public/images/brand-logos-scripts/IMG_R78968.png";
export const script_brands: IEntry = {
	id: "script-brands-tab-hokj",
	title: "Brand logos",
	category: "script",
	groups: ["Tab"],
	image: { path: brands_i, width: 2021, height: 1096 },
};

import tab_i from "../public/images/concepts/tab.png";
export const script_tab: IEntry = {
	id: "script-tab",
	title: '"Tab"',
	category: "script",
	linkBlog: "https://www.956mb.com/blog/very-different-look-now",
	image: { path: tab_i, width: 1358, height: 929 },
};

import before_tab_i from "../public/images/something-new/IMG_54322.jpg";
export const script_before_tab: IEntry = {
	id: "script-before-tab",
	title: "Before Tab",
	category: "script",
	groups: ["Tab"],
	linkBlog: "https://www.956mb.com/blog/something-new",
	image: { path: before_tab_i, width: 1358, height: 929 },
};

import hokj_i from "../public/images/concepts/hokj.png";
export const script_hokj: IEntry = {
	id: "script-hokj",
	title: '"Hokj"',
	category: "script",
	linkBlog: "https://www.956mb.com/blog/no-idea-what-im-doing",
	image: { path: hokj_i, width: 1362, height: 720 },
};

export const scripts = [
	script_eggers_posters_gyea,
	script_gyea,
	script_brands,
	script_tab,
	script_before_tab,
	script_hokj,
];
export const scripts_section: IEntryGroup = {
	title: "Scripts",
	description:
		"Constructed scripts (and eventually conlangs) I've drawn and developed",
	items: scripts,
};

// NOTE: sections

export const groups: IEntryGroups = [designs_section, scripts_section];
