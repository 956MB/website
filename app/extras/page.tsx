import ExtraRow from "components/ExtraRow";
import { groups } from "lib/extras";
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
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:gap-y-10 sm:px-7 sm:pt-5">
                {React.Children.toArray(
                    groups.map((group) => <ExtraRow entry={group} />),
                )}
            </div>
        </section>
    );
}
