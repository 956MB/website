"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { IEntry } from "lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useEffect, useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import GroupHeader from "./GroupHeader";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { ...windowSize, isClient };
}

export default function ContentGallery({
    entry,
    backLink,
}: {
    entry: IEntry;
    backLink?: string;
}) {
    const { isClient } = useWindowSize();

    const [selectedIdx, setSelectedIdx] = useState(0);
    const imagesCount = entry.items?.length || 0;
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const updateIdx = (dir: number) => {
        const newIdx = selectedIdx + dir;
        if (newIdx >= 0 && newIdx < imagesCount) {
            setSelectedIdx(newIdx);
        }
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const swipeDistance = touchEndX.current - touchStartX.current;
        const minSwipeDistance = 50;

        if (swipeDistance > minSwipeDistance && selectedIdx > 0) {
            updateIdx(-1);
        } else if (
            swipeDistance < -minSwipeDistance &&
            selectedIdx < imagesCount - 1
        ) {
            updateIdx(1);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const selectedContent = entry.items?.[selectedIdx];

    useEffect(() => {
        if (!entry.items || !isClient) return;

        const preloadImage = (index: number) => {
            const item = entry.items?.[index];
            if (item && !item.path.includes(".mp4")) {
                const img = new window.Image();
                img.src = item.path;
            }
        };

        if (selectedIdx > 0) preloadImage(selectedIdx - 1);
        if (selectedIdx < imagesCount - 1) preloadImage(selectedIdx + 1);
    }, [selectedIdx, entry.items, imagesCount, isClient]);

    return (
        <div className="flex h-full w-full max-w-screen-lg flex-col items-center overflow-visible">
            <div className="w-full px-2 sm:px-0">
                <div className="flex flex-col items-start">
                    <Link
                        href={backLink ?? "/"}
                        className="mb-2 flex flex-row items-center gap-2 text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
                    >
                        {FiArrowLeft({
                            className: "h-5 w-5",
                        })}
                        <span className="text-sm font-medium leading-none">
                            Back
                        </span>
                    </Link>

                    <GroupHeader
                        entry={{
                            title: entry.title,
                            description: entry.summary?.join("") || "",
                            category: entry.category || "",
                            items: [] as IEntry[],
                        }}
                        header={true}
                        gallery={true}
                        noBackdrop={true}
                    />

                    {/* <div className="inline-flex flex-row items-center justify-center gap-3 py-2 sm:justify-start sm:py-3">
                        <h1 className="mt-[1px] whitespace-nowrap text-center text-[23px] font-bold lowercase text-black dark:text-white sm:leading-5">
                            {entry.title}
                        </h1>
                    </div> */}

                    {/* {entry.summary && entry.summary.length > 0 && (
                        <div
                            className={clsx(
                                "w-full max-w-2xl pb-2 pt-2 sm:pb-0",
                            )}
                        >
                            <span className="gallery-summary block text-left text-[13px] font-medium lowercase italic leading-[1.56em] tracking-wide text-neutral-800 dark:text-neutral-350 sm:text-[14px]">
                                {parse(entry.summary.join(""))}
                            </span>
                        </div>
                    )} */}
                </div>
            </div>

            <div
                className="relative mb-3 mt-4 flex w-full items-center justify-center overflow-hidden rounded-[0.659rem] border border-neutral-200 px-2 dark:border-neutral-800 sm:mt-8 sm:px-0"
                style={{
                    aspectRatio: "16/10",
                    maxHeight: "60vh",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {selectedContent && (
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black">
                        {selectedContent.path.includes(".mp4") ? (
                            <div className="flex max-h-full max-w-full flex-col items-center bg-neutral-50 dark:bg-black">
                                <video
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "contain",
                                        minHeight: "100%",
                                        minWidth: "100%",
                                    }}
                                    src={selectedContent.path}
                                    width={selectedContent.width}
                                    height={selectedContent.height}
                                    controls
                                    loop
                                    muted
                                    playsInline
                                />
                                {selectedContent.caption && (
                                    <span className="gallery-summary mt-4 max-w-xl text-center text-[13px] font-medium leading-[1.3em] tracking-wide text-neutral-500 dark:text-neutral-400">
                                        {parse(selectedContent.caption)}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className="flex max-h-full max-w-full flex-col items-center bg-neutral-50 dark:bg-black">
                                <Image
                                    alt={`project-image-${selectedIdx}`}
                                    className="h-full w-full bg-transparent dark:bg-black"
                                    style={{
                                        objectFit: "contain",
                                        minHeight: "100%",
                                        minWidth: "100%",
                                    }}
                                    src={selectedContent.path}
                                    width={selectedContent.width}
                                    height={selectedContent.height}
                                    priority={true}
                                    draggable={false}
                                    loading="eager"
                                />
                                {selectedContent.caption && (
                                    <span className="gallery-summary mt-4 max-w-xl text-center text-[13px] font-medium leading-[1.3em] tracking-wide text-neutral-500 dark:text-neutral-400">
                                        {parse(selectedContent.caption)}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Dashed line separator and thumbnails below main image */}
            {entry.items && entry.items.length > 1 && (
                <>
                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-3 px-0.5 pb-0.5 sm:grid-cols-4 sm:px-0">
                            {entry.items?.map((content, idx) => (
                                <div
                                    key={idx}
                                    className={clsx(
                                        "aspect-square cursor-pointer",
                                    )}
                                    onClick={() => {
                                        setSelectedIdx(idx);
                                    }}
                                >
                                    {content.path.includes(".mp4") ? (
                                        <div
                                            className={clsx(
                                                "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-black",
                                                selectedIdx === idx
                                                    ? "border-white-600 border-2 ring-2 ring-p0 dark:border-black dark:ring-o0"
                                                    : "hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-600",
                                            )}
                                        >
                                            {selectedIdx === idx && (
                                                <div className="pointer-events-none absolute inset-[3px] z-10 rounded-md"></div>
                                            )}
                                            <video
                                                className="h-full w-full object-cover"
                                                src={content.path}
                                                muted
                                                autoPlay={false}
                                                loop={false}
                                                controls={false}
                                                playsInline={false}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className={clsx(
                                                "relative box-border h-full w-full overflow-hidden rounded-lg bg-white dark:bg-black",
                                                selectedIdx === idx
                                                    ? "border-white-600 border-2 ring-2 ring-p0 dark:border-black dark:ring-o0"
                                                    : "hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-600",
                                            )}
                                        >
                                            {selectedIdx === idx && (
                                                <div className="pointer-events-none absolute inset-[3px] z-10 rounded-md"></div>
                                            )}
                                            <Image
                                                alt={`thumbnail-${idx}`}
                                                className="h-full w-full object-cover"
                                                src={content.path}
                                                width={200}
                                                height={200}
                                                draggable={false}
                                                loading={
                                                    idx <= 6 ? "eager" : "lazy"
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
