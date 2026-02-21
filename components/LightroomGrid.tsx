"use client";

import clsx from "clsx";
import ContentGallery from "components/ContentGallery";
import { motion } from "framer-motion";
import { IEntry } from "lib/interfaces";
import {
    containerVariants,
    generateRandomDelays,
    itemVariants,
} from "lib/util";
import { name } from "lib/info";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function PhotoCol({
    photos,
    columnIndex,
    randomDelays,
    onPhotoClick,
}: {
    photos: IEntry[];
    columnIndex: number;
    randomDelays: number[];
    onPhotoClick: (index: number) => void;
}) {
    return (
        <div className="flex flex-col gap-3">
            {photos
                .filter((_, index) => index % 2 === columnIndex)
                .map((photo, index) => {
                    const photoIndex = index * 2 + columnIndex;
                    const thumbnail =
                        photo.thumbnail || (photo.items && photo.items[0]);
                    if (!thumbnail) return null;

                    return (
                        <motion.div
                            key={photo.id}
                            variants={itemVariants}
                            transition={{
                                duration: 0.5,
                                delay: randomDelays[photoIndex],
                            }}
                            className="group relative w-full cursor-pointer overflow-hidden lg:border border-transparent dark:hover:border-o0 hover:border-p0"
                            onClick={() => onPhotoClick(photoIndex)}
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
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

    const allPhotosEntry : IEntry = {
        id: "all-photos",
        title: "Photography",
        items: photos.flatMap((photo) => photo.items || []),
    };

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
            <div className="flex w-full flex-col flex-wrap items-center max-w-screen-lg justify-start mx-6 pb-2 sm:mx-7 sm:pb-10 lg:pt-5">
                <div className="relative flex w-full flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3"
                    >
                        <PhotoCol
                            photos={photos}
                            columnIndex={0}
                            randomDelays={randomDelays}
                            onPhotoClick={handlePhotoClick}
                        />
                        <PhotoCol
                            photos={photos}
                            columnIndex={1}
                            randomDelays={randomDelays}
                            onPhotoClick={handlePhotoClick}
                        />
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
