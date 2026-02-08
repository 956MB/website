import ExtraRow from "components/ExtraRow";
import { extras_section, groups } from "lib/extras";
import { baseUrl, name, og } from "lib/info";
import { pageMetadata } from "lib/interfaces";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata(
    baseUrl,
    name,
    og,
    extras_section,
);

export default function ExtraPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:gap-y-10 sm:px-7 sm:pt-5">
                {React.Children.toArray(
                    groups.map((group) => (
                        <ExtraRow key={group.title} entry={group} />
                    )),
                )}
            </div>
        </section>
    );
}
