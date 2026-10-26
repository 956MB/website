import { readFile } from "node:fs/promises";
import path from "node:path";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
    _request: NextRequest,
    context: { params: Promise<{ name: string }> },
) {
    if (process.env.NODE_ENV !== "development") {
        return new Response("not found", { status: 404 });
    }

    const { name } = await context.params;
    const safe = path.basename(name);

    try {
        const file = await readFile(
            path.join(process.cwd(), ".dev-staging", safe),
        );
        return new Response(new Uint8Array(file), {
            headers: {
                "Content-Type": "image/webp",
                "Cache-Control": "no-store",
            },
        });
    } catch {
        return new Response("not found", { status: 404 });
    }
}
