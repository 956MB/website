import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { slugify } from "lib/dev/config";
import type { NextRequest } from "next/server";
import sharp from "sharp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stagingDir = path.join(process.cwd(), ".dev-staging");
const MAX_BYTES = 60 * 1024 * 1024;
const MAX_DIMENSION = 4032;

export async function POST(request: NextRequest) {
    if (process.env.NODE_ENV !== "development") {
        return Response.json({ error: "not found" }, { status: 404 });
    }

    const form = await request.formData();
    const file = form.get("file");
    const section = String(form.get("section") ?? "misc");
    const slug = slugify(String(form.get("slug") ?? "image")) || "image";

    if (!(file instanceof File)) {
        return Response.json({ error: "no file" }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
        return Response.json({ error: "file too large" }, { status: 413 });
    }

    try {
        const input = Buffer.from(await file.arrayBuffer());
        const source = await sharp(input, { failOn: "none" }).metadata();
        const sourceWidth = source.width ?? 0;
        const sourceHeight = source.height ?? 0;
        const encoded = await sharp(input, { failOn: "none" })
            .rotate()
            .resize({
                width: MAX_DIMENSION,
                height: MAX_DIMENSION,
                fit: "inside",
                withoutEnlargement: true,
                kernel: "lanczos3",
            })
            .toColourspace("srgb")
            .webp({
                quality: 95,
                effort: 6,
                smartSubsample: true,
                alphaQuality: 100,
                preset: "photo",
            })
            .toBuffer({ resolveWithObject: true });

        const name = `${slugify(section)}--${slug}.webp`;
        await mkdir(stagingDir, { recursive: true });
        await writeFile(
            path.join(stagingDir, name),
            new Uint8Array(encoded.data),
        );

        return Response.json({
            name,
            path: `/api/dev/stage/${name}`,
            width: encoded.info.width,
            height: encoded.info.height,
            bytes: encoded.data.byteLength,
            source: file.name,
            originalWidth: sourceWidth,
            originalHeight: sourceHeight,
            resized:
                encoded.info.width !== sourceWidth ||
                encoded.info.height !== sourceHeight,
        });
    } catch (error) {
        return Response.json(
            { error: `could not read image: ${String(error)}` },
            { status: 422 },
        );
    }
}
