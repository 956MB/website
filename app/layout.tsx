import "./global.css";
import type { Metadata } from "next";
import Particles from "../components/particles";
import { Analytics } from '@vercel/analytics/react';
import Header, { Footer } from "components/NavBar";

export const metadata: Metadata = {
	title: {
		default: "Alexander Bays",
		template: "%s | Alexander Bays",
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
		card: "summary_large_image",
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
		<html lang="en" className="text-black bg-black">
			<body className="antialiased flex flex-col md:flex-row overflow-scroll no-scrollbar">
				<main className="h-full min-w-0 flex flex-auto flex-col">
				    <Header />
					{children}
					<Analytics />
					<Footer />
				</main>
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={120}
                />
			</body>
		</html>
	);
}
