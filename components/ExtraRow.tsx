"use client";

import { IEntryGroup } from "lib/interfaces";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import parse from "html-react-parser";
import { MdOutlineLayers } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";

export function ExtraHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col sticky top-0 lg:top-[75px] items-start justify-start w-full max-w-screen-3xl py-5 sm:pt-4 pb-0 m-0 gap-5 sm:gap-4 sm:z-50 bg-black/90 backdrop-blur z-50">
			<div className="flex flex-col sm:flex-row w-full max-w-screen-3xl items-start sm:items-center gap-3">
				<div className="flex flex-col items-start justify-center gap-3 sm:gap-2">
					<span className="text-white font-inter-semibold text-[21px] leading-[18px]">
						{entry.title}
					</span>

					<span className="font-ibmplex-sans-medium text-sm leading-4 text-neutral-500">
						{entry.description}
					</span>
				</div>
			</div>
			<div className="flex flex-row items-center justify-center w-full">
				<hr className="h-px w-full bg-neutral-800 my-auto" />
			</div>
		</div>
	);
}

export default function ExtraRow({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center">
			<ExtraHeader entry={entry} />
			<div
				className={clsx(
					"grid justify-center items-start gap-5 lg:gap-4 w-full max-w-screen-3xl pt-5 sm:pt-4",
					entry.category === "icons"
						? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
						: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				)}
			>
				{React.Children.toArray(
					entry.items.map((item, i) => {
						return (
							<div
								className={clsx(
									"relative z-0 flex flex-col justify-start group box-content"
								)}
							>
								{item.count && item.count > 1 && (
									<div className="flex flex-row gap-1 absolute top-2 right-2 px-2 py-[7px] items-center justify-center border border-white/10 bg-black/20 backdrop-blur-lg rounded-full m-0 z-20 text-white/90">
										<span className="text-[12px] leading-[12px] font-inter-semibold cursor-default">
											{item.count}
										</span>
										<MdOutlineLayers size={16} />
									</div>
								)}
								<a
									className={clsx(
										"relative flex flex-col justify-end group object-cover overflow-hidden bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm sm:backdrop-blur-none",
										item.link && " cursor-pointer",
										item.link &&
											item.category === "wallpaper" &&
											"child:hover:scale-105"
									)}
									rel="noopener noreferrer"
									target="_blank"
									href={item.link ? item.link : undefined}
								>
									<Image
										alt={item.id}
										className={clsx(
											"block w-full h-full ease-linear delay-0 transition-transform duration-100`",
											item.category === "icon"
												? "aspect-square object-contain scale-75"
												: "aspect-video sm:aspect-video object-cover"
										)}
										src={item.images[0].path}
										width={item.images[0].width}
										height={item.images[0].height}
										loading="eager"
										priority
									/>
								</a>
								<div
									className={clsx(
										"z-10 flex flex-col text-start justify-center w-full pb-[16px] pt-[16px] gap-y-2",
										item.summary &&
											item.summary.length <= 0 &&
											"h-[53px] min-h-[53px] max-h-[53px]"
									)}
								>
									<div className="flex flex-row w-full gap-x-2 items-start justify-start">
										<div className="flex flex-col w-full justify-start items-start gap-y-0">
											<div className="flex flex-row gap-2 items-center justify-start w-full">
												<span className="text-white font-inter-semibold text-base truncate m-0">
													{item.title}
												</span>

												{item.credit && (
													<a className="p-[2px] bg-yellow-500/20 rounded-full">
														<PiWarningCircleBold
															size={16}
															className="text-yellow-500 min-w-[16px] min-h-[16px]"
														/>
													</a>
												)}

												{item.link && (
													<a
														rel="noopener noreferrer"
														target="_blank"
														href={
															item.link
																? item.link
																: undefined
														}
														className="text-neutral-400 hover:text-neutral-100 cursor-pointer min-w-[23px] min-h-[23px]"
													>
														<LiaDownloadSolid
															size={23}
														/>
													</a>
												)}
											</div>

											{item.summary && (
												<span className="text-neutral-400 font-ibmplex-sans-medium text-sm w-full entry-summary">
													{parse(
														item.summary.join("")
													)}
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
