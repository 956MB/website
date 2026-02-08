import { entry, group, IEntryGroups, item } from "./interfaces";

const photos = [
    entry(
        "l-bank-ozk",
        "Bank OZK",
        "2.3.2026",
        "photography",
        [item("/images/lightroom/bank-ozk.jpg", 3024, 4032)],
        {
            summary: ["Photograph Bank OZK."],
            thumbnail: item("/images/lightroom/bank-ozk.jpg", 3024, 4032),
        },
    ),
    entry(
        "l-dallas-federal-reserve",
        "Dallas Federal Reserve",
        "1.26.2026",
        "photography",
        [item("/images/lightroom/dallas-federal-reserve.jpg", 3024, 4032)],
        {
            summary: ["Photograph Dallas Federal Reserve."],
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
        keywords: ["photography", "photos", "images", "lightroom", "editing"],
    },
);

export const lightroomEntries: IEntryGroups = [lightroom_section];
