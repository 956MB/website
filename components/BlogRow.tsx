import clsx from "clsx";
import { toFormattedDateShort } from "lib/util";
import { motion } from "framer-motion";

export default function BlogRow({
	row_title,
	row_date,
	row_selected,
}: {
	row_title: string;
	row_date: string;
	row_selected: boolean;
}) {
	return (
		<motion.div
			className={clsx(
				"flex w-full items-center justify-end content-between m-0 cursor-pointer py-[5px] pr-[20px] rounded-md group",
			)}
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1 },
			}}
		>
			<a
				className={clsx(
					"flex items-center justify-center text-[28px] font-ibmplex-sans-regular min-w-[30px] max-w-[30px] text-center noselect",
                    row_selected ? "text-[#9b9b9b]" : "text-transparent"
				)}
			>
				|
			</a>
			<div
				className={clsx(
					"flex flex-col gap-y-[2px] items-start justify-center w-full"
				)}
			>
				<a
					className={clsx(
						" inline-block text-[15px] mr-auto w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-left transition-all duration-100",
						row_selected
							? "text-white font-inter-semibold"
							: "text-neutral-400 group-hover:text-white font-inter-medium"
					)}
				>
					{row_title}
				</a>
				<a
					className={clsx(
						"font-ibmplex-sans-medium text-[13px] leading-3 whitespace-nowrap text-right transition-all duration-100",
						row_selected
							? "text-neutral-400 font-ibmplex-sans-semibold"
							: "text-neutral-600"
					)}
				>
					{toFormattedDateShort(row_date)}
				</a>
			</div>
		</motion.div>
	);
}
