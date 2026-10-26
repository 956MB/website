"use client";

import type { IDevDraft } from "lib/dev/drafts";
import { useCallback, useEffect, useState } from "react";

const storageKey = (groupKey: string) => `956mb:dev-drafts:${groupKey}`;

function read(groupKey?: string): IDevDraft[] {
    if (!groupKey) return [];
    try {
        const parsed = JSON.parse(
            window.localStorage.getItem(storageKey(groupKey)) ?? "[]",
        );
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function write(groupKey: string | undefined, drafts: IDevDraft[]) {
    if (!groupKey) return;
    try {
        window.localStorage.setItem(
            storageKey(groupKey),
            JSON.stringify(drafts),
        );
    } catch {
        // localStorage is best-effort
    }
}

export function useDevDrafts(groupKey?: string) {
    const [drafts, setDrafts] = useState<IDevDraft[]>([]);

    useEffect(() => {
        setDrafts(read(groupKey));
    }, [groupKey]);

    const update = useCallback(
        (change: (current: IDevDraft[]) => IDevDraft[]) => {
            setDrafts((current) => {
                const next = change(current);
                write(groupKey, next);
                return next;
            });
        },
        [groupKey],
    );

    const saveDraft = useCallback(
        (draft: IDevDraft) =>
            update((current) =>
                current.some((entry) => entry.key === draft.key)
                    ? current.map((entry) =>
                          entry.key === draft.key ? draft : entry,
                      )
                    : [...current, draft],
            ),
        [update],
    );

    const removeDraft = useCallback(
        (key: string) =>
            update((current) => current.filter((draft) => draft.key !== key)),
        [update],
    );

    return { drafts, saveDraft, removeDraft };
}
