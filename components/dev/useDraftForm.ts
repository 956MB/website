"use client";

import type { IDevGroupConfig } from "lib/dev/config";
import {
    IDevDraft,
    IDevImage,
    newDraft,
    suggestedFile,
    suggestedId,
    titleFromName,
} from "lib/dev/drafts";
import { useCallback, useRef, useState } from "react";

export function useDraftForm(
    group: IDevGroupConfig,
    initialDraft: IDevDraft | null | undefined,
    onPersist: (draft: IDevDraft) => void,
) {
    const draftRef = useRef<IDevDraft>(initialDraft ?? newDraft(group));
    const [draft, setDraft] = useState(draftRef.current);
    const [uploading, setUploading] = useState<"main" | "thumb" | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [filenameLocked, setFilenameLocked] = useState(false);

    const apply = useCallback(
        (patch: Partial<IDevDraft>) => {
            const next = {
                ...draftRef.current,
                ...patch,
                updatedAt: Date.now(),
            };
            draftRef.current = next;
            setDraft(next);
            onPersist(next);
        },
        [onPersist],
    );

    const upload = useCallback(
        async (file: File, kind: "main" | "thumb") => {
            setError(null);
            setUploading(kind);
            try {
                const current = draftRef.current;
                const id = current.id || suggestedId(file.name);
                const form = new FormData();
                form.append("file", file);
                form.append("section", group.section);
                form.append(
                    "slug",
                    `${suggestedId(id) || "image"}${kind === "thumb" ? "--thumb" : ""}`,
                );
                const response = await fetch("/api/dev/stage", {
                    method: "POST",
                    body: form,
                });
                const payload = await response.json();
                if (!response.ok)
                    throw new Error(payload.error ?? "upload failed");

                apply({
                    id,
                    title: current.title || titleFromName(file.name),
                    ...(kind === "main"
                        ? { image: payload as IDevImage }
                        : { thumb: payload as IDevImage }),
                    imageFile:
                        kind === "main" && !filenameLocked
                            ? suggestedFile(id)
                            : current.imageFile || suggestedFile(id),
                });
            } catch (uploadError) {
                setError(String(uploadError));
            } finally {
                setUploading(null);
            }
        },
        [apply, group.section, filenameLocked],
    );

    return {
        draft,
        draftRef,
        apply,
        upload,
        uploading,
        error,
        setError,
        filenameLocked,
        setFilenameLocked,
    };
}
