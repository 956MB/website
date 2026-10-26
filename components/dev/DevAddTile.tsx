"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { itemVariants } from "lib/util";
import { PiPlus } from "react-icons/pi";

export default function DevAddTile({
    label = "new item",
    variant = "square",
    onClick,
}: {
    label?: string;
    variant?: "square" | "video";
    onClick: () => void;
}) {
    return (
        <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="group relative flex w-full flex-col justify-start"
        >
            <button
                type="button"
                onClick={onClick}
                aria-label={label}
                title={label}
                className={clsx(
                    "flex w-full items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50/60 text-neutral-500 transition-colors hover:border-p0 hover:bg-p0/5 hover:text-p0 dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-400 dark:hover:border-o0 dark:hover:bg-o0/5 dark:hover:text-o0",
                    variant === "square" ? "aspect-square" : "aspect-video",
                )}
            >
                {PiPlus({ size: 22, "aria-hidden": true })}
            </button>
        </motion.div>
    );
}
