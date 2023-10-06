import { StaticImageData } from "next/image";
import { IEntry, IEntryGroup } from "./interfaces";

const tdb_i = "/images/projects/tdb.png";
export const project_tdb: IEntry = {
	id: "tdb",
	title: "TDB",
	link: "https://twitter.com/TDBApp",
	summary: [
		"Everything you need to know about <span class='highlight'>Tesla</span> products. Full spec sheets and detailed info about every vehicle, solar product, and piece of software Tesla has released in the last 15 years.",
		"This app takes heavy inspiration = the very popular app MacTracker. <span class='highlight'>“A Tesla version of this would be awesome”</span>, we said. I also thought I could do a better job than MacTracker by implementing 3D and/or AR models into the app and one up their tiny PNGs.",
	],
	tags: ["iOS", "macOS", "Swift", "SwiftUI"],
	images: [{ path: "/images/projects/tdb.png", width: 1163, height: 764 }],
};

export const project_pros: IEntry = {
	id: "pros",
	title: "Pros",
	link: "https://github.com/956MB/pros-client",
	summary: [
		"A desktop client for spectating professional <span class='highlight'>League of Legends</span> players.",
		"This app is the result of my previous design concept for an OP.GG 'Spectate Pro Matches' feature. I've wanted a dedicated way of easily finding matches to spectate for a while, and I ended up just trying my hand at one myself.",
		"The app's design takes clear inspiration = my favorite LoL utilities, OP.GG and Blitz. This is intended though, as I want it to eventually look and feel like a professional desktop client that people would enjoy using.",
	],
	tags: ["Windows", "Tauri", "TypeScript", "React"],
	images: [{ path: "/images/projects/pros.png", width: 893, height: 791 }],
};

export const project_2048: IEntry = {
	id: "2048we",
	title: "2048WE",
	link: "https://github.com/956MB/2048WE",
	summary: [
		"Full functionaly of the iOS app <span class='highlight'>2048</span>, right on your Apple Watch. High scores saved on device, end of game stats, and current game progress is never lost between app resets and Watch being turned off.",
		"This was my first attempt at making a standalone WatchOS app with the new way of not requiring the Watch app to be thethered to an iOS app. You don’t see many games on Apple Watch, mainly because theres not much you can do with the small form factor, but I thought the <span class='highlight'>2048</span> concept would work perfectly for it.",
	],
	tags: ["WatchOS", "Swift", "SwiftUI"],
	images: [{ path: "/images/projects/2048W.png", width: 1080, height: 874 }],
};

export const project_tx4: IEntry = {
	id: "tx4",
	title: "TX4",
	link: "https://github.com/956MB/TX4",
	summary: [
		"Simple and fully featured application for viewing all your accumulated dashcam and Sentry mode clips off your Model 3 (or any other model).",
		"The idea for this came = a computer engineer friend of mine who owns a Model 3, and spends a lot of time analyzing it and watching his clips back. Also the fact that I wanted to start another proper Qt project and see how far I could take it.",
	],
	tags: ["Windows", "C++", "Qt"],
	images: [{ path: "/images/projects/TX4.png", width: 1038, height: 891 }],
};

export const project_mssnc: IEntry = {
	id: "mssnc",
	title: "MSSNC",
	link: "https://github.com/956MB/MSSNC",
	summary: [
		"This idea came directly = myself using the Windows app <span class='highlight'>'Sticky Notes'</span>, and wanting the same thing on Mac. Notes are easily identified with their unique colors, and windows maintain their position and size on the desktop before and after application restarts.",
		"I really loved the look and functionality of Sticky Notes, and I thought its seperate and distinct colors design and overall simplicity would transfer over perfectly to macOS. Also, the idea of having an exact macOS clone of Sticky Notes and using both was very cool.",
	],
	tags: ["macOS", "Swift", "SwiftUI"],
	images: [{ path: "/images/projects/mssnc.gif", width: 1532, height: 982 }],
};

export const project_some_aim_game: IEntry = {
	id: "some-aim-game",
	title: "SomeAimGame",
	link: "https://github.com/956MB/SomeAimGame",
	summary: [
		"In the vein of some my other projects, this was my first, and so far, only attempt at creating a game in the <span class='highlight'>Unity Engine</span>. But, I do intend on working on this again, because <span class='highlight'>C#</span> and <span class='highlight'>Unity</span> were very enjoyable.",
		"For this to be a proper 'aim game', it needed a few primary features if nothing else, which I believe I implemented fairly well. Various different game modes to choose from, general color customization to get the best feel for targets and the environment, and the abilty to create almost infinite crosshairs to use and share.",
	],
	tags: ["Windows", "C#", "Unity"],
	images: [{ path: "/images/projects/sag.gif", width: 1408, height: 973 }],
};

export const project_twanslate: IEntry = {
	id: "twanslate",
	title: "Twanslate",
	link: "https://github.com/956MB/SomeAimGame",
	summary: [
		"I use my Mac a lot, and I’m on Twitch a lot, but most of the time I’m in a chat that’s not in my language, because I’m trying to learn a new one.",
		"This app leverages the <span class='highlight'>Twitch API</span> and the <span class='highlight'>IRC</span> protocol they still use for chats, and uses multiple other APIs (<span class='highlight'>Google</span>, <span class='highlight'>Microsoft</span>, <span class='highlight'>NLP</span>) for translating incoming messages = one language to another. Say Finnish -> English, or vice versa, which is what I mainly use it for.",
	],
	tags: ["macOS", "Swift", "SwiftUI"],
	images: [
		{ path: "/images/projects/Twanslate.png", width: 1147, height: 886 },
	],
};

export const project_github_desktop_css: IEntry = {
	id: "github-desktop-css",
	title: "GithubDesktop.css",
	link: "https://github.com/956MB/GithubDesktop.css",
	summary: [
		"More and frankly better light/dark mode themes for the <span class='highlight'>Github Desktop</span> client.",
		"<span class='highlight'>Github Desktop</span> just didn’t have enough options for <span class='highlight'>light</span> and <span class='highlight'>dark</span> mode themes. Dark mode is the blue-ish ‘Monokai’ sort of dark, which I personally don’t like, and the light mode just doesn’t go far enough. I personally love when software or websites have multiple theme options for someone like me who likes things a bit different.",
	],
	tags: ["CSS", "Shell"],
	images: [
		{
			path: "/images/projects/GithubDesktopCSS.gif",
			width: 1374,
			height: 828,
		},
	],
};

export const project_board_games_py: IEntry = {
	id: "board-games-py",
	title: "board-games.py",
	link: "https://github.com/956MB/GithubDesktop.css",
	summary: [
		"<span class='highlight'>Go</span>, <span class='highlight'>Chess</span>, <span class='highlight'>Checkers</span>, and <span class='highlight'>Connect Four</span>.",
		"Basically, the approach was “what’s the quickest and simplest way of writing games to play in a terminal?”. I love these games, and all of them work perfectly for the simple <span class='highlight'>ASCII</span> character way of rendering games in the terminal. So I started with the easiest one first (Connect Four), and worked my way up to Go.",
		"Also, with all of them being in Python and written in such a simple way, my intention was to work on some <span class='highlight'>Tensorflow</span>/<span class='highlight'>PyTorch</span> machine learning and implement it into some or all of the games.",
	],
	tags: ["Python"],
	images: [{ path: "/images/projects/bgames.gif", width: 820, height: 544 }],
};

export const projects = [
	project_tdb,
	project_pros,
	project_2048,
	project_tx4,
	project_mssnc,
	project_some_aim_game,
	project_twanslate,
	project_github_desktop_css,
	project_board_games_py,
];
