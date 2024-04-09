"use client";

import clsx from "clsx";
import { IEntryGroupLinks } from "lib/interfaces";
import Image from "next/image";
import React from "react";

export function RecentHeader() {
    return (
        <div className="sticky top-0 z-50 m-0 flex w-full flex-col items-start justify-start gap-5 bg-black/90 backdrop-blur sm:gap-4">
            <div className="flex w-full flex-row items-center justify-center">
                <hr className="my-auto h-px w-full bg-neutral-800" />
            </div>
        </div>
    );
}

export default function RecentRow({ entry }: { entry: IEntryGroupLinks }) {
    return (
        <div className="relative flex w-full flex-col flex-wrap items-center justify-center sm:mt-2 sm:max-w-4xl">
            <RecentHeader />

            <div className="inline-flex w-full flex-col items-start justify-center gap-5 pt-5 sm:pt-8">
                {React.Children.toArray(
                    entry.items.map((item, i) => (
                        <a
                            className="group group relative z-0 box-content flex h-full max-h-28 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-black hover:border-neutral-700"
                            id={item.id}
                            href={entry.links[i]}
                        >
                            <Image
                                alt={item.id}
                                className="absolute aspect-square h-full w-full cursor-pointer object-cover transition-transform duration-75 ease-in-out hover:scale-105"
                                src={
                                    item.useLinkPreview?.path ||
                                    item.thumbnail?.path ||
                                    (item.items ? item.items[0].path : "")
                                }
                                width={
                                    item.useLinkPreview?.width ||
                                    item.thumbnail?.width ||
                                    (item.items ? item.items[0].width : 0)
                                }
                                height={
                                    item.useLinkPreview?.height ||
                                    item.thumbnail?.height ||
                                    (item.items ? item.items[0].height : 0)
                                }
                                loading="eager"
                            />
                            <div
                                className={clsx(
                                    "z-50 flex h-full w-full flex-col justify-center gap-y-2 bg-gradient-to-l from-black/80 via-black/50 to-black/30 px-5 py-6 text-start hover:from-black/40 hover:to-black/10",
                                )}
                            >
                                <div className="flex flex-row items-center justify-start gap-x-3">
                                    <span className="font-neue-haas-grotesk-medium text-md truncate text-white">
                                        {item.title}
                                    </span>

                                    {item.date && (
                                        <div className="pointer-events-none z-20 m-0 ml-auto flex flex-row items-center justify-center gap-1 rounded-full bg-black/30 backdrop-blur-lg">
                                            <span className="font-neue-haas-grotesk-medium cursor-default rounded-full border border-white/20 px-[7px] pb-[5px] pt-[6px] text-[12px] leading-[12px] text-white/90">
                                                {item.date}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </a>
                    )),
                )}
            </div>
        </div>
    );
}
