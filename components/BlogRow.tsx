import clsx from "clsx";
import { toFormattedDateShort } from "lib/util";
import { motion, Variants } from "framer-motion";
import { RepoIcon, AlignLeftIcon } from "./Icons";

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
			className={clsx("flex w-full items-center content-between m-0 cursor-pointer py-[5px] pr-[20px] group",
                row_selected ? "bg-neutral-800" : "hover:bg-neutral-900"
            )}
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1 },
			}}
		>
			{/* <a
				className={clsx(
					"text-neutral-500 font-inter-semibold text-sm m-0 whitespace-nowrap min-w-[20px] max-w-[20px] text-center noselect transition-all duration-100",
					row_selected ? "visible" : "invisible"
				)}
			>
				|
			</a> */}
            <a className="flex items-center justify-center text-[#9b9b9b] min-w-[40px] max-w-[40px] text-center noselect">
				<AlignLeftIcon />
			</a>
			<a
				className={clsx(
					" inline-block text-[14px] mr-auto w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-left transition-all duration-100",
					row_selected
						? "text-white font-inter-semibold"
						: "text-neutral-400 group-hover:text-white font-inter-medium"
				)}
			>
				{row_title}
			</a>
			<a
				className={clsx(
					"font-ibmplex-sans-medium text-[13px] whitespace-nowrap ml-[15px] text-right transition-all duration-100",
					row_selected ? "text-neutral-100" : "text-neutral-600"
				)}
			>
				{toFormattedDateShort(row_date)}
			</a>
		</motion.div>
	);
}
