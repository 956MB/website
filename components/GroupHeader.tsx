"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { IEntry, IEntryGroup } from "lib/interfaces";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function GroupHeader({
    entry,
    itemEntry,
    noDescription,
    header,
    gallery,
    titleLink,
    noBackdrop,
}: {
    entry: IEntryGroup;
    itemEntry?: IEntry;
    noDescription?: boolean;
    header?: boolean;
    gallery?: boolean;
    titleLink?: string;
    noBackdrop?: boolean;
}) {
    const headerVariants = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className={`top-0 z-50 m-0 flex w-full max-w-screen-xl flex-col items-start justify-center py-3 sm:sticky ${noBackdrop ? "bg-transparent" : "from:bg-white/90 bg-gradient-to-r to-transparent backdrop-blur-xl dark:from-black dark:to-black/30"}`}
            variants={headerVariants}
            initial="initial"
            animate="animate"
        >
            <div
                className={clsx(
                    "flex w-full flex-col items-start justify-center leading-[21px]",
                    header ? "gap-3.5" : "gap-1.5",
                )}
            >
                <span className="whitespace-normal align-baseline text-[23px] font-bold italic leading-6 text-neutral-900 dark:text-white sm:whitespace-nowrap">
                    {titleLink ? (
                        <a
                            href={titleLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="p-link group inline-flex items-center"
                        >
                            {entry.title}
                            {FiArrowUpRight({
                                size: 18,
                                className:
                                    "ml-1 text-neutral-500 group-hover:text-black dark:group-hover:text-white",
                            })}
                        </a>
                    ) : (
                        entry.title
                    )}
                </span>

                {!noDescription && entry.description && (
                    <span
                        className={clsx(
                            "gallery-summary max-w-screen-lg text-sm font-medium leading-5 text-neutral-600 dark:text-neutral-350",
                            gallery && "max-w-screen-sm",
                        )}
                    >
                        {parse(entry.description)}
                    </span>
                )}

                {itemEntry?.references && itemEntry.references.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                        {itemEntry.references.map((ref, idx) => {
                            const isExternalLink =
                                ref.url.startsWith("http://") ||
                                ref.url.startsWith("https://");

                            return (
                                <span key={idx} className="flex items-center">
                                    {isExternalLink ? (
                                        <>
                                            <a
                                                href={ref.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="whitespace-nowrap text-sm font-medium text-neutral-700 underline decoration-neutral-400 decoration-1 underline-offset-2 hover:text-p0 hover:decoration-p0 dark:text-neutral-300 dark:decoration-neutral-500 dark:hover:text-o0 dark:hover:decoration-o0"
                                            >
                                                {ref.title}
                                            </a>
                                            {FiArrowUpRight({
                                                size: 14,
                                                className:
                                                    "ml-1 mt-1 text-neutral-500",
                                            })}
                                        </>
                                    ) : (
                                        <Link
                                            href={ref.url}
                                            className="whitespace-nowrap text-sm font-medium text-neutral-700 underline decoration-neutral-400 decoration-1 underline-offset-2 hover:text-p0 hover:decoration-p0 dark:text-neutral-300 dark:decoration-neutral-500 dark:hover:text-o0 dark:hover:decoration-o0"
                                        >
                                            {ref.title}
                                        </Link>
                                    )}
                                    {idx <
                                        (itemEntry.references?.length ?? 0) -
                                            1 && (
                                        <span className="ml-2 text-sm text-neutral-400 dark:text-neutral-500">
                                            ·
                                        </span>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
