import { getImageProps } from "next/image";
import { IEntryItem } from "./interfaces";

export const mediaImageQuality = 85;

export const mediaImageSizes = (isFullscreen: boolean, content: IEntryItem) =>
    isFullscreen
        ? `min(calc(100vw - 32px), calc(${(content.width / content.height) * 100}vh - ${(content.width / content.height) * 32}px))`
        : "(max-width: 1024px) 100vw, 1024px";

export function preloadGalleryImage(content: IEntryItem, isFullscreen = true) {
    if (content.path.includes(".mp4")) return;
    const { props } = getImageProps({
        src: content.path,
        width: content.width,
        height: content.height,
        alt: "",
        quality: mediaImageQuality,
        sizes: mediaImageSizes(isFullscreen, content),
    });
    const img = new window.Image();
    img.fetchPriority = "low";
    img.decoding = "async";
    img.sizes = props.sizes || "";
    img.srcset = props.srcSet || "";
    img.src = props.src;
    void img.decode().catch(() => {
        // Opening the gallery can retry a failed speculative request
    });
}
