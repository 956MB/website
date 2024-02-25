"use client";

import { IEntryGroup } from "lib/interfaces";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import parse from "html-react-parser";
import { MdOutlineLayers } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";

export function ExtraHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col sm:sticky top-0 items-start justify-start w-full pt-[13px] sm:pt-4 m-0 gap-3 z-50 bg-black/90 backdrop-blur">
			<div className="flex flex-col items-start justify-end gap-1 leading-[21px]">
				<span className="text-white whitespace-normal sm:whitespace-nowrap font-neue-haas-grotesk-medium text-[21px] leading-4">
					{entry.title}
				</span>
				<span className="font-ibmplex-sans-medium text-sm leading-4 text-neutral-500">
					{entry.description}
				</span>
			</div>
			<div className="flex flex-row items-center justify-center w-full">
				<hr className="h-px w-full bg-neutral-800 my-auto" />
			</div>
		</div>
	);
}

export default function ExtraRow({ entry }: { entry: IEntryGroup }) {
	const containerVariants = {
		initial: {},
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	};

	return (
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center">
			<ExtraHeader entry={entry} />

			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className={clsx(
					"grid justify-center items-start w-full max-w-screen-2xl",
					entry.category === "icons"
						? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 pt-2"
						: "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 pt-3"
				)}
			>
				{React.Children.toArray(
					entry.items.map((item, i) => {
						return (
							<motion.div
								key={i}
								variants={itemVariants}
								transition={{ duration: 0.5 }}
								id={item.id}
								className={clsx(
									"relative z-0 flex flex-col justify-start group box-content"
								)}
							>
								{item.count && item.count > 1 && (
									<div className="flex flex-row gap-1 absolute top-2 right-2 items-center justify-center bg-black/30 backdrop-blur-lg rounded-full m-0 z-20">
										<div className="inline-flex flex-row justify-center items-center gap-1 cursor-default border border-white/20 text-white/90 rounded-full px-2 py-[6px] min-w-[26px]">
											<span className="text-[12px] leading-[12px] font-neue-haas-grotesk-medium">
												{item.count}
											</span>
											<div className="relative hidden sm:block">
												<MdOutlineLayers size={16} />
											</div>
										</div>
									</div>
								)}
								<a
									className={clsx(
										"relative flex flex-col justify-end group object-cover overflow-hidden bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm sm:backdrop-blur-none",
										item.link && " cursor-pointer",
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
												? "aspect-square object-contain"
												: "aspect-video sm:aspect-video object-cover",
											(item.id === "icon_tdb" ||
												item.id === "icon_mssnc" ||
												item.id === "icon_2048we") &&
												"scale-75"
										)}
										src={item.items ? item.items[0].path : ""}
										width={item.items ? item.items[0].width : 0}
										height={item.items ? item.items[0].height : 0}
										loading="eager"
									/>
								</a>
								<div
									className={clsx(
										"z-10 flex flex-col text-start justify-center w-full pb-[16px] pt-[10px] gap-y-2",
										item.summary &&
											item.summary.length <= 0 &&
											"h-[53px] min-h-[53px] max-h-[53px]"
									)}
								>
									<div className="flex flex-row w-full gap-x-2 items-start justify-start">
										<div className="flex flex-col w-full justify-start items-start gap-y-1">
											<div className="flex flex-row gap-1 items-center justify-start w-full">
												<a
													className={clsx(
														"text-white font-neue-haas-grotesk-medium whitespace-normal m-0",
														item.link &&
															"hover:underline",
														item.category ===
															"wallpaper"
															? "text-base sm:text-lg"
															: "text-base"
													)}
													rel="noopener noreferrer"
													target="_blank"
													href={
														item.link
															? item.link
															: undefined
													}
												>
													{item.title}
												</a>

												{item.credit && (
													<Tooltip
														content={item.credit}
														position={"top"}
														warn={true}
													>
														<a className="p-[2px] bg-yellow-500/20 rounded-full">
															<PiWarningCircleBold
																size={16}
																className="text-yellow-500 min-w-[16px] min-h-[16px]"
															/>
														</a>
													</Tooltip>
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
							</motion.div>
						);
					})
				)}
			</motion.div>
		</div>
	);
}
