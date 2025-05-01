import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Alexander Bays",
        short_name: "956MB",
        description: "Self-taught generalist... unfortunately.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon",
            },
            {
                src: "/logo.png",
                type: "image/png",
                sizes: "192x192",
            },
        ],
    };
}
