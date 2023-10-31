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
			<div className={clsx("inline-flex flex-row justify-start items-center gap-x-3 child:text-[14px] child:leading-6 child:sm:whitespace-nowrap h-[76px] min-h-[76px] max-h-[76px]", padding ? "pl-5" : "")}>
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
		<div className="hidden lg:flex flex-col shrink w-full max-w-[358px] sticky top-[75px] overflow-auto border-r border-neutral-800">
			<div className="flex flex-col w-full max-h-screen overflow-hidden">
				<BlogSectionTitle title="POSTS" />

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
			<BlogEntries />

			<div className="flex flex-col w-full flex-1 max-w-[100%] pt-8 lg:pt-[75px] lg:px-6 pb-[55px] gap-[55px] min-w-[60%] bg-black/40">
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

							<div className="flex flex-row items-center justify-start w-full p-0 h-[76px] min-h-[76px] max-h-[76px]">
								<div className="flex flex-col md:flex-row items-start justify-start content-center m-0 w-full gap-2">
									<span className="font-inter-bold text-[26px] max-w-max leading-6 text-white sm:whitespace-nowrap uppercase">
										{post.title}
									</span>
									<div className="inline-flex flex-row-reverse md:flex-row items-center justify-center child:font-ibmplex-sans-medium child:text-sm child:whitespace-nowrap py-[2px] md:ml-2 gap-x-4">
										<span className="text-neutral-400 font-ibmplex-sans-medium uppercase">
											{replaceSlash(post.publishedAt)}
										</span>
									</div>
								</div>
							</div>

							<hr className="h-px w-full bg-neutral-800 mb-6 mt-0" />

							<Mdx code={post.body.code} />

							{post.links && (
								<div className="inline-flex lg:hidden flex-col w-full">
									<BlogSectionTitle title="LINKS" />

									<div className="inline-flex flex-col gap-y-[16px] py-5 mb-8">
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

			<div className="hidden lg:flex flex-col shrink w-full max-w-[358px] sticky top-[75px] overflow-auto border-l border-neutral-800">
				{selectedPost.links && (
					<div className="inline-flex flex-col">
						<BlogSectionTitle title="LINKS" padding={true} />

						<div className="inline-flex flex-col gap-y-[16px] py-6 pl-6">
							{React.Children.toArray(
								selectedPost.links?.map((link, i) => (
									<BlogLink link={link} num={i + 1} />
								))
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
