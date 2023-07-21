"use client";

import { IEntry, IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import { PiFigmaLogo } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { HiMiniLanguage } from "react-icons/hi2";
import { RiReactjsLine } from "react-icons/ri";

function CategoryIcon({ category }: { category: string | undefined }) {
    return (
        <div className="child:text-neutral-500">
            {!category ? null : (() => {
                switch (category) {
                    case "figma":       return <PiFigmaLogo size={21} />
                    case "photoshop":   return <SiAdobephotoshop size={ 18 } />
                    case "react":       return <RiReactjsLine size={ 21 } />
                    case "script":      return <HiMiniLanguage size={ 21 } />
                    default:            return null;
                }
            })()}
        </div>
    )
}

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col items-start justify-start w-full py-3 m-0 gap-2">
			<div className="flex flex-col items-start justify-center gap-2 px-[30px]">
				<span className="text-white font-inter-semibold text-lg leading-[18px]">
					{entry.title}
				</span>
				<span className="font-ibmplex-sans-medium text-[13px] leading-4 text-neutral-600">
					{entry.description}
				</span>
			</div>
			<hr className="h-px w-full bg-neutral-800 my-auto" />
		</div>
	);
}

export default function DesignRow({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative">
			<DesignHeader entry={entry} />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-start gap-5 lg:gap-3 w-full px-[30px] pb-[30px]">
				{React.Children.toArray(entry.items.map((item, i) => (
                    <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({ openPortal, closePortal, portal }) => (
                            <React.Fragment>
                                <div
                                    className={clsx(
                                        "relative z-0 flex flex-col justify-start group box-content border border-neutral-700/70 hover:border-neutral-700 rounded-lg overflow-hidden"
                                    )}
                                >
                                    <a
                                        className="flex flex-col relative justify-end group border-b border-neutral-700/70"
                                        href={item.linkBlog ? item.linkBlog : undefined}
                                        onClick={item.linkBlog ? undefined : openPortal}
                                    >
                                        <Image
                                            alt={item.id}
                                            className="block object-cover w-full h-full aspect-video cursor-pointer"
                                            src={item.image.path}
                                            width={item.image.width}
                                            height={item.image.height}
                                        />
                                    </a>
                                    <div
                                        className={clsx(
                                            "flex flex-col text-start justify-center w-full px-[16px] pb-[16px] pt-[16px] gap-y-2 bg-gradient-to-t group-hover:from-neutral-800/60 group-hover:to-transparent",
                                            item.summary && item.summary.length <= 0 ? "h-[53px] min-h-[53px] max-h-[53px]" : null
                                        )}
                                    >
                                        <div className="flex flex-row gap-x-2 items-center justify-start">
                                            <CategoryIcon category={item.category}/>
                                            <span className="text-white font-inter-semibold text-sm truncate">
                                                {item.title}
                                            </span>
                                            <div className="inline-flex flex-row items-end justify-center ml-auto gap-x-2">
                                                {React.Children.toArray(item.groups?.map((group, i) => (
                                                    <span
                                                        className={clsx(
                                                            "text-neutral-300 font-inter-semibold text-[11px] py-[2px] px-[6px] bg-white/[9%] rounded-[4px] border border-neutral-800/70 box-content",
                                                            !item.groups ? "opacity-0" : null
                                                        )}
                                                    >
                                                        {group}
                                                    </span>
                                                )))}
                                            </div>
                                        </div>
                                        {item.summary &&
                                        item.summary.length > 0 ? (
                                            <a className="text-neutral-300/95 font-inter-medium sm:line-clamp-3 leading-[18px] text-[13px]">
                                                {item.summary}
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                                {portal(
                                    <div className="flex flex-col absolute top-0 left-0 w-screen h-screen bg-black/90 pointer-events-all z-[99] backdrop-blur-sm">
                                        <div className="flex-shrink-0 flex-grow sm:flex-grow-0 flex flex-col items-center justify-end overflow-hidden">
                                            <div className="hidden sm:flex flex-col flex-nowrap w-full items-center justify-center py-4 gap-[15px]">
                                                <div className="inline-flex flex-row items-center justify-center gap-2 max-w-3xl mx-6">
                                                    <CategoryIcon category={item.category}/>
                                                    <a className="text-white text-center w-full font-inter-semibold text-xl leading-5">
                                                        {item.title}
                                                    </a>
                                                </div>
                                                <hr className="h-px w-full bg-neutral-800 my-auto" />
                                                {item.summary &&
                                                item.summary.length > 0 ? (
                                                    <a className="text-neutral-300/95 font-inter-medium text-center leading-[19px] text-[15px] max-w-3xl mx-6">
                                                        {item.summary}
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="flex flex-grow items-center justify-center overflow-hidden">
                                            <Image
                                                alt="project-img-modal"
                                                className="block max-w-full max-h-full object-contain cursor-pointer"
                                                src={item.image.path}
                                                width={item.image.width}
                                                height={item.image.height}
                                                onClick={closePortal}
                                            />
                                        </div>

                                        <div className="flex-shrink-0 flex-1 p-4 overflow-auto"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        )}
                    </PortalWithState>
                )))}
			</div>
		</div>
	);
}
