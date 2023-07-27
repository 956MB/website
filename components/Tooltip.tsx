export default function Tooltip({ content, children }) {
	return (
		<div className="relative flex group/tooltip">
			{children}
			<span className="absolute top-7 -left-1/2 font-inter-medium opacity-0 delay-0 group-hover/tooltip:transition-all group-hover/tooltip:delay-300 rounded bg-neutral-800 py-1 px-2 text-xs text-center text-white group-hover/tooltip:opacity-100 select-none pointer-events-none capitalize">
				{content}
			</span>
		</div>
	);
}