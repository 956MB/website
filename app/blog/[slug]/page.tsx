import { allContents } from "contentlayer/generated";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const BlogC = dynamic(() => import("components/BlogContainer"), { ssr: false });

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    const post = allContents.find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        slug,
    } = post;
    const image = post.images[0];
    const ogImage = image
        ? `https://956mb.com${image}`
        : `https://956mb.com/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://956mb.com/blog/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function Blog({ params }) {
    const post = allContents
        .filter((i) => i.category === "blog")
        .find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section className="w-full">
            <div className="relative flex w-full flex-1 flex-col items-start px-6 sm:px-8">
                <BlogC selectedPost={post} />
            </div>
        </section>
    );
}
