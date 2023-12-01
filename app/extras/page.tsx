import type { Metadata } from "next";

import React from "react";
import ExtraRow from "components/ExtraRow";
import { groups } from "lib/extras";
import clsx from "clsx";
import { PiWarningCircleBold } from "react-icons/pi";
import { extras_explained } from "lib/info";

export const metadata: Metadata = {
	title: "Extras",
	description:
		"Collection of upscaled/edited wallpapers, and various other free stuff.",
};

export default function ExtraPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-wrap items-center justify-start sm:pt-7 gap-y-3 sm:gap-y-7 pb-6 px-6 sm:px-7">
				
                <div className="inline-flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row w-full items-end justify-center sm:justify-end mt-6 sm:mt-0 max-w-screen-3xl gap-3">
                        
                        <div className="flex flex-col items-start justify-start w-full sm:pt-4 m-0 gap-5 sm:gap-4">
                            <div className="flex flex-col sm:flex-row w-full max-w-screen-3xl items-start sm:items-center gap-3">
                                <div className="flex flex-col items-start justify-center gap-3">
                                    <span className="text-white font-inter-semibold text-[21px] leading-[18px]">
                                        {extras_explained.title}
                                    </span>

                                    <span className="font-ibmplex-sans-medium text-sm leading-5 sm:leading-4 text-neutral-500">
                                        {extras_explained.description}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={clsx(
                                "inline-flex flex-row text-left items-center justify-center text-yellow-500 gap-2 sm:gap-3 bg-yellow-500/10 py-2 px-2 sm:px-3"
                            )}
                        >
                            {
                                <a className="p-[2px] bg-yellow-500/10 rounded-full">
                                    <PiWarningCircleBold
                                        size={16}
                                        className="text-yellow-500 min-w-[16px] min-h-[16px]"
                                    />
                                </a>
                            }
                            <span className="font-ibmplex-sans-medium text-[12px] sm:text-[13px] leading-4 text-yellow-500 w-full max-w-3xl">
                                {extras_explained.disclaimer}
                            </span>
                        </div>
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
