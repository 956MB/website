"use client";

import { allBlogs } from "contentlayer/generated";
import { sortBlogs, toFormattedDate } from "lib/util";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function BlogContainer() {
	let pathname = usePathname() || "/";

	return (
		<div className="flex flex-row flex-1 justify-center w-full max-w-[1920px] relative items-start mx-auto">
			<div className="hidden lg:flex flex-col w-full min-w-[325px] max-w-[325px] sticky top-[55px] overflow-auto shrink-0">
				<div
					className="flex flex-col w-full py-[27px] gap-[7px] overflow-auto shrink-0"
				>
					{React.Children.toArray(
						sortBlogs(allBlogs).map((post, i) => (
                            <BlogRow post={post} />
						))
					)}
                    <hr className="h-px w-full bg-neutral-800 my-[20px]" />
				</div>
			</div>

			<div
				className="flex flex-col w-full flex-1 lg:max-w-[60%] pt-[30px] px-[25px] lg:px-[55px] pb-[55px] /*lg:border-l border-neutral-800*/ gap-[55px]"
			>
				{React.Children.toArray(
					sortBlogs(allBlogs).map((post, i) => (
						<section
							className={clsx(
								"block",
								pathname.includes(post.slug) ? null : "lg:hidden"
							)}
						>
							<script type="application/ld+json">
								{JSON.stringify(post.structuredData)}
							</script>
							<div className="flex flex-row items-start justify-center w-full p-0">
								<div className="flex flex-col md:flex-row items-start justify-center content-center m-0 w-full gap-2">
									<span className="font-inter-semibold text-[25px] max-w-max leading-6 mr-auto text-white sm:whitespace-nowrap">
										{post.title}
									</span>
                                    <div className="inline-flex flex-row-reverse md:flex-row items-end justify-center child:font-ibmplex-sans-medium child:text-sm child:whitespace-nowrap py-[1px] md:ml-2">
                                        {React.Children.toArray(
                                            post.tags?.map((tag, i) => (
                                                <div className="inline-flex flex-row-reverse md:flex-row items-end justify-center">
                                                    <span className="text-neutral-100 highlight">{tag}</span>
                                                    {post.tags && i === post.tags?.length ? null : (
                                                        <span className="text-neutral-400 mx-2">·</span>
                                                    )}
                                                </div>
                                            ))
                                        )}
                                        <span className="text-neutral-400 font-ibmplex-sans-medium">
                                            {toFormattedDate(post.publishedAt)}
                                        </span>
                                    </div>
								</div>
							</div>
							<hr className="h-px w-full bg-neutral-800 mb-[20px] mt-[26px]" />
							<Mdx code={post.body.code} />
						</section>
					))
				)}
			</div>
		</div>
	);
}
