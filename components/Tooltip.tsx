"use client";

import clsx from "clsx";
import parse from "html-react-parser";
import { useState } from "react";

export default function Tooltip({ content, position, warn = false, children }) {
    const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

    return (
        <div
            className={clsx(
                "group/tooltip relative z-50 flex",
                warn && "items-center justify-center gap-x-[6px] pl-[2px]",
                warn && isTooltipVisible && "rounded-full bg-yellow-500/10",
            )}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        >
            {children}
            {isTooltipVisible && (
                <span
                    className={clsx(
                        "font-medium tooltip:transition-all tooltip:delay-300 rounded py-1 text-xs opacity-100 delay-0",
                        position === "top" ? "bottom-7" : "",
                        position === "bottom" ? "top-7" : "",
                        position === "bottom2" ? "top-10" : "",
                        warn
                            ? "warn-tooltip pr-2 text-left text-yellow-500"
                            : "absolute bg-neutral-800/90 px-2 text-center capitalize text-white",
                    )}
                >
                    {parse(content)}
                </span>
            )}
        </div>
    );
}
