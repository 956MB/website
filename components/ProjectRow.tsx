"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import ReactHtmlParser from "react-html-parser";
import { PortalWithState } from "react-portal";
import { Github } from "react-bootstrap-icons";
import { IEntry } from "lib/interfaces";

export function ProjectInfo({ entry }: { entry: IEntry }) {
	return (
		<div
			className={clsx(
				"flex flex-col flex-1 items-start mb-[30px] pt-[40px] max-w-[800px] h-full"
			)}
		>
			<div className="flex flex-wrap m-0 text-left flex-col gap-y-[12px] project-h">
				<div className="inline-flex flex-row flex-wrap items-center justify-start gap-x-3 mb-3">
					<h3 id={entry.id}>
						<a className="anchor" href={`#${entry.id}`}>
							<span className="icon icon-link"></span>
						</a>
						{entry.title}
					</h3>
					{!entry.link ? null : (
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={entry.link}
							className="flex items-center gap-2 text-white hover:text-neutral-400 transition-all duration-100"
						>
							<Github size={22} />
						</a>
					)}

					<div className="flex flex-wrap items-left flex-row gap-x-[10px] ml-auto">
						{React.Children.toArray(
							entry.tags?.map((tag, i) => (
								<div className="blockgroup pt-[2px] pb-[4px] cursor-pointer text-center items-center justify-center text-white mt-[1px] bg-neutral-900/80 hover:bg-neutral-800/90 rounded-md gap-2 px-2 border border-neutral-700/70 hover:border-neutral-700/80">
									<a className="pointer-events-none text-white font-inter-semibold text-xs group-hover:text-black">
										{tag}
									</a>
								</div>
							))
						)}
					</div>
				</div>

				{React.Children.toArray(
					entry.summary?.map((summary_p, i) => (
						<a className="font-inter-medium text-[15px] leading-[1.4em] m-0 text-neutral-300">
							{ReactHtmlParser(summary_p)}
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
			className="relative flex flex-wrap flex-col justify-center items-center max-w-[85%]"
		>
			<PortalWithState closeOnOutsideClick closeOnEsc>
				{({ openPortal, closePortal, portal }) => (
					<React.Fragment>
						<button onClick={openPortal}>
							<Image
								alt="project-img"
								className="block max-h-[700px] max-w-full object-contain cursor-pointer rounded-lg"
								src={entry.images[0].path}
								width={entry.images[0].width}
								height={entry.images[0].height}
								loading="eager"
							/>
						</button>
						{portal(
							<div
								className="flex flex-row flex-wrap absolute items-center justify-center top-0 left-0 w-full h-full bg-black/75 pointer-events-all px-[10%] py-[55px] z-[99]"
								onClick={closePortal}
							>
								<Image
									alt="project-img-modal"
									className="block max-h-full max-w-full object-contain overflow-hidden rounded-lg"
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
