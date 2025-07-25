import DesignRow from "components/DesignRow";
import GroupHeader from "components/GroupHeader";
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
    const neographyEntry = {
        title: neography_t,
        description: neography_d,
        category: "neography",
        items: [],
    };

    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start px-6 pb-2 sm:px-7 sm:pt-5">
                <div className="relative flex w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-y-0">
                    <GroupHeader
                        entry={neographyEntry}
                        noDescription={false}
                        noBackdrop={true}
                    />
                </div>

                {React.Children.toArray(
                    neographyGroups.map((group) => (
                        <DesignRow entry={group} noHeader />
                    )),
                )}
            </div>
        </section>
    );
}
