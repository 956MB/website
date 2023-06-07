"use client";

import { allBlogs } from "contentlayer/generated";
import { sortBlogs, toFormattedDate } from "lib/util";
import { useState } from "react";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import { motion } from "framer-motion";
import React from "react";

export default function BlogContainer() {
	const [selectedPage, setSelectedPage] = useState<string>("is-this-anything");

	return (
		<div className="flex flex-row flex-1 justify-center w-full mx-auto relative items-start px-[4%]">
			<div className="flex flex-col w-full min-w-[360px] max-w-[360px] h-full sticky top-[55px] overflow-auto shrink-0">
				<motion.div
					className="flex flex-col w-full py-[30px] gap-0 overflow-auto shrink-0 /*border-b border-neutral-800/*"
					variants={{
						show: {
							transition: {
								staggerChildren: 0.055,
							},
						},
					}}
					initial="hidden"
					animate="show"
				>
					{React.Children.toArray(
						sortBlogs(allBlogs).map((post, i) => (
							<button onClick={() => setSelectedPage(post.slug)}>
								<BlogRow
									row_title={post.title}
									row_date={post.publishedAt}
									row_selected={post.slug === selectedPage}
									row_tag={post.tag ? post.tag : ""}
								/>
							</button>
						))
					)}
				</motion.div>
			</div>

			<motion.div
				className="flex flex-col w-full max-w-4xl flex-1 pt-[30px] pl-[30px] pb-[55px] /*border-l border-neutral-800*/"
				initial={{ opacity: 0, scale: 1.07, y: 1.1 }}
				animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
				exit={{ opacity: 0, scale: 1.07, y: 1.1 }}
				transition={{
					type: "slide",
					damping: 15,
					duration: 0.25,
					stiffness: 250,
					delay: 0,
				}}
			>
				{React.Children.toArray(
					sortBlogs(allBlogs).map((post, i) =>
						post.slug !== selectedPage ? null : (
							<section>
								<script type="application/ld+json">
									{JSON.stringify(post.structuredData)}
								</script>
								<div className="flex flex-col items-end justify-center w-full p-0 mb-[30px]">
									<div className="flex flex-row items-center justify-start w-full m-0 pl-2 border-l-2 border-neutral-500">
										<span className="font-inter-bold text-xl max-w-max leading-5 mr-auto text-white whitespace-nowrap">
											{post.title}
										</span>
										<hr className="h-px w-full bg-neutral-800 mx-[20px] my-auto" />
										<span className="font-roboto-mono-medium text-sm text-neutral-400 whitespace-nowrap">
											{toFormattedDate(post.publishedAt)}
										</span>
									</div>
								</div>
								<Mdx code={post.body.code} />
							</section>
						)
					)
				)}
			</motion.div>
		</div>
	);
}
