import Image from "next/image";
import { IEntry } from "lib/interfaces";
import { PiFigmaLogo } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { HiMiniLanguage } from "react-icons/hi2";
import { RiReactjsLine } from "react-icons/ri";
import { XLg, ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import React from "react";
import { toFormattedDateShort } from "lib/util";

export function CategoryIcon({ category }: { category: string | undefined }) {
	return (
		<div className="child:text-neutral-500">
			{!category
				? null
				: (() => {
						switch (category) {
							case "figma":
								return <PiFigmaLogo size={21} />;
							case "photoshop":
								return <SiAdobephotoshop size={18} />;
							case "react":
								return <RiReactjsLine size={21} />;
							case "script":
								return <HiMiniLanguage size={21} />;
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
			<span className="hidden sm:block text-right text-neutral-500 text-xs font-inter-medium mr-3">{`${
				selectedIdx + 1
			} of ${imagesCount}`}</span>
			<GalleryButton
				dir="left"
				isDisabled={selectedIdx == 0}
				clickAction={() => updateIdx(-1)}
			/>
			<span className="block sm:hidden text-right text-neutral-500 text-xs font-inter-medium mx-3">{`${
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
		<div className="flex flex-col absolute top-0 justify-center items-center left-0 w-screen h-screen bg-black/90 pointer-events-all z-[99] backdrop-blur">
			<div className="flex-shrink-0 flex-grow-0 w-full flex flex-col items-center justify-start">
				<div
					className={clsx(
						"flex flex-col flex-nowrap w-full items-center justify-center sm:border-b border-neutral-800"
					)}
				>
					<div className="flex flex-row items-center w-full min-h-[55px] justify-center px-2 sm:px-4">
						<div className="flex flex-row items-center h-full w-full justify-left sm:min-w-[100px]">
							<button
								className="h-full px-1 group"
								onClick={closeAction}
							>
								<Tooltip content="Close" position={"bottom"}>
									<XLg size={18} className="text-white" />
								</Tooltip>
							</button>
						</div>
						<div className="inline-flex flex-row items-center justify-center gap-2 w-full sm:max-w-3xl mx-4">
							<div className="hidden sm:flex w-full"></div>
							<Tooltip
								content={item.category}
								position={"bottom"}
							>
								<CategoryIcon category={item.category} />
							</Tooltip>
							<a className="text-white text-center font-inter-semibold text-lg sm:text-xl leading-5 py-2 whitespace-nowrap">
								{item.title}
							</a>
							<div className="hidden sm:flex gap-x-2 w-full items-center justify-start pl-2">
								{item.date && (
									<span className="text-neutral-300 font-inter-semibold text-[12px] py-[2px] px-[6px] bg-white/[9%] rounded-[4px] border border-neutral-800/70 box-content whitespace-nowrap">
										{toFormattedDateShort(item.date)}
									</span>
								)}
							</div>
						</div>
						<div className="flex h-full w-full justify-end"></div>
					</div>
					{(item.summary && item.summary.length > 0) && (
						<hr className="h-px w-full bg-neutral-800 mt-0 mb-0" />
					)}
					{(item.summary && item.summary.length > 0) && (
						<a className="text-neutral-300/95 font-inter-medium text-center leading-[19px] text-[14px] sm:text-[15px] max-w-3xl mx-6 my-5">
							{item.summary}
						</a>
					)}
					<hr className="flex sm:hidden h-px w-full bg-neutral-800 mb-[1px] mt-0" />
					<div
						className={clsx(
							"flex sm:hidden",
							item.images.length <= 1 && "hidden"
						)}
					>
					</div>
				</div>
			</div>

            <div className=" flex flex-col justify-start items-center h-full w-full overflow-auto no-scrollbar">
                <div
                    className={clsx(
                        "flex flex-col flex-grow items-center gap-2 max-w-screen-lg",
                        item.images.length <= 1 ? "justify-center" : "justify-start"
                    )}
                    >
                    {React.Children.toArray(
                        item.images?.map((image) => (
                            <Image
                                alt="project-img-modal"
                                className={clsx(
                                    "block max-h-full max-w-full object-contain m-0"
                                )}
                                src={image.path}
                                width={image.width}
                                height={image.height}
                                loading="eager"
                            />
                        ))
                    )}
                </div>
            </div>
		</div>
	);
}
