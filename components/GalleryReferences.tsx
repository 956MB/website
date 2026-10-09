import { DesignItem } from "components/DesignRow";
import { designGroups } from "lib/designs";
import { IEntry } from "lib/interfaces";
import { neographyGroups } from "lib/scripts";
import { findEntryById } from "lib/util";
import Link from "next/link";

export default function GalleryReferences({ entry }: { entry: IEntry }) {
    if (!entry.references?.length) return null;

    return (
        <section
            aria-label="References"
            className="mt-8 w-full max-w-screen-lg border-t border-dotted border-neutral-200 pt-5 dark:border-neutral-800"
        >
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {entry.references.map((reference) => {
                    const [section, slug] = reference.url
                        .split("/")
                        .filter(Boolean);
                    const groups =
                        section === "neography"
                            ? neographyGroups
                            : section === "designs"
                              ? designGroups
                              : [];
                    const target = findEntryById(slug, groups);
                    const thumbnail = target?.thumbnail ?? target?.items?.[0];
                    const external = /^https?:\/\//.test(reference.url);

                    if (target && thumbnail) {
                        return (
                            <DesignItem
                                key={reference.url}
                                item={{ ...target, title: reference.title }}
                                href={reference.url}
                                pathname=""
                                cornerRadius={{
                                    style: {},
                                    className: "overflow-hidden",
                                }}
                                delay={0}
                                standalone
                            />
                        );
                    }

                    return (
                        <Link
                            key={reference.url}
                            href={reference.url}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="group relative flex aspect-square items-end overflow-hidden bg-neutral-100 saturate-0 transition-[filter] hover:saturate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p0 dark:bg-neutral-900 dark:focus-visible:outline-o0"
                        >
                            <div className="relative z-10 flex w-full flex-col bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-12 text-white">
                                <span className="font-degular text-lg font-semibold uppercase">
                                    {reference.title}
                                </span>
                                {target?.category && (
                                    <span className="font-mono text-[11px] uppercase text-white/70">
                                        {target.category}
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
