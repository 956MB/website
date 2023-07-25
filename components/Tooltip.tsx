export default function Tooltip({ content, children }) {
	return (
		<div className="relative flex group">
			{children}
			<span className="absolute top-7 -left-1/2 font-inter-medium opacity-0 delay-0 group-hover:transition-all group-hover:delay-300 rounded bg-neutral-800 py-1 px-2 text-xs text-white group-hover:opacity-100 select-none pointer-events-none">
				{content}
			</span>
		</div>
	);
}