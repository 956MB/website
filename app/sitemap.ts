import { designGroups } from "../lib/designs";
import { neographyGroups } from "../lib/scripts";

export default async function sitemap() {
    const baseRoutes = [
        "",
        "/projects",
        "/designs",
        "/neography",
        "/extras",
    ].map((route) => ({
        url: `https://956mb.com${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    const designSlugs = designGroups.flatMap((group) =>
        group.items.map((entry) => ({
            url: `https://956mb.com/designs/${entry.id}`,
            lastModified: new Date().toISOString().split("T")[0],
        })),
    );

    const scriptSlugs = neographyGroups.flatMap((group) =>
        group.items.map((entry) => ({
            url: `https://956mb.com/neography/${entry.id}`,
            lastModified: new Date().toISOString().split("T")[0],
        })),
    );

    return [...baseRoutes, ...designSlugs, ...scriptSlugs];
}
