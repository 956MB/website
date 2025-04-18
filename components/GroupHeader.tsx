"use client";

import { IEntryGroup } from "lib/interfaces";
import { FiArrowUpRight } from "react-icons/fi";

export default function GroupHeader({ entry, noBorder, noDescription, titleLink }: { entry: IEntryGroup, noBorder?: boolean, noDescription?: boolean, titleLink?: string }) {
    return (
        <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center bg-white/90 dark:bg-black/80 pb-3 backdrop-blur sm:sticky">
            <div className="flex flex-col items-start justify-center gap-2 leading-[21px]">
                <span className="font-bold whitespace-normal align-baseline text-[23px] leading-6 text-black dark:text-white sm:whitespace-nowrap">
                    {titleLink ? (
                        <a
                            href={titleLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="p-link group inline-flex items-center"
                        >
                            {entry.title}
                            <FiArrowUpRight
                                size={18}
                                className="ml-1 text-neutral-500 group-hover:text-black dark:group-hover:text-white"
                            />
                        </a>
                    ) : entry.title}
                </span>
                {!noDescription && (
                    <span className="font-medium italic text-sm leading-4 text-neutral-800 dark:text-neutral-300">
                        {entry.description}
                    </span>
                )}
            </div>
        </div>
    );
}
