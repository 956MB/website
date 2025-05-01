import clsx from "clsx";
import { Content } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogRow({ post }: { post: Content }) {
    const pathname = usePathname() || "/";
    const selected = pathname.includes(post.slug);

    return (
        <div
            className={clsx(
                "relative m-0 flex w-full content-between items-center justify-end py-[5px] pr-6",
            )}
        >
            <div
                className={clsx(
                    "duration-50 flex w-full flex-row items-start justify-center gap-x-3 text-neutral-400 transition-all",
                )}
            >
                <Link
                    key={post.slug}
                    className="mr-auto inline-block overflow-hidden overflow-ellipsis text-left text-[15px] leading-4"
                    href={`/blog/${post.slug}`}
                >
                    <span
                        className={clsx(
                            "font-neue-haas-grotesk-medium hover:text-white hover:underline",
                            selected &&
                                "font-neue-haas-grotesk-bold text-white",
                        )}
                    >
                        {post.title}
                    </span>
                </Link>

                <span
                    className={clsx(
                        "font-ibmplex-sans-medium whitespace-nowrap text-right text-[14px] leading-4 text-neutral-600",
                        selected && "font-ibmplex-sans-semibold text-white",
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
