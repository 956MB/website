"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import ReactHtmlParser from "react-html-parser";
import { PortalWithState } from "react-portal";
import { Github } from '@geist-ui/icons';
import { IEntry } from "lib/interfaces";

export function ProjectInfo({
    entry
}: {
	entry: IEntry;
}) {
	return (
		<div
			className={clsx(
				"flex flex-col flex-1 items-start mb-[30px] pt-[30px] max-w-[800px] h-full"
			)}
		>
			<div className="flex flex-wrap m-0 text-left flex-col gap-y-[12px] project-h">
				<div className="flex flex-row flex-wrap items-center justify-start gap-x-3">
					<h3 id={entry.id}>
						<a className="anchor" href={`#${entry.id}`}>
							<span className="icon icon-link"></span>
						</a>
						{entry.title}
					</h3>
					{entry.link === "" ? null : (
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={entry.link}
							className="flex items-center gap-2 text-white hover:text-neutral-400 transition-all duration-100 mt-[2px]"
						>
							<Github size={22}/>
						</a>
					)}
				</div>

				{React.Children.toArray(
					entry.summary.map((summary_p, i) => (
						<a className="font-roboto-mono-regular text-[15px] leading-5 m-0 text-neutral-300">
							{ReactHtmlParser(summary_p)}
						</a>
					))
				)}

				<div className="flex flex-wrap items-left flex-row gap-x-[10px] mt-[10px]">
					{React.Children.toArray(
						entry.tags.map((tag, i) => (
							<div className="block bg-white/[0.10] hover:bg-white group px-[11px] pt-[2px] pb-[4px] rounded-[20px] items-center cursor-pointer transition-all duration-200">
								<a className="pointer-events-none transition-all duration-200 text-white font-inter-semibold text-xs group-hover:text-black">
									{tag}
								</a>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default function ProjectRow({
	entry,
	side,
}: {
	entry: IEntry;
	side: "left" | "right";
}) {
	return (
		<motion.div
			className="relative flex flex-wrap flex-col justify-center items-center max-w-[85%]"
			initial={{ x: side === "left" ? "-300px" : "300px", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
		>
			<PortalWithState
				closeOnOutsideClick
				closeOnEsc
			>
				{({ openPortal, closePortal, portal }) => (
					<React.Fragment>
						<button onClick={openPortal}>
							<Image
								alt="project-img"
								className="block h-full max-h-[600px] w-auto max-w-[100%] object-contain cursor-pointer rounded-xl"
								src={entry.image.path}
								width={entry.image.width}
								height={entry.image.height}
							/>
						</button>
						{portal(
							<div
								className="flex flex-row flex-wrap absolute items-center justify-center top-0 left-0 w-full h-full bg-black/75 pointer-events-all px-[10%] pt-[110px] pb-[55px] z-[99]"
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
										src={entry.image.path}
										width={entry.image.width}
										height={entry.image.height}
									/>
								</motion.div>
							</div>
						)}
					</React.Fragment>
				)}
			</PortalWithState>
			<ProjectInfo
				entry={entry}
			/>
		</motion.div>
	);
}
