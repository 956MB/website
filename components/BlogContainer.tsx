"use client";

import { allContents, Content } from "contentlayer/generated";
import { sortContent, toFormattedDate } from "lib/util";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import React from "react";
import clsx from "clsx";
import BlogLink from "./BlogLink";

function BlogSectionTitle({ title, sub }: { title: string; sub?: string }) {
	return (
		<div className="inline-flex flex-col">
			<div className="inline-flex flex-row gap-x-3 child:text-[14px] child:leading-6 child:sm:whitespace-nowrap pt-[14px] pb-[16px]">
				<span className="font-inter-semibold text-white">{title}</span>
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

function BlogEntries() {
	return (
		<div className="hidden lg:flex flex-col shrink w-full max-w-[320px] sticky top-[99px] overflow-auto">
			<div className="flex flex-col w-full max-h-screen overflow-hidden">
				<BlogSectionTitle title="POSTS" />

				<div className="flex flex-col max-h-full shrink overflow-y-scroll overflow-x-hidden no-scrollbar gap-y-[12px] py-5">
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
			<BlogEntries />

			<div className="flex flex-col w-full flex-1 max-w-[100%] pt-8 lg:pt-[111px] lg:px-[50px] pb-[55px] gap-[55px]">
				{React.Children.toArray(
					sortContent(
						allContents.filter((i) => i.category === "blog")
					).map((post) => (
						<section
							className={clsx(
								"block",
								post.slug === selectedPost.slug
									? null
									: "lg:hidden"
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
									<div className="inline-flex flex-row-reverse md:flex-row items-center justify-center child:font-ibmplex-sans-medium child:text-sm child:whitespace-nowrap py-[1px] md:ml-2 gap-x-4">
										<div className="inline-flex flex-row-reverse md:flex-row items-end justify-center gap-x-3">
											{React.Children.toArray(
												post.tags?.map((tag, i) => (
													<span className="text-neutral-300 font-inter-semibold text-[11px] py-[2px] px-[6px] bg-neutral-900 rounded-[4px] border border-neutral-800 box-content ml-auto whitespace-nowrap uppercase">
														{tag}
													</span>
												))
											)}
										</div>
										<span className="text-neutral-300 font-ibmplex-sans-medium">
											{toFormattedDate(post.publishedAt)}
										</span>
									</div>
								</div>
							</div>

							<hr className="h-px w-full bg-neutral-800 mb-[20px] mt-5 sm:mt-[14px]" />

							<Mdx code={post.body.code} />

							{post.links ? (
								<div className="inline-flex lg:hidden flex-col w-full">
									<BlogSectionTitle title="LINKS" />

									<div className="inline-flex flex-col gap-y-[10px] py-5 mb-8">
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
							) : null}
						</section>
					))
				)}
			</div>

			<div className="hidden lg:flex flex-col shrink w-full max-w-[320px] sticky top-[99px] overflow-auto">
				{selectedPost.links ? (
					<div className="inline-flex flex-col">
						<BlogSectionTitle title="LINKS" />

						<div className="inline-flex flex-col gap-y-[12px] pt-[14px] pb-[16px] mb-[80px]">
							{React.Children.toArray(
								selectedPost.links?.map((link, i) => (
									<BlogLink link={link} num={i + 1} />
								))
							)}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
