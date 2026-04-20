import { entry, group, IEntryGroups, item } from "./interfaces";

const photos = [
    entry(
        "it-looked-that-blue",
        "It Looked That Blue",
        "4.2.2026",
        "photography",
        [item("/images/lightroom/blue-rain.jpg", 2740, 3902)],
        {
            summary: ["Little bit of water out there."],
            thumbnail: item("/images/lightroom/blue-rain.jpg", 2740, 3902),
            link: "https://lightroom.app.link/koCf33vUu2b",
        },
    ),
    entry(
        "reading-corner",
        "Reading Corner",
        "2.9.2026",
        "photography",
        [item("/images/lightroom/reading-corner.png", 2846, 3793)],
        {
            summary: ["Where the reading gets done."],
            thumbnail: item("/images/lightroom/reading-corner.png", 2846, 3793),
            link: "https://lightroom.app.link/LFyd6lNUu2b",
        },
    ),
    entry(
        "bank-ozk",
        "Bank OZK",
        "2.3.2026",
        "photography",
        [item("/images/lightroom/bank-ozk.jpg", 3024, 4032)],
        {
            summary: ["*New* Bank OZK building, Dallas."],
            thumbnail: item("/images/lightroom/bank-ozk.jpg", 3024, 4032),
            link: "https://lightroom.app.link/DCxRyyAUu2b",
        },
    ),
    entry(
        "dallas-federal-reserve",
        "Dallas Federal Reserve",
        "1.26.2026",
        "photography",
        [item("/images/lightroom/dallas-federal-reserve.jpg", 3024, 4032)],
        {
            summary: ["Dallas Federal Reserve, early morning."],
            thumbnail: item(
                "/images/lightroom/dallas-federal-reserve.jpg",
                3024,
                4032,
            ),
            link: "https://lightroom.app.link/7e98uMBUu2b",
        },
    ),
];

export const lightroom_section = group(
    "Lightroom",
    "photography",
    "A collection of photographs I've taken and edited using Adobe Lightroom.",
    photos,
    {
        keywords: [
            "photography",
            "photos",
            "images",
            "lightroom",
            "editing",
            "adobe",
            "iphone",
            "camera",
            "dallas",
        ],
    },
);

export const lightroomEntries: IEntryGroups = [lightroom_section];
