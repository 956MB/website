"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { IEntryGroup } from "lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import GroupHeader from "./GroupHeader";

export default function DesignRow({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    const pathname = usePathname() || "/";
    const randomDelays = useMemo(() => {
        const delays = entry.items.map((_, index) => index * 0.1);
        for (let i = delays.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [delays[i], delays[j]] = [delays[j], delays[i]];
        }
        return delays;
    }, [entry.items]);

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <div className="relative flex w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-5">
            {!noHeader && (
                <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center sm:sticky">
                    <GroupHeader
                        entry={entry}
                        noDescription={false}
                        titleLink={entry.titleLink}
                    />
                </div>
            )}

            <div className="flex flex-col gap-y-2">
                <div className="flex w-full flex-row items-center justify-center">
                    <hr className="my-auto h-px w-full bg-neutral-200 dark:bg-neutral-800" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className={clsx(
                        "grid w-full grid-cols-1 items-start justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                    )}
                >
                    {entry.items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            transition={{
                                duration: 0.5,
                                delay: randomDelays[i],
                            }}
                            id={item.id}
                            className={clsx(
                                "group relative z-0 box-content flex flex-col justify-start overflow-hidden saturate-0 hover:saturate-100",
                            )}
                        >
                            {item.new === true && (
                                <div className="absolute right-2 top-2 z-20 m-0 flex flex-row items-center justify-center gap-1 rounded-full bg-black/50 backdrop-blur-lg">
                                    <span className="cursor-default rounded-full border border-white/20 px-[7px] pb-[5px] pt-[6px] text-[12px] font-medium leading-[12px] text-white/90">
                                        {"NEW"}
                                    </span>
                                </div>
                            )}

                            <Link
                                className="group relative flex flex-col justify-end overflow-hidden"
                                href={
                                    item.linkBlog
                                        ? item.linkBlog
                                        : item.items && item.items.length > 0
                                          ? `${pathname}/${item.id}`
                                          : "#"
                                }
                            >
                                <Image
                                    alt={item.id}
                                    className={clsx(
                                        "block aspect-square h-full w-full object-cover transition-transform duration-75 ease-in-out hover:scale-105",
                                        (item.items || item.linkBlog) &&
                                            "cursor-pointer",
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
                                            "text-center text-base font-bold text-white sm:mt-[6px] sm:w-full sm:text-xl sm:leading-5 lg:whitespace-normal",
                                            !item.date && "sm:mb-[34px]",
                                        )}
                                    >
                                        {item.title}
                                    </span>

                                    {item.date && (
                                        <span
                                            className={
                                                "text-center text-sm font-medium text-white/70 sm:w-full sm:leading-5 lg:mb-2"
                                            }
                                        >
                                            {item.date}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
