import ExtraRow from "components/ExtraRow";
import { groups } from "lib/extras";
import { extras_explained } from "lib/info";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Extras",
    description:
        "Collection of upscaled/edited wallpapers, and various other free stuff.",
};

export default function ExtraPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:gap-y-10 sm:px-8 sm:pt-5">
                <div className="inline-flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8">
                    <div className="flex flex-col items-start justify-center gap-4 pt-6 text-center sm:items-center sm:pt-4">
                        <span className="font-bold text-[22px] leading-[18px] text-white">
                            {extras_explained.title}
                        </span>

                        <span className="font-medium page-summary max-w-5xl text-start text-sm leading-[1.56em] text-neutral-300 sm:text-center">
                            {extras_explained.description}
                        </span>
                    </div>
                </div>

                {React.Children.toArray(
                    groups.map((group, i) => <ExtraRow entry={group} />),
                )}
            </div>
        </section>
    );
}
