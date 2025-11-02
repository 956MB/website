import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import Header, { Footer } from "components/NavBar";
import Particles from "components/particles";
import { ThemeProvider } from "components/ThemeProvider";
import { baseUrl, description, name, og, title } from "lib/info";
import type { Metadata, Viewport } from "next";
import "./global.css";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: name,
        template: `%s – ${name}`,
    },
    description: description,
    applicationName: `${name} Portfolio`,
    creator: name,
    publisher: name,
    alternates: {
        canonical: baseUrl,
    },
    keywords: [
        "developer",
        "programmer",
        "designer",
        "neography",
        "portfolio",
        "dallas",
        "956mb",
    ],
    verification: {},
    openGraph: {
        title: title,
        description: description,
        url: baseUrl,
        siteName: name,
        images: [
            {
                url: og,
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
        title: title,
        description: description,
        card: "summary_large_image",
        images: og,
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark h-full">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body
                className={clsx(
                    "flex min-h-screen flex-col overflow-auto antialiased md:flex-row",
                )}
            >
                <div className="fixed inset-0 z-0">
                    <Particles
                        className="absolute inset-0 hidden animate-fade-in invert dark:invert-0 sm:block"
                        quantity={128}
                    />
                </div>

                <ThemeProvider>
                    <main className="relative z-10 flex w-full min-w-0 flex-1 flex-grow flex-col items-center">
                        <Header />
                        <div className="flex w-full flex-1 justify-center">
                            {children}
                        </div>
                        <SpeedInsights />
                        <Analytics />
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
