"use client";

import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";

export interface ProgressiveBlurProps {
    className?: string;
    height?: string;
    position?: "top" | "bottom" | "both";
    blurLevels?: number[];
    children?: ReactNode;
}

const bothMask =
    "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)";

const blurStyle = (
    position: "top" | "bottom" | "both",
    level: number,
    index: number,
    step: number,
): CSSProperties => {
    const clamp = (value: number) =>
        Math.min(Math.round(value * 100) / 100, 100);
    const mask =
        position === "both"
            ? bothMask
            : `linear-gradient(${
                  position === "top" ? "to top" : "to bottom"
              }, rgba(0,0,0,0) ${clamp(index * step)}%, rgba(0,0,0,1) ${clamp(
                  (index + 1) * step,
              )}%, rgba(0,0,0,1) ${clamp((index + 2) * step)}%, rgba(0,0,0,0) ${clamp(
                  (index + 3) * step,
              )}%)`;

    return {
        zIndex: index + 1,
        backdropFilter: `blur(${level}px)`,
        WebkitBackdropFilter: `blur(${level}px)`,
        maskImage: mask,
        WebkitMaskImage: mask,
    };
};

export function ProgressiveBlur({
    className,
    height = "30%",
    position = "bottom",
    blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
    children,
}: ProgressiveBlurProps) {
    const step = 100 / blurLevels.length;

    return (
        <div
            aria-hidden="true"
            className={clsx(
                "progressive-blur pointer-events-none absolute inset-x-0 z-10",
                position === "top"
                    ? "top-0"
                    : position === "bottom"
                      ? "bottom-0"
                      : "inset-y-0",
                className,
            )}
            style={{ height: position === "both" ? "100%" : height }}
        >
            {blurLevels.map((level, index) => (
                <div
                    key={`blur-${index}`}
                    className="absolute inset-0"
                    style={blurStyle(position, level, index, step)}
                />
            ))}

            {children}
        </div>
    );
}

export default ProgressiveBlur;
