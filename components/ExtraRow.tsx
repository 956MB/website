"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { IEntryGroup } from "lib/interfaces";
import Image from "next/image";
import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import GroupHeader from "./GroupHeader";
import Tooltip from "./Tooltip";

export default function ExtraRow({ entry }: { entry: IEntryGroup }) {
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <div className="relative flex w-full flex-col flex-wrap items-center justify-center gap-y-0">
            <GroupHeader
                entry={entry}
                noDescription={false}
                titleLink={entry.titleLink}
            />

            <div className="flex flex-col">
                <div className="flex w-full flex-row items-center justify-center">
                    <hr className="my-auto h-px w-full border-b border-dotted border-neutral-200 bg-transparent dark:border-neutral-800" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className={clsx(
                        "grid w-full max-w-screen-lg items-start justify-center",
                        entry.category === "icons"
                            ? "grid-cols-2 gap-2 pt-3.5 md:grid-cols-3 lg:grid-cols-4"
                            : "grid-cols-1 gap-3 pt-3.5 lg:grid-cols-2",
                    )}
                >
                    {React.Children.toArray(
                        entry.items.map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    id={item.id}
                                    className={clsx(
                                        "group relative z-0 box-content flex flex-col justify-start",
                                    )}
                                >
                                    <a
                                        className={clsx(
                                            "duration-50 group relative flex select-none flex-col justify-end overflow-hidden object-cover saturate-0 backdrop-blur-sm transition-opacity ease-linear lg:border border-transparent dark:group-hover:border-o0 group-hover:border-p0 group-hover:saturate-100 sm:backdrop-blur-none",
                                            item.link && " cursor-pointer",
                                            item.items?.[0].saturation ===
                                                true && "saturate-100",
                                        )}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={item.link ? item.link : undefined}
                                    >
                                        <div
                                            className={clsx(
                                                "relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900",
                                                item.category === "icon"
                                                    ? "aspect-square"
                                                    : "aspect-video",
                                            )}
                                        >
                                            <Image
                                                alt={item.id}
                                                className={clsx(
                                                    "duration-50 block h-full w-full transition-transform delay-0 ease-linear group-hover:scale-105",
                                                    item.category === "icon"
                                                        ? "aspect-square object-contain"
                                                        : "aspect-video object-cover sm:aspect-video",
                                                )}
                                                src={
                                                    item.items
                                                        ? item.items[0].path
                                                        : ""
                                                }
                                                width={
                                                    item.items
                                                        ? item.items[0].width
                                                        : 0
                                                }
                                                height={
                                                    item.items
                                                        ? item.items[0].height
                                                        : 0
                                                }
                                                loading="eager"
                                                unoptimized={true}
                                            />
                                        </div>
                                    </a>
                                    <div
                                        className={clsx(
                                            "z-10 flex w-full flex-col justify-center gap-y-2 pb-[16px] pt-[10px] text-start",
                                            item.summary &&
                                                item.summary.length <= 0 &&
                                                "h-[53px] max-h-[53px] min-h-[53px]",
                                        )}
                                    >
                                        <div className="flex w-full flex-row items-start justify-start gap-x-2">
                                            <div className="flex w-full flex-col items-start justify-start gap-y-1">
                                                <div className="flex w-full flex-row items-center justify-start gap-1">
                                                    <a
                                                        className={clsx(
                                                            "m-0 overflow-hidden text-ellipsis whitespace-nowrap font-pixel-square font-bold text-black transition-colors duration-100 hover:text-p0 dark:text-white dark:hover:text-o0",
                                                            "block max-w-full",
                                                            item.link &&
                                                                "hover:underline group-hover:text-p0 dark:group-hover:text-o0",
                                                            item.category ===
                                                                "wallpaper"
                                                                ? "text-base sm:text-lg"
                                                                : "text-base",
                                                        )}
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        href={
                                                            item.link
                                                                ? item.link
                                                                : undefined
                                                        }
                                                    >
                                                        {parse(item.title)}
                                                    </a>

                                                    {item.credit && (
                                                        <Tooltip
                                                            content={
                                                                item.credit
                                                            }
                                                            position={"top"}
                                                            warn={true}
                                                            groupHover={true}
                                                        >
                                                            <a className="rounded-full bg-[#9759AE]/20 p-[2px] transition-all duration-300 ease-out hover:bg-[#9759AE]/40 dark:bg-[#FF8200]/20 dark:hover:bg-[#FF8200]/40">
                                                                {PiWarningCircleBold(
                                                                    {
                                                                        size: 16,
                                                                        className:
                                                                            "min-h-[16px] min-w-[16px] text-p0 transition-all duration-300 ease-out dark:text-o0",
                                                                    },
                                                                )}
                                                            </a>
                                                        </Tooltip>
                                                    )}
                                                </div>

                                                {item.summary && (
                                                    <span className="entry-summary w-full font-pixel-square text-sm text-neutral-800 dark:text-neutral-350">
                                                        {parse(
                                                            (
                                                                item.summary.join(
                                                                    "",
                                                                ) || ""
                                                            ).toString(),
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }),
                    )}
                </motion.div>
            </div>
        </div>
    );
}
