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
        <div className="relative flex w-full flex-col flex-wrap items-center justify-center">
            <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center sm:sticky">
                <GroupHeader entry={entry} noDescription={false} noBorder={true} titleLink={entry.titleLink} />

                <div className="flex w-full flex-row items-center justify-center">
                    <hr className="my-auto h-px w-full bg-neutral-200 dark:bg-neutral-800" />
                </div>
            </div>

            <div className="flex flex-col">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className={clsx(
                        "grid w-full max-w-screen-2xl items-start justify-center",
                        entry.category === "icons"
                            ? "grid-cols-2 gap-2 pt-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                            : "grid-cols-1 gap-3 pt-3 lg:grid-cols-2",
                    )}
                >
                    {React.Children.toArray(
                        entry.items.map((item, i) => {
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    transition={{ duration: 0.5 }}
                                    id={item.id}
                                    className={clsx(
                                        "group relative z-0 box-content flex flex-col justify-start",
                                    )}
                                >
                                    <a
                                        className={clsx(
                                            "group relative flex flex-col justify-end overflow-hidden bg-gradient-to-t from-white/10 to-transparent object-cover backdrop-blur-sm child:group-hover:scale-105 sm:backdrop-blur-none saturate-0 group-hover:saturate-100 transition-colors ease-linear",
                                            item.link && " cursor-pointer",
                                        )}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={item.link ? item.link : undefined}
                                    >
                                        <Image
                                            alt={item.id}
                                            className={clsx(
                                                "duration-100` block h-full w-full transition-transform delay-0 ease-linear",
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
                                                            "font-bold m-0 overflow-hidden text-ellipsis whitespace-nowrap text-black dark:text-white hover:text-[#9759AE] dark:hover:text-[#FF8200]",
                                                            "block max-w-full",
                                                            item.link &&
                                                            "hover:underline hover:text-[#9759AE] dark:hover:text-[#FF8200]",
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
                                                        {item.title}
                                                    </a>

                                                    {item.credit && (
                                                        <Tooltip
                                                            content={
                                                                item.credit
                                                            }
                                                            position={"top"}
                                                            warn={true}
                                                        >
                                                            <a className="rounded-full bg-[#9759AE]/20 dark:bg-[#FF8200]/20 p-[2px] transition-all duration-300 ease-out hover:bg-[#9759AE]/40 dark:hover:bg-[#FF8200]/40">
                                                                <PiWarningCircleBold
                                                                    size={16}
                                                                    className="min-h-[16px] min-w-[16px] text-[#9759AE] dark:text-[#FF8200] transition-all duration-300 ease-out"
                                                                />
                                                            </a>
                                                        </Tooltip>
                                                    )}
                                                </div>

                                                {item.summary && (
                                                    <span className="font-medium entry-summary w-full text-sm text-neutral-800 dark:text-neutral-300">
                                                        {parse(
                                                            item.summary.join(
                                                                "",
                                                            ),
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
