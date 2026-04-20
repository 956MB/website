import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import Header, { Footer } from "components/NavBar";
import Particles from "components/particles";
import { ThemeProvider } from "components/ThemeProvider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { baseUrl, description, name, og, title } from "lib/info";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./global.css";

const DegularMono = localFont({
    src: [
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Thin.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-ThinItalic.otf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Italic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-SemiboldItalic.otf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-Black.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../public/fonts/Degular Mono/DegularMonoDemo-BlackItalic.otf",
            weight: "900",
            style: "italic",
        },
    ],
    variable: "--font-degular-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: name,
        template: `%s · ${name}`,
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
                    GeistSans.variable,
                    GeistMono.variable,
                    DegularMono.variable,
                    "font-sans",
                    "flex min-h-screen flex-col overflow-auto antialiased md:flex-row",
                )}
            >
                <div className="pointer-events-none fixed inset-0 z-0">
                    <Particles
                        className="absolute inset-0 hidden animate-fade-in invert dark:invert-0 sm:block"
                        quantity={128}
                    />
                </div>

                <ThemeProvider>
                    <main className="relative z-10 flex w-full min-w-0 flex-1 flex-grow flex-col items-center">
                        <Header />
                        <div className="flex w-full flex-1 items-center justify-center">
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
