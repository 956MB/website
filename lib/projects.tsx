import { entry, group, IEntryGroups, item } from "./interfaces";

const li = (href: string, text: string) =>
    `<a class="p-link large-highlight" rel="noopener noreferrer" target="_blank" href="${href}">${text}</a>`;

// NOTE: Flipper

const flipper = [
    entry(
        "p-momentum-firmware",
        "Next-Flip/Momentum-Firmware",
        "2025",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pulls?q=is%3Apr+author%3A956MB+",
            lang: "C",
            summary: [
                `My contributions to ${li("https://github.com/Next-Flip/Momentum-Firmware", "Momentum-Firmware")}, for the ${li("https://flipper.net", "Flipper Zero")}. As well as other small fixes: ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/339", "#339")}, ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/341", "#341")}. Thanks ${li("https://github.com/Willy-JL", "@Willy-JL")}.`,
            ],
        },
    ),
    entry(
        "p-feat-popup-verlay",
        "feat/popup-verlay",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/380",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/380", "#380")} Adds a checkerboard overlay behind the lockmenu and other various popup elements.`,
            ],
        },
    ),
    entry(
        "p-fix-custom-font-bubble-ascent",
        "fix/custom-font-bubble-ascent",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/385",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/385", "#385")} Fixes the misaligned speech bubble text (lockscreen/desktop) when using a custom font from an asset pack.`,
            ],
        },
    ),
    entry(
        "p-feat-menu-more-info",
        "feat/menu-more-info",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/354",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/340", "#354")} Adds more info and optional toggles to PS4/Vertical/MNTM menu styles.`,
            ],
        },
    ),
    entry(
        "p-feat-asset-packs-ram-warning",
        "feat/asset-packs-ram-warning",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/344",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/344", "#344")} Checks asset packs for Fonts/Icons and adds "Size Warning" screen.`,
            ],
        },
    ),
    entry(
        "p-feat-clock-midnight-format",
        "feat/clock-midnight-format",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/341",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/341", "#341")} Added new <span class='highlight'>Midnight Format</span> option to show users preferred format of <span class='highlight'>12:XX</span> or <span class='highlight'>00:XX</span> for 12AM-1AM on all clocks.`,
            ],
        },
    ),
    entry(
        "p-feat-directory-keybind-support",
        "feat/directory-keybind-support",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/331",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/331", "#331")} Allows selection of file/directories in desktop keybinds and the main menu.`,
            ],
        },
    ),
    entry(
        "p-feat-archive-select-multiple",
        "feat/archive-select-multiple",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/327",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/327", "#327")} Implemented multiple file selection in Archive app.`,
            ],
        },
    ),
    entry(
        "p-feat-archive-dynamic-tabs",
        "feat/archive-dynamic-tabs",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Firmware/pull/322",
            lang: "C",
            nested: true,
            summary: [
                `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/322", "#322")} Interface option to show dynamic paths in the Archive app (file browser).`,
            ],
        },
    ),
    entry(
        "p-momentum-apps",
        "Next-Flip/Momentum-Apps",
        "2025",
        "Projects",
        [],
        {
            link: "https://github.com/Next-Flip/Momentum-Apps/pulls?q=is%3Apr+author%3A956MB+",
            lang: "C",
            summary: [
                `My tiny changes to the ${li("https://github.com/Next-Flip/Momentum-Apps", "Momentum-Apps")} repo. Mostly fixes. ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/39", "#39")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/41", "#41")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/42", "#42")}`,
            ],
        },
    ),
    entry(
        "p-flipper-chess",
        "xtruan/flipper-chess (fix)",
        "fork/+",
        "Projects",
        [],
        {
            link: "https://github.com/956MB/flipper-chess",
            lang: "C++",
            summary: [
                `My changes to the Flipper Zero app ${li("https://github.com/xtruan/flipper-chess", "xtruan/flipper-chess")} "Chess". Adding an optional eval bar for game evaluation, and fixing the ${li("https://github.com/xtruan/flipper-chess/issues/3", "illegal move issue")}.`,
            ],
        },
    ),
];

// NOTE: Misc

const misc = [
    entry("p-aliaz", "aliaz", "2025", "Projects", [], {
        link: "https://github.com/956MB/aliaz",
        lang: "Zig",
        summary: [
            `A "manual rewrite" of the <span class='highlight'>alias</span> command in the shell (<span class='highlight'>bash</span>/<span class='highlight'>zsh</span>/<span class='highlight'>fish</span>), and my first zig program. Uses color and descriptions for a better look, as well as adding a search function.`,
        ],
    }),
    entry(
        "p-change-server-icon",
        "ChangeServerIcon (WIP)",
        "2025",
        "Projects",
        [],
        {
            link: "https://github.com/956MB/Vencord/tree/plugin/change-server-icon",
            lang: "TypeScript",
            summary: [
                `My first plugin for ${li("https://vencord.dev", "Vencord")}, a Discord client mod. Adds option to change server icons with custom images.`,
            ],
        },
    ),
    entry(
        "p-reddit-download-buttons",
        "Reddit Download Buttons",
        "2024",
        "Projects",
        [],
        {
            link: "https://github.com/956MB/reddit-download-button",
            lang: "JavaScript",
            summary: [
                `The browser extension that I've always wanted for <span class='highlight'>Reddit</span>... Adds buttons to more easily hoard images/videos. v1.3.4 of the extension is also on ${li("https://greasyfork.org/en/scripts/501718-reddit-download-buttons", "Greasy Fork")}.`,
            ],
        },
    ),
    entry("p-vscode-yazi", "vscode.yazi", "2024", "Projects", [], {
        link: "https://github.com/956MB/vscode.yazi",
        summary: [
            `${li("https://github.com/yazi-rs/yazi", "Yazi")} flavors inspired by the default themes (dark/light) in Visual Studio Code, and ${li("https://github.com/Mofiqul/vscode.nvim", "Mofiqul/vscode.nvim")}.`,
        ],
    }),
    entry("p-tis-term", "TIS-TERM (WIP)", "2024", "Projects", [], {
        lang: "Rust",
        summary: [
            `${li("https://www.zachtronics.com/tis-100/", "TIS-100")} Clone in the Terminal, written in Rust. WIP.`,
        ],
    }),
    entry(
        "p-tdb",
        "TDB",
        "2023",
        "Projects",
        [item("/images/projects/tdb.png", 1163, 764)],
        {
            lang: "Swift",
            summary: [
                `Like ${li("https://mactracker.net", "MacTracker")}, but for ${li("https://www.tesla.com/models", "Tesla")}. Full spec sheets and detailed info about every vehicle, solar product, and piece of software Tesla has released in the last 15 years. <span class='highlight'>"A Tesla version of this would be awesome"</span>, we said.`,
            ],
            tags: ["iOS", "macOS", "Swift", "SwiftUI"],
        },
    ),
    entry(
        "p-pros",
        '"Pros"',
        "2023",
        "Projects",
        [item("/images/projects/pros.png", 893, 791)],
        {
            lang: "TypeScript",
            summary: [
                "A desktop client for spectating professional <span class='highlight'>League of Legends</span> players.",
                "This app is the result of my previous design concept for an OP.GG 'Spectate Pro Matches' feature, which would be a helpful tool around Worlds.",
            ],
            tags: ["Windows", "Tauri", "TypeScript", "React"],
        },
    ),
    entry(
        "p-2048",
        "2048WE",
        "2022",
        "Projects",
        [item("/images/projects/2048W.png", 1080, 874)],
        {
            link: "https://github.com/956MB/2048WE",
            lang: "Swift",
            summary: [
                "Full functionality of the iOS app <span class='highlight'>2048</span>, right on your Apple Watch. High scores saved on device, end of game stats, and current game progress is never lost between app resets and Watch being turned off. My first attempt making a standalone WatchOS app with the new method. ",
            ],
            tags: ["WatchOS", "Swift", "SwiftUI"],
        },
    ),
    entry(
        "p-tx4",
        "TX4",
        "2022",
        "Projects",
        [item("/images/projects/TX4.png", 1038, 891)],
        {
            link: "https://github.com/956MB/TX4",
            lang: "C++",
            summary: [
                `Fully featured app for viewing all accumulated dashcam / Sentry mode clips off your <span class='highlight'>Tesla</span>. The idea came from a computer engineer friend who owns a <span class='highlight'>Model 3</span>. Also the fact that I wanted to start proper <span class='highlight'>Qt</span> project. The ${li("https://www.956mb.com/designs/#ui_tx4", "Figma concept here")} looks WAY better than the thrown togethre look of this thing...`,
            ],
            tags: ["Windows", "C++", "Qt"],
        },
    ),
    entry(
        "p-mssnc",
        "MSSNC",
        "2021",
        "Projects",
        [item("/images/projects/mssnc.gif", 1532, 982)],
        {
            link: "https://github.com/956MB/MSSNC",
            lang: "Swift",
            summary: [
                "This idea came directly from myself using the Windows app <span class='highlight'>'Sticky Notes'</span>, and wanting the same thing on Mac. Notes are easily identified with their unique colors, and windows maintain their position and size on the desktop before and after application restarts.",
            ],
            tags: ["macOS", "Swift", "SwiftUI"],
        },
    ),
    entry(
        "some-aim-game",
        '"SomeAimGame"',
        "2021",
        "Projects",
        [item("/images/projects/sag.gif", 1408, 973)],
        {
            link: "https://github.com/956MB/SomeAimGame",
            lang: "C#",
            summary: [
                "My first and so far only attempt at creating a game in <span class='highlight'>Unity Engine</span>. For this to be a proper 'aim game', it needed a few primary features if nothing else, which I believe I implemented fairly well.",
            ],
            tags: ["Windows", "C#", "Unity"],
        },
    ),
    entry(
        "p-twanslate",
        "Twanslate",
        "2020",
        "Projects",
        [item("/images/projects/Twanslate.png", 1147, 886)],
        {
            link: "https://github.com/956MB/Twanslate",
            lang: "Swift",
            summary: [
                "Translating messages in <span class='highlight'>Twitch</span> chat in real-time. Leverages <span class='highlight'>Twitch API</span> and the <span class='highlight'>IRC</span> protocol used for chats, and uses multiple other APIs (<span class='highlight'>Google</span>, <span class='highlight'>Microsoft</span>, <span class='highlight'>NLP</span>). Finnish -> English, or vice versa.",
            ],
            tags: ["macOS", "Swift", "SwiftUI"],
        },
    ),
    entry(
        "p-github_desktop_css",
        "GithubDesktop.css",
        "2020",
        "Projects",
        [item("/images/projects/GithubDesktopCSS.gif", 1374, 828)],
        {
            link: "https://github.com/956MB/GithubDesktop.css",
            lang: "CSS",
            summary: [
                "More light/dark themes for the <span class='highlight'>Github Desktop</span> client. It just didn't have enough cool options. (Probably needs upadte!)",
            ],
            tags: ["CSS", "Shell"],
        },
    ),
    entry(
        "p-board_games_py",
        "board-games.py",
        "2020",
        "Projects",
        [item("/images/projects/bgames.gif", 820, 544)],
        {
            link: "https://github.com/956MB/board-games.py",
            lang: "Python",
            summary: [
                `${li("https://github.com/956MB/go.py", "Go")}, ${li("https://github.com/956MB/chess.py", "Chess")}, ${li("https://github.com/956MB/checkers.py", "Checkers")}, and ${li("https://github.com/956MB/connect-four.py", "Connect Four")}. Basically the "quick/dirty" approach to terminal games. Very messy... not at all impressive... NOT done.`,
            ],
            tags: ["Python"],
        },
    ),
];

// NOTE: Neostuff

const neostuff = [
    entry("p-ncks-nvim", "ncks.nvim", "2024", "Projects", [], {
        link: "https://github.com/956MB/ncks.nvim",
        lang: "Lua",
        summary: [
            `Tiny utility plugin to append Discord nickname ideas to a file without leaving Neovim. My first ${li("https://neovim.io", "Neovim")} plugin. WIP`,
        ],
    }),
    entry("p-head-nvim", "head.nvim", "2024", "Projects", [], {
        link: "https://github.com/956MB/head.nvim",
        lang: "Lua",
        summary: [
            "Neovim plugin for adding and automatically updating file headers. WIP",
        ],
    }),
    entry("p-quicker-nvim", "quicker.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#quickernvim-link-tba",
        lang: "Lua",
        summary: [
            "Adds cursor line number highlight (<span class='highlight'>CursorLineNr</span>) to the quicker.nvim quickfix list. Follows the cursor movement and updates like normal line numbers.",
        ],
    }),
    entry("p-lazy-nvim", "lazy.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#lazynvim",
        lang: "Lua",
        summary: [
            "Adds a URL to the end of each plugin entry line in the lazy.nvim Home/Summary page, making displaying the entire page or finding a plugin's URL easier.",
        ],
    }),
    entry("p-oil-nvim", "oil.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#oilnvim-link-tba",
        lang: "Lua",
        summary: [
            "Adds the <span class='highlight'>netrw</span> directory listing UI to the oil.nvim file explorer. I like the way it looks, it fills out the top of the oil buffer a bit more. The \"Sort sequence\" line is currently nonsense... I haven't figured out how to make use of this yet, but it's still nice having it there anyway :)",
        ],
    }),
];

// NOTE: Personal

const personal = [
    entry("p-dotfiles", "dotfiles", "2024", "Projects", [], {
        link: "https://github.com/956MB/dotfiles",
        lang: "Lua",
        summary: [
            `The... files. (${li("https://github.com/956MB/dotfiles/tree/main/ghostty", "ghostty")}, ${li("https://github.com/956MB/dotfiles/tree/main/nvim", "nvim")}, ${li("https://github.com/956MB/dotfiles/tree/main/fish", "fish")}, ${li("https://github.com/956MB/dotfiles/tree/main/yabai", "yabai")}, ${li("https://github.com/956MB/dotfiles/tree/main/lazygit", "lazygit")}...)`,
        ],
    }),
    entry("p-boosts", "boosts", "2024", "Projects", [], {
        link: "https://github.com/956MB/boosts",
        lang: "CSS",
        summary: [
            `Some ${li("https://arc.net", "Arc")} boosts for my own tastes (<span class='highlight'>Github</span>, <span class='highlight'>Claude</span>, <span class='highlight'>Hugging Face</span>, <span class='highlight'>F1TV</span>, ...)`,
        ],
    }),
    entry("p-banner", "banner", "2024", "Projects", [], {
        link: "https://github.com/956MB/banner",
        lang: "Python",
        summary: [
            "Wow, that's interesting. Rendering of my ASCII banner in Github's markdown code block.",
        ],
    }),
    entry("p-wallpapers", "wallpapers", "2024", "Projects", [], {
        link: "https://github.com/956MB/wallpapers",
        lang: "none",
        summary: [
            "Collection of wallpapers made or modified by me. Or just stuff I think is cool. WIP.",
        ],
    }),
    entry("p-website", "website", "2023", "Projects", [], {
        link: "https://github.com/956MB/website",
        lang: "JavaScript",
        summary: [
            "This website. My portfolio. Made with <span class='highlight'>React</span>/<span class='highlight'>Next.js</span>/<span class='highlight'>Tailwind</span>.",
        ],
    }),
    entry("p-kata", "Kata", "2020", "Projects", [], {
        link: "https://github.com/956MB/Kata",
        lang: "Python",
        summary: [
            `Most of my ${li("https://www.codewars.com/users/956MB", "Codewars")} katas. Majority in <span class='highlight'>Python</span>. Gotta do more in <span class='highlight'>Go</span> / <span class='highlight'>Rust</span> / <span class='highlight'>Zig</span> (eventually).`,
        ],
    }),
    entry("p-aoc", "AoC", "2018", "Projects", [], {
        link: "https://github.com/956MB/AoC",
        lang: "Python",
        summary: [
            `All of my ${li("https://adventofcode.com", "Advent of Code")} solutions. (${li("https://github.com/956MB/AoC/tree/master/18", "18")}, ${li("https://github.com/956MB/AoC/tree/master/20", "20")}, ${li("https://github.com/956MB/AoC/tree/master/21", "21")}, ${li("https://github.com/956MB/AoC/tree/master/22", "22")})`,
        ],
    }),
];

export const projectGroups: IEntryGroups = [
    group("Flipper", "Projects", "Flipper Zero firmware and apps", flipper),
    group("Misc", "Projects", "Code projects and contributions", misc),
    group(
        "Neostuff",
        "Projects",
        "My Neovim plugins and changes to others",
        neostuff,
        {
            titleLink: "https://github.com/956MB/neostuff",
        },
    ),
    group("Personal", "Projects", 'The "workspace"', personal),
];

export const defaultExpandedIds = [
    "p-momentum-firmware",
    "p-flipper-chess",
    "p-reddit-download-buttons",
    "p-2048",
    "p-vscode-yazi",
    "p-aliaz",
];
