import { entry, group, IEntryGroups, item } from "./interfaces";

const photos = [
    entry(
        "reading-corner",
        "Reading Corner",
        "2.9.2026",
        "photography",
        [item("/images/lightroom/reading-corner.png", 2846, 3793)],
        {
            summary: ["Where the reading gets done."],
            thumbnail: item("/images/lightroom/reading-corner.png", 2846, 3793),
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
        },
    ),
];

export const lightroom_section = group(
    "Lightroom",
    "photography",
    "A collection of photographs I've taken and edited using Adobe Lightroom.",
    photos,
    {
        keywords: ["photography", "photos", "images", "lightroom", "editing", "adobe", "iphone", "camera", "dallas"],
    },
);

export const lightroomEntries: IEntryGroups = [lightroom_section];
