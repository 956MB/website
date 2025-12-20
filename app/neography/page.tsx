import DesignRow from "components/DesignRow";
import GroupHeader from "components/GroupHeader";
import { baseUrl, name, neography_d, neography_t, og } from "lib/info";
import { pageMetadata } from "lib/interfaces";
import { neographyGroups, scripts_section } from "lib/scripts";
import React from "react";

export const metadata = pageMetadata(baseUrl, name, og, scripts_section);

export default function NeographyPage() {
    const neographyEntry = {
        title: neography_t,
        description: neography_d,
        category: "neography",
        items: [],
    };

    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start px-6 pb-2 sm:px-7 sm:pb-10 sm:pt-5">
                <div className="relative flex w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-y-0">
                    <GroupHeader
                        entry={neographyEntry}
                        noDescription={false}
                        noBackdrop={true}
                        header={true}
                    />
                </div>

                {React.Children.toArray(
                    neographyGroups.map((group) => (
                        <DesignRow key={group.title} entry={group} noHeader />
                    )),
                )}
            </div>
        </section>
    );
}
