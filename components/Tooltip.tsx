"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

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
                warn && (isTooltipVisible || isMobile) && "rounded-full bg-[#9759AE]/10 dark:bg-[#FF8200]/10 transition-all duration-100 ease-out",
            )}
            onMouseEnter={() => !isMobile && setTooltipVisible(true)}
            onMouseLeave={() => !isMobile && setTooltipVisible(false)}
        >
            {children}
            <span
                className={clsx(
                    "font-medium rounded py-1 text-xs text-ellipsis whitespace-nowrap transition-all duration-100 ease-out",
                    position === "top" ? "bottom-7" : "",
                    position === "bottom" ? "top-7" : "",
                    position === "bottom2" ? "top-10" : "",
                    warn
                        ? "warn-tooltip pr-2 text-left text-[#9759AE] dark:text-[#FF8200] overflow-hidden"
                        : "absolute bg-neutral-800/90 px-2 text-center capitalize text-white",
                    isTooltipVisible || isMobile
                        ? "opacity-100 max-w-[250px]"
                        : "opacity-0 max-w-0 pointer-events-none"
                )}
            >
                {parse(content)}
            </span>
        </div>
    );
}
