import { IEntry, IEntryGroup, IEntryGroups } from "./interfaces";

const li = (href: string, text: string) => 
    `<a class="p-link large-highlight" rel="noopener noreferrer" target="_blank" href="${href}">${text}</a>`;

const p_momentum_firmware: IEntry = {
    id: "p-momentum-firmware",
    title: "Next-Flip/Momentum-Firmware",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pulls?q=is%3Apr+author%3A956MB+",
    lang: "C",
    date: "2025",
    summary: [
        `My contributions to ${li("https://github.com/Next-Flip/Momentum-Firmware", "Momentum-Firmware")}, for the ${li("https://flipper.net", "Flipper Zero")}. As well as other small fixes: ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/339", "#339")}, ${li("https://github.com/Next-Flip/Momentum-Firmware/pulls/341", "#341")}. Thanks ${li("https://github.com/Willy-JL", "@Willy-JL")}.`,
    ],
};

const p_feat_menu_more_info: IEntry = {
    id: "p-feat-menu-more-info",
    title: "feat/menu-more-info",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/354",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/340", "#354")} (Open). Adds more info and optional toggles to PS4/Vertical/MNTM menu styles.` ,
    ],
};

const p_feat_asset_packs_ram_warning: IEntry = {
    id: "p-feat-asset-packs-ram-warning",
    title: "feat/asset-packs-ram-warning",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/344",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/344", "#344")} (Open). Checks asset packs for Fonts/Icons and adds "Size Warning" screen.` ,
    ],
};

const p_feat_clock_midnight_format: IEntry = {
    id: "p-feat-clock-midnight-format",
    title: "feat/clock-midnight-format",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/341",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/341", "#341")} (Open). Added new <span class='highlight'>Midnight Format</span> option to show users preferred format of <span class='highlight'>12:XX</span> or <span class='highlight'>00:XX</span> for 12AM-1AM on all clocks.`,
    ],
};

const p_feat_directory_keybind_support: IEntry = {
    
    id: "p-feat-directory-keybind-support",
    title: "feat/directory-keybind-support",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/331",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/331", "#331")} (Open). Allows selection of file/directories in desktop keybinds and the main menu.`,
    ],
};

const p_feat_archive_select_multiple: IEntry = {
    id: "p-feat-archive-select-multiple",
    title: "feat/archive-select-multiple",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/327",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/issues/327", "#327")} (Open). Implemented multiple file selection in Archive app.`,
    ],
};

const p_feat_archive_dynamic_tabs: IEntry = {
    id: "p-feat-archive-dynamic-tabs",
    title: "feat/archive-dynamic-tabs",
    link: "https://github.com/Next-Flip/Momentum-Firmware/pull/322",
    lang: "C",
    date: "fork/+",
    nested: true,
    summary: [
        `${li("https://github.com/Next-Flip/Momentum-Firmware/pull/322", "#322")} (Open). Interface option to show dynamic paths in the Archive app (file browser).`,
    ],
};

const p_momentum_apps: IEntry = {
    id: "p-momentum-apps",
    title: "Next-Flip/Momentum-Apps",
    link: "https://github.com/Next-Flip/Momentum-Apps/pulls?q=is%3Apr+author%3A956MB+",
    lang: "C",
    date: "2025",
    summary: [
        `My tiny changes to the ${li("https://github.com/Next-Flip/Momentum-Apps", "Momentum-Apps")} repo. Mostly fixes. ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/39", "#39")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/41", "#41")}, ${li("https://github.com/Next-Flip/Momentum-Apps/pulls/42", "#42")}`,
    ],
};

const p_flipper_chess: IEntry = {
    id: "p-flipper-chess",
    title: "xtruan/flipper-chess (fix)",
    link: "https://github.com/956MB/flipper-chess",
    lang: "C++",
    date: "fork/+",
    summary: [
        `My changes to the Flipper Zero app ${li("https://github.com/xtruan/flipper-chess", "xtruan/flipper-chess")} "Chess". Adding an optional eval bar for game evaluation, and fixing the ${li("https://github.com/xtruan/flipper-chess/issues/3", "illegal move issue")}.`,
    ],
};

const p_reddit_download_buttons: IEntry = {
    id: "p-reddit-download-buttons",
    title: "Reddit Download Buttons",
    link: "https://github.com/956MB/reddit-download-button",
    lang: "JavaScript",
    date: "2024",
    summary: [
        `The browser extension that I've always wanted for <span class='highlight'>Reddit</span>... Adds buttons to more easily hoard images/videos. v1.3.4 of the extension is also on ${li("https://greasyfork.org/en/scripts/501718-reddit-download-buttons", "Greasy Fork")}.`,
    ],
};

const p_vscode_yazi: IEntry = {
    id: "p-vscode-yazi",
    title: "vscode.yazi",
    link: "https://github.com/956MB/vscode.yazi",
    date: "2024",
    summary: [
        `${li("https://github.com/yazi-rs/yazi", "Yazi")} flavors inspired by the default themes (dark/light) in Visual Studio Code, and ${li("https://github.com/Mofiqul/vscode.nvim", "Mofiqul/vscode.nvim")}.`,
    ],
};

const p_tis_term: IEntry = {
    id: "p-tis-term",
    title: "TIS-TERM",
    lang: "Rust",
    date: "2024",
    summary: [
        `${li("https://www.zachtronics.com/tis-100/", "TIS-100")} Clone in the Terminal, written in Rust. WIP.`,
    ],
};

const p_tdb: IEntry = {
    id: "p-tdb",
    title: "TDB",
    lang: "Swift",
    summary: [
        `Like ${li("https://mactracker.net", "MacTracker")}, but for ${li("https://www.tesla.com/models", "Tesla")}. Full spec sheets and detailed info about every vehicle, solar product, and piece of software Tesla has released in the last 15 years. <span class='highlight'>“A Tesla version of this would be awesome”</span>, we said.`,
    ],
    tags: ["iOS", "macOS", "Swift", "SwiftUI"],
    items: [{ path: "/images/projects/tdb.png", width: 1163, height: 764 }],
    date: "2023",
};

const p_pros: IEntry = {
    id: "p-pros",
    title: "\"Pros\"",
    lang: "TypeScript",
    summary: [
        "A desktop client for spectating professional <span class='highlight'>League of Legends</span> players.",
        "This app is the result of my previous design concept for an OP.GG 'Spectate Pro Matches' feature, which would be a helpful tool around Worlds.",
    ],
    tags: ["Windows", "Tauri", "TypeScript", "React"],
    items: [{ path: "/images/projects/pros.png", width: 893, height: 791 }],
    date: "2023",
};

const p_2048: IEntry = {
    id: "p-2048",
    title: "2048WE",
    link: "https://github.com/956MB/2048WE",
    lang: "Swift",
    summary: [
        "Full functionaly of the iOS app <span class='highlight'>2048</span>, right on your Apple Watch. High scores saved on device, end of game stats, and current game progress is never lost between app resets and Watch being turned off. My first attempt making a standalone WatchOS app with the new method. ",
    ],
    tags: ["WatchOS", "Swift", "SwiftUI"],
    items: [{ path: "/images/projects/2048W.png", width: 1080, height: 874 }],
    date: "2022",
};

const p_tx4: IEntry = {
    id: "p-tx4",
    title: "TX4",
    link: "https://github.com/956MB/TX4",
    lang: "C++",
    summary: [
        `Fully featured app for viewing all accumulated dashcam / Sentry mode clips off your <span class='highlight'>Tesla</span>. The idea came from a computer engineer friend who owns a <span class='highlight'>Model 3</span>. Also the fact that I wanted to start proper <span class='highlight'>Qt</span> project. The ${li("https://www.956mb.com/designs/#ui_tx4", "Figma concept here")} looks WAY better than the thrown togethre look of this thing...`,
    ],
    tags: ["Windows", "C++", "Qt"],
    items: [{ path: "/images/projects/TX4.png", width: 1038, height: 891 }],
    date: "2022",
};

const p_mssnc: IEntry = {
    id: "p-mssnc",
    title: "MSSNC",
    link: "https://github.com/956MB/MSSNC",
    lang: "Swift",
    summary: [
        "This idea came directly from myself using the Windows app <span class='highlight'>'Sticky Notes'</span>, and wanting the same thing on Mac. Notes are easily identified with their unique colors, and windows maintain their position and size on the desktop before and after application restarts.",
    ],
    tags: ["macOS", "Swift", "SwiftUI"],
    items: [{ path: "/images/projects/mssnc.gif", width: 1532, height: 982 }],
    date: "2021",
};

const p_some_aim_game: IEntry = {
    id: "some-aim-game",
    title: "\"SomeAimGame\"",
    link: "https://github.com/956MB/SomeAimGame",
    lang: "C#",
    summary: [
        "My first and so far only attempt at creating a game in <span class='highlight'>Unity Engine</span>. For this to be a proper 'aim game', it needed a few primary features if nothing else, which I believe I implemented fairly well."
    ],
    tags: ["Windows", "C#", "Unity"],
    items: [{ path: "/images/projects/sag.gif", width: 1408, height: 973 }],
    date: "2021",
};

const p_twanslate: IEntry = {
    id: "p-twanslate",
    title: "Twanslate",
    link: "https://github.com/956MB/Twanslate",
    lang: "Swift",
    summary: [
        "Translating messages in <span class='highlight'>Twitch</span> chat in real-time. Leverages <span class='highlight'>Twitch API</span> and the <span class='highlight'>IRC</span> protocol used for chats, and uses multiple other APIs (<span class='highlight'>Google</span>, <span class='highlight'>Microsoft</span>, <span class='highlight'>NLP</span>). Finnish -> English, or vice versa.",
    ],
    tags: ["macOS", "Swift", "SwiftUI"],
    items: [
        { path: "/images/projects/Twanslate.png", width: 1147, height: 886 },
    ],
    date: "2020",
};

const p_github_desktop_css: IEntry = {
    id: "p-github_desktop_css",
    title: "GithubDesktop.css",
    link: "https://github.com/956MB/GithubDesktop.css",
    lang: "CSS",
    summary: [
        "More light/dark themes for the <span class='highlight'>Github Desktop</span> client. It just didn't have enough cool options. (Probably needs upadte!)",
    ],
    tags: ["CSS", "Shell"],
    items: [
        {
            path: "/images/projects/GithubDesktopCSS.gif",
            width: 1374,
            height: 828,
        },
    ],
    date: "2020",
};

const p_board_games_py: IEntry = {
    id: "p-board_games_py",
    title: "board-games.py",
    link: "https://github.com/956MB/board-games.py",
    lang: "Python",
    summary: [
        `${li("https://github.com/956MB/go.py", "Go")}, ${li("https://github.com/956MB/chess.py", "Chess")}, ${li("https://github.com/956MB/checkers.py", "Checkers")}, and ${li("https://github.com/956MB/connect-four.py", "Connect Four")}. Basically the “quick/dirty” approach to terminal games. Very messy... not at all impressive... NOT done.`,
    ],
    tags: ["Python"],
    items: [{ path: "/images/projects/bgames.gif", width: 820, height: 544 }],
    date: "2020",
};

// NOTE: Neostuff

const p_ncks_nvim: IEntry = {
    id: "p-ncks-nvim",
    title: "ncks.nvim",
    link: "https://github.com/956MB/ncks.nvim",
    lang: "Lua",
    date: "2024",
    summary: [
        `Tiny utility plugin to append Discord nickname ideas to a file without leaving Neovim. My first ${li("https://neovim.io", "Neovim")} plugin. WIP`,
    ],
};

const p_head_nvim: IEntry = {
    id: "p-head-nvim",
    title: "head.nvim",
    link: "https://github.com/956MB/head.nvim",
    lang: "Lua",
    date: "2024",
    summary: [
        "Neovim plugin for adding and automatically updating file headers. WIP",
    ],
};

const p_quicker_nvim: IEntry = {
    id: "p-quicker-nvim",
    title: "quicker.nvim",
    link: "https://github.com/956MB/neostuff#quickernvim-link-tba",
    lang: "Lua",
    date: "fork/+",
    summary: [
        "Adds cursor line number highlight (<span class='highlight'>CursorLineNr</span>) to the quicker.nvim quickfix list. Follows the cursor movement and updates like normal line numbers.",
    ],
};

const p_lazy_nvim: IEntry = {
    id: "p-lazy-nvim",
    title: "lazy.nvim",
    link: "https://github.com/956MB/neostuff#lazynvim",
    lang: "Lua",
    date: "fork/+",
    summary: [
        "Adds a URL to the end of each plugin entry line in the lazy.nvim Home/Summary page, making displaying the entire page or finding a plugin's URL easier.",
    ],
};

const p_oil_nvim: IEntry = {
    id: "p-oil-nvim",
    title: "oil.nvim",
    link: "https://github.com/956MB/neostuff#oilnvim-link-tba",
    lang: "Lua",
    date: "fork/+",
    summary: [
        "Adds the <span class='highlight'>netrw</span> directory listing UI to the oil.nvim file explorer. I like the way it looks, it fills out the top of the oil buffer a bit more. The \"Sort sequence\" line is currently nonsense... I haven't figured out how to make use of this yet, but it's still nice having it there anyway :)",
    ],
};

// NOTE: Personal

const p_dotfiles: IEntry = {
    id: "p-dotfiles",
    title: "dotfiles",
    link: "https://github.com/956MB/dotfiles",
    lang: "Lua",
    date: "2024",
    summary: [
        `The... files. (${li("https://github.com/956MB/dotfiles/tree/main/ghostty", "ghostty")}, ${li("https://github.com/956MB/dotfiles/tree/main/nvim", "nvim")}, ${li("https://github.com/956MB/dotfiles/tree/main/zsh", "zsh")}, ${li("https://github.com/956MB/dotfiles/tree/main/yabai", "yabai")}, ${li("https://github.com/956MB/dotfiles/tree/main/lazygit", "lazygit")}...)`,
    ],
};

const p_website: IEntry = {
    id: "p-website",
    title: "website",
    link: "https://github.com/956MB/website",
    lang: "JavaScript",
    date: "2023",
    summary: [
        "This website. My portfolio. Made in <span class='highlight'>React</span>.",
    ],
};

const p_boosts: IEntry = {
    id: "p-boosts",
    title: "boosts",
    link: "https://github.com/956MB/boosts",
    lang: "CSS",
    date: "2024",
    summary: [
        `Some ${li("https://arc.net", "Arc")} boosts for my own tastes (<span class='highlight'>Github</span>, <span class='highlight'>Claude</span>, <span class='highlight'>Hugging Face</span>, <span class='highlight'>F1TV</span>, ...)`,
    ],
};

const p_kata: IEntry = {
    id: "p-kata",
    title: "Kata",
    link: "https://github.com/956MB/Kata",
    lang: "Python",
    date: "2020",
    summary: [
        `Most of my ${li("https://www.codewars.com/users/956MB", "Codewars")} katas. Majority in <span class='highlight'>Python</span>. Gotta do more in <span class='highlight'>Go</span> / <span class='highlight'>Rust</span> / <span class='highlight'>Zig</span> (eventually).`,
    ],
};

const p_aoc: IEntry = {
    id: "p-aoc",
    title: "AoC",
    link: "https://github.com/956MB/AoC",
    lang: "Python",
    date: "2018",
    summary: [
        `All of my ${li("https://adventofcode.com", "Advent of Code")} solutions. (${li("https://github.com/956MB/AoC/tree/master/18", "18")}, ${li("https://github.com/956MB/AoC/tree/master/20", "20")}, ${li("https://github.com/956MB/AoC/tree/master/21", "21")}, ${li("https://github.com/956MB/AoC/tree/master/22", "22")})`,
    ],
};

const p_banner: IEntry = {
    id: "p-banner",
    title: "banner",
    link: "https://github.com/956MB/banner",
    lang: "Python",
    date: "2024",
    summary: [
        "Wow, that's interesting. Rendering of my ASCII banner in Github's markdown code block.",
    ],
};

const p_wallpapers: IEntry = {
    id: "p-wallpapers",
    title: "wallpapers",
    link: "https://github.com/956MB/wallpapers",
    lang: "none",
    date: "2024",
    summary: [
        "Collection of wallpapers made or modified by me. Or just stuff I think is cool. WIP.",
    ],
};

// NOTE: Groups

export const flipperGroup: IEntryGroup = {
    title: "Flipper",
    category: "Projects",
    description: "Flipper Zero firmware and apps",
    items: [
        p_momentum_firmware,
        p_feat_menu_more_info,
        p_feat_asset_packs_ram_warning,
        p_feat_clock_midnight_format,
        p_feat_directory_keybind_support,
        p_feat_archive_select_multiple,
        p_feat_archive_dynamic_tabs,
        p_momentum_apps,
        p_flipper_chess,
    ]
};

export const miscGroup: IEntryGroup = {
    title: "Misc",
    category: "Projects",
    description: "Code projects and contributions",
    items: [
        p_reddit_download_buttons,
        p_tis_term,
        p_pros,
        p_tdb,
        p_2048,
        p_tx4,
        p_mssnc,
        p_some_aim_game,
        p_github_desktop_css,
        p_twanslate,
        p_board_games_py,
    ]
};

export const neovimGroup: IEntryGroup = {
    title: "Neostuff",
    category: "Projects",
    titleLink: "https://github.com/956MB/neostuff",
    description: "My Neovim plugins and changes to others",
    items: [
        p_vscode_yazi,
        p_ncks_nvim,
        p_head_nvim,
        p_quicker_nvim,
        p_lazy_nvim,
        p_oil_nvim,
    ]
};

export const personalGroup: IEntryGroup = {
    title: "Personal",
    category: "Projects",
    description: "The \"workspace\"",
    items: [
        p_dotfiles,
        p_website,
        p_boosts,
        p_banner,
        p_wallpapers,
        p_aoc,
        p_kata,
    ]
};

export const defaultExpandedIds = [
    "p-momentum-firmware",
    "p-flipper-chess",
    "p-reddit-download-buttons",
    "p-2048",
    "p-vscode-yazi",
];

export const projectGroups: IEntryGroups = [flipperGroup, miscGroup, neovimGroup, personalGroup];
