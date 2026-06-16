"use client";

import clsx from "clsx";
import ContentGallery from "components/ContentGallery";
import { motion } from "framer-motion";
import { name } from "lib/info";
import { IEntry } from "lib/interfaces";
import {
    containerVariants,
    generateRandomDelays,
    itemVariants,
} from "lib/util";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const COLUMN_COUNT = 3;

interface IColumnPhoto {
    photo: IEntry;
    originalIndex: number;
}

function PhotoCol({
    items,
    randomDelays,
    onPhotoClick,
}: {
    items: IColumnPhoto[];
    randomDelays: number[];
    onPhotoClick: (originalIndex: number) => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            {items.map(({ photo, originalIndex }) => {
                const thumbnail =
                    photo.thumbnail || (photo.items && photo.items[0]);
                if (!thumbnail) return null;

                return (
                    <motion.div
                        key={photo.id}
                        variants={itemVariants}
                        transition={{
                            duration: 0.5,
                            delay: randomDelays[originalIndex],
                        }}
                        className="group relative w-full cursor-pointer overflow-hidden border-transparent hover:border-p0 dark:hover:border-o0 lg:border"
                        onClick={() => onPhotoClick(originalIndex)}
                    >
                        <div
                            className={clsx(
                                "relative w-full overflow-hidden transition-all",
                            )}
                        >
                            <Image
                                alt={photo.title}
                                className="duration-50 h-auto w-full transition-transform group-hover:scale-105"
                                src={thumbnail.path}
                                width={thumbnail.width}
                                height={thumbnail.height}
                                draggable={false}
                                loading="lazy"
                                unoptimized={false}
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default function LightroomGrid({ photos }: { photos: IEntry[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

    const randomDelays = useMemo(
        () => generateRandomDelays(photos.length),
        [photos.length],
    );

    const columns = useMemo<IColumnPhoto[][]>(() => {
        const cols: IColumnPhoto[][] = Array.from(
            { length: COLUMN_COUNT },
            () => [],
        );
        const heights = Array.from({ length: COLUMN_COUNT }, () => 0);
        photos.forEach((photo, originalIndex) => {
            const thumbnail =
                photo.thumbnail || (photo.items && photo.items[0]);
            const ratio =
                thumbnail && thumbnail.width
                    ? thumbnail.height / thumbnail.width
                    : 1;
            let shortest = 0;
            for (let i = 1; i < COLUMN_COUNT; i++) {
                if (heights[i] < heights[shortest]) shortest = i;
            }
            cols[shortest].push({ photo, originalIndex });
            heights[shortest] += ratio;
        });
        return cols;
    }, [photos]);

    const allPhotosEntry = useMemo<IEntry>(
        () => ({
            id: "all-photos",
            title: "Photography",
            items: photos.flatMap((photo) => photo.items || []),
            link: photos[selectedPhotoIndex]?.link,
        }),
        [photos, selectedPhotoIndex],
    );

    useEffect(() => {
        const photoId = searchParams.get("photo");
        if (photoId) {
            const photoIndex = photos.findIndex((p) => p.id === photoId);
            if (photoIndex !== -1) {
                setSelectedPhotoIndex(photoIndex);
                setIsGalleryOpen(true);
                document.title = `${photos[photoIndex].title} · Lightroom`;
            }
        } else {
            document.title = `Lightroom · ${name}`;
        }
    }, [searchParams, photos]);

    const handlePhotoClick = (photoIndex: number) => {
        setSelectedPhotoIndex(photoIndex);
        setIsGalleryOpen(true);
        const photoId = photos[photoIndex].id;
        router.push(`/lightroom?photo=${photoId}`, { scroll: false });
    };

    const handleCloseGallery = () => {
        setIsGalleryOpen(false);
        router.push("/lightroom", { scroll: false });
    };

    const handleIndexChange = (newIndex: number) => {
        setSelectedPhotoIndex(newIndex);
        const photoId = photos[newIndex]?.id;
        if (photoId) {
            router.push(`/lightroom?photo=${photoId}`, { scroll: false });
        }
    };

    return (
        <>
            <div className="mx-6 flex w-full max-w-screen-2xl flex-col flex-wrap items-center justify-start pb-2 sm:mx-7 sm:pb-10 lg:pt-5">
                <div className="relative flex w-full flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {columns.map((items, colIdx) => (
                            <PhotoCol
                                key={colIdx}
                                items={items}
                                randomDelays={randomDelays}
                                onPhotoClick={handlePhotoClick}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <ContentGallery
                entry={allPhotosEntry}
                fullscreenOnly={true}
                isOpen={isGalleryOpen}
                onCloseAction={handleCloseGallery}
                initialIndex={selectedPhotoIndex}
                onIndexChangeAction={handleIndexChange}
            />
        </>
    );
}
