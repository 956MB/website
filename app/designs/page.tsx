import DesignRow from "components/DesignRow";
import { designGroups, designs_section } from "lib/designs";
import { baseUrl, name, og } from "lib/info";
import { pageMetadata } from "lib/interfaces";
import React from "react";

export const metadata = pageMetadata(baseUrl, name, og, designs_section);

export default function DesignPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:gap-y-7 sm:px-7 sm:pb-0">
                {React.Children.toArray(
                    designGroups.map((group) => (
                        <DesignRow key={group.title} entry={group} />
                    )),
                )}
            </div>
        </section>
    );
}
