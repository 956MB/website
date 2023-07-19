import clsx from "clsx";
import { Blog } from "contentlayer/generated";
import { toFormattedDateShort } from "lib/util";
import { usePathname } from "next/navigation";

export default function BlogRow({ post }: { post: Blog }) {
	let pathname = usePathname() || "/";
	let selected = pathname.includes(post.slug);

	return (
		<div
			className={clsx(
				"flex w-full items-center justify-end content-between m-0 cursor-pointer py-[5px] pr-[20px] rounded-md group"
			)}
		>
			<a
				className={clsx(
					"flex items-center justify-center text-[32px] font-ibmplex-sans-regular min-w-[30px] max-w-[30px] text-center noselect",
					selected ? "text-[#9b9b9b]" : "text-transparent"
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
						selected
							? "text-white font-inter-semibold"
							: "text-neutral-400 group-hover:text-white font-inter-medium"
					)}
				>
					{post.title}
				</a>
				<div className="inline-flex flex-row gap-2">
					<a
						className={clsx(
							"font-ibmplex-sans-medium text-[13px] leading-3 whitespace-nowrap text-right transition-all duration-100",
							selected
								? "text-neutral-400 font-ibmplex-sans-semibold"
								: "text-neutral-600"
						)}
					>
						{toFormattedDateShort(post.publishedAt)}
					</a>
                </div>
			</div>
		</div>
	);
}
