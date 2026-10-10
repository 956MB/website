"use client";

import clsx from "clsx";
import {
    mediaImageQuality,
    mediaImageSizes,
    preloadGalleryImage,
} from "lib/gallery";
import { IEntry, IEntryItem } from "lib/interfaces";
import { stripHtml } from "lib/util";
import Image from "next/image";
import { TouchEvent, useCallback, useEffect, useRef, useState } from "react";
import {
    FiChevronLeft,
    FiChevronRight,
    FiExternalLink,
    FiMinimize,
    FiPlay,
} from "react-icons/fi";

const controlClasses =
    "group flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white/90 backdrop-blur-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p0 dark:border-neutral-800 dark:bg-black/90 dark:focus-visible:outline-o0 sm:h-9 sm:w-9";
const iconClasses = "h-4 w-4 text-neutral-400";
const thumbClasses = "h-12 w-12 sm:h-16 sm:w-16";
const entryLinkOffsetClasses = "bottom-[5.375rem] sm:bottom-[6.375rem]";

const trimUrl = (url: string) => {
    const clean = url.replace(/^https?:\/\//, "");
    return clean.length >= 40 ? clean.substring(0, 40) + "..." : clean;
};

function MediaContent({
    content,
    selectedIdx,
}: {
    content: IEntryItem;
    selectedIdx: number;
}) {
    const isVideo = content.path.includes(".mp4");

    if (isVideo) {
        return (
            <video
                key={content.path}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full"
                style={{ objectFit: "contain" }}
                src={content.path}
                width={content.width}
                height={content.height}
                controls
                loop
                muted
                playsInline
                autoPlay
            />
        );
    }

    return (
        <Image
            key={content.path}
            onClick={(e) => e.stopPropagation()}
            alt={`fullscreen-image-${selectedIdx}`}
            className="max-h-full max-w-full"
            style={{ objectFit: "contain" }}
            src={content.path}
            width={content.width}
            height={content.height}
            priority={true}
            draggable={false}
            loading="eager"
            quality={mediaImageQuality}
            sizes={mediaImageSizes(true, content)}
        />
    );
}

export default function ContentGallery({
    entry,
    isOpen,
    onCloseAction,
    initialIndex = 0,
    onIndexChangeAction,
    showThumbnails = true,
}: {
    entry: IEntry;
    isOpen: boolean;
    onCloseAction?: () => void;
    initialIndex?: number;
    onIndexChangeAction?: (index: number) => void;
    showThumbnails?: boolean;
}) {
    const isControlled = onIndexChangeAction !== undefined;
    const [internalSelectedIdx, setSelectedIdx] = useState(initialIndex);
    const selectedIdx = isControlled ? initialIndex : internalSelectedIdx;
    const imagesCount = entry.items?.length || 0;
    const selectedContent = entry.items?.[selectedIdx];
    const description = entry.summary?.length
        ? stripHtml(entry.summary.join(" "))
        : "";
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const thumbnailStripRef = useRef<HTMLDivElement>(null);
    const hasThumbnails = showThumbnails && imagesCount > 1;

    useEffect(() => {
        const strip = thumbnailStripRef.current;
        const selected = strip?.children[selectedIdx] as
            | HTMLElement
            | undefined;
        if (!strip || !selected) return;
        const left = selected.offsetLeft - strip.offsetLeft;
        if (left < strip.scrollLeft) {
            strip.scrollTo({ left });
        } else if (
            left + selected.offsetWidth >
            strip.scrollLeft + strip.clientWidth
        ) {
            strip.scrollTo({
                left: left + selected.offsetWidth - strip.clientWidth,
            });
        }
    }, [selectedIdx, hasThumbnails, isOpen]);

    const updateIdx = useCallback(
        (dir: number) => {
            const newIdx = selectedIdx + dir;
            if (newIdx < 0 || newIdx >= imagesCount || newIdx === selectedIdx)
                return;
            if (!isControlled) setSelectedIdx(newIdx);
            onIndexChangeAction?.(newIdx);
        },
        [imagesCount, selectedIdx, isControlled, onIndexChangeAction],
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

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCloseAction?.();
                return;
            }

            if (imagesCount > 1) {
                if (e.key === "ArrowLeft" || e.key === "h") {
                    e.preventDefault();
                    updateIdx(-1);
                } else if (e.key === "ArrowRight" || e.key === "l") {
                    e.preventDefault();
                    updateIdx(1);
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onCloseAction, imagesCount, updateIdx]);

    useEffect(() => {
        if (!isOpen) return;

        const body = document.body;
        const root = document.documentElement;
        const previous = {
            overflow: body.style.overflow,
            bodyGutter: body.style.scrollbarGutter,
            rootGutter: root.style.scrollbarGutter,
        };

        // lock background scrolling and drop the reserved scrollbar gutter,
        // otherwise a strip on the right keeps the overlay from covering the
        // whole window (and throws off the top/right control margins)
        body.style.overflow = "hidden";
        body.style.scrollbarGutter = "auto";
        root.style.scrollbarGutter = "auto";

        return () => {
            body.style.overflow = previous.overflow;
            body.style.scrollbarGutter = previous.bodyGutter;
            root.style.scrollbarGutter = previous.rootGutter;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !entry.items) return;

        const preload = (index: number) => {
            const item = entry.items?.[index];
            if (item) preloadGalleryImage(item, true);
        };

        if (selectedIdx > 0) preload(selectedIdx - 1);
        if (selectedIdx < imagesCount - 1) preload(selectedIdx + 1);
    }, [isOpen, selectedIdx, entry.items, imagesCount]);

    if (!isOpen || !selectedContent) return null;

    return (
        <div
            // w-screen keeps the overlay spanning the full window (100vw
            // includes the scrollbar gutter), so right-3 measures from the
            // window edge and matches the top-3 offset.
            className="fixed inset-y-0 left-0 z-[9999] flex w-screen items-center justify-center bg-white dark:bg-black"
            onClick={onCloseAction}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="absolute right-3 top-3 z-[10000] flex items-center gap-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onCloseAction?.();
                    }}
                    title="Close"
                    aria-label="Close"
                    className={controlClasses}
                >
                    {FiMinimize({
                        className: clsx(
                            iconClasses,
                            "group-hover:text-p0 dark:group-hover:text-o0",
                        ),
                    })}
                </button>
            </div>

            {imagesCount > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            updateIdx(-1);
                        }}
                        disabled={selectedIdx === 0}
                        title="Previous"
                        aria-label="Previous"
                        className={clsx(
                            controlClasses,
                            "absolute left-3 top-1/2 z-[10000] -translate-y-1/2",
                            selectedIdx === 0 && "cursor-default opacity-40",
                        )}
                    >
                        {FiChevronLeft({
                            className: clsx(
                                iconClasses,
                                selectedIdx > 0 &&
                                    "group-hover:text-p0 dark:group-hover:text-o0",
                            ),
                        })}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            updateIdx(1);
                        }}
                        disabled={selectedIdx === imagesCount - 1}
                        title="Next"
                        aria-label="Next"
                        className={clsx(
                            controlClasses,
                            "absolute right-3 top-1/2 z-[10000] -translate-y-1/2",
                            selectedIdx === imagesCount - 1 &&
                                "cursor-default opacity-40",
                        )}
                    >
                        {FiChevronRight({
                            className: clsx(
                                iconClasses,
                                selectedIdx < imagesCount - 1 &&
                                    "group-hover:text-p0 dark:group-hover:text-o0",
                            ),
                        })}
                    </button>
                </>
            )}

            <div
                className="relative z-[9998] flex h-full w-full items-center justify-center"
                onClick={onCloseAction}
            >
                <MediaContent
                    content={selectedContent}
                    selectedIdx={selectedIdx}
                />
            </div>

            {(entry.title || description) && (
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[9999] bg-gradient-to-b from-black via-black/70 to-transparent px-4 pb-12 pt-6 text-center">
                    <div className="mx-auto flex max-w-xl flex-col items-center gap-1">
                        {entry.title && (
                            <span className="font-degular text-[11px] font-semibold uppercase text-white">
                                {entry.title}
                            </span>
                        )}
                        {description && (
                            <span className="line-clamp-2 font-mono text-[9px] uppercase leading-4 text-white/70">
                                {description}
                            </span>
                        )}
                    </div>
                </div>
            )}

            {hasThumbnails && (
                <div className="absolute bottom-3 left-1/2 z-[10000] max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white/85 backdrop-blur-sm dark:border-neutral-800 dark:bg-black/85">
                    <div
                        ref={thumbnailStripRef}
                        role="group"
                        aria-label="Gallery thumbnails"
                        className="relative flex gap-2 overflow-x-auto p-2"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                    >
                        {entry.items?.map((content, idx) => (
                            <button
                                key={content.path}
                                type="button"
                                aria-label={`Show ${content.path.includes(".mp4") ? "video" : "image"} ${idx + 1}`}
                                aria-pressed={selectedIdx === idx}
                                onClick={() => updateIdx(idx - selectedIdx)}
                                className={clsx(
                                    "relative shrink-0 overflow-hidden rounded-lg bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p0 dark:bg-neutral-900 dark:focus-visible:outline-o0",
                                    thumbClasses,
                                    selectedIdx === idx
                                        ? "ring-2 ring-p0 dark:ring-o0"
                                        : "opacity-60 hover:opacity-100",
                                )}
                            >
                                {content.path.includes(".mp4") ? (
                                    <>
                                        <video
                                            className="h-full w-full object-cover"
                                            src={content.path}
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                        {FiPlay({
                                            className:
                                                "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow",
                                        })}
                                    </>
                                ) : (
                                    <Image
                                        alt=""
                                        className="h-full w-full object-cover"
                                        src={content.path}
                                        width={128}
                                        height={128}
                                        sizes="(max-width: 639px) 48px, 64px"
                                        draggable={false}
                                        loading="lazy"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {entry.link && (
                <div
                    className={clsx(
                        "absolute right-3 z-[10000] max-w-[calc(100vw-1.5rem)]",
                        hasThumbnails ? entryLinkOffsetClasses : "bottom-3",
                    )}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                >
                    <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group flex h-8 items-center gap-1.5 rounded-lg border border-neutral-200 bg-white/90 px-2.5 backdrop-blur-sm transition-all dark:border-neutral-800 dark:bg-black/90 sm:h-9 sm:gap-2"
                        aria-label="View on Lightroom"
                    >
                        <span className="min-w-0 truncate text-[13px] font-normal text-neutral-600 group-hover:text-p0 dark:text-neutral-500 dark:group-hover:text-o0">
                            {trimUrl(entry.link)}
                        </span>
                        {FiExternalLink({
                            className:
                                "h-3.5 w-3.5 flex-shrink-0 text-neutral-400 group-hover:text-p0 dark:group-hover:text-o0",
                        })}
                    </a>
                </div>
            )}
        </div>
    );
}
