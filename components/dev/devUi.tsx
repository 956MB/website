"use client";

import clsx from "clsx";
import type { IDevImage } from "lib/dev/drafts";
import { useRef } from "react";
import { PiUploadSimple } from "react-icons/pi";

const fieldClass =
    "w-full rounded-md border border-neutral-300 bg-white px-2 py-1.5 font-mono text-xs text-neutral-900 outline-none transition-colors focus:border-p0 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:focus:border-o0";
export const labelClass =
    "font-mono text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400";
const secondaryClass =
    "w-full rounded-md border border-neutral-300 px-3 py-2 font-mono text-xs text-neutral-800 transition-colors hover:border-p0 hover:text-p0 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-o0 dark:hover:text-o0";
const dropzoneClass =
    "flex cursor-pointer flex-col items-center justify-center gap-y-1 rounded-lg border-2 border-dashed border-neutral-300 text-center transition-colors hover:border-p0 dark:border-neutral-700 dark:hover:border-o0";

function formatBytes(bytes: number): string {
    return bytes ? `${Math.round(bytes / 1024)} KB` : "0 KB";
}

export function Field({
    label,
    hint,
    children,
}: {
    label: string;
    hint?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-y-1">
            <span className={labelClass}>
                {label}
                {hint && (
                    <span className="ml-1 normal-case opacity-60">{hint}</span>
                )}
            </span>
            {children}
        </div>
    );
}

export function TextField({
    label,
    hint,
    value,
    list,
    options,
    onChange,
}: {
    label: string;
    hint?: string;
    value: string;
    list?: string;
    options?: string[];
    onChange: (value: string) => void;
}) {
    return (
        <Field label={label} hint={hint}>
            <input
                className={fieldClass}
                list={list}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            {list && options && (
                <datalist id={list}>
                    {options.map((option) => (
                        <option key={option} value={option} />
                    ))}
                </datalist>
            )}
        </Field>
    );
}

export function AreaField({
    label,
    hint,
    value,
    onChange,
}: {
    label: string;
    hint?: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <Field label={label} hint={hint}>
            <textarea
                className={clsx(fieldClass, "min-h-[70px]")}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </Field>
    );
}

export function UploadZone({
    image,
    uploading,
    onFile,
    compact,
}: {
    image?: IDevImage;
    uploading: boolean;
    onFile: (file: File) => void;
    compact?: boolean;
}) {
    const input = useRef<HTMLInputElement>(null);
    const pick = () => input.current?.click();
    const handleFiles = (files: FileList | null) => {
        const file = files?.[0];
        if (file) onFile(file);
    };

    return (
        <>
            {compact ? (
                <button
                    type="button"
                    onClick={pick}
                    className={clsx(fieldClass, "text-left")}
                >
                    {uploading
                        ? "converting…"
                        : image
                          ? "replace thumbnail"
                          : "same as main image"}
                </button>
            ) : (
                <div
                    onClick={pick}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                        event.preventDefault();
                        handleFiles(event.dataTransfer.files);
                    }}
                    className={clsx(dropzoneClass, "min-h-[120px] px-3 py-4")}
                >
                    {PiUploadSimple({
                        size: 20,
                        className: "text-neutral-500 dark:text-neutral-400",
                    })}
                    <span className="font-mono text-xs text-neutral-600 dark:text-neutral-300">
                        {uploading
                            ? "converting to webp…"
                            : image
                              ? "replace image"
                              : "drop / click / paste an image"}
                    </span>
                    {image && (
                        <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
                            {image.resized && image.originalWidth
                                ? `${image.originalWidth} × ${image.originalHeight} → ${image.width} × ${image.height}`
                                : `${image.width} × ${image.height}`}{" "}
                            · {formatBytes(image.bytes)} · {image.source}
                        </span>
                    )}
                </div>
            )}
            <input
                ref={input}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                    handleFiles(event.target.files);
                    event.target.value = "";
                }}
            />
        </>
    );
}

export function Button({
    children,
    onClick,
    disabled,
    variant = "secondary",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger";
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                variant === "primary" &&
                    "w-full rounded-md bg-p0 px-3 py-2 font-degular text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-o0 dark:text-black",
                variant === "secondary" && secondaryClass,
                variant === "danger" &&
                    "w-full rounded-md px-3 py-1 font-mono text-[11px] text-red-500 transition-colors hover:bg-red-500/10",
            )}
        >
            {children}
        </button>
    );
}
