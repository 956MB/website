"use client";

import clsx from "clsx";
import Parse from "html-react-parser";
import { IEntry, IEntryGroup } from "lib/interfaces";
import Image from "next/image";
import React from "react";
import { XLg } from "react-bootstrap-icons";
import { PortalWithState } from "react-portal";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";
import GroupHeader from "./GroupHeader";
import { FiArrowUpRight } from "react-icons/fi";

export function ProjectItem({ index, itemsLength, entry, section }: { index: number, itemsLength: number, entry: IEntry, section: string }) {
    const langColors: { [key: string]: string } = {
        JavaScript: "bg-[#F1E05A]",
        TypeScript: "bg-[#3078C6]",
        Python: "bg-[#3572A5]",
        Lua: "bg-[#000080]",
        "C++": "bg-[#F34B7D]",
        "C#": "bg-[#188601]",
        Rust: "bg-[#DEA584]",
        Swift: "bg-[#F05137]",
        CSS: "bg-[#663399]",
        "none": "bg-white/[15%]",
    };

    return (
        <div 
            className="flex w-full max-w-screen-lg flex-col items-stretch justify-between gap-x-3 gap-y-[6px] sm:gap-y-[7px] lg:flex-row"
        >
            <div className={clsx(
                "flex items-center lg:items-start lg:w-[262px] lg:flex-shrink-0 min-h-full relative"
            )}>
                <span className="font-ibmplex-sans-medium noselect mr-3 font-mono text-sm leading-4 text-neutral-400 lg:mt-[6px] lg:w-10 lg:flex-shrink-0">
                    {entry.date}
                </span>
                <div
                    className={clsx(
                        "w-[10px] h-[10px] lg:top-0 lg:bottom-0 lg:h-full mr-3 lg:w-[4px] rounded-full lg:rounded-none border lg:border-none border-white/[15%]",
                        langColors[entry.lang || 'none'],
                        index === 0 && "lg:rounded-tl-full lg:rounded-tr-full",
                        index === itemsLength - 1 && "lg:rounded-bl-full lg:rounded-br-full"
                    )}
                    title={entry.lang}
                />
                <div className="group relative flex flex-row items-center justify-center gap-x-[5px]">
                    <a
                        href={entry.link || '#'}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={clsx(
                            "font-neue-haas-grotesk-medium max-w-[200px] text-base leading-4 text-white transition-colors lg:mt-[6px]",
                            entry.link ? "hover:underline hover:text-neutral-300" : "no-underline noselect"
                        )}
                    >
                        {entry.title}
                    </a>
                    <div className="absolute -right-5 block lg:mt-[6px] lg:hidden group-hover:lg:block">
                        { entry.link && (
                            <FiArrowUpRight
                                size={16}
                                className="text-neutral-500 group-hover:text-neutral-400"
                            />
                        )}
                    </div>
                </div>
            </div>
            <span className="font-ibmplex-sans-medium leading-0 flex-1 text-sm text-neutral-300 lg:pb-2 lg:pt-[1px] lg:text-[15px]">
                <span className="mr-[9px] hidden tracking-[-0.2em] lg:inline">--</span> {Parse((entry.summary || '').toString())}
            </span>
        </div>
    );
}

export default function ProjectRow({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    return (
        <div className="relative flex w-full max-w-screen-2xl flex-col flex-wrap items-center justify-center gap-y-0">
            {!noHeader && 
                <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center sm:sticky">
                    <GroupHeader entry={entry} noDescription={false} noBorder={true} titleLink={entry.titleLink} />

                    <div className="flex w-full flex-row items-center justify-center">
                        <hr className="my-auto h-px w-full bg-neutral-800" />
                    </div>
                </div>
            }

            <div 
                className="flex w-full flex-col items-center justify-center gap-y-6 py-3 lg:gap-y-[1px] lg:py-2"
            >
                {entry.items.map((item, i) => (
                    <ProjectItem key={i} index={i} itemsLength={entry.items.length} entry={item} section={entry.title} />
                ))}
            </div>
        </div>
    );
}
