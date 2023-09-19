import clsx from "clsx";
import { Content } from "contentlayer/generated";
import { toFormattedDateShort } from "lib/util";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogRow({ post }: { post: Content }) {
	let pathname = usePathname() || "/";
	let selected = pathname.includes(post.slug);

	return (
		<div
			className={clsx(
				"flex w-full items-center justify-end content-between m-0",
			)}
		>
			
			<div
				className={clsx(
					"flex flex-row gap-x-3 items-start justify-start w-full"
				)}
			>
                <Link
                    key={post.slug}
                    className="inline-block text-[15px] leading-4 mr-auto overflow-hidden overflow-ellipsis text-left transition-all duration-100"
                    href={`/blog/${post.slug}`}
                >
                    <span
                        className={clsx(selected
                                ? "text-white underline font-inter-bold"
                                : "text-neutral-400 hover:text-white hover:underline font-inter-medium"
                        )}
                    >
                        {post.title}
                    </span>
                </Link>

				<div className="inline-flex flex-row gap-2">
					<span
						className={clsx(
							"font-ibmplex-sans-medium text-[14px] leading-4 whitespace-nowrap text-right transition-all duration-100",
							selected
								? "text-white"
								: "text-neutral-600"
						)}
					>
						{toFormattedDateShort(post.publishedAt)}
					</span>
                </div>
			</div>
		</div>
	);
}
