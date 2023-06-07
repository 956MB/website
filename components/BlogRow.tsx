import clsx from "clsx";
import { toFormattedDateShort } from "lib/util";
import { motion, Variants } from "framer-motion";

export default function BlogRow({
	row_title,
	row_date,
	row_selected,
	row_tag,
}: {
	row_title: string;
	row_date: string;
	row_selected: boolean;
	row_tag: string;
}) {
	return (
		<motion.div
			className="flex w-full items-center content-between m-0 cursor-pointer py-[2px] group"
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1 },
			}}
		>
			<a
				className={clsx(
					"text-neutral-500 font-inter-medium text-sm m-0 whitespace-nowrap min-w-[20px] max-w-[20px] text-center noselect transition-all duration-100",
					row_selected ? "visible" : "invisible"
				)}
			>
				|
			</a>
			<a
				className={clsx(
					" inline-block font-inter-semibold text-[15px] mr-auto w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-left transition-all duration-100",
					row_selected
						? "text-white"
						: "text-neutral-400 group-hover:text-white"
				)}
			>
				{row_title}
			</a>
			<a
				className={clsx(
					"font-roboto-mono-medium text-sm whitespace-nowrap ml-[15px] text-right transition-all duration-100",
					row_selected ? "text-neutral-100" : "text-neutral-600"
				)}
			>
				{toFormattedDateShort(row_date)}
			</a>
			<a className="text-white font-inter-medium text-[13px] whitespace-nowrap min-w-[30px] max-w-[30px] text-center noselect">
				{row_tag}
			</a>
		</motion.div>
	);
}
