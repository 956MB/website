"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

export default function Tooltip({
    content,
    position,
    warn = false,
    groupHover = false,
    children,
}) {
    const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    return (
        <div
            className={clsx(
                "group/tooltip relative z-50 flex",
                warn && "items-center justify-center gap-x-[6px] pl-[2px]",
                warn &&
                    !groupHover &&
                    isTooltipVisible &&
                    !isMobile &&
                    "rounded-full bg-[#9759AE]/10 transition-all duration-100 ease-out dark:bg-[#FF8200]/10",
                warn &&
                    groupHover &&
                    "transition-all duration-100 ease-out group-hover:rounded-full group-hover:bg-[#9759AE]/10 dark:group-hover:bg-[#FF8200]/10",
            )}
            onMouseEnter={() =>
                !isMobile && !groupHover && setTooltipVisible(true)
            }
            onMouseLeave={() =>
                !isMobile && !groupHover && setTooltipVisible(false)
            }
        >
            {children}
            <span
                className={clsx(
                    "text-ellipsis whitespace-nowrap rounded py-1 text-xs font-medium italic transition-all duration-100 ease-out",
                    position === "top" ? "bottom-7" : "",
                    position === "bottom" ? "top-7" : "",
                    position === "bottom2" ? "top-10" : "",
                    position === "right" ? "left-7" : "",
                    warn
                        ? "warn-tooltip overflow-hidden pr-2.5 text-left text-p0 dark:text-o0"
                        : "absolute bg-neutral-800/90 px-2.5 text-center capitalize text-white",
                    groupHover
                        ? "pointer-events-none max-w-0 opacity-0 group-hover:pointer-events-auto group-hover:max-w-[250px] group-hover:opacity-100"
                        : isTooltipVisible && !isMobile
                          ? "max-w-[250px] opacity-100"
                          : "pointer-events-none max-w-0 opacity-0",
                )}
            >
                {parse(content)}
            </span>
        </div>
    );
}
