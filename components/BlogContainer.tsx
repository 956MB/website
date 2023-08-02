"use client";

import { allBlogs, Blog } from "contentlayer/generated";
import { sortBlogs, toFormattedDate } from "lib/util";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import React from "react";
import clsx from "clsx";
import BlogLink from "./BlogLink";

function BlogSectionTitle({ title, sub }: { title: string; sub?: string }) {
    return (
        <div className="inline-flex flex-col">
            <div className="inline-flex flex-row gap-x-3 child:text-[14px] child:leading-6 child:sm:whitespace-nowrap py-[12px]">
                <span className="font-inter-semibold text-white">
                    {title}
                </span>
                {sub ? (
                    <span className="font-inter-semibold text-neutral-500">
                        {sub}
                    </span>
                ) : null}
            </div>
            <hr className="h-px w-full bg-neutral-800 my-0" />
        </div>
    );
}

function BlogEntries({ post }: { post: Blog }) {
    return (
        <div className="hidden lg:flex flex-col shrink w-full min-w-[325px] max-w-[325px] sticky top-[55px] overflow-auto ml-[25px]">
            <div
                className="flex flex-col w-full max-h-screen overflow-hidden"
            >
                <BlogSectionTitle title="POSTS" />

                <div className="flex flex-col max-h-full shrink overflow-y-scroll overflow-x-hidden no-scrollbar gap-y-[10px] py-[12px] pr-[15px]">
                    {React.Children.toArray(
                        sortBlogs(allBlogs).map((post) => (
                            <BlogRow post={post} />
                        ))
                    )}
                </div>

                {post.links ? (
                    <div className="inline-flex flex-col">
                        <hr className="h-px w-full bg-neutral-800 my-0" />

                        <BlogSectionTitle title="LINKS" />

                        <div className="inline-flex flex-col gap-y-[10px] py-[12px] mb-[80px] pr-[15px]">
                            {React.Children.toArray(
                                post.links?.map((link, i) => (
                                    <BlogLink link={link} num={i+1} />
                                ))
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default function BlogContainer({ selectedPost }: { selectedPost: Blog }) {
	return (
		<div className="flex flex-row flex-1 justify-center w-full max-h-full max-w-7xl items-start mx-auto">
            <BlogEntries post={selectedPost}/>

			<div
				className="flex flex-col w-full flex-1 lg:max-w-[100%] pt-[85px] pl-[25px] pr-[25px] lg:pl-[35px] pb-[55px] gap-[55px]"
			>
				{React.Children.toArray(
					sortBlogs(allBlogs).map((post) => (
						<section
							className={clsx(
								"block",
								post.slug === selectedPost.slug ? null : "lg:hidden"
							)}
						>
							<script type="application/ld+json">
								{JSON.stringify(post.structuredData)}
							</script>

							<div className="flex flex-row items-start justify-center w-full p-0">
								<div className="flex flex-col md:flex-row items-start justify-center content-center m-0 w-full gap-2">
									<span className="font-inter-bold text-[28px] max-w-max leading-6 mr-auto text-white sm:whitespace-nowrap">
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

							<hr className="h-px w-full bg-neutral-800 mb-[20px] mt-[28px]" />

							<Mdx code={post.body.code} />

                            {post.links ? (
                                <div className="inline-flex lg:hidden flex-col w-full">
                                    <BlogSectionTitle title="LINKS" />

                                    <div className="inline-flex flex-col gap-y-[10px] py-[12px] mb-[80px] pr-[15px]">
                                        {React.Children.toArray(
                                            post.links?.map((link, i) => (
                                                <BlogLink link={link} num={i+1} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            ) : null}
						</section>
					))
				)}
			</div>
		</div>
	);
}
