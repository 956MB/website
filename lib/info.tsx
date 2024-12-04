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
        serv: "bluesky",
        name: "${highlight('@956mb.com')}",
        url: "https://bsky.app/profile/956mb.com",
    },
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
];

export const extras_explained = {
    title: "Why this page?",
    description:
        'I love screen grabbing from things like movies/TV/games, and then using Photoshop or Topaz Photo AI to make them into wallpapers. I also feel a great urge to share them with others since I think they\'re so cool, and most things arent natively in 6K (yet). Hopefully this section comes across as a "public repo" of sorts for cool wallpapers and stuff, and not me trying to claim all these as my own works (obviously except for the ones I actually did make myself).',
    disclaimer:
        "Anything that is marked I DO NOT take credit for. I have NOT photographed, painted or rendered anything here unless specified. I am just trying to share things I've messed with or that I personally use for others to enjoy.",
};

const hl = function (text) {
    return `<span class='large-highlight'>${text}</span>`;
};

export const about_p = `<span class='name-highlight'>${name}</span>, self-taught ${hl("programmer")}, ${hl("designer")} and <a class="p-link large-highlight" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/user/bauera5/\">r/neography</a> hobbyist from ${hl(" Dallas, TX ")}`;
export const about_email = `[ <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"mailto:bays@956mb.com\">${hl("bays@956mb.com")}</a> ] <<<`;

export const bio_p = `My self-taught skills journey started around 2010, initially focusing on graphic design and mastering ${hl("Photoshop")}, doing mostly sub-par freelance work as a teenager. In 2018, a computer engineer friend introduced me to programming, and it quickly became my passion. I've created applications for both ${hl("Windows")} / ${hl("macOS")} and ${hl("iPhone")} / ${hl("Apple Watch")}. When I'm not working on code projects or new designs, I'm slowly learning languages like ${hl("한국어")} or ${hl("Finnish")}, and I'm thinking up and drawing new fictional language scripts on ${hl("r/neography")}.`;

export const languages_p = `In addition to loving ${hl("Swift")} (and ${hl("SwiftUI")}) for Apple products, I've worked a lot with both ${hl("JavaScript")} / ${hl("TypeScript")} to make desktop apps and websites in & ${hl("React")} (this website), and I'm most recently exploring languages like ${hl("Go")} and ${hl("Lua")} for things like ${hl("Neovim")} development. Outside of these languages, learning and working with ${hl("Rust")} in more and more complicated projects remains a long term goal of mine.`;

export const tools_p = `Every frontend or general design project starts in & ${hl("Figma")}, ${hl("Photoshop")} or ${hl("Illustrator")}, and all code is written with ${hl("Neovim")}, ${hl("VSCode")} or ${hl("Xcode")} (depending on my interest at the moment or which is best for the job).`;

export const neography_t = "Scripts & Conlangs (eventually)";

export const neography_d = `I love language, and I'm a visual person so I especially love scripts. Not just real-world, but fictional as well (Lord of The Rings, Star Wars, Dune, etc). A really inspiriing figure to me is <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://dedalvs.com/\">David J. Peterson</a>, creator of the languages for Game of Thrones, and MANY other things. These are most of the language scripts (and eventually conlangs) I've created for the <a class="p-link" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.reddit.com/r/neography/\">r/neography</a> subreddit, and maybe one day it'll be as impressive a collection as David's.`;
