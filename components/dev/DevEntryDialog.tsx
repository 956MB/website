"use client";

import clsx from "clsx";
import {
    AreaField,
    Button,
    Field,
    labelClass,
    TextField,
    UploadZone,
} from "components/dev/devUi";
import { useDraftForm } from "components/dev/useDraftForm";
import type { IDevGroupConfig } from "lib/dev/config";
import {
    draftToEntry,
    IDevDraft,
    isDraftComplete,
    suggestedFile,
} from "lib/dev/drafts";
import { buildEntrySnippet } from "lib/dev/snippet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PiX } from "react-icons/pi";

const toggles: [string, keyof IDevDraft][] = [
    ["new", "isNew"],
    ["altThumb", "altThumb"],
    ["aspectRatio", "aspectRatio"],
    ["saturation", "saturation"],
];

function DraftPreview({
    draft,
    group,
}: {
    draft: IDevDraft;
    group: IDevGroupConfig;
}) {
    const entry = draftToEntry(draft);
    const image = entry.thumbnail ?? entry.items?.[0];
    if (!image) return null;

    const key = `${draft.image.name}-${draft.image.bytes}`;
    const photo = group.section === "lightroom";
    const design = group.section === "designs";

    return (
        <div className="flex w-full flex-col">
            <div
                className={clsx(
                    "relative w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900",
                    photo ? "" : design ? "aspect-square" : "aspect-video",
                )}
            >
                <Image
                    key={key}
                    alt={entry.title}
                    className={clsx(
                        "w-full",
                        photo
                            ? "h-auto"
                            : clsx(
                                  "h-full",
                                  draft.category === "icon"
                                      ? "object-contain"
                                      : "object-cover",
                              ),
                    )}
                    src={image.path}
                    width={image.width}
                    height={image.height}
                    unoptimized
                />
                {design && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start gap-y-0.5 bg-gradient-to-t from-white/90 to-transparent p-3 dark:from-black/90">
                        <span className="font-pixel-square text-sm font-bold uppercase text-neutral-900 dark:text-white">
                            {entry.title}
                        </span>
                        <span className="font-mono text-xs text-neutral-600 dark:text-white/70">
                            {entry.date}
                        </span>
                    </div>
                )}
            </div>
            {!photo && !design && (
                <div className="flex flex-col items-start gap-y-1 pt-2 uppercase">
                    <span className="font-degular text-sm font-semibold text-black dark:text-white">
                        {entry.title}
                    </span>
                    {entry.summary && (
                        <span className="font-degular text-xs leading-4 text-neutral-800 dark:text-neutral-350">
                            {entry.summary.join("")}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default function DevEntryDialog({
    group,
    draft: initialDraft,
    onClose,
    onPersist,
    onPreview,
    onCommitted,
    onRemove,
}: {
    group: IDevGroupConfig;
    draft?: IDevDraft | null;
    onClose: () => void;
    onPersist: (draft: IDevDraft) => void;
    onPreview: (draft: IDevDraft) => void;
    onCommitted?: () => void;
    onRemove?: () => void;
}) {
    const {
        draft,
        draftRef,
        apply,
        upload,
        uploading,
        error,
        setError,
        filenameLocked,
        setFilenameLocked,
    } = useDraftForm(group, initialDraft, onPersist);
    const [report, setReport] = useState<string | null>(null);
    const [committing, setCommitting] = useState(false);
    const [committed, setCommitted] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        const onPaste = (event: ClipboardEvent) => {
            const file = Array.from(event.clipboardData?.files ?? [])[0];
            if (file) void upload(file, "main");
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("paste", onPaste);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("paste", onPaste);
        };
    }, [onClose, upload]);

    const runCommit = async () => {
        setCommitting(true);
        setError(null);
        setReport(null);
        try {
            const response = await fetch("/api/dev/commit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draftRef.current),
            });
            const payload = await response.json();
            setReport(payload.text ?? null);
            if (!response.ok) throw new Error("commit failed");
            setCommitted(true);
            onCommitted?.();
        } catch (commitError) {
            setError(String(commitError));
        } finally {
            setCommitting(false);
        }
    };

    const copySnippet = async () => {
        try {
            await navigator.clipboard.writeText(
                buildEntrySnippet(draftRef.current),
            );
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch (copyError) {
            setError(String(copyError));
        }
    };

    const canSave = isDraftComplete(draft);
    const dateHint = group.dateFormat === "year" ? "YYYY" : "M.D.YYYY";

    return createPortal(
        <div
            className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="relative w-full max-w-5xl rounded-xl border border-neutral-200 bg-white p-4 text-left dark:border-neutral-800 dark:bg-black sm:p-6">
                <header className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wide text-p0 dark:text-o0">
                            dev only · {group.dataFile}
                        </span>
                        <h2 className="font-degular text-lg font-semibold text-black dark:text-white">
                            {draft.previewed ? "Edit entry" : "New entry"} ·{" "}
                            {group.label}
                        </h2>
                        <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
                            saved automatically — closing keeps everything
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-900 dark:hover:text-white"
                    >
                        {PiX({ size: 18 })}
                    </button>
                </header>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="flex flex-col gap-3">
                        <UploadZone
                            image={draft.image}
                            uploading={uploading === "main"}
                            onFile={(file) => void upload(file, "main")}
                        />

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <TextField
                                label="id"
                                hint="used in ?photo= / anchors"
                                value={draft.id}
                                onChange={(id) =>
                                    apply({
                                        id,
                                        imageFile: filenameLocked
                                            ? draft.imageFile
                                            : suggestedFile(id),
                                    })
                                }
                            />
                            <TextField
                                label="title"
                                value={draft.title}
                                onChange={(title) => apply({ title })}
                            />
                            <TextField
                                label="date"
                                hint={dateHint}
                                value={draft.date}
                                onChange={(date) => apply({ date })}
                            />
                            <TextField
                                label="category"
                                list={`categories-${group.key}`}
                                options={group.categories}
                                value={draft.category}
                                onChange={(category) => apply({ category })}
                            />
                        </div>

                        <AreaField
                            label="summary"
                            hint="blank line = new paragraph"
                            value={draft.summary}
                            onChange={(summary) => apply({ summary })}
                        />

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <TextField
                                label="link"
                                value={draft.link}
                                onChange={(link) => apply({ link })}
                            />
                            <TextField
                                label="credit"
                                hint="html allowed"
                                value={draft.credit}
                                onChange={(credit) => apply({ credit })}
                            />
                            <TextField
                                label="tags"
                                hint="comma separated"
                                value={draft.tags}
                                onChange={(tags) => apply({ tags })}
                            />
                            <TextField
                                label="image folder"
                                value={draft.imageDir}
                                onChange={(imageDir) => apply({ imageDir })}
                            />
                            <TextField
                                label="image file"
                                value={draft.imageFile}
                                onChange={(imageFile) => {
                                    setFilenameLocked(true);
                                    apply({ imageFile });
                                }}
                            />
                            <Field label="thumbnail (optional)">
                                <UploadZone
                                    compact
                                    image={draft.thumb}
                                    uploading={uploading === "thumb"}
                                    onFile={(file) =>
                                        void upload(file, "thumb")
                                    }
                                />
                            </Field>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {toggles.map(([label, key]) => (
                                <label
                                    key={key}
                                    className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-300"
                                >
                                    <input
                                        type="checkbox"
                                        checked={Boolean(draft[key])}
                                        onChange={(event) =>
                                            apply({
                                                [key]: event.target.checked,
                                            } as Partial<IDevDraft>)
                                        }
                                        className="accent-p0 dark:accent-o0"
                                    />
                                    {label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <aside className="flex flex-col gap-3">
                        <span className={labelClass}>site preview</span>
                        {draft.image.path ? (
                            <DraftPreview draft={draft} group={group} />
                        ) : (
                            <div className="flex aspect-square w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 font-mono text-xs text-neutral-500 dark:border-neutral-700">
                                no image yet
                            </div>
                        )}

                        <div className="flex flex-col gap-2 pt-1">
                            <Button
                                variant="primary"
                                disabled={!canSave}
                                onClick={() => {
                                    onPreview({
                                        ...draftRef.current,
                                        previewed: true,
                                        updatedAt: Date.now(),
                                    });
                                    onClose();
                                }}
                            >
                                {draft.previewed
                                    ? "update preview"
                                    : "preview on site"}
                            </Button>
                            <span className="font-mono text-[10px] leading-3 text-neutral-500 dark:text-neutral-400">
                                adds a real tile to the grid so you can see it
                                in place
                            </span>
                            <Button
                                disabled={!canSave || committing || committed}
                                onClick={() => void runCommit()}
                            >
                                {committed
                                    ? "committed"
                                    : committing
                                      ? "committing…"
                                      : "commit entry"}
                            </Button>
                            <span className="font-mono text-[10px] leading-3 text-neutral-500 dark:text-neutral-400">
                                pushes the image to img.956mb.com, inserts the
                                entry into {group.dataFile}, then commits and
                                pushes this repo to every remote
                            </span>
                            <Button
                                disabled={!canSave}
                                onClick={() => void copySnippet()}
                            >
                                {copied ? "copied" : "copy entry code"}
                            </Button>
                            {onRemove && (
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        onRemove();
                                        onClose();
                                    }}
                                >
                                    remove draft
                                </Button>
                            )}
                        </div>
                    </aside>
                </div>

                {error && (
                    <p className="mt-3 rounded-md bg-red-500/10 px-3 py-2 font-mono text-[11px] text-red-500">
                        {error}
                    </p>
                )}

                {report && (
                    <div className="mt-4 flex flex-col gap-2">
                        <span className={labelClass}>
                            commit report — also logged in the dev terminal
                        </span>
                        <pre className="max-h-[280px] overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-[11px] leading-4 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                            {report}
                        </pre>
                    </div>
                )}
            </div>
        </div>,
        document.body,
    );
}
