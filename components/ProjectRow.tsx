"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Parse from "html-react-parser";
import { IEntry, IEntryGroup } from "lib/interfaces";
import { defaultExpandedIds } from "lib/projects";
import { getLangColor } from "lib/util";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import GroupHeader from "./GroupHeader";

const shortenLang = (lang: string): string => {
    const langMap: { [key: string]: string } = {
        TypeScript: "TS",
        JavaScript: "JS",
        Python: "PY",
    };
    return langMap[lang] || lang;
};

export function ProjectItem({
    index,
    itemsLength,
    entry,
}: {
    index: number;
    itemsLength: number;
    entry: IEntry;
}) {
    const [isExpanded, setIsExpanded] = useState(
        defaultExpandedIds.includes(entry.id),
    );
    const summaryRef = useRef<HTMLSpanElement | null>(null);
    const [showChevron, setShowChevron] = useState(false);

    const itemVariants = {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    useEffect(() => {
        const checkMultiline = () => {
            if (summaryRef.current) {
                summaryRef.current.style.whiteSpace = "normal";
                summaryRef.current.style.overflow = "visible";

                const lineHeight = parseInt(
                    window.getComputedStyle(summaryRef.current).lineHeight,
                );
                const height = summaryRef.current.offsetHeight;
                summaryRef.current.style.whiteSpace = "";
                summaryRef.current.style.overflow = "";

                setShowChevron(height > lineHeight * 1.5);
            }
        };

        const timer = setTimeout(checkMultiline, 0);
        return () => clearTimeout(timer);
    }, [entry.summary]);

    return (
        <motion.div
            variants={itemVariants}
            className={clsx(
                "group flex w-full max-w-screen-lg flex-col items-stretch justify-between gap-x-3 gap-y-[4px] sm:gap-y-[6px] lg:flex-row",
            )}
        >
            <div
                className={clsx(
                    "relative flex min-h-full items-center lg:w-[320px] lg:flex-shrink-0 lg:items-start",
                    !entry.nested && "mt-[1px]",
                )}
            >
                {entry.date && (
                    <div className="relative mr-3 lg:mt-[6px] lg:w-10 lg:flex-shrink-0">
                        <span
                            className={clsx(
                                "absolute text-sm font-medium leading-4 text-neutral-700 ease-in-out dark:font-medium dark:text-neutral-350",
                                entry.lang &&
                                    entry.lang !== "none" &&
                                    "group-hover:opacity-0",
                                entry.nested &&
                                    "lg:text-transparent dark:lg:text-transparent",
                            )}
                        >
                            {entry.date}
                        </span>
                        {entry.lang && entry.lang !== "none" && (
                            <span
                                className={clsx(
                                    "absolute text-sm font-medium leading-4 text-neutral-700 opacity-0 ease-in-out group-hover:opacity-100 dark:font-medium dark:text-neutral-350",
                                    entry.nested &&
                                        "lg:text-transparent dark:lg:text-transparent",
                                )}
                            >
                                {shortenLang(entry.lang)}
                            </span>
                        )}
                    </div>
                )}
                <div
                    className={clsx(
                        "relative flex h-full items-center justify-center",
                    )}
                    title={entry.lang}
                >
                    <div
                        className={clsx(
                            "h-[10px] w-[10px] rounded-full border border-white/[15%] transition-all ease-in-out group-hover:w-[7px] lg:absolute lg:bottom-0 lg:top-0 lg:h-full lg:w-[4px] lg:rounded-none lg:border-none",
                            index === 0 &&
                                "lg:rounded-tl-full lg:rounded-tr-full",
                            index === itemsLength - 1 &&
                                "lg:rounded-bl-full lg:rounded-br-full",
                            getLangColor(entry.lang) ||
                                "bg-neutral-200 dark:bg-neutral-800",
                            getLangColor(entry.lang, "group-hover:"),
                        )}
                    />
                </div>
                <div className="relative flex h-full w-full flex-row items-start justify-start gap-x-[5px]">
                    <a
                        href={entry.link || "#"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={clsx(
                            "pl-3 text-[15px] font-semibold leading-4 text-black transition-all duration-150 hover:text-p0 dark:text-white dark:hover:text-o0 lg:mt-[6px] lg:max-w-[256px] lg:pl-4",
                            entry.link
                                ? "hover:text-p0 hover:underline dark:hover:text-o0"
                                : "no-underline",
                        )}
                    >
                        {entry.title}
                    </a>
                </div>
            </div>
            <div
                className={clsx(
                    "flex w-full min-w-0 items-start justify-start gap-x-2",
                )}
            >
                <span
                    ref={summaryRef}
                    className={clsx(
                        "leading-0 flex-1 text-sm font-normal text-neutral-600 dark:text-neutral-350 sm:font-medium lg:mt-[3px] lg:pb-2 lg:pt-[1px] lg:text-[15px]",
                        "min-w-0",
                        !isExpanded && "xl:truncate",
                    )}
                >
                    {Parse((entry.summary || "").toString())}
                </span>
                {showChevron && (
                    <div
                        className="hidden cursor-pointer rounded-full px-2 py-1 text-neutral-600 hover:text-p0 dark:text-neutral-350 dark:hover:text-o0 xl:block"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {FiChevronDown({
                            className: clsx(
                                "mt-[5px] flex flex-shrink-0 transition-transform duration-200",
                                isExpanded ? "rotate-180" : "rotate-0",
                            ),
                            size: 17,
                        })}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function ProjectRow({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const headerVariants = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="relative flex w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-y-0"
        >
            {!noHeader && (
                <motion.div
                    variants={headerVariants}
                    className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center sm:sticky"
                >
                    <GroupHeader
                        entry={entry}
                        noDescription={false}
                        titleLink={entry.titleLink}
                    />

                    <motion.div
                        variants={itemVariants}
                        className="flex w-full flex-row items-center justify-center"
                    >
                        <hr className="my-auto h-px w-full bg-neutral-200 dark:bg-neutral-800" />
                    </motion.div>
                </motion.div>
            )}

            <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-center justify-center gap-y-6 py-3 lg:gap-y-0 lg:py-2"
            >
                {entry.items.map((item, i) => (
                    <ProjectItem
                        key={i}
                        index={i}
                        itemsLength={entry.items.length}
                        entry={item}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
