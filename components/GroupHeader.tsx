"use client";

import { IEntryGroup } from "lib/interfaces";
import { FiArrowUpRight } from "react-icons/fi";

export default function GroupHeader({
    entry,
    noDescription,
    titleLink,
}: {
    entry: IEntryGroup;
    noDescription?: boolean;
    titleLink?: string;
}) {
    return (
        <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center bg-white/90 py-3 backdrop-blur dark:bg-black/80 sm:sticky">
            <div className="flex flex-col items-start justify-center gap-2 leading-[21px]">
                <span className="whitespace-normal align-baseline text-[23px] font-bold leading-6 text-black dark:text-white sm:whitespace-nowrap">
                    {titleLink ? (
                        <a
                            href={titleLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="p-link group inline-flex items-center"
                        >
                            {entry.title}
                            {FiArrowUpRight({
                                size: 18,
                                className:
                                    "ml-1 text-neutral-500 group-hover:text-black dark:group-hover:text-white",
                            })}
                        </a>
                    ) : (
                        entry.title
                    )}
                </span>
                {!noDescription && (
                    <span className="text-sm font-medium italic leading-4 text-neutral-800 dark:text-neutral-350">
                        {entry.description}
                    </span>
                )}
            </div>
        </div>
    );
}
