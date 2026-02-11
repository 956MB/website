"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Parse from "html-react-parser";
import { IEntry, IEntryGroup } from "lib/interfaces";
import { getLangColor } from "lib/util";
import { useRef, useState } from "react";
import GroupHeader from "./GroupHeader";

const shortenLang = (lang: string): string => {
    const langMap: { [key: string]: string } = {
        TypeScript: "TS",
        JavaScript: "JS",
        Python: "PY",
    };
    return langMap[lang] || lang;
};

export function ProjectRow({
    entry,
    hoveredId,
    setHoveredId,
    isChild = false,
    parentId,
}: {
    index: number;
    itemsLength: number;
    entry: IEntry;
    hoveredId: string | null;
    setHoveredId: (id: string | null) => void;
    isChild?: boolean;
    parentId?: string;
}) {
    const summaryRef = useRef<HTMLSpanElement | null>(null);

    const familyGroupId = parentId || entry.id;
    const isFamily = hoveredId === familyGroupId;
    const shouldDim = hoveredId !== null && !isFamily;

    const handleMouseEnter = () => {
        setHoveredId(familyGroupId);
    };
    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: shouldDim ? 0.56 : 1,
                y: 0,
            }}
            transition={{ duration: 0.15 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx(
                "group flex w-full max-w-screen-lg flex-col items-stretch justify-between gap-x-3 gap-y-[4px] sm:gap-y-[6px] lg:flex-row",
                isFamily && "is-family-hovered",
            )}
        >
            <div
                className={clsx(
                    "relative flex min-h-full items-start lg:w-[320px] lg:flex-shrink-0 lg:items-start",
                    isChild && "mt-[1px]",
                )}
            >
                {entry.date && !isChild && (
                    <div className="relative mr-3 hidden h-full sm:block lg:w-10 lg:flex-shrink-0 lg:pt-1">
                        <span
                            className={clsx(
                                "absolute font-mono text-sm leading-5 text-neutral-700 transition-opacity duration-150 ease-in-out dark:font-mono dark:text-neutral-350",
                                entry.lang &&
                                    entry.lang !== "none" &&
                                    isFamily &&
                                    "opacity-0",
                            )}
                        >
                            {entry.date}
                        </span>
                        {entry.lang && entry.lang !== "none" && (
                            <span
                                className={clsx(
                                    "absolute font-mono text-sm leading-5 text-neutral-700 transition-opacity duration-150 ease-in-out dark:font-mono dark:text-neutral-350",
                                    isFamily ? "opacity-100" : "opacity-0",
                                )}
                            >
                                {shortenLang(entry.lang)}
                            </span>
                        )}
                    </div>
                )}
                {isChild && (
                    <div className="relative mr-3 hidden sm:block lg:w-10 lg:flex-shrink-0" />
                )}
                <div
                    className={clsx(
                        "relative flex h-full items-center justify-center",
                    )}
                    title={entry.lang}
                >
                    <div
                        className={clsx(
                            "mt-[7px] h-[8px] w-[8px] rounded-full border border-white/[15%] transition-all ease-in-out group-hover:w-[7px] is-family-hovered:w-[7px] sm:mt-0 lg:absolute lg:bottom-0 lg:top-0 lg:h-full lg:w-[4px] lg:rounded-none lg:border-none",
                            getLangColor(entry.lang) ||
                                "bg-neutral-200 dark:bg-neutral-800",
                            getLangColor(entry.lang, "group-hover:"),
                            getLangColor(entry.lang, "is-family-hovered:"),
                        )}
                    />
                </div>
                <div className="relative flex h-full w-full flex-row items-start justify-start gap-x-[5px] lg:pt-1">
                    <a
                        href={entry.link || "#"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={clsx(
                            "pl-2 font-pixel-square text-[15px] font-bold leading-5 text-black transition-all duration-150 hover:text-p0 dark:text-white dark:hover:text-o0  lg:max-w-[256px] lg:pl-4",
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
                    "flex w-full min-w-0 items-start justify-start gap-x-2 lg:pt-1",
                )}
            >
                <span
                    ref={summaryRef}
                    className={clsx(
                        "leading-0 line-clamp-3 flex-1 text-sm font-normal text-neutral-600 dark:text-neutral-350 sm:font-pixel-square lg:mb-[6px]",
                        "min-w-0",
                    )}
                >
                    {Parse((entry.summary || "").toString())}
                </span>
            </div>
        </motion.div>
    );
}

export default function ProjectSection({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
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

    const flatRows: Array<{
        entry: IEntry;
        isChild: boolean;
        parentId?: string;
        index: number;
    }> = [];

    entry.items.forEach((item) => {
        flatRows.push({
            entry: item,
            isChild: false,
            index: flatRows.length,
        });

        if (item.children && item.children.length > 0) {
            item.children.forEach((child) => {
                flatRows.push({
                    entry: child,
                    isChild: true,
                    parentId: item.id,
                    index: flatRows.length,
                });
            });
        }
    });

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
                        <hr className="my-auto h-px w-full border-b border-dotted border-neutral-200 bg-transparent dark:border-neutral-800" />
                    </motion.div>
                </motion.div>
            )}

            <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-center justify-center gap-y-3 py-3.5 lg:gap-y-0"
            >
                {flatRows.map((item) => {
                    return (
                        <ProjectRow
                            key={item.entry.id}
                            index={item.index}
                            itemsLength={flatRows.length}
                            entry={item.entry}
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                            isChild={item.isChild}
                            parentId={item.parentId}
                        />
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
