"use client";

import { useTheme } from "./ThemeProvider";
import clsx from "clsx";
import { useEffect, useState } from "react";

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
                    "w-[29px] h-[29px]"
                )}
            />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                "flex items-center justify-center transition-colors fill-neutral-200 hover:fill-neutral-100 dark:text-neutral-200 dark:hover:text-neutral-200 border border-neutral-200 dark:border-neutral-800",
                "w-[29px] h-[29px] rounded-md"
            )}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-[18px] h-[18px]"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[18px] h-[18px]"
                >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
            )}
        </button>
    );
} 
