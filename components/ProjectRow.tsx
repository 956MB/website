"use client";

import clsx from "clsx";
import Parse from "html-react-parser";
import { IEntry } from "lib/interfaces";
import Image from "next/image";
import React from "react";
import { XLg } from "react-bootstrap-icons";
import { PortalWithState } from "react-portal";
import Tooltip from "./Tooltip";

export function ProjectInfo({ entry }: { entry: IEntry }) {
    return (
        <div
            className={clsx(
                "flex h-full w-full flex-1 flex-col items-start pt-6 sm:max-w-[800px] sm:pt-[40px]",
            )}
        >
            <div className="project-h m-0 flex flex-col flex-wrap gap-y-[12px] text-left">
                <div className="mb-3 inline-flex flex-col flex-wrap items-start justify-start gap-x-3 gap-y-3 sm:flex-row sm:items-center">
                    <div className="inline-flex flex-row gap-x-3">
                        <a
                            id={entry.id}
                            rel="noopener noreferrer"
                            target="_blank"
                            href={entry.link}
                        >
                            <span className="font-neue-haas-grotesk-medium text-3xl leading-[30px] text-white hover:underline">
                                {entry.title}
                            </span>
                        </a>
                    </div>

                    <div className="items-left flex flex-row flex-wrap gap-x-[10px] sm:ml-auto">
                        {React.Children.toArray(
                            entry.tags?.map((tag, i) => (
                                <div className="pointer-events-none z-20 m-0 flex flex-row items-center justify-center gap-1 rounded-full bg-black/40 backdrop-blur-lg">
                                    <span className="font-neue-haas-grotesk-medium cursor-default rounded-full border border-white/20 px-[8px] pb-[7px] pt-[8px] text-[12px] leading-[12px] text-white/90">
                                        {tag}
                                    </span>
                                </div>
                            )),
                        )}
                    </div>
                </div>

                {React.Children.toArray(
                    entry.summary?.map((summary_p, i) => (
                        <a className="font-ibmplex-sans-medium m-0 text-[15px] leading-[20px] text-neutral-400">
                            {Parse(summary_p)}
                        </a>
                    )),
                )}
            </div>
        </div>
    );
}

export default function ProjectRow({ entry }: { entry: IEntry }) {
    return (
        <div
            id={entry.id}
            className="relative flex w-full flex-col flex-wrap items-center justify-center sm:max-w-[85%] sm:py-5"
        >
            <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, portal }) => (
                    <React.Fragment>
                        <button onClick={openPortal}>
                            <Image
                                alt="project-img"
                                className="block max-h-[700px] max-w-full cursor-pointer object-contain"
                                src={entry.items ? entry.items[0].path : ""}
                                width={entry.items ? entry.items[0].width : 0}
                                height={entry.items ? entry.items[0].height : 0}
                                loading="eager"
                                unoptimized={true}
                            />
                        </button>
                        {portal(
                            <div
                                className="pointer-events-all absolute left-0 top-0 z-[99] flex h-full w-full flex-row flex-wrap items-center justify-center bg-black/75 px-[10%] py-[55px] backdrop-blur-sm"
                                onClick={closePortal}
                            >
                                <div className="absolute left-7 top-7 z-50 flex flex-row">
                                    <button
                                        className="group h-full px-1"
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
                                    className="block max-h-full max-w-full overflow-hidden object-contain"
                                    src={entry.items ? entry.items[0].path : ""}
                                    width={
                                        entry.items ? entry.items[0].width : 0
                                    }
                                    height={
                                        entry.items ? entry.items[0].height : 0
                                    }
                                    loading="eager"
                                    unoptimized={true}
                                />
                            </div>,
                        )}
                    </React.Fragment>
                )}
            </PortalWithState>
            <ProjectInfo entry={entry} />
        </div>
    );
}
