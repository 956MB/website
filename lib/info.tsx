import logo_s_i from "../public/logo-small.png";

export const logo_s = logo_s_i;
export const name = "Alexander Bays";
export const copyright = "© Alexander Bays 2024";
export const email = {
    key: "contact",
    value: "bays@956mb.com",
    url: "mailto:bays@956mb.com",
};
export const socials = [
    { serv: "x", name: "${highlight('956MB')}", url: "https://x.com/956MB" },
    {
        serv: "github",
        name: "${highlight('956MB')}",
        url: "https://github.com/956MB",
    },
    {
        serv: "reddit",
        name: "${highlight('bauera5')}",
        url: "https://www.reddit.com/user/bauera5",
    },
    {
        serv: "ko-fi",
        name: "${highlight('956MB')}",
        url: "https://ko-fi.com/956mb",
    },
    {
        serv: "linktree",
        name: "${highlight('956MB')}",
        url: "https://linktr.ee/956mb",
    },
    {
        serv: "email",
        name: "${highlight('bays@956mb.com')}",
        url: "mailto:bays@956mb.com",
    },
];

export const extras_explained = {
    title: "Why this page?",
    description:
        'I love screen grabbing from things like movies/TV/games, and then using Photoshop or Topaz Photo AI to make them into wallpapers. I also feel a great urge to share them with others since I think they\'re so cool, and most things arent natively in 5K (yet). Hopefully this section comes across as a "public repo" of sorts for cool wallpapers and stuff, and not me trying to claim these as my own works (obviously except for the ones I actually did make myself). Enjoy.',
    disclaimer:
        "Anything that is marked I DO NOT take credit for. I have NOT photographed, painted or rendered anything here unless specified. I am just trying to share things I've messed with or that I personally use for others to enjoy.",
};

const hl = function (text) {
    return `<span class='large-highlight'>${text}</span>`;
};

export const about_p = `<span class='name-highlight'>${name}</span>, self-taught ${hl("programmer")}, ${hl("designer")} and <a class="p-link large-highlight" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/user/bauera5/\">r/neography</a> hobbyist from ${hl(" Dallas, TX ")}`;
export const about_email = `[ <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"mailto:bays@956mb.com\">${hl("bays@956mb.com")}</a> ]`;

export const bio_p = `My main focus is in frontend design and functionality for desktop and mobile software. I typically start by prototyping in ${hl("Figma ")} and then bring functionality to my designs with code. I've created applications for ${hl("Windows")}, ${hl("macOS")}, ${hl("iPhone ")}, and ${hl("Apple Watch")}. When I'm not working on code projects or new designs, I'm slowly learning languages like ${hl("한국어")} or ${hl("Suomalainen")}, and I'm thinking up and drawing new fictional language scripts on ${hl("r/neography")}.`;

export const background_p = `I started my self-taught skills journey around 2010, initially focusing on graphic design and mastering ${hl("Photoshop")}. In 2018, a computer engineer friend introduced me to programming, and it quickly became my passion. After some exploration, I think I "settled into the design side" of programming, combining my still expanding coding skills with a keen eye for aesthetics.`;

export const languages_p = `In addition to loving ${hl("Swift")} (and ${hl("SwiftUI")}) for Apple products, I've worked a lot with both ${hl("JavaScript")} / ${hl("TypeScript")} to make dekstop apps and websites in ${hl("React")} (${hl("this website")}), and I'm most recently exploring languages like ${hl("Lua")} and ${hl("Go")} for things like Neovim development. When I'm not using the tried and true ${hl("Electron")}, I'm trying to get the new${hl("*")} framework ${hl("Tauri")} to work for me and really master the ${hl("Rust")} language. Aside from these languages and libraries for creating frontends, my main scripting language of choice is ${hl("Python")}. Which I use a ton for things like coding challenges on ${hl("Codewars")} / ${hl("AdventOfCode")}.`;

export const tools_p = `For all my projects, I rely on ${hl("Figma ")} as my go-to tool for prototyping designs before transitioning to code. I also have years of experience with ${hl("Photoshop")} and ${hl("Illustrator")} as well. Additionally, I have some very minor familiarity with programs like ${hl("FontLab")}, ${hl("FontForge")} and ${hl("Calligraphr")}, which I enjoy using for personal hobbies like creating constructed scripts. IDE? Pick one. ${hl("Neovim")} is my favorite and my go-to atm, but ${hl("VSCode")} (${hl("VSCodium")}), ${hl("XCode")}, and some ${hl("Fleet")} have all served me well too.`;

export const neography_t = "Scripts & Conlangs (eventually)";

export const neography_d = `I love language, and I'm a visual person so I especially love scripts. Not just real-world, but fictional as well (Lord of The Rings, Star Wars, Dune, etc). A really inspiriing figure to me is <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://dedalvs.com/\">David J. Peterson</a>, creator of the languages for Game of Thrones, and MANY other things. These are most of the language scripts (and eventually conlangs) I've created for the <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/r/neography/\">r/neography</a> subreddit, and maybe one day it'll be as impressive a collection as David's.`;
