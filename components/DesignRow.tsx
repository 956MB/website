"use client";

import { IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import Gallery, { CategoryIcon } from "./Gallery";
import Tooltip from "./Tooltip";

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col sticky top-0 items-start justify-start w-full pt-[13px] sm:pt-4 m-0 gap-3 z-50 bg-black/90 backdrop-blur">
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-[3px] sm:gap-3 leading-[21px]">
                <span className="text-white font-neue-haas-grotesk-medium text-[21px] leading-7">
                    {entry.title}
                </span>
				<span className="font-ibmplex-sans-medium text-sm text-neutral-500">
					{entry.description}
				</span>
			</div>
			<div className="flex flex-row items-center justify-center w-full">
				<hr className="h-px w-full bg-neutral-800 my-auto" />
			</div>
		</div>
	);
}

export default function DesignRow({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center max-w-screen-3xl">
			<DesignHeader entry={entry} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center items-start gap-5 lg:gap-3 gap-y-3 w-full pt-4">
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<PortalWithState closeOnOutsideClick closeOnEsc>
							{({ openPortal, closePortal, portal }) => (
								<React.Fragment>
									<div
										className={clsx(
											"relative z-0 flex flex-col justify-start group box-content rounded-lg overflow-hidden"
										)}
                                        id={item.id}
										onClick={
											item.linkBlog
												? undefined
												: openPortal
										}
									>
                                        {item.new == true && (
                                            <div className="flex flex-row gap-1 absolute top-2 right-2 items-center justify-center bg-black/50 backdrop-blur-lg rounded-full m-0 z-20">
                                                <span className="text-[12px] leading-[12px] font-neue-haas-grotesk-medium cursor-default border border-white/20 text-white/90 rounded-full px-[7px] pt-[6px] pb-[5px]">
                                                    {"NEW"}
                                                </span>
                                            </div>
                                        )}

										<a
											className="flex flex-col relative justify-end group rounded-lg overflow-hidden"
											href={
												item.linkBlog
													? item.linkBlog
													: undefined
											}
										>
											<Image
												alt={item.id}
												className="block object-cover w-full h-full aspect-square cursor-pointer ease-in-out transition-transform duration-75 hover:scale-105"
												src={item.thumbnail ? item.thumbnail.path : item.images[0].path}
												width={item.thumbnail ? item.thumbnail.width : item.images[0].width}
												height={item.thumbnail ? item.thumbnail.height : item.images[0].height}
												loading="eager"
                                            />
										</a>
										<div
											className={clsx(
												"z-10 absolute bottom-0 sm:opacity-0 sm:transition-opacity sm:duration-200 group-hover:opacity-100 flex flex-col text-start justify-end w-full sm:h-full pt-[16px] sm:pt-0 sm:backdrop-blur-none pb-[16px] gap-y-2 bg-gradient-to-r sm:bg-gradient-to-t from-black sm:from-black/70 to-black/10 sm:to-transparent pl-3 pr-4 pointer-events-none",
                                                item.category == "photoshop" && "pl-4 pr-4",
												item.summary &&
													item.summary.length <= 0 &&
													"h-[53px] min-h-[53px] max-h-[53px]"
											)}
										>
											<div className={clsx(
                                                "flex flex-row gap-x-2 items-center justify-start overflow-hidden",
                                                item.category == "photoshop" && "gap-x-3"
                                            )}>
												<Tooltip
													content={item.category}
													position={"top"}
                                                    warn={false}
												>
													<CategoryIcon
														category={item.category}
													/>
												</Tooltip>

												{item.date && (
                                                    <Tooltip
                                                        content={item.date}
                                                        position={"top"}
                                                        warn={false}
                                                    >
                                                        <span className="text-white font-neue-haas-grotesk-medium w-full text-md">
                                                            {item.title}
                                                        </span>
                                                    </Tooltip>
												)}
											</div>
										</div>
									</div>
									{portal(
										<Gallery
											item={item}
											closeAction={closePortal}
										/>
									)}
								</React.Fragment>
							)}
						</PortalWithState>
					))
				)}
			</div>
		</div>
	);
}
