import { baseUrl } from "lib/info";

export default async function sitemap() {
    const baseRoutes = [
        "",
        "/projects",
        "/designs",
        "/neography",
        "/extras",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...baseRoutes];
}
