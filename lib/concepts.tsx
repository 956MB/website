import { StaticImageData } from "next/image";
import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: concepts

import comma_i from "../public/images/concepts/comma.png";
export const concept_comma_interface_challenge: IEntry = {
	id: "comma-interface-challenge",
	title: "Comma Interface Challenge",
	link: "",
	summary: [
		"This was my take (apparently not very good) on a re-design of the Comma 3 interface. It came from an interview assignment called the 'Comma Interface Challenge', where Comma wanted modifications or whole different design structures for a 'Software updater' inside the UI. I supposedly didn't fully grasp the objective of the interview challenge though.",
	],
	tags: [],
	image: { path: comma_i, width: 4720, height: 2655 },
};

import intros_i from "../public/images/concepts/intros.png";
export const concept_intros: IEntry = {
	id: "intros",
	title: '"Tro"... "Frame"... idk',
	link: "",
	summary: [
		"This is a concept for a website idea I’ve had for a long time. It’s a website where any and all TV show or movie intro “frames” are collected. Sort of like if IMDB or Rotten Tomatoes was only for intros and end credits.",
	],
	tags: [],
	image: { path: intros_i, width: 2560, height: 1440 },
};

import opgg_spectate_i from "../public/images/concepts/OPGG.png";
export const concept_opgg_spectate: IEntry = {
	id: "opgg-spectate",
	title: 'OP.GG Client "Spectate pro matches"',
	link: "",
	summary: [
		"This is a concept for the OP.GG ‘Pro Matches’ feature, integrated into their desktop client. I really liked the ‘Spectate Pro Players’ part of OP.GG’s website, but I thought it would be cool if you never had to leave the desktop client to load up and spectate pro games.",
	],
	tags: [],
	image: { path: opgg_spectate_i, width: 1575, height: 885 },
};

import lol_icon_tool_i from "../public/images/concepts/LoL.png";
export const concept_lol_icon_tool: IEntry = {
	id: "lol-icon-tool",
	title: "LoL Icon Tool",
	link: "",
	summary: [
		"This concept was made before the overhaul to the borders and ranks. This website allows you to pair borders to icons to banners to customize your LoL profile, or see what combinations look good. All level and rank borders/banners and every icon would be available to preview.",
	],
	tags: [],
	image: { path: lol_icon_tool_i, width: 1794, height: 1009 },
};

import plan_i from "../public/images/concepts/pLan.png";
export const concept_plan: IEntry = {
	id: "pLan",
	title: "pLan",
	link: "",
	summary: [
		"“Logo” and “brand aesthetics” for my first programming language, pLan. Which of course doesn’t actually exist yet. It’ll be done in 20 years. I guess I really like coming up with names for programming languages and creating graphics for them more than I like learning how to actually make one.",
	],
	tags: [],
	image: { path: plan_i, width: 3840, height: 2160 },
};

export const concepts = [
	concept_comma_interface_challenge,
	concept_intros,
	concept_opgg_spectate,
	concept_lol_icon_tool,
	concept_plan,
];
export const concepts_section: IEntryGroup = {
	title: "Concepts",
	description: "Collection of UI concepts and ideas for future projects",
	items: concepts,
};

// NOTE: scripts

import gyea_i from "../public/images/concepts/gyea.png";
export const script_gyea: IEntry = {
	id: "script-hokj",
	title: "GYEA",
	link: "",
	summary: [],
	tags: [],
	image: { path: gyea_i, width: 1745, height: 789 },
};

import tab_i from "../public/images/concepts/tab.png";
export const script_tab: IEntry = {
	id: "script-tab",
	title: "Tab",
	link: "",
	summary: [],
	tags: [],
	image: { path: tab_i, width: 1358, height: 929 },
};

import hokj_i from "../public/images/concepts/hokj.png";
export const script_hokj: IEntry = {
	id: "script-hokj",
	title: "Hokj",
	link: "",
	summary: [],
	tags: [],
	image: { path: hokj_i, width: 1362, height: 720 },
};

export const scripts = [script_gyea, script_tab, script_hokj];
export const scripts_section: IEntryGroup = {
	title: "Scipts",
	description:
		"Language scripts (and eventually conlangs) I've drawn and developed using Illustrator and FontForge",
	items: scripts,
};

// NOTE: sections

export const groups: IEntryGroups = [
	concepts_section,
	scripts_section,
];
