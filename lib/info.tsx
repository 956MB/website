import { a, hl, imgBase } from "./util";

export { imgBase };
export const name = "Alexander Bays";
export const title = `${name} (956MB)`;
export const description = "Self-taught generalist... unfortunately.";
export const baseUrl = "https://956mb.com";
export const og = `${baseUrl}/og.png`;
export const license = "CC-BY-NC-SA-4.0";
export const copyright = ` © 2025 ${name}`;
export const email = {
    key: "contact",
    value: "bays@956mb.com",
    url: "mailto:bays@956mb.com",
};
export const socials = [
    {
        serv: "x/twitter",
        name: "${highlight('956MB')}",
        url: "https://x.com/956MB",
    },
    {
        serv: "github",
        name: "${highlight('956MB')}",
        url: "https://github.com/956MB",
    },
    {
        serv: "linktree",
        name: "${highlight('956MB')}",
        url: "https://linktr.ee/956mb",
    },
];

export const extras_explained = {
    title: "Why this page?",
    description:
        'I love screen grabbing from things like movies/TV/games, and then using Photoshop or Topaz Photo AI to make them into wallpapers. I also feel a great urge to share them with others since I think they\'re so cool, and most things arent natively in 6K (yet). Hopefully this section comes across as a "public repo" of sorts for cool wallpapers and stuff, and not me trying to claim all these as my own works (obviously except for the ones I actually did make myself).',
    disclaimer:
        "Anything that is marked I DO NOT take credit for. I have NOT photographed, painted or rendered anything here unless specified. I am just trying to share things I've messed with or that I personally use for others to enjoy.",
};

export const about_n = `<span class='name-highlight'>${name}</span>`;
export const about_p = `self-taught* ${hl("programmer")}, ${hl("designer")} and <a class="p-link" rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/bauera5/">r/neography</a> hobbyist from ${hl(" Dallas, TX")}.`;
export const about_email = `<a class="p-link" rel="noopener noreferrer" target="_blank" href="mailto:bays@956mb.com">bays@956mb.com</a>`;

export const bio_p = `my self-taught skills journey started around 2010, initially focusing on graphic design and learning ${hl("Photoshop")}, doing mostly minor freelance work. in ${hl("2018")}, a computer engineer friend introduced me to programming, and it quickly became my passion. when i'm not working on the long list of projects, i'm slowly learning languages like ${hl("한국어")} or ${hl("Finnish")}, and i'm thinking up / drawing new "languages" on ${hl("Reddit")}.`;

export const languages_p = `i love ${hl("Swift")} (and ${hl("SwiftUI")}) for Apple app experiments like ${a("https://github.com/956MB/2048WE", "2048WE")} and ${a("https://github.com/956MB/TDB", "TDB")}, and i've leaned heavily on ${hl("JavaScript")} / ${hl("TypeScript")} for desktop apps and web projects like ${a("https://github.com/956MB/reddit-download-button", "Reddit Download Buttons")}, plus ${hl("React")} for this site. ${hl("Lua")} shows up in my ${a("https://github.com/956MB/ncks.nvim", "Neovim")} plugins, while ${hl("C/C++")} is for ${hl("Flipper Zero")} / ${a("https://github.com/Next-Flip/Momentum-Firmware", "Momentum Firmware")} work. ${hl("Python")} is still my main language for coding problems (${a("https://github.com/956MB/AoC", "AoC")}, ${a("https://github.com/956MB/Kata", "Kata")}), and of course wrapping my head around ${hl("Rust")} remains a struggle.`;

export const tools_p = `most${hl("*")} frontend / design project starts in & ${hl("Figma")}, ${hl("Photoshop")} or ${hl("Illustrator")} (recently with the ${a("https://momentum-fw.dev", "momentum-fw.dev")} redesign), and code lands in either ${hl("Neovim")} (${hl("ghostty")}), ${hl("VSCode")} or ${hl("Xcode")} depending on the project. i also get way too distracted with my ${a("https://github.com/956MB/dotfiles", "dotfiles")}.`;

export const neography_t = "scripts & conlangs (eventually)";

export const neography_d = `i love language, and i'm a visual person so i especially love scripts. not just real-world, but fictional as well (Lord of The Rings, Star Wars, Dune, etc). a really inspiring figure to me is <a class="p-link" rel="noopener noreferrer" target="_blank" href="https://dedalvs.com/">David J. Peterson</a>, creator of the languages for Game of Thrones, and many other things. these are most of the scripts i've created so far, some even posted on the <a class="p-link" rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/r/neography/">r/neography</a> subreddit, and maybe one day it'll be as impressive a collection as David's.`;
