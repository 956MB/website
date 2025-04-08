import clsx from "clsx";
import parse from "html-react-parser";
import { IEntry } from "lib/interfaces";
import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { FiArrowLeft } from "react-icons/fi";
import { HiMiniLanguage } from "react-icons/hi2";
import { PiFigmaLogo } from "react-icons/pi";
import { RiReactjsLine } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import Tooltip from "./Tooltip";

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
                            return <SiAdobephotoshop size={large ? 21 : 18} />;
                        case "illustrator":
                            return <SiAdobeillustrator size={large ? 21 : 18} />;
                        case "react":
                            return <RiReactjsLine size={large ? 24 : 21} />;
                        case "script":
                            return <HiMiniLanguage size={large ? 24 : 21} />;
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
                "group h-full px-3 py-3 sm:h-auto sm:px-2 sm:py-1",
                isDisabled && "pointer-events-none !cursor-default select-none",
                dir == "left" && "sm:ml-auto",
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
                "sm:justify-right flex h-full w-full flex-row items-center justify-center sm:ml-4 sm:w-auto sm:min-w-[100px]",
            )}
        >
            <span className="font-medium mr-3 hidden text-right text-xs text-neutral-500 sm:block">{`${selectedIdx + 1
                } of ${imagesCount}`}</span>
            <GalleryButton
                dir="left"
                isDisabled={selectedIdx == 0}
                clickAction={() => updateIdx(-1)}
            />
            <span className="font-medium mx-3 block text-right text-xs text-neutral-500 sm:hidden">{`${selectedIdx + 1
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
        <div className="pointer-events-all absolute left-0 top-0 z-[99] flex h-screen w-screen flex-col items-center justify-start bg-white/90 dark:bg-black/90 backdrop-blur">
            <div className="flex h-full w-full flex-col items-center justify-start overflow-auto">
                <div className="sticky top-0 flex min-h-[55px] w-full flex-row items-center justify-center border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-black/90 px-2 backdrop-blur sm:px-3">
                    <div className="justify-left flex h-full w-full flex-row items-center">
                        <button
                            className="group h-full px-1 "
                            onClick={closeAction}
                        >
                            <Tooltip
                                content="Back"
                                position={"bottom"}
                                warn={false}
                            >
                                <FiArrowLeft size={22} className="text-black dark:text-white" />
                            </Tooltip>
                        </button>
                    </div>

                    <div className="mx-auto inline-flex w-full flex-row items-center justify-center gap-3 sm:max-w-screen-lg">
                        <Tooltip
                            content={item.category}
                            position={"bottom"}
                            warn={false}
                        >
                            <div className="invert dark:invert-0">
                                <CategoryIcon
                                    large={false}
                                    category={item.category}
                                />
                            </div>
                        </Tooltip>

                        <a className="font-bold mt-[1px] whitespace-nowrap text-center text-lg text-black dark:text-white sm:text-xl sm:leading-5">
                            {item.title}
                        </a>

                        {item.date && (
                            <span
                                className={
                                    "font-semibold dark:font-medium text-center text-sm text-black dark:text-white/70 sm:leading-5 mt-[2px]"
                                }
                            >
                                {item.date}
                            </span>
                        )}
                    </div>

                    <div className="flex h-full w-full justify-end"></div>
                </div>

                <div
                    className={clsx(
                        "flex w-full flex-col items-center",
                        item.items && item.items.length <= 1
                            ? "justify-center"
                            : "justify-start",
                    )}
                >
                    {item.summary && item.summary.length > 0 && (
                        <span className="font-medium gallery-summary mx-5 my-3 max-w-screen-lg text-center text-[13px] leading-[1.56em] tracking-wide text-neutral-800 dark:text-neutral-300 sm:mx-6 lg:my-4 lg:text-[14px]">
                            {parse(item.summary.join(""))}
                        </span>
                    )}
                </div>

                <div
                    className={clsx(
                        "flex flex-col items-center justify-center gap-3 sm:justify-start",
                        item.items && item.items.length <= 1
                            ? "max-w-screen-2xl"
                            : "max-w-screen-xl",
                    )}
                >
                    {React.Children.toArray(
                        item.items?.map((content) => (
                            <div className="flex flex-col items-center justify-center gap-0">
                                {content.path.includes(".mp4") ? (
                                    <video
                                        className={clsx(
                                            "m-0 block max-h-full max-w-full object-contain",
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
                                            "m-0 block max-h-full max-w-full object-contain bg-white dark:bg-black",
                                        )}
                                        src={content.path}
                                        width={content.width}
                                        height={content.height}
                                        loading="eager"
                                        unoptimized={true}
                                    />
                                )}

                                {content.caption && (
                                    <hr className="m-0 mt-1 h-px w-full bg-neutral-800 sm:mt-3" />
                                )}

                                {content.caption && (
                                    <span className="font-medium gallery-summary mx-3 mb-4 mt-2 max-w-screen-lg text-center text-[13px] leading-[13px] tracking-wide text-neutral-400 sm:mt-3">
                                        {parse(content.caption)}
                                    </span>
                                )}
                            </div>
                        )),
                    )}
                </div>
            </div>
        </div>
    );
}
