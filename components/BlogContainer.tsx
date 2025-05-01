"use client";

import clsx from "clsx";
import { allContents, Content } from "contentlayer/generated";
import { sortContent } from "lib/util";
import React from "react";
import BlogLink from "./BlogLink";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";

function BlogSectionTitle({
    title,
    sub,
    padding,
}: {
    title: string;
    sub?: string;
    padding?: boolean;
}) {
    return (
        <div className="inline-flex flex-col">
            <div
                className={clsx(
                    "inline-flex h-[46px] max-h-[46px] min-h-[46px] flex-row items-center justify-start gap-x-2 child:text-[14px] child:leading-6 sm:h-[56px] sm:max-h-[56px] sm:min-h-[56px] child:sm:whitespace-nowrap",
                    padding ? "pl-5" : "",
                )}
            >
                <span className="font-neue-haas-grotesk-medium text-white">
                    {title}
                </span>
                {sub && (
                    <span className="font-neue-haas-grotesk-medium text-neutral-500">
                        {sub}
                    </span>
                )}
            </div>
            <hr className="my-0 h-px w-full bg-neutral-800" />
        </div>
    );
}

function BlogEntries() {
    return (
        <div className="hidden w-full shrink flex-col lg:flex">
            <div className="flex max-h-screen w-full flex-col overflow-hidden">
                <BlogSectionTitle title="POSTS" sub={`${allContents.length}`} />

                <div className="no-scrollbar flex max-h-full shrink flex-col gap-y-[6px] overflow-x-hidden overflow-y-scroll py-4">
                    {React.Children.toArray(
                        sortContent(
                            allContents.filter((i) => i.category === "blog"),
                        ).map((post) => <BlogRow post={post} />),
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
        <div className="mx-auto flex max-h-full w-full max-w-screen-xl flex-1 flex-row items-start justify-center">
            <div className="sticky top-0 hidden w-full max-w-[361px] shrink flex-col overflow-auto lg:flex">
                {selectedPost.links && (
                    <div className="flex w-full shrink flex-col overflow-auto">
                        <div className="inline-flex flex-col">
                            <BlogSectionTitle
                                title="LINKS"
                                sub={`${selectedPost.links?.length}`}
                            />

                            <div className="inline-flex flex-col gap-y-[6px] py-4">
                                {React.Children.toArray(
                                    selectedPost.links?.map((link, i) => (
                                        <BlogLink link={link} num={i + 1} />
                                    )),
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <hr className="my-0 h-px w-full bg-neutral-800" />

                <BlogEntries />
            </div>

            <div className="flex w-full min-w-[50%] max-w-[100%] flex-1 flex-col gap-10 bg-black/40 pb-6 sm:gap-[55px] lg:pl-8">
                {React.Children.toArray(
                    sortContent(
                        allContents.filter((i) => i.category === "blog"),
                    ).map((post) => (
                        <section
                            className={clsx(
                                "block w-full max-w-screen-lg",
                                post.slug === selectedPost.slug
                                    ? null
                                    : "lg:hidden",
                            )}
                        >
                            <script type="application/ld+json">
                                {JSON.stringify(post.structuredData)}
                            </script>

                            <div className="sticky top-0 z-50 mb-6 flex w-full flex-row items-center justify-start border-b border-neutral-800 bg-black/90 p-0 pb-4 pt-5 backdrop-blur sm:relative sm:h-[76px] sm:max-h-[76px] sm:min-h-[76px] sm:pb-0 sm:pt-0">
                                <div className="m-0 flex w-full flex-col content-center items-start justify-start gap-1 sm:gap-3 md:flex-row">
                                    <span className="font-neue-haas-grotesk-medium max-w-max text-[23px] uppercase leading-6 text-white sm:whitespace-nowrap sm:text-[26px]">
                                        {post.title}
                                    </span>
                                    <div className="child:font-ibmplex-sans-medium inline-flex flex-row-reverse items-center justify-center gap-x-4 py-[2px] child:whitespace-nowrap child:text-sm md:ml-2 md:flex-row">
                                        <span className="font-ibmplex-sans-medium uppercase text-neutral-400">
                                            {post.publishedAt}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Mdx code={post.body.code} />

                            {post.links && (
                                <div className="inline-flex w-full flex-col lg:hidden">
                                    <BlogSectionTitle title="LINKS" />

                                    <div className="mb-4 inline-flex flex-col gap-y-[16px] py-5">
                                        {React.Children.toArray(
                                            post.links?.map((link, i) => (
                                                <BlogLink
                                                    link={link}
                                                    num={i + 1}
                                                />
                                            )),
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    )),
                )}
            </div>
        </div>
    );
}
