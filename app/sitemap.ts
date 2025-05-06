export default async function sitemap() {
    const routes = ["", "/projects", "/designs", "/neography", "/extras"].map(
        (route) => ({
            url: `https://956mb.com${route}`,
            lastModified: new Date().toISOString().split("T")[0],
        }),
    );

    return [...routes];
}
