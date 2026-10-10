export interface IImageHoverColors {
    light?: string;
    dark?: string;
}

interface IColorBucket {
    count: number;
    red: number;
    green: number;
    blue: number;
}

const colorCache = new Map<string, IImageHoverColors>();

function luminance(red: number, green: number, blue: number): number {
    const linear = (channel: number) => {
        const value = channel / 255;
        return value <= 0.04045
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    return (
        0.2126 * linear(red) + 0.7152 * linear(green) + 0.0722 * linear(blue)
    );
}

export function getImageHoverColors(
    image: HTMLImageElement,
): IImageHoverColors {
    const source = image.currentSrc || image.src;
    if (!source || !image.complete || !image.naturalWidth) return {};
    const cached = colorCache.get(source);
    if (cached) return cached;

    const colors: IImageHoverColors = {};
    try {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return colors;
        context.drawImage(image, 0, 0, 64, 64);
        const { data } = context.getImageData(0, 0, 64, 64);
        const buckets = new Map<number, IColorBucket>();

        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] < 128) continue;
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
            const key = ((red >> 5) << 6) | ((green >> 5) << 3) | (blue >> 5);
            const bucket = buckets.get(key) ?? {
                count: 0,
                red: 0,
                green: 0,
                blue: 0,
            };
            bucket.count++;
            bucket.red += red;
            bucket.green += green;
            bucket.blue += blue;
            buckets.set(key, bucket);
        }

        const palette = Array.from(buckets.values()).map((bucket) => {
            const channels = [bucket.red, bucket.green, bucket.blue].map(
                (value) => Math.round(value / bucket.count),
            );
            const brightest = Math.max(...channels);
            const saturation = brightest
                ? (brightest - Math.min(...channels)) / brightest
                : 0;
            const lightness = luminance(channels[0], channels[1], channels[2]);
            const hex =
                "#" +
                channels
                    .map((value) => value.toString(16).padStart(2, "0"))
                    .join("");
            return {
                hex,
                lightness,
                count: bucket.count,
                orangeDistance: Math.hypot(
                    channels[0] - 255,
                    channels[1] - 130,
                    channels[2],
                ),
                score:
                    Math.sqrt(bucket.count) *
                    (0.65 + saturation * 0.35) *
                    Math.sqrt(lightness),
            };
        });
        palette.sort((a, b) => b.score - a.score);

        const selectColor = (dark: boolean) => {
            const visible = palette.filter((color) => {
                const contrast = dark
                    ? (color.lightness + 0.05) / 0.05
                    : 1.05 / (color.lightness + 0.05);
                return contrast >= 3;
            });
            const prominent = visible.filter((color) => color.count >= 8);
            const candidates = prominent.length ? prominent : visible;
            return (
                candidates.find((color) => color.orangeDistance >= 96) ??
                candidates[0]
            )?.hex;
        };

        colors.dark = selectColor(true);
        colors.light = selectColor(false);
    } catch {
        // fallback
    }
    colorCache.set(source, colors);
    return colors;
}
