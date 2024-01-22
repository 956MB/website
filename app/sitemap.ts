import { allContents } from "contentlayer/generated";

export default async function sitemap() {
	const blogs = allContents.filter((i) => i.category === "blog").map((post) => ({
		url: `https://956mb.com/blog/${post.slug}`,
		lastModified: post.publishedAt,
	}));

	const routes = ["", "/projects", "/deisgns", "/neography", "/extras"].map((route) => ({
		url: `https://956mb.com${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
