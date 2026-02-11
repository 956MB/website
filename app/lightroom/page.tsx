import LightroomGrid from "components/LightroomGrid";
import { baseUrl, name, og } from "lib/info";
import { pageMetadata } from "lib/interfaces";
import { lightroom_section } from "lib/lightroom";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = pageMetadata(
    baseUrl,
    name,
    og,
    lightroom_section,
);

export default function PhotographyPage() {
    const photos = lightroom_section.items;

    return (
        <Suspense
            fallback={
                <div className="mx-6 flex w-full max-w-screen-lg justify-center sm:mx-7" />
            }
        >
            <LightroomGrid photos={photos} />
        </Suspense>
    );
}
