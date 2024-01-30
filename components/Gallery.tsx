import Image from "next/image";
import { IEntry } from "lib/interfaces";
import { PiFigmaLogo } from "react-icons/pi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi";
import { HiMiniLanguage } from "react-icons/hi2";
import { RiReactjsLine } from "react-icons/ri";
import { XLg, ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import React from "react";
import parse from "html-react-parser";

export function CategoryIcon({
	large,
	category,
}: {
	large: boolean;
	category: string | undefined;
}) {
	return (
		<div className="child:text-neutral-300">
			{!category
				? null
				: (() => {
						switch (category) {
							case "figma":
								return <PiFigmaLogo size={large ? 24 : 21} />;
							case "photoshop":
								return (
									<SiAdobephotoshop size={large ? 21 : 18} />
								);
							case "illustrator":
								return (
									<SiAdobeillustrator
										size={large ? 21 : 18}
									/>
								);
							case "react":
								return <RiReactjsLine size={large ? 24 : 21} />;
							case "script":
								return (
									<HiMiniLanguage size={large ? 24 : 21} />
								);
							default:
								return null;
						}
				  })()}
		</div>
	);
}

export function GalleryButton({
	dir,
	isDisabled,
	clickAction,
}: {
	dir: string;
	isDisabled: boolean;
	clickAction: () => void;
}) {
	return (
		<button
			className={clsx(
				"px-3 sm:px-2 h-full sm:h-auto py-3 sm:py-1 group",
				isDisabled && "!cursor-default pointer-events-none select-none",
				dir == "left" && "sm:ml-auto"
			)}
			onClick={clickAction}
		>
			<Tooltip
				content={dir === "left" ? "Back" : "Next"}
				position={"bottom"}
				warn={false}
			>
				{dir === "left" ? (
					<ArrowLeft
						size={19}
						className={
							isDisabled ? "text-neutral-500" : "text-white"
						}
					/>
				) : (
					<ArrowRight
						size={19}
						className={
							isDisabled ? "text-neutral-500" : "text-white"
						}
					/>
				)}
			</Tooltip>
		</button>
	);
}

export function GalleryButtons({
	imagesCount,
	selectedIdx,
	updateIdx,
}: {
	imagesCount: number;
	selectedIdx: number;
	updateIdx: (dir: number) => void;
}) {
	return (
		<div
			className={clsx(
				"flex flex-row items-center h-full w-full sm:w-auto justify-center sm:justify-right sm:ml-4 sm:min-w-[100px]"
			)}
		>
			<span className="hidden sm:block text-right text-neutral-500 text-xs font-neue-haas-grotesk-medium mr-3">{`${
				selectedIdx + 1
			} of ${imagesCount}`}</span>
			<GalleryButton
				dir="left"
				isDisabled={selectedIdx == 0}
				clickAction={() => updateIdx(-1)}
			/>
			<span className="block sm:hidden text-right text-neutral-500 text-xs font-neue-haas-grotesk-medium mx-3">{`${
				selectedIdx + 1
			} of ${imagesCount}`}</span>
			<GalleryButton
				dir="right"
				isDisabled={selectedIdx == imagesCount - 1}
				clickAction={() => updateIdx(1)}
			/>
		</div>
	);
}

export default function Gallery({
	item,
	closeAction,
}: {
	item: IEntry;
	closeAction: () => void;
}) {
	return (
		<div className="flex flex-col absolute top-0 justify-start items-center left-0 w-screen h-screen bg-black/90 pointer-events-all z-[99] backdrop-blur">
			<div className="flex flex-col w-full justify-start items-center overflow-auto h-full">
				<div className="flex flex-row sticky top-0 items-center w-full min-h-[55px] justify-center bg-black/90 backdrop-blur border-b border-neutral-800 px-2 sm:px-3">
					<div className="flex flex-row items-center h-full w-full justify-left">
						<button
							className="h-full px-1 group"
							onClick={closeAction}
						>
							<Tooltip
								content="Back"
								position={"bottom"}
								warn={false}
							>
								<FiArrowLeft size={22} className="text-white" />
							</Tooltip>
						</button>
					</div>

					<div className="inline-flex flex-row items-center justify-center gap-3 w-full sm:max-w-screen-lg mx-auto">
						<Tooltip
							content={item.category}
							position={"bottom"}
							warn={false}
						>
							<CategoryIcon
								large={false}
								category={item.category}
							/>
						</Tooltip>

						<a className="text-white text-center font-neue-haas-grotesk-medium text-lg sm:text-xl sm:leading-5 mt-[1px] whitespace-nowrap">
							{item.title}
						</a>
					</div>

					<div className="flex h-full w-full justify-end"></div>
				</div>

				<div
					className={clsx(
						"flex flex-col items-center w-full",
						item.items.length <= 1
							? "justify-center"
							: "justify-start"
					)}
				>
					{item.summary && item.summary.length > 0 && (
						<span className="text-neutral-400 font-ibmplex-sans-medium text-center leading-[19px] text-[13px] lg:text-[15px] tracking-wide max-w-screen-lg mx-5 my-3 sm:mx-6 lg:my-4 gallery-summary">
							{parse(item.summary.join(""))}
						</span>
					)}

					{item.summary && item.summary.length > 0 && (
						<hr className="h-px w-full bg-neutral-800 m-0" />
					)}
				</div>

				<div
					className={clsx(
						"flex flex-col items-center justify-center sm:justify-start gap-3",
						item.items.length <= 1
							? "max-w-screen-2xl"
							: "max-w-screen-xl"
					)}
				>
					{React.Children.toArray(
						item.items?.map((content) => (
							<div className="flex flex-col gap-0 items-center justify-center">
								{content.path.includes(".mp4") ? (
									<video
										className={clsx(
											"block max-h-full max-w-full object-contain m-0"
										)}
										src={content.path}
										width={content.width}
										height={content.height}
										controls
										autoPlay
										loop
										muted
										playsInline
									/>
								) : (
									<Image
										alt="project-img-modal"
										className={clsx(
											"block max-h-full max-w-full object-contain m-0"
										)}
										src={content.path}
										width={content.width}
										height={content.height}
										loading="eager"
										unoptimized={true}
									/>
								)}

								{content.caption && (
									<hr className="h-px w-full bg-neutral-800 m-0 mt-1 sm:mt-3" />
								)}

								{content.caption && (
									<span className="text-neutral-400 font-ibmplex-sans-regular text-center text-[13px] leading-[13px] tracking-wide max-w-screen-lg mx-3 gallery-summary mt-2 sm:mt-3 mb-4">
										{parse(content.caption)}
									</span>
								)}
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}
