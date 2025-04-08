"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { useState, useEffect } from "react";

export default function Tooltip({ content, position, warn = false, children }) {
    const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div
            className={clsx(
                "group/tooltip relative z-50 flex",
                warn && "items-center justify-center gap-x-[6px] pl-[2px]",
                warn && (isTooltipVisible || isMobile) && "rounded-full bg-[#9759AE]/10 dark:bg-[#FF8200]/10",
            )}
            onMouseEnter={() => !isMobile && setTooltipVisible(true)}
            onMouseLeave={() => !isMobile && setTooltipVisible(false)}
        >
            {children}
            {(isTooltipVisible || isMobile) && (
                <span
                    className={clsx(
                        "font-medium tooltip:transition-all tooltip:delay-300 rounded py-1 text-xs opacity-100 delay-0 overflow-hidden text-ellipsis whitespace-nowrap",
                        position === "top" ? "bottom-7" : "",
                        position === "bottom" ? "top-7" : "",
                        position === "bottom2" ? "top-10" : "",
                        warn
                            ? "warn-tooltip pr-2 text-left text-[#9759AE] dark:text-[#FF8200]"
                            : "absolute bg-neutral-800/90 px-2 text-center capitalize text-white",
                    )}
                >
                    {parse(content)}
                </span>
            )}
        </div>
    );
}
