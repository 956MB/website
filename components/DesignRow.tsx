"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { IEntry, IEntryGroup, IEntryItem } from "lib/interfaces";
import {
    containerVariants,
    generateRandomDelays,
    itemVariants,
} from "lib/util";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import ContentGallery from "./ContentGallery";
import GroupHeader from "./GroupHeader";

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "base">("base");

    useEffect(() => {
        const updateBreakpoint = () => {
            if (window.innerWidth >= 768) {
                setBreakpoint("md");
            } else if (window.innerWidth >= 640) {
                setBreakpoint("sm");
            } else {
                setBreakpoint("base");
            }
        };

        updateBreakpoint();
        window.addEventListener("resize", updateBreakpoint);
        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return breakpoint;
}

function getColumns(breakpoint: "sm" | "md" | "base"): number {
    switch (breakpoint) {
        case "md":
            return 3;
        case "sm":
            return 2;
        default:
            return 1;
    }
}

const hasGallery = (item: IEntry) =>
    !!item.items?.length || !!(item.thumbnail ?? item.useLinkPreview);

function getRadius(
    index: number,
    totalItems: number,
    columns: number,
): { style: React.CSSProperties; className: string } {
    const row = Math.floor(index / columns);
    const col = index % columns;
    const totalRows = Math.ceil(totalItems / columns);
    const lastRow = totalRows - 1;
    const itemsInLastRow = totalItems - lastRow * columns;
    const isFirstRow = row === 0;
    const isLastRow = row === lastRow;
    const isFirstCol = col === 0;
    const isLastColInRow =
        col === columns - 1 || (isLastRow && col === itemsInLastRow - 1);
    const cellBelowIndex = index + columns;
    const hasCellBelow = cellBelowIndex < totalItems;
    const topLeft = isFirstRow && isFirstCol;
    const topRight = isFirstRow && isLastColInRow;
    const bottomLeft =
        (isLastRow && isFirstCol) || (isFirstCol && !hasCellBelow);
    const bottomRight =
        (isLastRow && isLastColInRow) || (isLastColInRow && !hasCellBelow);

    const radius = "0.5rem";
    const style: React.CSSProperties = {
        borderTopLeftRadius: topLeft ? radius : "0.5rem",
        borderTopRightRadius: topRight ? radius : "0.5rem",
        borderBottomLeftRadius: bottomLeft ? radius : "0.5rem",
        borderBottomRightRadius: bottomRight ? radius : "0.5rem",
    };

    return {
        style,
        className: "overflow-hidden",
    };
}

export function DesignItem({
    item,
    cornerRadius,
    delay,
    onOpen,
}: {
    item: IEntry;
    cornerRadius: ReturnType<typeof getRadius>;
    delay: number;
    onOpen?: () => void;
}) {
    const [hoverThumb, setHoverThumb] = useState<IEntryItem | null>(null);
    const itemHref = item.linkBlog ?? "#";
    const isExternal = /^https?:\/\//.test(itemHref);

    const thumbSrc = item.thumbnail
        ? item.thumbnail.path
        : item.items
          ? item.items[0].path
          : "";
    const thumbWidth = item.thumbnail
        ? item.thumbnail.width
        : item.items
          ? item.items[0].width
          : 0;
    const thumbHeight = item.thumbnail
        ? item.thumbnail.height
        : item.items
          ? item.items[0].height
          : 0;

    const handleMouseEnter = () => {
        if (item.altThumb === false || !item.items || item.items.length <= 1)
            return;
        const thumbPath = item.thumbnail
            ? item.thumbnail.path
            : item.items[0].path;
        const candidates = item.items.filter((i) => i.path !== thumbPath);
        if (candidates.length === 0) return;
        const picked =
            candidates[Math.floor(Math.random() * candidates.length)];
        setHoverThumb(picked);
    };

    const handleMouseLeave = () => {
        setHoverThumb(null);
    };

    const thumbnail = (
        <div
            className={clsx(
                "relative aspect-square w-full bg-neutral-100 dark:bg-neutral-900",
                cornerRadius.className,
            )}
            style={cornerRadius.style}
        >
            <Image
                alt={item.id}
                className={clsx(
                    "block aspect-square h-full w-full select-none object-cover transition-opacity duration-200 ease-in-out",
                    (item.items || item.linkBlog) && "!cursor-pointer",
                    hoverThumb && "opacity-0",
                )}
                src={thumbSrc}
                width={thumbWidth}
                height={thumbHeight}
                loading="eager"
                unoptimized={true}
            />
            {hoverThumb && (
                <Image
                    alt={item.id}
                    className={clsx(
                        "absolute inset-0 block aspect-square h-full w-full select-none object-cover transition-opacity duration-200 ease-in-out",
                        (item.items || item.linkBlog) && "!cursor-pointer",
                    )}
                    src={hoverThumb.path}
                    width={hoverThumb.width}
                    height={hoverThumb.height}
                    loading="eager"
                    unoptimized={true}
                />
            )}
        </div>
    );

    return (
        <motion.div
            variants={itemVariants}
            transition={{ duration: 0.35, delay }}
            id={item.id}
            className={clsx(
                "group relative z-0 box-content flex flex-col justify-start uppercase saturate-0 hover:saturate-100",
                "aspect-square",
            )}
            style={cornerRadius.style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {onOpen ? (
                <button
                    type="button"
                    onClick={onOpen}
                    aria-label={`View ${item.title}`}
                    className="group relative flex w-full cursor-pointer flex-col justify-end"
                >
                    {thumbnail}
                </button>
            ) : (
                <Link
                    className="group relative flex flex-col justify-end"
                    href={itemHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={item.title}
                >
                    {thumbnail}
                </Link>
            )}
            <div
                className={clsx(
                    "pointer-events-none absolute bottom-0 z-10 flex h-1/2 w-full flex-col justify-end gap-y-2 border-transparent bg-gradient-to-t from-black/80 to-black/0 px-2 py-3 text-start opacity-100 group-hover:border-p0 group-hover:opacity-100 dark:group-hover:border-o0 sm:h-full sm:justify-center sm:from-black/80 sm:to-black/20 sm:transition-opacity sm:duration-200 lg:border lg:py-4 lg:opacity-0",
                    item.category === "photoshop" && "pl-4 pr-4",
                    item.summary &&
                        item.summary.length <= 0 &&
                        "h-[53px] max-h-[53px] min-h-[53px]",
                )}
                style={cornerRadius.style}
            >
                <div
                    className={clsx(
                        "flex flex-row items-center justify-start gap-2 overflow-hidden sm:flex-col sm:justify-center lg:gap-1",
                        item.category === "photoshop" && "gap-x-3",
                    )}
                >
                    <span
                        className={clsx(
                            "font-pixel-square pointer-events-none select-none text-center text-base font-bold text-white sm:mt-[6px] sm:w-full sm:text-base sm:leading-5 lg:whitespace-normal",
                        )}
                    >
                        {item.title}
                    </span>

                    {item.date && (
                        <span
                            className={
                                "pointer-events-none select-none text-center font-mono text-sm text-white/70 sm:w-full sm:leading-5 lg:mb-2"
                            }
                        >
                            {item.date}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function DesignRow({
    entry,
    noHeader,
}: {
    entry: IEntryGroup;
    noHeader?: boolean;
}) {
    const breakpoint = useBreakpoint();
    const columns = getColumns(breakpoint);
    const [openId, setOpenId] = useState<string | null>(null);

    const randomDelays = useMemo(
        () => generateRandomDelays(entry.items.length),
        [entry.items.length],
    );

    const itemIds = useMemo(
        () => new Set(entry.items.map((item) => item.id)),
        [entry.items],
    );

    // Deep links such as /designs?item=etherspent open straight into the
    // fullscreen gallery, and browser back/forward keeps it in sync.
    useEffect(() => {
        const syncFromUrl = () => {
            const value = new URLSearchParams(window.location.search).get(
                "item",
            );
            setOpenId(value && itemIds.has(value) ? value : null);
        };

        syncFromUrl();
        window.addEventListener("popstate", syncFromUrl);
        return () => window.removeEventListener("popstate", syncFromUrl);
    }, [itemIds]);

    const writeItemParam = useCallback((id: string | null) => {
        const url = new URL(window.location.href);
        if (id) url.searchParams.set("item", id);
        else url.searchParams.delete("item");
        window.history.pushState(null, "", url.pathname + url.search);
    }, []);

    const openItem = useCallback(
        (id: string) => {
            setOpenId(id);
            writeItemParam(id);
        },
        [writeItemParam],
    );

    const closeGallery = useCallback(() => {
        setOpenId(null);
        writeItemParam(null);
    }, [writeItemParam]);

    const openEntry = openId
        ? entry.items.find((item) => item.id === openId)
        : undefined;
    const fallbackImage = openEntry?.thumbnail ?? openEntry?.useLinkPreview;

    // entries without their own gallery items still open fullscreen, using
    // their thumbnail as the single image
    const galleryEntry: IEntry | undefined = openEntry
        ? openEntry.items?.length
            ? openEntry
            : fallbackImage
              ? { ...openEntry, items: [fallbackImage] }
              : undefined
        : undefined;

    return (
        <>
            <div className="relative flex w-full max-w-screen-lg flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
                {!noHeader && (
                    <GroupHeader
                        entry={entry}
                        noDescription={false}
                        titleLink={entry.titleLink}
                    />
                )}

                <div className="flex w-full flex-col gap-y-3.5">
                    <div className="flex w-full flex-row items-center justify-center">
                        <hr className="my-auto h-px w-full border-b border-dotted border-neutral-200 bg-transparent dark:border-neutral-800" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className={clsx(
                            "grid w-full grid-cols-1 items-start justify-center gap-2 sm:grid-cols-2 md:grid-cols-3",
                            "min-h-0",
                        )}
                    >
                        {entry.items.map((item, i) => {
                            const cornerRadius = getRadius(
                                i,
                                entry.items.length,
                                columns,
                            );

                            return (
                                <DesignItem
                                    key={item.id}
                                    item={item}
                                    cornerRadius={cornerRadius}
                                    delay={randomDelays[i]}
                                    onOpen={
                                        hasGallery(item)
                                            ? () => openItem(item.id)
                                            : undefined
                                    }
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {galleryEntry && (
                <ContentGallery
                    key={galleryEntry.id}
                    entry={galleryEntry}
                    isOpen
                    onCloseAction={closeGallery}
                />
            )}
        </>
    );
}
