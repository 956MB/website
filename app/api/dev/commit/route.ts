import { commitDraft } from "lib/dev/commit";
import type { IDevDraft } from "lib/dev/drafts";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    if (process.env.NODE_ENV !== "development") {
        return Response.json({ error: "not found" }, { status: 404 });
    }

    const draft = (await request.json()) as IDevDraft;
    const result = commitDraft(draft);

    console.log(`\n[dev-commit]\n${result.text}\n`);

    return Response.json(
        { ok: result.ok, text: result.text },
        { status: result.ok ? 200 : 400 },
    );
}
