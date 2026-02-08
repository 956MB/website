"use client";

import clsx from "clsx";
import { IEntry } from "lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useCallback, useEffect, useRef, useState } from "react";
import {
    FiArrowLeft,
    FiChevronLeft,
    FiChevronRight,
    FiMaximize,
    FiMinimize,
} from "react-icons/fi";
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

function NavigationButtons({
    selectedIdx,
    imagesCount,
    isFullscreen,
    onPrevious,
    onNext,
    onToggleFullscreen,
}: {
    selectedIdx: number;
    imagesCount: number;
    isFullscreen: boolean;
    onPrevious: () => void;
    onNext: () => void;
    onToggleFullscreen: () => void;
}) {
    const sizeClasses = isFullscreen
        ? "h-8 w-8 sm:h-10 sm:w-10"
        : "h-8 w-8 sm:h-9 sm:w-9";
    const iconSizeClasses = isFullscreen ? "h-5 w-5" : "h-5 w-5";
    const fullscreenIconSize = isFullscreen ? "h-5 w-5" : "h-4 w-4";

    return (
        <>
            {imagesCount > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        disabled={selectedIdx === 0}
                        title="Previous"
                        aria-label="Previous"
                        className={clsx(
                            "group flex items-center justify-center rounded-lg border border-neutral-200 bg-white/90 backdrop-blur-sm transition-all dark:border-neutral-800 dark:bg-black/90",
                            sizeClasses,
                            selectedIdx === 0
                                ? "cursor-default opacity-40"
                                : "",
                        )}
                    >
                        {FiChevronLeft({
                            className: clsx(
                                "text-neutral-400",
                                iconSizeClasses,
                                selectedIdx === 0
                                    ? ""
                                    : "group-hover:text-p0 dark:group-hover:text-o0",
                            ),
                        })}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        disabled={selectedIdx === imagesCount - 1}
                        title="Next"
                        aria-label="Next"
                        className={clsx(
                            "group flex items-center justify-center rounded-lg border border-neutral-200 bg-white/90 backdrop-blur-sm transition-all dark:border-neutral-800 dark:bg-black/90",
                            sizeClasses,
                            selectedIdx === imagesCount - 1
                                ? "cursor-default opacity-40"
                                : "",
                        )}
                    >
                        {FiChevronRight({
                            className: clsx(
                                "text-neutral-400",
                                iconSizeClasses,
                                selectedIdx === imagesCount - 1
                                    ? ""
                                    : "group-hover:text-p0 dark:group-hover:text-o0",
                            ),
                        })}
                    </button>
                </>
            )}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFullscreen();
                }}
                className={clsx(
                    "group flex items-center justify-center rounded-lg border border-neutral-200 bg-white/90 backdrop-blur-sm transition-all dark:border-neutral-800 dark:bg-black/90",
                    sizeClasses,
                )}
                title={isFullscreen ? "Minimize" : "Maximize"}
                aria-label={isFullscreen ? "Minimize" : "Maximize"}
            >
                {isFullscreen
                    ? FiMinimize({
                          className: clsx(
                              "text-neutral-400 group-hover:text-p0 dark:group-hover:text-o0",
                              fullscreenIconSize,
                          ),
                      })
                    : FiMaximize({
                          className: clsx(
                              "text-neutral-400 group-hover:text-p0 dark:group-hover:text-o0",
                              fullscreenIconSize,
                          ),
                      })}
            </button>
        </>
    );
}

function MediaContent({
    content,
    selectedIdx,
    isFullscreen = false,
}: {
    content: { path: string; width: number; height: number };
    selectedIdx: number;
    isFullscreen?: boolean;
}) {
    const isVideo = content.path.includes(".mp4");

    if (isVideo) {
        return (
            <video
                onClick={(e) => e.stopPropagation()}
                className={
                    isFullscreen ? "max-h-full max-w-full" : "h-full w-full"
                }
                style={{
                    objectFit: "contain",
                    ...(isFullscreen
                        ? {}
                        : { minHeight: "100%", minWidth: "100%" }),
                }}
                src={content.path}
                width={content.width}
                height={content.height}
                controls
                loop
                muted
                playsInline
                autoPlay={isFullscreen}
            />
        );
    }

    return (
        <Image
            onClick={(e) => e.stopPropagation()}
            alt={
                isFullscreen
                    ? `fullscreen-image-${selectedIdx}`
                    : `project-image-${selectedIdx}`
            }
            className={
                isFullscreen
                    ? "max-h-full max-w-full"
                    : "h-full w-full bg-transparent dark:bg-black"
            }
            style={{
                objectFit: "contain",
                ...(isFullscreen
                    ? {}
                    : { minHeight: "100%", minWidth: "100%" }),
            }}
            src={content.path}
            width={content.width}
            height={content.height}
            priority={true}
            draggable={false}
            loading="eager"
            quality={isFullscreen ? 100 : 80}
            unoptimized={isFullscreen ? true : false}
            sizes={isFullscreen ? "100vw" : "(max-width: 1024px) 100vw, 1024px"}
        />
    );
}

export default function ContentGallery({
    entry,
    backLink,
    fullscreenOnly = false,
    isOpen,
    onCloseAction,
    initialIndex = 0,
}: {
    entry: IEntry;
    backLink?: string;
    fullscreenOnly?: boolean;
    isOpen?: boolean;
    onCloseAction?: () => void;
    initialIndex?: number;
}) {
    const { isClient } = useWindowSize();

    const [selectedIdx, setSelectedIdx] = useState(initialIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const imagesCount = entry.items?.length || 0;
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        if (fullscreenOnly) {
            setSelectedIdx(initialIndex);
        }
    }, [initialIndex, fullscreenOnly]);

    const updateIdx = useCallback(
        (dir: number) => {
            setSelectedIdx((prevIdx) => {
                const newIdx = prevIdx + dir;
                if (newIdx >= 0 && newIdx < imagesCount) {
                    return newIdx;
                }
                return prevIdx;
            });
        },
        [imagesCount],
    );

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
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (fullscreenOnly && isOpen) {
                    onCloseAction?.();
                } else if (isFullscreen) {
                    setIsFullscreen(false);
                }
                return;
            }

            if (
                (isFullscreen || (fullscreenOnly && isOpen)) &&
                imagesCount > 1
            ) {
                if (e.key === "ArrowLeft" || e.key === "h") {
                    e.preventDefault();
                    updateIdx(-1);
                } else if (e.key === "ArrowRight" || e.key === "l") {
                    e.preventDefault();
                    updateIdx(1);
                }
            }
        };

        if (fullscreenOnly && isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else if (isFullscreen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [
        isFullscreen,
        fullscreenOnly,
        isOpen,
        onCloseAction,
        imagesCount,
        updateIdx,
    ]);

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

    if (fullscreenOnly) {
        if (!isOpen || !selectedContent) {
            return null;
        }

        return (
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
                onClick={onCloseAction}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="absolute right-3 top-3 z-[10000] flex gap-2">
                    <NavigationButtons
                        selectedIdx={selectedIdx}
                        imagesCount={imagesCount}
                        isFullscreen={true}
                        onPrevious={() => updateIdx(-1)}
                        onNext={() => updateIdx(1)}
                        onToggleFullscreen={onCloseAction || (() => {})}
                    />
                </div>

                <div
                    className="relative z-[9998] flex h-full w-full items-center justify-center p-4"
                    onClick={onCloseAction}
                >
                    <MediaContent
                        content={selectedContent}
                        selectedIdx={selectedIdx}
                        isFullscreen={true}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full w-full max-w-screen-lg flex-col items-center overflow-visible">
            <div className="w-full px-2 sm:px-0">
                <div className="flex flex-col items-start">
                    <Link
                        href={backLink ?? "/"}
                        className="mb-2 flex flex-row items-center gap-2 text-neutral-500 hover:text-p0 dark:hover:text-o0"
                    >
                        {FiArrowLeft({
                            className: "h-5 w-5",
                        })}
                        <span className="font-mono text-sm leading-none">
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
                        itemEntry={entry}
                        header={true}
                    />
                </div>
            </div>

            <div
                className="relative mb-3 mt-4 flex w-full items-center justify-center overflow-hidden border border-neutral-200 px-2 dark:border-neutral-800 sm:mt-8 sm:px-0"
                style={{
                    aspectRatio: "16/10",
                    maxHeight: "60vh",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={clsx(
                        "absolute right-3 top-3 z-20 flex gap-2",
                        isFullscreen ? "hidden" : "",
                    )}
                >
                    <NavigationButtons
                        selectedIdx={selectedIdx}
                        imagesCount={imagesCount}
                        isFullscreen={false}
                        onPrevious={() => updateIdx(-1)}
                        onNext={() => updateIdx(1)}
                        onToggleFullscreen={() =>
                            setIsFullscreen(!isFullscreen)
                        }
                    />
                </div>

                {selectedContent && (
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black">
                        <MediaContent
                            content={selectedContent}
                            selectedIdx={selectedIdx}
                            isFullscreen={false}
                        />
                    </div>
                )}
            </div>

            {entry.items && entry.items.length > 1 && (
                <>
                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-3 px-0.5 pb-0.5 sm:grid-cols-8 lg:px-0">
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

            {isFullscreen && selectedContent && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
                    onClick={() => setIsFullscreen(false)}
                >
                    <div className="absolute right-3 top-3 z-[10000] flex gap-2">
                        <NavigationButtons
                            selectedIdx={selectedIdx}
                            imagesCount={imagesCount}
                            isFullscreen={true}
                            onPrevious={() => updateIdx(-1)}
                            onNext={() => updateIdx(1)}
                            onToggleFullscreen={() =>
                                setIsFullscreen(!isFullscreen)
                            }
                        />
                    </div>

                    <div
                        className="relative z-[9998] flex h-full w-full items-center justify-center p-4"
                        onClick={() => setIsFullscreen(false)}
                    >
                        <MediaContent
                            content={selectedContent}
                            selectedIdx={selectedIdx}
                            isFullscreen={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
