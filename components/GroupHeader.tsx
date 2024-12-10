"use client";

import { IEntryGroup } from "lib/interfaces";

export default function GroupHeader({ entry, noBorder, noDescription }: { entry: IEntryGroup, noBorder?: boolean, noDescription?: boolean }) {
    return (
        <div className="top-0 z-50 m-0 flex w-full flex-col items-start justify-center bg-black/80 pb-4 pt-5 backdrop-blur sm:sticky">
            <div className="flex flex-col items-start justify-center gap-3 leading-[21px]">
                <span className="font-neue-haas-grotesk-medium whitespace-normal text-[22px] leading-4 text-white sm:whitespace-nowrap">
                    {entry.title}
                </span>
                {!noDescription && (
                    <span className="font-ibmplex-sans-medium text-sm leading-4 text-neutral-300">
                        {entry.description}
                    </span>
                )}
            </div>
        </div>
    );
}