"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { IEntryGroup } from "lib/interfaces";
import Image from "next/image";
import React from "react";
import { PortalWithState } from "react-portal";
import Gallery, { CategoryIcon } from "./Gallery";

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
    return (
        <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center bg-black/90 pb-4 pt-5 backdrop-blur sm:sticky">
            <div className="flex flex-col items-start justify-center gap-[7px] leading-[21px]">
                <span className="font-neue-haas-grotesk-medium whitespace-normal text-[21px] leading-4 text-white sm:whitespace-nowrap">
                    {entry.title}
                </span>
                <span className="font-ibmplex-sans-medium text-sm leading-4 text-neutral-500">
                    {entry.description}
                </span>
            </div>
        </div>
    );
}

export default function DesignRow({
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
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <div className="relative flex w-full max-w-screen-2xl flex-col flex-wrap items-center justify-center gap-y-0">
            {!noHeader && <DesignHeader entry={entry} />}

            <div className="flex flex-col gap-y-2">
                <div className="flex w-full flex-row items-center justify-center">
                    <hr className="my-auto h-px w-full bg-neutral-800" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className={clsx(
                        "grid w-full grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                    )}
                >
                    {React.Children.toArray(
                        entry.items.map((item, i) => (
                            <PortalWithState closeOnOutsideClick closeOnEsc>
                                {({ openPortal, closePortal, portal }) => (
                                    <React.Fragment>
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            transition={{ duration: 0.5 }}
                                            id={item.id}
                                            className={clsx(
                                                "group relative z-0 box-content flex flex-col justify-start overflow-hidden rounded saturate-0 hover:saturate-100",
                                            )}
                                            onClick={
                                                item.linkBlog || !item.items
                                                    ? undefined
                                                    : openPortal
                                            }
                                        >
                                            {item.new == true && (
                                                <div className="absolute right-2 top-2 z-20 m-0 flex flex-row items-center justify-center gap-1 rounded-full bg-black/50 backdrop-blur-lg">
                                                    <span className="font-neue-haas-grotesk-medium cursor-default rounded-full border border-white/20 px-[7px] pb-[5px] pt-[6px] text-[12px] leading-[12px] text-white/90">
                                                        {"NEW"}
                                                    </span>
                                                </div>
                                            )}

                                            <a
                                                className="group relative flex flex-col justify-end overflow-hidden"
                                                href={
                                                    item.linkBlog
                                                        ? item.linkBlog
                                                        : undefined
                                                }
                                            >
                                                <Image
                                                    alt={item.id}
                                                    className={clsx(
                                                        "block aspect-square h-full w-full object-cover transition-transform duration-75 ease-in-out hover:scale-105",
                                                        (item.items ||
                                                            item.linkBlog) &&
                                                            "cursor-pointer",
                                                    )}
                                                    src={
                                                        item.thumbnail
                                                            ? item.thumbnail
                                                                  .path
                                                            : item.items
                                                              ? item.items[0]
                                                                    .path
                                                              : ""
                                                    }
                                                    width={
                                                        item.thumbnail
                                                            ? item.thumbnail
                                                                  .width
                                                            : item.items
                                                              ? item.items[0]
                                                                    .width
                                                              : 0
                                                    }
                                                    height={
                                                        item.thumbnail
                                                            ? item.thumbnail
                                                                  .height
                                                            : item.items
                                                              ? item.items[0]
                                                                    .height
                                                              : 0
                                                    }
                                                    loading="eager"
                                                    unoptimized={true}
                                                />
                                            </a>
                                            <div
                                                className={clsx(
                                                    "pointer-events-none absolute bottom-0 z-10 flex w-full flex-col justify-end gap-y-2 bg-gradient-to-t from-black/90 to-black/50 px-2 py-3 text-start opacity-100 group-hover:opacity-100 sm:justify-center sm:from-black/80 sm:to-black/50 sm:transition-opacity sm:duration-200 lg:h-full lg:py-4 lg:opacity-0",
                                                    item.category ==
                                                        "photoshop" &&
                                                        "pl-4 pr-4",
                                                    item.summary &&
                                                        item.summary.length <=
                                                            0 &&
                                                        "h-[53px] max-h-[53px] min-h-[53px]",
                                                )}
                                            >
                                                <div
                                                    className={clsx(
                                                        "flex flex-row items-center justify-start gap-[3px] overflow-hidden sm:flex-col sm:justify-center lg:gap-1",
                                                        item.category ==
                                                            "photoshop" &&
                                                            "gap-x-3",
                                                    )}
                                                >
                                                    <div className="hidden sm:block">
                                                        <CategoryIcon
                                                            large={false}
                                                            category={
                                                                item.category
                                                            }
                                                        />
                                                    </div>

                                                    <span
                                                        className={clsx(
                                                            "font-neue-haas-grotesk-medium whitespace-nowrap text-center text-base text-white sm:mt-[6px] sm:w-full sm:text-xl sm:leading-5 lg:whitespace-normal",
                                                            !item.date &&
                                                                "sm:mb-[34px]",
                                                        )}
                                                    >
                                                        {item.title}
                                                    </span>

                                                    {item.date && (
                                                        <span
                                                            className={
                                                                "font-neue-haas-grotesk-medium text-center text-sm text-white/70 sm:w-full sm:leading-5 lg:mb-2"
                                                            }
                                                        >
                                                            {item.date}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                        {portal(
                                            <Gallery
                                                item={item}
                                                closeAction={closePortal}
                                            />,
                                        )}
                                    </React.Fragment>
                                )}
                            </PortalWithState>
                        )),
                    )}
                </motion.div>
            </div>
        </div>
    );
}
