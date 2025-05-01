"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { IEntry } from "lib/interfaces";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TouchEvent, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const CELL_SIZE = 80;
const CELL_GAP = 12;
const CELL_COUNT_S = 3;
const CELL_COUNT_M = 4;
const CELL_COUNT_L = 5;

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

function getCellCount(width: number): number {
    if (width < 769) {
        return CELL_COUNT_S;
    } else if (width < 1024) {
        return CELL_COUNT_M;
    } else {
        return CELL_COUNT_L;
    }
}

function calculateMaxWidth(cellCount: number): number {
    return CELL_SIZE * cellCount + CELL_GAP * (cellCount - 1) + CELL_SIZE / 2;
}

export default function ContentGallery({ entry }: { entry: IEntry }) {
    let pathname = usePathname() || "/";
    const { width } = useWindowSize();
    const cellCount = getCellCount(width);
    const maxGalleryWidth = calculateMaxWidth(cellCount);

    const [selectedIdx, setSelectedIdx] = useState(0);
    const imagesCount = entry.items?.length || 0;
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    const updateIdx = (dir: number) => {
        const newIdx = selectedIdx + dir;
        if (newIdx >= 0 && newIdx < imagesCount) {
            setSelectedIdx(newIdx);
        }
    };

    const scrollThumbnails = (direction: number) => {
        if (!thumbnailContainerRef.current) return;
        const scrollAmount = direction * calculateMaxWidth(cellCount);

        thumbnailContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
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

    return (
        <div className="flex h-full w-full max-w-screen-xl flex-col items-center overflow-hidden">
            <div className="w-full px-2 sm:px-0">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-8">
                    <div className="flex flex-col items-center sm:items-start sm:pr-4   ">
                        <div className="inline-flex flex-row items-center justify-center gap-3 py-2 sm:justify-start sm:py-3">
                            <h1 className="mt-[1px] whitespace-nowrap text-center text-[23px] font-bold text-black dark:text-white sm:leading-5">
                                {entry.title}
                            </h1>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-3">
                            {entry.date && (
                                <span className="mt-[2px] text-center text-sm font-medium text-neutral-500 dark:font-medium dark:text-white/70 sm:leading-5">
                                    {entry.date}
                                </span>
                            )}

                            <>
                                <div className="h-[22px] self-center border-r border-neutral-200 dark:border-neutral-800"></div>

                                <div className="flex flex-row items-center justify-center gap-3">
                                    {entry.category && (
                                        <span className="mt-[2px] text-center text-sm font-semibold capitalize text-black dark:font-medium dark:text-white/90 sm:leading-5">
                                            {entry.category}
                                        </span>
                                    )}
                                </div>
                            </>
                        </div>

                        {entry.summary && entry.summary.length > 0 && (
                            <div className="w-full max-w-lg pb-2 pt-2 sm:pb-0 xl:max-w-xl">
                                <span className="gallery-summary block text-center text-[13px] font-medium italic leading-[1.56em] tracking-wide text-neutral-800 dark:text-neutral-300 sm:text-left sm:text-[14px]">
                                    {parse(entry.summary.join(""))}
                                </span>
                            </div>
                        )}
                    </div>

                    {entry.items && entry.items.length > 1 && (
                        <div
                            className={clsx(
                                "group relative self-center sm:self-end",
                            )}
                        >
                            {entry.items.length > cellCount && (
                                <div className="hidden lg:block">
                                    <div className="absolute -left-0 top-1/2 z-10 -translate-y-[calc(50%+5px)] opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                                        <button
                                            className="rounded-full bg-neutral-200/80 p-1.5 backdrop-blur-sm transition-all hover:bg-neutral-200 dark:bg-neutral-900/80 hover:dark:bg-neutral-800"
                                            onClick={() => scrollThumbnails(-1)}
                                        >
                                            <ChevronLeft
                                                size={16}
                                                className="text-neutral-600 dark:text-neutral-400"
                                            />
                                        </button>
                                    </div>
                                    <div className="absolute -right-0 top-1/2 z-10 -translate-y-[calc(50%+5px)] opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                                        <button
                                            className="rounded-full bg-neutral-200/80 p-1.5 backdrop-blur-sm transition-all hover:bg-neutral-200 dark:bg-neutral-900/80 hover:dark:bg-neutral-800"
                                            onClick={() => scrollThumbnails(1)}
                                        >
                                            <ChevronRight
                                                size={16}
                                                className="text-neutral-600 dark:text-neutral-400"
                                            />
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div
                                className="relative overflow-x-auto px-2 py-[10px] sm:self-start sm:px-0"
                                style={{ maxWidth: `${maxGalleryWidth}px` }}
                            >
                                <div
                                    ref={thumbnailContainerRef}
                                    className={clsx(
                                        `no-scrollbar desktop-no-horizontal-scroll flex touch-pan-x flex-row items-center justify-start gap-3 overflow-x-auto whitespace-nowrap`,
                                        {
                                            "justify-center":
                                                entry.items.length <= cellCount,
                                        },
                                    )}
                                >
                                    {entry.items?.map((content, idx) => (
                                        <div
                                            key={idx}
                                            className={clsx(
                                                "group relative flex-shrink-0 cursor-pointer pb-3 transition-all duration-100",
                                                selectedIdx !== idx
                                                    ? "opacity-70 hover:opacity-100"
                                                    : "opacity-100",
                                            )}
                                            onClick={() => setSelectedIdx(idx)}
                                        >
                                            {content.path.includes(".mp4") ? (
                                                <div
                                                    className={clsx(
                                                        "flex h-16 w-16 items-center justify-center overflow-hidden bg-neutral-900 sm:h-20 sm:w-20",
                                                    )}
                                                >
                                                    <video
                                                        className="h-full w-full object-cover"
                                                        src={content.path}
                                                        width={CELL_SIZE}
                                                        height={CELL_SIZE}
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
                                                        "h-16 w-16 overflow-hidden bg-white dark:bg-neutral-900 sm:h-20 sm:w-20",
                                                    )}
                                                >
                                                    <Image
                                                        alt={`thumbnail-${idx}`}
                                                        className="h-full w-full object-cover"
                                                        src={content.path}
                                                        width={CELL_SIZE}
                                                        height={CELL_SIZE}
                                                        unoptimized={true}
                                                    />
                                                </div>
                                            )}

                                            <div
                                                className={clsx(
                                                    "absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-full transition-all",
                                                    selectedIdx === idx
                                                        ? "bg-neutral-300 dark:bg-neutral-700"
                                                        : "bg-transparent",
                                                )}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div
                className="zpx-2 relative flex w-full flex-1 items-center justify-center overflow-hidden pt-4 sm:px-0 sm:pt-8"
                style={{
                    maxHeight: "calc(100vh - 320px)",
                    minHeight: "min(600px, calc(100vh - 320px))",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {selectedContent && (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950">
                        {selectedContent.path.includes(".mp4") ? (
                            <div className="flex max-h-full max-w-full flex-col items-center bg-neutral-50 dark:bg-neutral-950">
                                <video
                                    className="max-h-[70vh] max-w-full object-contain"
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
                            <div className="flex max-h-full max-w-full flex-col items-center bg-neutral-50 dark:bg-neutral-950">
                                <Image
                                    alt={`project-image-${selectedIdx}`}
                                    className="max-h-[70vh] max-w-full bg-transparent object-contain dark:bg-neutral-950"
                                    src={selectedContent.path}
                                    width={selectedContent.width}
                                    height={selectedContent.height}
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
        </div>
    );
}
