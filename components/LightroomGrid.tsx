"use client";

import ContentGallery from "components/ContentGallery";
import DevAddTile from "components/dev/DevAddTile";
import DevEntryDialog from "components/dev/DevEntryDialog";
import { useDevDrafts } from "components/dev/useDevDrafts";
import { motion } from "framer-motion";
import { devGroupForTitle, isDev } from "lib/dev/config";
import { draftToEntry, IDevDraft } from "lib/dev/drafts";
import { preloadGalleryImage } from "lib/gallery";
import { getImageHoverColors, IImageHoverColors } from "lib/imageColor";
import { name } from "lib/info";
import { IEntry } from "lib/interfaces";
import { generateRandomDelays, itemVariants } from "lib/util";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CSSProperties, useEffect, useMemo, useState } from "react";

interface IColumnPhoto {
    photo?: IEntry;
    originalIndex: number;
    draft?: IDevDraft;
    isAdd?: boolean;
}

const EAGER_TILES_PER_COLUMN = 2;

function PhotoTile({
    photo,
    delay,
    onOpen,
    position,
    draft,
}: {
    photo: IEntry;
    delay: number;
    onOpen: () => void;
    position: number;
    draft?: boolean;
}) {
    const [hoverColors, setHoverColors] = useState<IImageHoverColors>({});
    const thumbnail = photo.thumbnail || photo.items?.[0];
    if (!thumbnail) return null;

    const preload = () => {
        if (photo.items?.[0]) preloadGalleryImage(photo.items[0]);
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.35, delay }}
            className="group relative w-full overflow-hidden rounded-lg border-2 border-transparent focus-within:border-[var(--photo-hover-light,#9759ae)] hover:border-[var(--photo-hover-light,#9759ae)] hover:saturate-100 dark:focus-within:border-[var(--photo-hover-dark,#ff8200)] dark:hover:border-[var(--photo-hover-dark,#ff8200)] lg:saturate-0"
            style={
                {
                    "--photo-hover-light": hoverColors.light,
                    "--photo-hover-dark": hoverColors.dark,
                } as CSSProperties
            }
            onMouseEnter={preload}
            onFocus={preload}
            onPointerDown={preload}
        >
            {draft && (
                <span className="pointer-events-none absolute left-2 top-2 z-20 rounded bg-p0 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white dark:bg-o0 dark:text-black">
                    draft
                </span>
            )}
            <button
                type="button"
                onClick={onOpen}
                aria-label={`Open ${photo.title}`}
                className="relative block w-full overflow-hidden rounded-[inherit] focus-visible:outline-none"
            >
                <Image
                    alt={photo.title}
                    className="duration-50 h-auto w-full transition-transform group-hover:scale-105"
                    src={thumbnail.path}
                    width={thumbnail.width}
                    height={thumbnail.height}
                    draggable={false}
                    loading={
                        position < EAGER_TILES_PER_COLUMN ? "eager" : "lazy"
                    }
                    fetchPriority={position === 0 ? "high" : "auto"}
                    unoptimized={thumbnail.path.startsWith("/api/dev/")}
                    quality={85}
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    onLoad={(e) => {
                        setHoverColors(getImageHoverColors(e.currentTarget));
                    }}
                />
            </button>
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 rounded-[calc(0.5rem-2px)] border border-[var(--bg)] opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
            />
        </motion.div>
    );
}

function PhotoCol({
    items,
    randomDelays,
    onPhotoClick,
    onEditDraft,
    onAdd,
}: {
    items: IColumnPhoto[];
    randomDelays: number[];
    onPhotoClick: (originalIndex: number) => void;
    onEditDraft: (draft: IDevDraft) => void;
    onAdd: () => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            {items.map(({ photo, originalIndex, draft, isAdd }, position) => {
                if (isAdd) {
                    return (
                        <DevAddTile
                            key="dev-add-photo"
                            label="new photo"
                            onClick={onAdd}
                        />
                    );
                }
                if (!photo) return null;

                return (
                    <PhotoTile
                        key={draft ? draft.key : photo.id}
                        photo={photo}
                        draft={Boolean(draft)}
                        delay={randomDelays[originalIndex] ?? 0}
                        position={position}
                        onOpen={() =>
                            draft
                                ? onEditDraft(draft)
                                : onPhotoClick(originalIndex)
                        }
                    />
                );
            })}
        </div>
    );
}

export default function LightroomGrid({ photos }: { photos: IEntry[] }) {
    const searchParams = useSearchParams();
    const photoId = searchParams.get("photo");
    const selectedPhotoIndex = photos.findIndex(
        (photo) => photo.id === photoId,
    );
    const isGalleryOpen = selectedPhotoIndex >= 0;
    const [columnCount, setColumnCount] = useState(1);
    const devGroup = isDev ? devGroupForTitle("Lightroom") : undefined;
    const { drafts, saveDraft, removeDraft } = useDevDrafts(devGroup?.key);
    const [editing, setEditing] = useState<{ draft: IDevDraft | null } | null>(
        null,
    );

    useEffect(() => {
        const tablet = window.matchMedia("(min-width: 640px)");
        const desktop = window.matchMedia("(min-width: 1280px)");
        const updateColumns = () => {
            setColumnCount(desktop.matches ? 4 : tablet.matches ? 2 : 1);
        };
        updateColumns();
        tablet.addEventListener("change", updateColumns);
        desktop.addEventListener("change", updateColumns);
        return () => {
            tablet.removeEventListener("change", updateColumns);
            desktop.removeEventListener("change", updateColumns);
        };
    }, []);

    const randomDelays = useMemo(
        () => generateRandomDelays(photos.length),
        [photos.length],
    );

    const workingDraft = useMemo(
        () => drafts.find((draft) => !draft.previewed),
        [drafts],
    );

    // drafts render first so a new preview sits at the top of the grid
    const tiles = useMemo<IColumnPhoto[]>(() => {
        return [
            ...drafts
                .filter((draft) => draft.previewed)
                .map((draft) => ({
                    photo: draftToEntry(draft),
                    originalIndex: -1,
                    draft,
                })),
            ...photos.map((photo, originalIndex) => ({
                photo,
                originalIndex,
            })),
        ];
    }, [photos, drafts]);

    const columns = useMemo<IColumnPhoto[][]>(() => {
        const cols: IColumnPhoto[][] = Array.from(
            { length: columnCount },
            () => [],
        );
        const heights = Array.from({ length: columnCount }, () => 0);
        tiles.forEach((tile) => {
            const thumbnail =
                tile.photo?.thumbnail ||
                (tile.photo?.items && tile.photo.items[0]);
            if (!tile.isAdd && !thumbnail) return;
            const ratio =
                !thumbnail || !thumbnail.width
                    ? 1
                    : thumbnail.height / thumbnail.width;
            let shortest = 0;
            for (let i = 1; i < columnCount; i++) {
                if (heights[i] < heights[shortest]) shortest = i;
            }
            cols[shortest].push(tile);
            heights[shortest] += ratio;
        });
        if (devGroup)
            cols[cols.length - 1].push({ originalIndex: -1, isAdd: true });
        return cols;
    }, [tiles, columnCount, devGroup]);

    const allPhotosEntry = useMemo<IEntry>(
        () => ({
            id: "all-photos",
            title: "Photography",
            items: photos.flatMap((photo) => photo.items || []),
        }),
        [photos],
    );

    const selectedPhoto = photos[selectedPhotoIndex];

    useEffect(() => {
        document.title = isGalleryOpen
            ? `${photos[selectedPhotoIndex].title} · Lightroom`
            : `Lightroom · ${name}`;
    }, [isGalleryOpen, selectedPhotoIndex, photos]);

    const updatePhotoUrl = (id?: string) => {
        const url = new URL(window.location.href);
        if (id) url.searchParams.set("photo", id);
        else url.searchParams.delete("photo");
        window.history.pushState(null, "", url.pathname + url.search);
    };

    const handlePhotoClick = (photoIndex: number) => {
        const photoId = photos[photoIndex].id;
        updatePhotoUrl(photoId);
    };

    const handleCloseGallery = () => {
        updatePhotoUrl();
    };

    const handleIndexChange = (newIndex: number) => {
        const photoId = photos[newIndex]?.id;
        if (photoId) {
            updatePhotoUrl(photoId);
        }
    };

    return (
        <>
            <div className="mx-6 flex w-full max-w-screen-2xl flex-col flex-wrap items-center justify-start pb-2 sm:mx-7 sm:pb-10 lg:pt-5">
                <div className="relative flex w-full flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
                    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {columns.map((items, colIdx) => (
                            <PhotoCol
                                key={colIdx}
                                items={items}
                                randomDelays={randomDelays}
                                onPhotoClick={handlePhotoClick}
                                onEditDraft={(draft) => setEditing({ draft })}
                                onAdd={() =>
                                    setEditing({ draft: workingDraft ?? null })
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isGalleryOpen && (
                <ContentGallery
                    entry={{
                        ...allPhotosEntry,
                        title: selectedPhoto?.title ?? allPhotosEntry.title,
                        summary: selectedPhoto?.summary,
                        link: selectedPhoto?.link,
                    }}
                    isOpen={isGalleryOpen}
                    showThumbnails={false}
                    onCloseAction={handleCloseGallery}
                    initialIndex={selectedPhotoIndex}
                    onIndexChangeAction={handleIndexChange}
                />
            )}

            {devGroup && editing && (
                <DevEntryDialog
                    group={devGroup}
                    draft={editing.draft}
                    onClose={() => setEditing(null)}
                    onPersist={saveDraft}
                    onPreview={(next) => saveDraft(next)}
                    onCommitted={() => {
                        if (editing.draft) removeDraft(editing.draft.key);
                    }}
                    onRemove={
                        editing.draft
                            ? () => removeDraft(editing.draft!.key)
                            : undefined
                    }
                />
            )}
        </>
    );
}
