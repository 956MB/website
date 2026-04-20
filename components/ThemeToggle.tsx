"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div
                className={clsx(
                    "flex items-center justify-center",
                    "h-[29px] w-[29px]",
                )}
            />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                "group flex items-center justify-center border border-neutral-200 bg-white stroke-neutral-500 transition-colors hover:stroke-p0 dark:border-neutral-800 dark:bg-black dark:fill-neutral-400 dark:hover:fill-o0",
                "h-[29px] w-[29px] rounded-md",
            )}
            aria-label={theme === "dark" ? "Dark mode" : "Light mode"}
        >
            <div
                className={clsx(
                    "h-2.5 w-2.5 rounded-full ",
                    theme === "dark"
                        ? "bg-white group-hover:bg-o0"
                        : "bg-black group-hover:bg-p0",
                )}
            ></div>
        </button>
    );
}
