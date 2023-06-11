"use client";

import { IEntry, IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export function ConceptHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-row items-center justify-start w-full py-[30px] m-0 px-[30px] sticky top-0">
			<div className="flex flex-row items-center justify-center gap-x-5">
				<span className="font-ibmplex-sans-medium text-[13px] text-neutral-600 whitespace-nowrap">
					{entry.description}
				</span>
			</div>
			<hr className="h-px w-full bg-neutral-800 ml-[20px] my-auto" />
		</div>
	);
}

export default function ConceptRow({ entry }: { entry: IEntryGroup }) {
	return (
		<motion.div
			className="flex flex-col flex-wrap w-full relative"
			variants={{
				show: {
					transition: {
						staggerChildren: 0.055,
					},
				},
			}}
			initial="hidden"
			animate="show"
		>
			<ConceptHeader entry={entry} />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3 w-full px-[30px] pb-[30px]">
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<PortalWithState closeOnOutsideClick closeOnEsc>
							{({ openPortal, closePortal, portal }) => (
								<React.Fragment>
									<motion.div
										className={clsx(
											"flex flex-col relative justify-start mb-[30px] group"
										)}
										variants={{
											hidden: { opacity: 0 },
											show: { opacity: 1 },
										}}
									>
										<button
											className="flex flex-col relative justify-end group"
											onClick={openPortal}
										>
											<Image
												alt={item.id}
												className="block object-cover w-full h-full aspect-video rounded-xl"
												src={item.image.path}
												width={item.image.width}
												height={item.image.height}
											/>
										</button>
										<div
											className={clsx(
												"opacity-100 lg:opacity-0 flex flex-col flex-wrap text-start justify-center absolute w-full m-0 b-0 l-0 px-0 pb-[16px] pt-[16px] gap-y-2 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.90))] transition-opacity duration-150 group-hover:opacity-100",
												item.summary.length <= 0
													? "!opacity-100 pt-[20%]"
													: "relative lg:absolute lg:b-0 lg:l-0 lg:pt-14 lg:px-[16px]"
											)}
										>
											<a className="text-white font-inter-bold text-xl mr-auto">
												{item.title}
											</a>
											<a className="text-neutral-300/95 font-inter-medium leading-5 text-[15px]">
												{item.summary}
											</a>
										</div>
									</motion.div>
									{portal(
										<div
											className="flex flex-row flex-wrap absolute items-center justify-center top-0 left-0 w-full h-full bg-black/75 pointer-events-all px-[5%] py-[55px] z-[99]"
											onClick={closePortal}
										>
											<motion.div
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												exit={{ scale: 0 }}
												transition={{
													type: "spring",
													damping: 30,
													duration: 0.04,
													stiffness: 350,
													delay: 0,
												}}
											>
												<Image
													alt="project-img-modal"
													className="block w-auto max-h-max object-contain overflow-hidden rounded-xl"
													src={item.image.path}
													width={item.image.width}
													height={item.image.height}
												/>
											</motion.div>
										</div>
									)}
								</React.Fragment>
							)}
						</PortalWithState>
					))
				)}
			</div>
		</motion.div>
	);
}
