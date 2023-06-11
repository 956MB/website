import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import BlogContainer from "components/BlogContainer";
const BlogC = dynamic(() => import("components/BlogContainer"), { ssr: false });

export const metadata: Metadata = {
	title: "Blog",
	description: "Any ideas, screenshots or resources I feel like sharing.",
};

export default async function BlogPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-1 items-start /*border-t border-neutral-800*/ mt-[55px]">
				<BlogC />
			</div>
		</section>
	);
}
