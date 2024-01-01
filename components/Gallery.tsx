import Image from "next/image";
import { IEntry } from "lib/interfaces";
import { PiFigmaLogo } from "react-icons/pi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { HiMiniLanguage } from "react-icons/hi2";
import { RiReactjsLine } from "react-icons/ri";
import { XLg, ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import React from "react";
import parse from "html-react-parser";

export function CategoryIcon({ category }: { category: string | undefined }) {
	return (
		<div className="child:text-neutral-400">
			{!category
				? null
				: (() => {
						switch (category) {
							case "figma":
								return <PiFigmaLogo size={21} />;
							case "photoshop":
								return <SiAdobephotoshop size={18} />;
                            case "illustrator":
								return <SiAdobeillustrator size={18} />;
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
                            <Tooltip content="Close" position={"bottom"}>
                                <XLg size={18} className="text-white" />
                            </Tooltip>
                        </button>
                    </div>

					<div className="inline-flex flex-row items-center justify-center gap-2 w-full sm:max-w-screen-lg mx-auto">

						<Tooltip content={item.category} position={"bottom"}>
							<CategoryIcon category={item.category} />
						</Tooltip>

						<a className="text-white text-center font-neue-haas-grotesk-medium text-lg sm:text-xl leading-5 py-2 whitespace-nowrap">
							{item.title}
						</a>

						<div className="hidden sm:flex gap-x-2 items-center justify-start pl-2">
							{item.date && (
								<div className="flex flex-row gap-1 items-center justify-center bg-black/50 backdrop-blur-lg rounded-full m-0 z-20">
                                    <span className="text-[12px] leading-[12px] font-neue-haas-grotesk-medium cursor-default border border-white/20 text-white/90 rounded-full px-[7px] pt-[6px] pb-[5px]">
                                        {item.date}
                                    </span>
                                </div>
							)}
						</div>
					</div>

					<div className="flex h-full w-full justify-end"></div>
				</div>

				<div
					className={clsx(
						"flex flex-col flex-grow items-center w-full",
						item.images.length <= 1
							? "justify-center"
							: "justify-start"
					)}
				>
					{item.summary && item.summary.length > 0 && (
						<span className="text-neutral-400 font-neue-haas-grotesk-medium text-center leading-[19px] text-[14px] sm:text-[15px] max-w-screen-lg mx-5 my-3 sm:mx-6 sm:my-5 gallery-summary">
                            {parse(
                                item.summary.join("")
                            )}
						</span>
					)}

					{item.summary && item.summary.length > 0 && (
						<hr className="h-px w-full bg-neutral-800 m-0" />
					)}
				</div>

				<div className={clsx(
                    "flex flex-col flex-grow items-center justify-center sm:justify-start gap-3 h-full sm:h-auto",
                    item.images.length <= 1 ? "max-w-screen-3xl" : "max-w-screen-xl"
                )}>
					{React.Children.toArray(
						item.images?.map((content) => {
                            return content.path.includes(".mp4") ? (
                                <video
                                    className={clsx(
                                        "block max-h-full max-w-full object-contain m-0"
                                    )}
                                    src={(content.path)}
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
                            )
                        })
					)}
				</div>
			</div>
		</div>
	);
}
