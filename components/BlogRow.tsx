import clsx from "clsx";
import { Content } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogRow({ post }: { post: Content }) {
	let pathname = usePathname() || "/";
	let selected = pathname.includes(post.slug);

	return (
		<div
			className={clsx(
				"relative flex w-full items-center justify-end content-between m-0 pr-6 py-[5px]"
			)}
		>
			<div
				className={clsx(
					"flex flex-row gap-x-3 items-start justify-center w-full transition-all duration-50 text-neutral-400"
				)}
			>
				<Link
					key={post.slug}
					className="inline-block text-[15px] leading-4 mr-auto overflow-hidden overflow-ellipsis text-left"
					href={`/blog/${post.slug}`}
				>
					<span
						className={clsx("font-neue-haas-grotesk-medium hover:underline hover:text-white",
							selected && "text-white font-neue-haas-grotesk-bold"
						)}
					>
						{post.title}
					</span>
				</Link>

				<span
					className={clsx(
						"text-[14px] leading-4 whitespace-nowrap text-right font-ibmplex-sans-medium text-neutral-600",
						selected && "text-white font-ibmplex-sans-semibold"
					)}
				>
					{post.publishedAt}
				</span>
			</div>

			{selected && (
				<div className="absolute inset-y-0 right-0 w-[3px] bg-white"></div>
			)}
		</div>
	);
}
