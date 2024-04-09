import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header, { Footer } from "components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://956mb.com"),
    title: {
        default: "Alexander Bays",
        template: "%s - Alexander Bays",
    },
    description:
        "Self-taught programmer, graphic designer and r/neography hobbyist.",
    openGraph: {
        title: "Alexander Bays",
        description:
            "Self-taught programmer, graphic designer and r/neography hobbyist.",
        url: "https://956mb.com",
        siteName: "Alexander Bays",
        images: [
            {
                url: "https://956mb.com/og.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Alexander Bays",
        description:
            "Self-taught programmer, graphic designer and r/neography hobbyist.",
        card: "summary_large_image",
        images: "https://956mb.com/og.png",
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-black text-black">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/logo.png" />
            </head>
            <body className="flex flex-col overflow-auto antialiased md:flex-row">
                <main className="flex h-fit w-full min-w-0 flex-auto flex-col items-center">
                    <Header />
                    {children}
                    <SpeedInsights />
                    <Analytics />
                    <Footer />
                </main>
            </body>
        </html>
    );
}
