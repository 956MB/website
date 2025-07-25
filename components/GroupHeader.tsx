"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import { IEntryGroup } from "lib/interfaces";
import { FiArrowUpRight } from "react-icons/fi";

export default function GroupHeader({
    entry,
    noDescription,
    titleLink,
    noBackdrop,
}: {
    entry: IEntryGroup;
    noDescription?: boolean;
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
            className={`top-0 z-50 m-0 flex w-full max-w-screen-xl flex-col items-start justify-center py-3 sm:sticky ${noBackdrop ? "bg-transparent" : "bg-white/90 backdrop-blur dark:bg-black/80"}`}
            variants={headerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="flex w-full flex-col items-start justify-center gap-1.5 leading-[21px]">
                <span className="whitespace-normal align-baseline text-[23px] font-bold leading-6 text-neutral-900 dark:text-white sm:whitespace-nowrap">
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
                    <span className="max-w-3xl text-sm font-medium italic leading-5 text-neutral-600 dark:text-neutral-350">
                        {parse(entry.description)}
                    </span>
                )}
            </div>
        </motion.div>
    );
}
