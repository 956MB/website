import { entry, group, IEntryGroups, item } from "./interfaces";

const li = (href: string, text: string) =>
    `<a class="p-link large-highlight" rel="noopener noreferrer" target="_blank" href="${href}">${text}</a>`;
const hl = (text: string) => `<span class='highlight'>${text}</span>`;

// NOTE: Flipper

const flipper = [
    entry("p-956/prs", "MNTM for 956 (956/prs)", "2026", "Projects", [], {
        link: "https://github.com/Next-Flip/Momentum-Firmware/pull/503",
        lang: "C",
        summary: [
            `consolidated branch of ${li("https://github.com/Next-Flip/Momentum-Firmware", "Momentum Firmware")} with my *currently* unmerged PRs (UI fixes/adds).`,
        ],
    }),
    entry(
        "p-momentum-website-redesign",
        "momentum-fw.dev",
        "2025",
        "Projects",
        [],
        {
            link: "https://momentum-fw.dev",
            lang: "Vue",
            summary: [
                `redesign of the ${li("https://github.com/Next-Flip/v2.momentum-fw.dev", "Momentum Firmware website")} using ${li("https://vitepress.dev/", "Vitepress")} and ${li("https://vuejs.org/", "Vue")}.`,
            ],
        },
    ),
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
                `contributions to ${li("https://github.com/Next-Flip/Momentum-Firmware", "Momentum Firmware")}, for the ${li("https://flipper.net", "Flipper Zero")}. as well as other small fixes: ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/339", "#339")}, ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/341", "#341")}. thanks ${li("https://github.com/WillyJL", "WillyJL")}.`,
            ],
            children: [
                entry(
                    "p-feat-input-vibro-trigger",
                    "feat/input-vibro-trigger",
                    "fork/+",
                    "Projects",
                    [],
                    {
                        link: "https://github.com/Next-Flip/Momentum-Firmware/pull/429",
                        lang: "C",
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/429", "#429")} adds setting to pick the vibration trigger for button clicks (${li("https://github.com/Next-Flip/Momentum-Firmware/issues/428", "#428")}). press, release or both (original).`,
                        ],
                    },
                ),
                entry(
                    "p-feat-popup-overlay",
                    "feat/popup-overlay",
                    "fork/+",
                    "Projects",
                    [],
                    {
                        link: "https://github.com/Next-Flip/Momentum-Firmware/pull/380",
                        lang: "C",
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/380", "#380")} adds a checkerboard overlay behind the lockmenu and other various popup elements.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/385", "#385")} fixes the misaligned speech bubble text (lockscreen/desktop) when using a custom font from an asset pack.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/340", "#354")} adds more info and optional toggles to ps4/vertical/mntm menu styles.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/344", "#344")} checks asset packs for fonts/icons and adds "size warning" screen.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/341", "#341")} added new ${hl("midnight format")} option to show users preferred format of ${hl("12:xx")} or ${hl("00:xx")} for 12am-1am on all clocks.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/331", "#331")} allows selection of file/directories in desktop keybinds and the main menu.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/327", "#327")} implemented multiple file selection in archive app.`,
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
                        summary: [
                            `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/322", "#322")} interface option to show dynamic paths in the archive app (file browser).`,
                        ],
                    },
                ),
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
                `tiny changes to the ${li("https://github.com/Next-Flip/Momentum-Apps", "Momentum-Apps")} repo. mostly fixes. ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/39", "#39")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/41", "#41")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/42", "#42")}`,
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
                `changes to the flipper zero app ${li("https://github.com/xtruan/flipper-chess", "xtruan/flipper-chess")} "chess". adding an optional eval bar for game evaluation, and fixing the ${li("https://github.com/xtruan/flipper-chess/issues/3", "illegal move issue")}.`,
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
            `a "manual rewrite" of the ${hl("alias")} command in the shell (${hl("bash")}/${hl("zsh")}/${hl("fish")}), and my first zig program. uses color and descriptions for a better look, as well as adding a search function.`,
        ],
    }),
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
                `the browser extension that i've always wanted for ${hl("Reddit")}... adds buttons to more easily hoard images/videos. v1.3.4 of the extension is also on ${li("https://greasyfork.org/en/scripts/501718-reddit-download-buttons", "Greasy Fork")}.`,
            ],
        },
    ),
    entry(
        "wow-thats-interesting",
        "Wow, that's interesting.",
        "2024",
        "Projects",
        [],
        {
            link: "https://github.com/956MB/banner",
            lang: "Python",
            summary: [`Wow, that's interesting.`],
        },
    ),
    entry("p-vscode-yazi", "vscode.yazi", "2024", "Projects", [], {
        link: "https://github.com/956MB/vscode.yazi",
        summary: [
            `${li("https://github.com/yazi-rs/yazi", "Yazi")} flavors inspired by the default themes (dark/light) in visual studio code, and ${li("https://github.com/Mofiqul/vscode.nvim", "Mofiqul/vscode.nvim")}.`,
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
                `like ${li("https://mactracker.net", "MacTracker")}, but for ${li("https://www.tesla.com/models", "Tesla")}. full spec sheets and detailed info about every vehicle, solar product, and piece of software tesla has released in the last 15 years. ${hl('"a tesla version of this would be awesome"')}, we said.`,
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
                `a desktop client for spectating professional ${hl("League of Legends")} players.`,
                "this app is the result of my previous design concept for an op.gg 'spectate pro matches' feature, which would be a helpful tool around worlds.",
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
                `full functionality of the ios app ${hl("2048")}, right on your apple watch. high scores saved on device, end of game stats, and current game progress is never lost between app resets and watch being turned off. my first attempt making a standalone watchos app with the new method. `,
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
                `fully featured app for viewing all accumulated dashcam / sentry mode clips off your ${hl("Tesla")}. the idea came from a computer engineer friend who owns a ${hl("model 3")}. also the fact that i wanted to start proper ${hl("Qt")} project. the ${li("https://www.956mb.com/designs/#ui_tx4", "Figma concept here")} looks way better than the thrown togethre look of this thing...`,
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
                `this idea came directly from myself using the windows app ${hl("'Sticky Notes'")}, and wanting the same thing on mac. notes are easily identified with their unique colors, and windows maintain their position and size on the desktop before and after application restarts.`,
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
                `my first and so far only attempt at creating a game in ${hl("Unity Engine")}. for this to be a proper 'aim game', it needed a few primary features if nothing else, which i believe i implemented fairly well.`,
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
                `translating messages in ${hl("Twitch")} chat in real-time. leverages ${hl("Twitch API")} and the ${hl("IRC")} protocol used for chats, and uses multiple other apis (${hl("Google")}, ${hl("Microsoft")}, ${hl("NLP")}). finnish -> english, or vice versa.`,
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
                `more light/dark themes for the ${hl("Github Desktop")} client. it just didn't have enough cool options. (probably needs upadte!)`,
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
                `${li("https://github.com/956MB/go.py", "Go")}, ${li("https://github.com/956MB/chess.py", "Chess")}, ${li("https://github.com/956MB/checkers.py", "Checkers")}, and ${li("https://github.com/956MB/connect-four.py", "Connect Four")}. basically the "quick/dirty" approach to terminal games. very messy... not at all impressive... not done.`,
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
            `tiny utility plugin to append discord nickname ideas to a file without leaving neovim. my first ${li("https://neovim.io", "Neovim")} plugin. wip`,
        ],
    }),
    entry("p-head-nvim", "head.nvim", "2024", "Projects", [], {
        link: "https://github.com/956MB/head.nvim",
        lang: "Lua",
        summary: [
            "neovim plugin for adding and automatically updating file headers. wip",
        ],
    }),
    entry("p-quicker-nvim", "quicker.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#quickernvim-link-tba",
        lang: "Lua",
        summary: [
            `adds cursor line number highlight (${hl("CursorLineNr")}) to the ${hl("quicker.nvim")} quickfix list. follows the cursor movement and updates like normal line numbers.`,
        ],
    }),
    entry("p-lazy-nvim", "lazy.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#lazynvim",
        lang: "Lua",
        summary: [
            "adds a url to the end of each plugin entry line in the lazy.nvim home/summary page, making displaying the entire page or finding a plugin's url easier.",
        ],
    }),
    entry("p-oil-nvim", "oil.nvim", "fork/+", "Projects", [], {
        link: "https://github.com/956MB/neostuff#oilnvim-link-tba",
        lang: "Lua",
        summary: [
            `adds the ${hl("netrw")} directory listing ui to the oil.nvim file explorer. i like the way it looks, it fills out the top of the oil buffer a bit more. the "sort sequence" line is currently nonsense... i haven't figured out how to make use of this yet, but it's still nice having it there anyway :)`,
        ],
    }),
];

// NOTE: Personal

const personal = [
    entry("p-dotfiles", "dotfiles", "2025", "Projects", [], {
        link: "https://github.com/956MB/dotfiles",
        lang: "Lua",
        summary: [
            `the... files. (${li("https://github.com/956MB/dotfiles/tree/main/ghostty", "ghostty")}, ${li("https://github.com/956MB/dotfiles/tree/main/nvim", "nvim")}, ${li("https://github.com/956MB/dotfiles/tree/main/fish", "fish")}, ${li("https://github.com/956MB/dotfiles/tree/main/yabai", "yabai")}, ${li("https://github.com/956MB/dotfiles/tree/main/lazygit", "lazygit")}...)`,
        ],
    }),
    entry("p-boosts", "boosts", "2024", "Projects", [], {
        link: "https://github.com/956MB/boosts",
        lang: "CSS",
        summary: [
            `some ${li("https://arc.net", "Arc")} boosts for my own tastes (${hl("Github")}, ${hl("Claude")}, ${hl("Hugging Face")}, ${hl("F1TV")}, ...)`,
        ],
    }),
    entry("p-banner", "banner", "2024", "Projects", [], {
        link: "https://github.com/956MB/banner",
        lang: "Python",
        summary: [
            "wow, that's interesting. rendering of my ascii banner in github's markdown code block.",
        ],
    }),
    entry("p-wallpapers", "wallpapers", "2024", "Projects", [], {
        link: "https://github.com/956MB/wallpapers",
        lang: "none",
        summary: [
            "collection of wallpapers made or modified by me. or just stuff i think is cool. wip.",
        ],
    }),
    entry("p-website", "website", "2025", "Projects", [], {
        link: "https://github.com/956MB/website",
        lang: "TypeScript",
        summary: [
            `this website. my portfolio. made with ${hl("React")}/${hl("Next.js")}/${hl("Tailwind")}.`,
        ],
    }),
    entry("p-kata", "Kata", "2020+", "Projects", [], {
        link: "https://github.com/956MB/Kata",
        lang: "Python",
        summary: [
            `most of my ${li("https://www.codewars.com/users/956MB", "Codewars")} katas. majority in ${hl("Python")}. gotta do more in ${hl("Go")} / ${hl("Rust")} / ${hl("Zig")} (eventually).`,
        ],
    }),
    entry("p-aoc", "AoC", "2018+", "Projects", [], {
        link: "https://github.com/956MB/AoC",
        lang: "Python",
        summary: [
            `all of my ${li("https://adventofcode.com", "Advent of Code")} solutions. (${li("https://github.com/956MB/AoC/tree/master/18", "18")}, ${li("https://github.com/956MB/AoC/tree/master/20", "20")}, ${li("https://github.com/956MB/AoC/tree/master/21", "21")}, ${li("https://github.com/956MB/AoC/tree/master/22", "22")}, ${li("https://github.com/956MB/AoC/tree/master/24", "24")}, ${li("https://github.com/956MB/AoC/tree/master/25", "25")})`,
        ],
    }),
];

// NOTE: groups

export const projects_section = group(
    "Projects",
    "projects",
    "My programming projects, contributions to open source, and personal dotfiles.",
    [],
    {
        keywords: [
            "projects",
            "programming",
            "code",
            "development",
            "software",
            "javascript",
            "typescript",
            "react",
            "next.js",
            "tailwind",
            "html",
            "css",
            "python",
            "go",
            "rust",
            "zig",
            "lua",
            "neovim",
            "vim",
            "fish",
            "shell",
            "bash",
        ],
    },
);

export const projectGroups: IEntryGroups = [
    group("flipper", "Projects", "flipper zero firmware and apps", flipper),
    group("misc", "Projects", "code projects and contributions", misc),
    group(
        "neostuff",
        "Projects",
        "my neovim plugins and changes to others",
        neostuff,
        {
            titleLink: "https://github.com/956MB/neostuff",
        },
    ),
    group("personal", "Projects", 'the "workspace"', personal),
];

export const defaultExpandedIds = [
    "p-momentum-firmware",
    "p-flipper-chess",
    "p-reddit-download-buttons",
    "p-2048",
    "p-vscode-yazi",
    "p-aliaz",
];
