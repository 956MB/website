import clsx from "clsx";
import { Content } from "contentlayer/generated";
import { replaceSlash } from "lib/util";
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
					"flex flex-row gap-x-3 items-start justify-start w-full"
				)}
			>
                <Link
                    key={post.slug}
                    className="inline-block text-[15px] leading-4 uppercase mr-auto overflow-hidden overflow-ellipsis text-left transition-all duration-100"
                    href={`/blog/${post.slug}`}
                >
                    <span
                        className={clsx(selected
                            ? "text-white underline font-inter-bold"
                            : "text-neutral-400 hover:text-white hover:underline font-inter-semibold"
                        )}
                    >
                        {post.title}
                    </span>
                </Link>

				<div className="inline-flex flex-row gap-2">
					<span
						className={clsx(
							"text-[14px] leading-4 whitespace-nowrap text-right transition-all duration-100",
							selected
								? "text-white font-ibmplex-sans-semibold"
								: "text-neutral-600 font-ibmplex-sans-medium"
						)}
					>
						{replaceSlash(post.publishedAt)}
					</span>
                </div>
			</div>

            {selected && (
                <div className="absolute inset-y-0 right-0 w-[2px] bg-white"></div>
            )}
		</div>
	);
}
