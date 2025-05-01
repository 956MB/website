import ContentGallery from "components/ContentGallery";
import { neographyGroups } from "lib/scripts";
import { findEntryById } from "lib/util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const neographyItem = findEntryById(params.slug, neographyGroups);

    if (!neographyItem) {
        return;
    }

    const { title, date, summary, id: slug } = neographyItem;
    const image =
        neographyItem.thumbnail?.path ||
        (neographyItem.items && neographyItem.items.length > 0
            ? neographyItem.items[0].path
            : null);
    const ogImage = image
        ? `https://956mb.com${image}`
        : `https://956mb.com/og?title=${title}`;

    return {
        title,
        description: summary ? summary.join(" ") : `Neography: ${title}`,
        openGraph: {
            title,
            description: summary ? summary.join(" ") : `Neography: ${title}`,
            type: "article",
            url: `https://956mb.com/neography/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: summary ? summary.join(" ") : `${title}`,
            images: [ogImage],
        },
    };
}

export default function NeographyPage({ params }) {
    const neographyEntry = findEntryById(params.slug, neographyGroups);

    if (!neographyEntry) {
        notFound();
    }

    return (
        <section className="mx-6 flex h-full w-full flex-col overflow-x-hidden pt-2 sm:mx-8 sm:pt-5">
            <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden">
                <ContentGallery entry={neographyEntry} />
            </div>
        </section>
    );
}
