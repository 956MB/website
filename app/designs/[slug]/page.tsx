import ContentGallery from "components/ContentGallery";
import { designGroups } from "lib/designs";
import { findEntryById } from "lib/util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const design = findEntryById(params.slug, designGroups);

    if (!design) {
        return;
    }

    const { title, date, summary, id: slug } = design;
    const image =
        design.thumbnail?.path ||
        (design.items && design.items.length > 0 ? design.items[0].path : null);
    const ogImage = image
        ? `https://956mb.com${image}`
        : `https://956mb.com/og?title=${title}`;

    return {
        title,
        description: summary ? summary.join(" ") : `Design work: ${title}`,
        openGraph: {
            title,
            description: summary ? summary.join(" ") : `Design work: ${title}`,
            type: "article",
            url: `https://956mb.com/designs/${slug}`,
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

export default function DesignPage({ params }) {
    const designEntry = findEntryById(params.slug, designGroups);

    if (!designEntry) {
        notFound();
    }

    return (
        <section className="mx-6 flex h-full w-full flex-col overflow-x-hidden pt-2 sm:mx-8 sm:pt-5">
            <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden">
                <ContentGallery entry={designEntry} />
            </div>
        </section>
    );
}
