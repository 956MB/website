import DesignRow from "components/DesignRow";
import parse from "html-react-parser";
import { neography_d, neography_t } from "lib/info";
import { neographyGroups } from "lib/scripts";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Scripts",
    description:
        "All of the language scripts (and eventually conlangs) I've created for the r/neography subreddit.",
};

export default function NeographyPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-4 px-6 pb-2 sm:px-8 sm:pt-5">
                <div className="inline-flex w-full max-w-screen-2xl flex-col gap-4">
                    <div className="flex flex-col items-start justify-center gap-4 pt-6 text-center sm:items-center sm:pt-4">
                        <span className="font-neue-haas-grotesk-medium text-[22px] leading-[18px] text-white">
                            {neography_t}
                        </span>

                        <span className="font-ibmplex-sans-medium page-summary max-w-5xl text-start text-sm leading-[1.7em] text-neutral-300 sm:text-center">
                            {parse(neography_d)}
                        </span>
                    </div>
                </div>

                {React.Children.toArray(
                    neographyGroups.map((group, i) => (
                        <DesignRow entry={group} noHeader />
                    )),
                )}
            </div>
        </section>
    );
}
