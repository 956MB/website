"use client";

import { IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import Gallery, { CategoryIcon } from "./Gallery";
import { motion } from "framer-motion";

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col sm:sticky top-0 items-start justify-start w-full pt-[13px] sm:pt-4 m-0 gap-3 z-50 bg-black/90 backdrop-blur">
			<div className="flex flex-col items-start justify-end gap-2 leading-[21px]">
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

export default function DesignRow({
	entry,
	noHeader,
}: {
	entry: IEntryGroup;
	noHeader?: boolean;
}) {
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
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center max-w-screen-2xl">
			{!noHeader && <DesignHeader entry={entry} />}

			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className={clsx(
					"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-start gap-3 md:gap-2 w-full pt-2"
				)}
			>
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<PortalWithState closeOnOutsideClick closeOnEsc>
							{({ openPortal, closePortal, portal }) => (
								<React.Fragment>
									<motion.div
										key={i}
										variants={itemVariants}
										transition={{ duration: 0.5 }}
										id={item.id}
										className={clsx(
											"relative z-0 flex flex-col justify-start group box-content overflow-hidden"
										)}
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
											className="flex flex-col relative justify-end group overflow-hidden"
											href={
												item.linkBlog
													? item.linkBlog
													: undefined
											}
										>
											<Image
												alt={item.id}
												className={clsx(
													"block object-cover w-full h-full aspect-square cursor-pointer ease-in-out transition-transform duration-75 hover:scale-105"
												)}
												src={
													item.thumbnail
														? item.thumbnail.path
														: item.items[0].path
												}
												width={
													item.thumbnail
														? item.thumbnail.width
														: item.items[0].width
												}
												height={
													item.thumbnail
														? item.thumbnail.height
														: item.items[0].height
												}
												loading="eager"
											/>
										</a>
										<div
											className={clsx(
												"z-10 absolute bottom-0 sm:transition-opacity sm:duration-200 opacity-100 lg:opacity-0 group-hover:opacity-100 flex flex-col text-start justify-end sm:justify-center w-full lg:h-full pt-[16px] backdrop-blur-md sm:backdrop-blur-none pb-[16px] gap-y-2 bg-gradient-to-r lg:bg-gradient-to-t from-black/70 to-black/10 sm:to-black/50 pl-3 pr-4 pointer-events-none",
												item.category == "photoshop" &&
													"pl-4 pr-4",
												item.summary &&
													item.summary.length <= 0 &&
													"h-[53px] min-h-[53px] max-h-[53px]"
											)}
										>
											<div
												className={clsx(
													"flex flex-row sm:flex-col gap-2 items-center justify-start sm:justify-center overflow-hidden sm:mx-4",
													item.category ==
														"photoshop" && "gap-x-3"
												)}
											>
												<div className="block sm:hidden">
													<CategoryIcon
														large={false}
														category={item.category}
													/>
												</div>

												<div className="hidden sm:block">
													<CategoryIcon
														large={true}
														category={item.category}
													/>
												</div>

												{item.date && (
													<span
														className={
															"text-white font-neue-haas-grotesk-medium sm:w-full text-md sm:text-xl sm:leading-5 text-center sm:mb-8"
														}
													>
														{item.title}
													</span>
												)}

											</div>
										</div>
									</motion.div>
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
			</motion.div>
		</div>
	);
}
