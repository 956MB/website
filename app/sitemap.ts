import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
	const blogs = allBlogs.map((post) => ({
		url: `https://leerob.io/blog/${post.slug}`,
		lastModified: post.publishedAt,
	}));

	const routes = ["", "/projects", "/concepts", "/blog"].map((route) => ({
		url: `https://956mb.com${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
