import "./global.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import Header, { Footer } from "components/NavBar";

export const metadata: Metadata = {
	title: {
		default: "Alexander Bays",
		template: "%s | Alexander Bays",
	},
	description:
		"Self-taught programmer, graphic designer and neography hobbyist.",
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
				<Header />
				<main className="h-full min-w-0 flex flex-auto flex-col">
					{children}
					<Analytics />
                    <Footer />
				</main>
			</body>
		</html>
	);
}
