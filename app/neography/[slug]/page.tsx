import ContentGallery from "components/ContentGallery";
import { baseUrl, name, og } from "lib/info";
import { slugMetadata } from "lib/interfaces";
import { neographyGroups } from "lib/scripts";
import { findEntryById } from "lib/util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const { slug } = await params;
    const neographyItem = findEntryById(slug, neographyGroups);

    if (!neographyItem) {
        return;
    }

    return slugMetadata(baseUrl, name, og, neographyItem);
}

export default async function NeographyPage({ params }) {
    const { slug } = await params;
    const neographyEntry = findEntryById(slug, neographyGroups);

    if (!neographyEntry) {
        notFound();
    }

    return (
        <section className="mx-6 flex h-full w-full flex-col overflow-x-hidden pt-2 sm:mx-8 sm:pt-5">
            <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden">
                <ContentGallery entry={neographyEntry} backLink="/neography" />
            </div>
        </section>
    );
}
