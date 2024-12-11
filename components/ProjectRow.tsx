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

export function ProjectItem({ entry, section }: { entry: IEntry, section: string }) {
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
    };

    return (
        <div 
            className="flex flex-col lg:flex-row items-start justify-between w-full max-w-screen-lg gap-y-[6px] sm:gap-y-2 gap-x-3"
        >
            <div className={clsx(
                "flex items-center lg:w-20 lg:flex-shrink-0",
                section === "Mixed" && "lg:w-64",
                section === "Neostuff" && "lg:w-44", 
                section === "Personal" && "lg:w-24",
            )}>
                {entry.date && (
                    <span className="font-ibmplex-sans-medium text-sm leading-4 mr-3 text-neutral-400 font-mono noselect">
                        {entry.date}
                    </span>
                )}
                {(entry.lang && entry.lang !== 'none') && (
                    <div
                        className={clsx(
                            "w-[10px] h-[10px] rounded-full border border-white/10 mr-2",
                            langColors[entry.lang] || "bg-gray-400"
                        )}
                        title={entry.lang}
                    />
                )}
                <div className="flex flex-row items-center gap-x-[5px] justify-center group">
                    <a
                        href={entry.link || '#'}
                        className={clsx(
                            "font-neue-haas-grotesk-medium max-w-[200px] text-base leading-4 text-white transition-colors",
                            entry.link ? "hover:underline hover:text-neutral-300" : "no-underline noselect"
                        )}
                    >
                        {entry.title}
                    </a>
                    <div className="block lg:hidden">
                        { entry.link && (
                            <FiArrowUpRight
                                size={18}
                                className="text-neutral-500"
                            />
                        )}
                    </div>
                </div>
            </div>
            <span className="font-ibmplex-sans-medium flex-1 text-sm lg:text-[15px] leading-0 text-neutral-300">
                <span className="hidden lg:inline tracking-[-0.2em] mr-[9px]">--</span> {Parse((entry.summary || '').toString())}
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
                <div className="flex flex-col items-start justify-center w-full top-0 z-50 m-0 sm:sticky">
                    <GroupHeader entry={entry} noDescription={false} noBorder={true} />

                    <div className="flex w-full flex-row items-center justify-center">
                        <hr className="my-auto h-px w-full bg-neutral-800" />
                    </div>
                </div>
            }

            <div 
                className="flex flex-col justify-center items-center py-3 gap-y-6 lg:gap-y-2 w-full"
            >
                {entry.items.map((item, i) => (
                    <ProjectItem key={i} entry={item} section={entry.title} />
                ))}
            </div>
        </div>
    );
}
