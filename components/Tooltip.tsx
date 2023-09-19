import clsx from "clsx";

export default function Tooltip({ content, position, children }) {
	return (
		<div className="relative flex group/tooltip z-50">
			{children}
			<span
				className={clsx(
					"absolute -left-1/2 font-inter-medium opacity-0 delay-0 group-hover/tooltip:transition-all group-hover/tooltip:delay-300 rounded bg-neutral-800/90 backdrop-blur-md py-1 px-2 text-xs text-center text-white group-hover/tooltip:opacity-100 select-none pointer-events-none capitalize",
					position === "top" ? "bottom-7" : "",
					position === "bottom" ? "top-7" : "",
					position === "bottom2" ? "top-10" : "",
				)}
			>
				{content}
			</span>
		</div>
	);
}
