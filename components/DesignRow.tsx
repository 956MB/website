"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { IEntryGroup } from "lib/interfaces";
import {
    containerVariants,
    generateRandomDelays,
    itemVariants,
} from "lib/util";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import GroupHeader from "./GroupHeader";

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "base">("base");

    useEffect(() => {
        const updateBreakpoint = () => {
            if (window.innerWidth >= 768) {
                setBreakpoint("md");
            } else if (window.innerWidth >= 640) {
                setBreakpoint("sm");
            } else {
                setBreakpoint("base");
            }
        };

        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);
        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return breakpoint;
}

function getColumns(breakpoint: "sm" | "md" | "base"): number {
    switch (breakpoint) {
        case "md":
            return 3;
        case "sm":
            return 2;
        default:
            return 1;
    }
}

function getRadius(
    index: number,
    totalItems: number,
    columns: number,
): { style: React.CSSProperties; className: string } {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const totalRows = Math.ceil(totalItems / columns);
    const lastRow = totalRows - 1;
    const itemsInLastRow = totalItems - lastRow * columns;
    const isFirstRow = row === 0;
    const isLastRow = row === lastRow;
    const isFirstCol = col === 0;
    const isLastColInRow =
        col === columns - 1 || (isLastRow && col === itemsInLastRow - 1);
    const cellBelowIndex = index + columns;
    const hasCellBelow = cellBelowIndex < totalItems;
    const topLeft = isFirstRow && isFirstCol;
    const topRight = isFirstRow && isLastColInRow;
    const bottomLeft =
        (isLastRow && isFirstCol) || (isFirstCol && !hasCellBelow);
    const bottomRight =
        (isLastRow && isLastColInRow) || (isLastColInRow && !hasCellBelow);

    const radius = "0rem"; // 0.659rem
    const style: React.CSSProperties = {
        borderTopLeftRadius: topLeft ? radius : "0",
        borderTopRightRadius: topRight ? radius : "0",
        borderBottomLeftRadius: bottomLeft ? radius : "0",
        borderBottomRightRadius: bottomRight ? radius : "0",
    };

    return {
        style,
        className: "overflow-hidden",
    };
}

export default function DesignRow({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    const pathname = usePathname() || "/";
    const breakpoint = useBreakpoint();
    const columns = getColumns(breakpoint);

    const randomDelays = useMemo(
        () => generateRandomDelays(entry.items.length),
        [entry.items.length],
    );

    return (
        <div className="relative flex w-full max-w-screen-lg flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
            {!noHeader && (
                <GroupHeader
                    entry={entry}
                    noDescription={false}
                    titleLink={entry.titleLink}
                />
            )}

            <div className="flex w-full flex-col gap-y-3.5">
                <div className="flex w-full flex-row items-center justify-center">
                    <hr className="my-auto h-px w-full border-b border-dotted border-neutral-200 bg-transparent dark:border-neutral-800" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className={clsx(
                        "grid w-full grid-cols-1 items-start justify-center gap-px sm:grid-cols-2 md:grid-cols-3",
                        "min-h-0",
                    )}
                >
                    {entry.items.map((item, i) => {
                        const cornerRadius = getRadius(
                            i,
                            entry.items.length,
                            columns,
                        );

                        return (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                transition={{
                                    duration: 0.5,
                                    delay: randomDelays[i],
                                }}
                                id={item.id}
                                className={clsx(
                                    "group relative z-0 box-content flex flex-col justify-start saturate-0 hover:saturate-100",
                                    "aspect-square",
                                )}
                                style={cornerRadius.style}
                            >
                                {item.new === true && (
                                    <div className="absolute right-2 top-2 z-20 m-0 flex flex-row items-center justify-center gap-1 rounded-full bg-black/50 backdrop-blur-lg">
                                        <span className="cursor-default rounded-full border border-white/20 px-[7px] pb-[5px] pt-[6px] text-[12px] font-medium leading-[12px] text-white/90">
                                            {"NEW"}
                                        </span>
                                    </div>
                                )}

                                <Link
                                    className="group relative flex flex-col justify-end"
                                    href={
                                        item.linkBlog
                                            ? item.linkBlog
                                            : item.items &&
                                                item.items.length > 0
                                              ? `${pathname}/${item.id}`
                                              : "#"
                                    }
                                >
                                    <div
                                        className={clsx(
                                            "relative aspect-square w-full bg-neutral-100 dark:bg-neutral-900",
                                            cornerRadius.className,
                                        )}
                                        style={cornerRadius.style}
                                    >
                                        <Image
                                            alt={item.id}
                                            className={clsx(
                                                "block aspect-square h-full w-full select-none object-cover transition-transform duration-75 ease-in-out hover:scale-105",
                                                (item.items || item.linkBlog) &&
                                                    "!cursor-pointer",
                                            )}
                                            src={
                                                item.thumbnail
                                                    ? item.thumbnail.path
                                                    : item.items
                                                      ? item.items[0].path
                                                      : ""
                                            }
                                            width={
                                                item.thumbnail
                                                    ? item.thumbnail.width
                                                    : item.items
                                                      ? item.items[0].width
                                                      : 0
                                            }
                                            height={
                                                item.thumbnail
                                                    ? item.thumbnail.height
                                                    : item.items
                                                      ? item.items[0].height
                                                      : 0
                                            }
                                            loading="eager"
                                            unoptimized={true}
                                        />
                                    </div>
                                </Link>
                                <div
                                    className={clsx(
                                        "pointer-events-none absolute bottom-0 z-10 flex h-1/2 w-full flex-col justify-end gap-y-2 bg-gradient-to-t from-black/80 to-black/0 px-2 py-3 text-start opacity-100 group-hover:opacity-100 sm:h-full sm:justify-center sm:from-black/80 sm:to-black/20 sm:transition-opacity sm:duration-200 lg:py-4 lg:opacity-0",
                                        item.category === "photoshop" &&
                                            "pl-4 pr-4",
                                        item.summary &&
                                            item.summary.length <= 0 &&
                                            "h-[53px] max-h-[53px] min-h-[53px]",
                                    )}
                                    style={cornerRadius.style}
                                >
                                    <div
                                        className={clsx(
                                            "flex flex-row items-center justify-start gap-2 overflow-hidden sm:flex-col sm:justify-center lg:gap-1",
                                            item.category === "photoshop" &&
                                                "gap-x-3",
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                "font-pixel-square pointer-events-none select-none text-center text-base font-bold text-white sm:mt-[6px] sm:w-full sm:text-xl sm:leading-5 lg:whitespace-normal",
                                            )}
                                        >
                                            {item.title}
                                        </span>

                                        {item.date && (
                                            <span
                                                className={
                                                    "pointer-events-none select-none text-center font-mono text-sm text-white/70 sm:w-full sm:leading-5 lg:mb-2"
                                                }
                                            >
                                                {item.date}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
