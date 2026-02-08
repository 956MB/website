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
import Image from "next/image";
import { useMemo, useState } from "react";

export default function LightroomGrid({ photos }: { photos: IEntry[] }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

    const randomDelays = useMemo(
        () => generateRandomDelays(photos.length),
        [photos.length],
    );

    const allPhotosEntry = {
        id: "all-photos",
        title: "Photography",
        items: photos.flatMap((photo) => photo.items || []),
    };

    const handlePhotoClick = (photoIndex: number) => {
        setSelectedPhotoIndex(photoIndex);
        setIsGalleryOpen(true);
    };

    return (
        <>
            <div className="flex w-full flex-col flex-wrap items-center justify-start px-6 pb-2 sm:px-7 sm:pb-10 lg:pt-5">
                <div className="relative flex w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-y-0 lg:pt-9">
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="grid w-full auto-rows-[10px] grid-cols-2 gap-3"
                        style={{
                            gridAutoRows: "10px",
                        }}
                    >
                        {photos.map((photo, photoIndex) => {
                            const thumbnail =
                                photo.thumbnail ||
                                (photo.items && photo.items[0]);
                            if (!thumbnail) return null;

                            const aspectRatio =
                                thumbnail.width / thumbnail.height;

                            return (
                                <motion.div
                                    key={photo.id}
                                    variants={itemVariants}
                                    transition={{
                                        duration: 0.5,
                                        delay: randomDelays[photoIndex],
                                    }}
                                    className={clsx(
                                        "group relative cursor-pointer overflow-hidden",
                                    )}
                                    style={{
                                        gridRowEnd: `span ${Math.ceil(1 / aspectRatio) * 17}`,
                                    }}
                                    onClick={() => handlePhotoClick(photoIndex)}
                                >
                                    <div className="relative h-full w-full overflow-hidden border border-transparent transition-all hover:border-p0 dark:hover:border-o0">
                                        <Image
                                            alt={photo.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={thumbnail.path}
                                            width={thumbnail.width}
                                            height={thumbnail.height}
                                            draggable={false}
                                            loading="lazy"
                                            unoptimized={false}
                                            quality={95}
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <ContentGallery
                entry={allPhotosEntry}
                fullscreenOnly={true}
                isOpen={isGalleryOpen}
                onCloseAction={() => setIsGalleryOpen(false)}
                initialIndex={selectedPhotoIndex}
            />
        </>
    );
}
