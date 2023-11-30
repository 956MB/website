"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import Parse from "html-react-parser";
import { PortalWithState } from "react-portal";
import { Github, XLg } from "react-bootstrap-icons";
import { IEntry } from "lib/interfaces";
import Tooltip from "./Tooltip";

export function ProjectInfo({ entry }: { entry: IEntry }) {
	return (
		<div
			className={clsx(
				"flex flex-col flex-1 items-start pt-6 sm:pt-[40px] w-full sm:max-w-[800px] h-full"
			)}
		>
			<div className="flex flex-wrap m-0 text-left flex-col gap-y-[12px] project-h">
				<div className="inline-flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-start gap-x-3 mb-3 gap-y-3">
					<div className="inline-flex flex-row gap-x-3">
						<a
							id={entry.id}
							rel="noopener noreferrer"
							target="_blank"
							href={entry.link}
						>
							<span className="text-3xl text-white font-inter-bold hover:underline">
								{entry.title}
							</span>
						</a>
					</div>

					<div className="flex flex-wrap items-left flex-row gap-x-[10px] sm:ml-auto">
						{React.Children.toArray(
							entry.tags?.map((tag, i) => (
								<div className="flex flex-row gap-1 items-center justify-center bg-black/40 backdrop-blur-lg rounded-full m-0 z-20 pointer-events-none">
                                    <span className="text-[12px] leading-[12px] font-inter-semibold cursor-default border border-white/20 text-white/90 rounded-full px-[8px] pt-[8px] pb-[7px]">
                                        {tag}
                                    </span>
                                </div>
							))
						)}
					</div>
				</div>

				{React.Children.toArray(
					entry.summary?.map((summary_p, i) => (
						<a className="font-inter-medium text-[15px] leading-[1.5em] m-0 text-neutral-300">
							{Parse(summary_p)}
						</a>
					))
				)}
			</div>
		</div>
	);
}

export default function ProjectRow({ entry }: { entry: IEntry }) {
	return (
		<div
			id={entry.id}
			className="relative flex flex-wrap flex-col justify-center items-center w-full sm:py-5 sm:max-w-[85%]"
		>
			<PortalWithState closeOnOutsideClick closeOnEsc>
				{({ openPortal, closePortal, portal }) => (
					<React.Fragment>
						<button onClick={openPortal}>
							<Image
								alt="project-img"
								className="block max-h-[700px] max-w-full object-contain cursor-pointer"
								src={entry.images[0].path}
								width={entry.images[0].width}
								height={entry.images[0].height}
								loading="eager"
							/>
						</button>
						{portal(
							<div
								className="flex flex-row flex-wrap absolute items-center justify-center top-0 left-0 w-full h-full bg-black/75 backdrop-blur-sm pointer-events-all px-[10%] py-[55px] z-[99]"
								onClick={closePortal}
							>
								<div className="flex flex-row absolute left-7 top-7 z-50">
									<button
										className="h-full px-1 group"
										onClick={closePortal}
									>
										<Tooltip
											content="Close"
											position={"bottom"}
										>
											<XLg
												size={18}
												className="text-white"
											/>
										</Tooltip>
									</button>
								</div>
								<Image
									alt="project-img-modal"
									className="block max-h-full max-w-full object-contain overflow-hidden"
									src={entry.images[0].path}
									width={entry.images[0].width}
									height={entry.images[0].height}
									loading="eager"
								/>
							</div>
						)}
					</React.Fragment>
				)}
			</PortalWithState>
			<ProjectInfo entry={entry} />
		</div>
	);
}
