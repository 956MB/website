"use client";

import { IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import Gallery, { CategoryIcon } from "./Gallery";

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col items-start justify-start w-full py-5 sm:py-3 m-0 gap-2">
			<div className="flex flex-col items-start justify-center gap-[5px] px-[30px]">
				<span className="text-white font-inter-semibold text-lg leading-[18px]">
					{entry.title}
				</span>
				<span className="font-ibmplex-sans-medium text-[13px] leading-4 text-neutral-600">
					{entry.description}
				</span>
			</div>
			<hr className="h-px w-full bg-neutral-800 my-auto" />
		</div>
	);
}

export default function DesignRow({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative">
			<DesignHeader entry={entry} />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 justify-center items-start gap-5 lg:gap-3 w-full px-[30px] pb-[30px]">
				{React.Children.toArray(entry.items.map((item, i) => (
                    <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({ openPortal, closePortal, portal }) => (
                            <React.Fragment>
                                <div
                                    className={clsx(
                                        "relative z-0 flex flex-col justify-start group box-content border border-neutral-700/70 hover:border-neutral-700 rounded-lg overflow-hidden cursor-pointer bg-black/80"
                                    )}
                                    onClick={item.linkBlog ? undefined : openPortal}
                                >
                                    <a
                                        className="flex flex-col relative justify-end group border-b border-neutral-700/70"
                                        href={item.linkBlog ? item.linkBlog : undefined}
                                    >
                                        <Image
                                            alt={item.id}
                                            className="block object-cover w-full h-full aspect-video cursor-pointer"
                                            src={item.images[0].path}
                                            width={item.images[0].width}
                                            height={item.images[0].height}
                                        />
                                    </a>
                                    <div
                                        className={clsx(
                                            "flex flex-col text-start justify-center w-full px-[16px] pb-[16px] pt-[16px] gap-y-2  group-hover:bg-gradient-to-t group-hover:from-neutral-800/60 group-hover:to-transparent",
                                            item.summary && item.summary.length <= 0 ? "h-[53px] min-h-[53px] max-h-[53px]" : null
                                        )}
                                    >
                                        <div className="flex flex-row gap-x-2 items-center justify-start">
                                            <CategoryIcon category={item.category}/>
                                            <span className="text-white font-inter-semibold text-sm truncate">
                                                {item.title}
                                            </span>
                                            {item.tags ? (
                                                <div className="inline-flex flex-row items-end justify-center ml-auto gap-x-2">
                                                    {React.Children.toArray(item.tags?.map((tag, i) => (
                                                        <span
                                                            className={clsx(
                                                                "text-neutral-300 font-inter-semibold text-[11px] py-[2px] px-[6px] bg-white/[9%] rounded-[4px] border border-neutral-800/70 box-content",
                                                                !item.tags ? "opacity-0" : null
                                                            )}
                                                        >
                                                            {tag}
                                                        </span>
                                                    )))}
                                                </div>
                                            ) : null}
                                        </div>
                                        {item.summary &&
                                        item.summary.length > 0 ? (
                                            <a className="text-neutral-300/95 font-inter-medium sm:line-clamp-3 leading-[18px] text-[13px]">
                                                {item.summary}
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                                {portal(
                                    <Gallery item={item} closeAction={closePortal} />
                                )}
                            </React.Fragment>
                        )}
                    </PortalWithState>
                )))}
			</div>
		</div>
	);
}
