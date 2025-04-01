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
        "Self-taught generalist... unfortunately.",
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    applicationName: "Alexander Bays Portfolio",
    creator: "Alexander Bays",
    publisher: "Alexander Bays",
    alternates: {
        canonical: 'https://956mb.com',
    },
    keywords: ['developer', 'programmer', 'designer', 'neography', 'portfolio', 'Dallas'],
    verification: {
    },
    openGraph: {
        title: "Alexander Bays (956MB)",
        description:
            "Self-taught generalist... unfortunately.",
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
        title: "Alexander Bays (956MB)",
        description:
            "Self-taught generalist... unfortunately.",
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
        <html lang="en" className="bg-black text-black h-full">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="flex flex-col overflow-auto antialiased md:flex-row min-h-screen">
                <main className="flex w-full min-w-0 flex-col items-center flex-1 flex-grow">
                    <Header />
                    <div className="flex flex-1 w-full">
                        {children}
                    </div>
                    <SpeedInsights />
                    <Analytics />
                    <Footer />
                </main>
            </body>
        </html>
    );
}
