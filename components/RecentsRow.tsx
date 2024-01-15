"use client";

import { IEntryGroup, IEntryGroupLinks } from "lib/interfaces";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Gallery, { CategoryIcon } from "./Gallery";
import Tooltip from "./Tooltip";

export function RecentHeader() {
	return (
		<div className="flex flex-col sticky top-0 items-start justify-start w-full m-0 gap-5 sm:gap-4 z-50 bg-black/90 backdrop-blur">
			<div className="flex flex-row items-center justify-center w-full">
				<hr className="h-px w-full max-w-2xl bg-neutral-800 my-auto" />
			</div>
		</div>
	);
}

export default function RecentRow({ entry }: { entry: IEntryGroupLinks }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center sm:max-w-4xl sm:mt-2">
			<RecentHeader />

			<div className="inline-flex flex-col justify-center items-start gap-5 w-full pt-5 sm:pt-8">
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<a
							className="flex flex-col relative group z-0 h-full w-full max-h-28 border border-neutral-800 hover:border-neutral-700 bg-black overflow-hidden justify-center items-center group box-content cursor-pointer rounded-lg"
							id={item.id}
							href={entry.links[i]}
						>
							<Image
								alt={item.id}
								className="absolute object-cover w-full h-full aspect-square cursor-pointer ease-in-out transition-transform duration-75 hover:scale-105"
								src={
									item.useLinkPreview?.path ||
                                    item.thumbnail?.path ||
                                    item.images[0].path
								}
								width={
									item.useLinkPreview?.width ||
                                    item.thumbnail?.width ||
                                    item.images[0].width
								}
								height={
									item.useLinkPreview?.height ||
                                    item.thumbnail?.height ||
                                    item.images[0].height
								}
								loading="eager"
							/>
							<div
								className={clsx(
									"z-50 flex flex-col text-start justify-center w-full h-full py-6 px-5 gap-y-2 bg-gradient-to-l from-black/80 via-black/50 to-black/30 hover:from-black/40 hover:to-black/10"
								)}
							>
								<div className="flex flex-row gap-x-3 items-center justify-start">
									<span className="text-white font-neue-haas-grotesk-medium text-md truncate">
										{item.title}
									</span>

									{item.date && (
										<div className="flex flex-row gap-1 items-center justify-center bg-black/30 backdrop-blur-lg rounded-full m-0 z-20 pointer-events-none ml-auto">
											<span className="text-[12px] leading-[12px] font-neue-haas-grotesk-medium cursor-default border border-white/20 text-white/90 rounded-full px-[7px] pt-[6px] pb-[5px]">
												{item.date}
											</span>
										</div>
									)}
								</div>
							</div>
						</a>
					))
				)}
			</div>
		</div>
	);
}
