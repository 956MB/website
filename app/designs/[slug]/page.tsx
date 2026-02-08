import ContentGallery from "components/ContentGallery";
import { designGroups } from "lib/designs";
import { baseUrl, name, og } from "lib/info";
import { slugMetadata } from "lib/interfaces";
import { findEntryById } from "lib/util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const { slug } = await params;
    const design = findEntryById(slug, designGroups);

    if (!design) {
        return;
    }

    return slugMetadata(baseUrl, name, og, design);
}

export default async function DesignPage({ params }) {
    const { slug } = await params;
    const designEntry = findEntryById(slug, designGroups);

    if (!designEntry) {
        notFound();
    }

    return (
        <section className="mx-6 flex h-full w-full flex-col overflow-x-hidden pt-2 sm:mx-8 sm:pt-5">
            <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden">
                <ContentGallery entry={designEntry} backLink="/designs" />
            </div>
        </section>
    );
}
