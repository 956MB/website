import type { Metadata } from "next";

import React from "react";
import ExtraRow from "components/ExtraRow";
import { groups } from "lib/extras";
import { extras_explained } from "lib/info";

export const metadata: Metadata = {
	title: "Extras",
	description:
		"Collection of upscaled/edited wallpapers, and various other free stuff.",
};

export default function ExtraPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-wrap items-center justify-start sm:pt-5 gap-y-3 sm:gap-y-7 pb-6 px-6 sm:px-8">
				<div className="inline-flex flex-col gap-4 w-full max-w-screen-2xl">
					<div className="flex flex-col items-center justify-center gap-3 pt-[13px] sm:pt-4 text-center">
						<span className="text-white font-neue-haas-grotesk-medium text-[21px] leading-[18px]">
							{extras_explained.title}
						</span>

						<span className="font-ibmplex-sans-medium text-sm leading-5 text-neutral-500 page-summary max-w-3xl">
							{extras_explained.description}
						</span>
					</div>

					<div className="flex flex-row items-center justify-center w-full mb-0">
						<hr className="h-px w-full bg-neutral-800 my-auto" />
					</div>
				</div>

				{React.Children.toArray(
					groups.map((group, i) => <ExtraRow entry={group} />)
				)}
			</div>
		</section>
	);
}
