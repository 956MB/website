import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

// NOTE: wallpapers

export const extra_wallpaper_1: IEntry = {
	id: "maybe-tomorrow",
	title: "maybe tomorrow...",
	category: "wallpaper",
	summary: [
		"Upscaled and recolored wallpapers using the album art from Low Roar's 'maybe tomorrow...'.",
	],
	images: [{ path: "/images/wallpapers/maybe-tomorrow/full.png", width: 5120, height: 5120 }],
};

export const wallpapers = [
	extra_wallpaper_1,
];
export const wallpaper_section: IEntryGroup = {
	title: "Wallpapers",
    description: "Wallpapers I've upscaled or edited for my own use.'",
	items: wallpapers,
};

// NOTE: sections

export const groups: IEntryGroups = [wallpaper_section];