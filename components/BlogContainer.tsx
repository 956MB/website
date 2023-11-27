"use client";

import { allContents, Content } from "contentlayer/generated";
import { replaceSlash, sortContent, toFormattedDate } from "lib/util";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import React from "react";
import clsx from "clsx";
import BlogLink from "./BlogLink";

function BlogSectionTitle({ title, sub, padding }: { title: string; sub?: string, padding?: boolean }) {
	return (
		<div className="inline-flex flex-col">
			<div className={clsx("inline-flex flex-row justify-start items-center gap-x-2 child:text-[14px] child:leading-6 child:sm:whitespace-nowrap h-[46px] min-h-[46px] max-h-[46px] sm:h-[56px] sm:min-h-[56px] sm:max-h-[56px]", padding ? "pl-5" : "")}>
				<span className="font-inter-semibold text-white">{title}</span>
				{sub && (
					<span className="font-inter-semibold text-neutral-500">
						{sub}
					</span>
				)}
			</div>
			<hr className="h-px w-full bg-neutral-800 my-0" />
		</div>
	);
}

function BlogEntries() {
	return (
		<div className="hidden lg:flex flex-col shrink w-full">
			<div className="flex flex-col w-full max-h-screen overflow-hidden">
				<BlogSectionTitle title="POSTS" sub={`${allContents.length}`} />

				<div className="flex flex-col max-h-full shrink overflow-y-scroll overflow-x-hidden no-scrollbar gap-y-[6px] py-6">
					{React.Children.toArray(
						sortContent(
							allContents.filter((i) => i.category === "blog")
						).map((post) => <BlogRow post={post} />)
					)}
				</div>
			</div>
		</div>
	);
}

export default function BlogContainer({
	selectedPost,
}: {
	selectedPost: Content;
}) {
	return (
		<div className="flex flex-row flex-1 justify-center w-full max-h-full items-start mx-auto max-w-screen-3xl">
			<div className="hidden lg:flex flex-col shrink w-full max-w-[361px] sticky top-[75px] overflow-auto border-r border-neutral-800">
                <BlogEntries />
                
                {selectedPost.links && (
                    <div className="flex flex-col shrink w-full overflow-auto">
                            <div className="inline-flex flex-col">
                                <hr className="h-px w-full bg-neutral-800 my-0" />

                                <BlogSectionTitle title="LINKS" sub={`${selectedPost.links?.length}`} />

                                <div className="inline-flex flex-col gap-y-[6px] py-6">
                                    {React.Children.toArray(
                                        selectedPost.links?.map((link, i) => (
                                            <BlogLink link={link} num={i + 1} />
                                        ))
                                    )}
                                </div>
                            </div>
                    </div>
                )}
            </div>

			<div className="flex flex-col w-full flex-1 max-w-[100%] lg:pl-6 pb-6 gap-10 sm:gap-[55px] min-w-[50%] bg-black/40">
				{React.Children.toArray(
					sortContent(
						allContents.filter((i) => i.category === "blog")
					).map((post) => (
						<section
							className={clsx(
								"block w-full max-w-screen-lg",
								post.slug === selectedPost.slug
									? null
									: "lg:hidden"
							)}
						>
							<script type="application/ld+json">
								{JSON.stringify(post.structuredData)}
							</script>

							<div className="flex flex-row sticky top-0 sm:relative items-center justify-start w-full p-0 sm:h-[76px] sm:min-h-[76px] sm:max-h-[76px] pb-4 pt-5 sm:pt-0 sm:pb-0 bg-black/90 backdrop-blur z-50 border-b border-neutral-800 mb-6">
								<div className="flex flex-col md:flex-row items-start justify-start content-center m-0 w-full gap-2 sm:gap-3">
									<span className="font-inter-bold text-[23px] sm:text-[26px] max-w-max leading-6 text-white sm:whitespace-nowrap uppercase">
										{post.title}
									</span>
									<div className="inline-flex flex-row-reverse md:flex-row items-center justify-center child:font-ibmplex-sans-medium child:text-sm child:whitespace-nowrap py-[2px] md:ml-2 gap-x-4">
										<span className="text-neutral-400 font-ibmplex-sans-medium uppercase">
											{post.publishedAt}
										</span>
									</div>
								</div>
							</div>

							{/* <hr className="h-px w-full bg-neutral-800 mb-6 mt-0" /> */}

							<Mdx code={post.body.code} />

							{post.links && (
								<div className="inline-flex lg:hidden flex-col w-full">
									<BlogSectionTitle title="LINKS" />

									<div className="inline-flex flex-col gap-y-[16px] py-5 mb-4">
										{React.Children.toArray(
											post.links?.map((link, i) => (
												<BlogLink
													link={link}
													num={i + 1}
												/>
											))
										)}
									</div>
								</div>
							)}
						</section>
					))
				)}
			</div>
		</div>
	);
}
