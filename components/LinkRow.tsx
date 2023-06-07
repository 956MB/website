export default function LinkRow({
	row_key,
	row_value,
	row_href,
}: {
	row_key: string;
	row_value: string;
	row_href: string;
}) {
	return (
		<div className="flex items-center content-between my-2">
			<a className="text-neutral-400 text-sm no-underline mr-auto font-inter-medium">
				{row_key}
			</a>
			<hr className="h-px w-full bg-neutral-800 mx-[10px] my-auto" />
			<a
				className="text-white text-sm m-0 font-roboto-mono-medium underline-b transition-all duration-100 hover:mr-1"
				href={row_href}
			>
				{row_value}
			</a>
		</div>
	);
}
