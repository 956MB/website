"use client";

import clsx from "clsx";
import Parse from "html-react-parser";
import { IEntry, IEntryGroup } from "lib/interfaces";
import React, { useState, useEffect, useRef } from "react";
import GroupHeader from "./GroupHeader";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { defaultExpandedIds } from "lib/projects";

const langColors: { [key: string]: string } = {
    JavaScript: "bg-[#F1E05A]",
    TypeScript: "bg-[#3078C6]",
    Python: "bg-[#3572A5]",
    Lua: "bg-[#000080]",
    C: "bg-[#555555]",
    "C++": "bg-[#F34B7D]",
    "C#": "bg-[#188601]",
    Rust: "bg-[#DEA584]",
    Swift: "bg-[#F05137]",
    CSS: "bg-[#663399]",
    "none": "bg-white/[10%]",
};

export function ProjectItem({ index, itemsLength, entry, section }: { index: number, itemsLength: number, entry: IEntry, section: string }) {
    const [isExpanded, setIsExpanded] = useState(
        defaultExpandedIds.includes(entry.id)
    );
    const summaryRef = useRef<HTMLSpanElement | null>(null);
    const [showChevron, setShowChevron] = useState(false);

    useEffect(() => {
        const checkMultiline = () => {
            if (summaryRef.current) {
                summaryRef.current.style.whiteSpace = 'normal';
                summaryRef.current.style.overflow = 'visible';

                const lineHeight = parseInt(window.getComputedStyle(summaryRef.current).lineHeight);
                const height = summaryRef.current.offsetHeight;
                summaryRef.current.style.whiteSpace = '';
                summaryRef.current.style.overflow = '';

                setShowChevron(height > lineHeight * 1.5);
            }
        };

        const timer = setTimeout(checkMultiline, 0);
        return () => clearTimeout(timer);
    }, [entry.summary]);

    return (
        <div
            className={clsx(
                "flex w-full max-w-screen-lg flex-col items-stretch justify-between gap-x-3 gap-y-[4px] sm:gap-y-[6px] lg:flex-row",
            )}
        >
            <div className={clsx(
                "flex items-center lg:items-start lg:w-[320px] lg:flex-shrink-0 min-h-full relative group mb-[1px]"
            )}>
                {entry.date &&
                    <span className={clsx("noselect text-neutral-200 font-medium mr-3 text-sm leading-4 lg:mt-[6px] lg:w-10 lg:flex-shrink-0", entry.nested && "lg:text-transparent")}>
                        {entry.date}
                    </span>
                }
                <div
                    className={clsx("relative flex h-full items-center justify-center")}
                    title={entry.lang}
                >
                    <div
                        className={clsx(
                            "w-[10px] h-[10px] lg:absolute lg:top-0 lg:bottom-0 lg:h-full lg:w-[4px] rounded-full lg:rounded-none border lg:border-none border-white/[15%] group-hover:w-[6px] transition-all ease-in-out",
                            langColors[entry.lang || 'none'],
                            index === 0 && "lg:rounded-tl-full lg:rounded-tr-full",
                            index === itemsLength - 1 && "lg:rounded-bl-full lg:rounded-br-full",
                        )}
                    />
                </div>
                <div className="relative flex flex-row gap-x-[5px] w-full h-full items-start justify-start">
                    <a
                        href={entry.link || '#'}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={clsx(
                            "font-semibold lg:max-w-[256px] text-[15px] leading-4 hover:text-[#FF8200] text-white lg:mt-[6px] pl-3 lg:pl-4",
                            entry.link ? "hover:underline hover:text-[#FF8200]" : "no-underline",
                        )}
                    >
                        {entry.title}
                    </a>
                </div>
            </div>
            <div className={clsx(
                "flex w-full min-w-0 items-start justify-start gap-x-2",
            )}>
                <span
                    ref={summaryRef}
                    className={clsx(
                        "font-normal sm:font-medium leading-0 flex-1 text-sm text-neutral-300 lg:pb-2 lg:pt-[1px] lg:text-[15px] lg:mt-[3px]",
                        "min-w-0",
                        !isExpanded && "xl:truncate",
                    )}
                >
                    {Parse((entry.summary || '').toString())}
                </span>
                {showChevron && (
                    <div
                        className="px-2 py-1 text-neutral-300 cursor-pointer hover:text-[#FF8200] rounded-full hidden xl:block"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <FiChevronDown
                            className={clsx(
                                "flex flex-shrink-0 transition-transform duration-200 mt-[5px]",
                                isExpanded ? "rotate-180" : "rotate-0"
                            )}
                            size={17}
                        />
                    </div>
                )}
            </div>
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
                className="flex w-full flex-col items-center justify-center gap-y-6 py-3 lg:gap-y-0 lg:py-2"
            >
                {entry.items.map((item, i) => (
                    <ProjectItem key={i} index={i} itemsLength={entry.items.length} entry={item} section={entry.title} />
                ))}
            </div>
        </div>
    );
}
