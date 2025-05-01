import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath,
    },
    structuredData: {
        type: "object",
        resolve: (doc) => ({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: doc.title,
            datePublished: doc.publishedAt,
            dateModified: doc.publishedAt,
            description: doc.summary,
            image: doc.image
                ? `https://956mb.com${doc.image}`
                : `https://956mb.com/api/og?title=${doc.title}`,
            url: `https://956mb.com/blog/${doc._raw.flattenedPath}`,
            author: {
                "@type": "Person",
                name: "Alexander Bays",
            },
        }),
    },
};

export const Content = defineDocumentType(() => ({
    name: "Content",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishedAt: {
            type: "string",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
        category: {
            type: "string",
            required: true,
        },
        credit: {
            type: "boolean",
        },
        tags: {
            type: "list",
            of: { type: "string" },
        },
        downloadLink: {
            type: "string",
        },
        count: {
            type: "number",
        },
        links: {
            type: "list",
            of: { type: "string" },
        },
        images: {
            type: "list",
            of: { type: "string" },
            required: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Content],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    },
});
