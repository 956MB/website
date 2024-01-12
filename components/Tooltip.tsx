"use client";

import clsx from "clsx";
import { useState } from "react";
import parse from "html-react-parser";

export default function Tooltip({ content, position, warn = false, children }) {
	const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

	return (
		<div
			className={clsx(
				"relative flex group/tooltip z-50",
				warn && "justify-center items-center gap-x-[6px] pl-[2px]",
				(warn && isTooltipVisible) && "bg-yellow-500/10 rounded-full"
			)}
			onMouseEnter={() => setTooltipVisible(true)}
			onMouseLeave={() => setTooltipVisible(false)}
		>
			{children}
			{isTooltipVisible && (
				<span
					className={clsx(
						"font-inter-medium opacity-100 delay-0 tooltip:transition-all tooltip:delay-300 rounded py-1 text-xs",
						position === "top" ? "bottom-7" : "",
						position === "bottom" ? "top-7" : "",
						position === "bottom2" ? "top-10" : "",
						warn ? "pr-2 text-left warn-tooltip text-yellow-500" : "absolute bg-neutral-800/90 px-2 text-center text-white capitalize"
					)}
				>
					{parse(content)}
				</span>
			)}
		</div>
	);
}
