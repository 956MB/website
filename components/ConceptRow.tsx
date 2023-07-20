"use client";

import { IEntry, IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import { AiOutlineExpand, AiOutlineCompress } from "react-icons/ai";

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
		<div className="flex flex-col flex-wrap w-full relative">
			<ConceptHeader entry={entry} />
			<div className="grid grid-cols-1 justify-center items-start md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-3 w-full px-[30px] pb-[30px]">
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<PortalWithState closeOnOutsideClick closeOnEsc>
							{({ openPortal, closePortal, portal }) => (
								<React.Fragment>
									<div
										className={clsx(
											"relative z-0 flex flex-col justify-start group"
										)}
									>
										<button
											className="flex flex-col relative justify-end group"
											onClick={openPortal}
										>
											<Image
												alt={item.id}
												className="block object-cover w-full h-full aspect-video rounded-lg"
												src={item.image.path}
												width={item.image.width}
												height={item.image.height}
											/>
										</button>
										<div
											className={clsx(
												"flex flex-col flex-nowrap text-start justify-center w-full lg:px-[16px] pb-[16px] pt-[16px] gap-y-2 group-hover:opacity-100"
											)}
										>
											<a className="text-white font-inter-semibold text-lg mr-auto">
												{item.title}
											</a>
											{item.summary.length > 0 ? (
												<a className="text-neutral-300/95 font-inter-medium line-clamp-3 leading-[18px] text-[14px]">
													{item.summary}
												</a>
											) : null}
										</div>
									</div>
									{portal(
										<div
                                            className="flex flex-col flex-nowrap absolute items-center justify-center top-0 left-0 w-screen h-screen bg-black/90 pointer-events-all z-[99] backdrop-blur-sm"
                                            onClick={closePortal}
                                        >
											<div className="relative p-4 flex flex-col items-center justify-end w-full h-full">
												<div className="hidden sm:flex flex-col flex-wrap overflow-auto w-full items-center justify-center py-4 px-6 gap-3">
													<a className="text-white font-inter-semibold text-xl">
														{item.title}
													</a>
													{item.summary.length > 0 ? (
														<a className="text-neutral-300/95 font-inter-medium text-center leading-[19px] text-[15px] max-w-3xl">
															{item.summary}
														</a>
													) : null}
												</div>
											</div>
											<div className="relative">
												<Image
													alt="project-img-modal"
													className="block w-auto max-h-max object-contain overflow-hidden"
													src={item.image.path}
													width={item.image.width}
													height={item.image.height}
												/>
											</div>
											<div className="w-full h-full p-4"></div>
										</div>
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
