import DesignRow from "components/DesignRow";
import { designGroups } from "lib/designs";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Designs",
    description: "Various Figma, Photoshop and other design concepts.",
};

export default function DesignPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:gap-y-7 sm:px-8 sm:pb-0">
                {React.Children.toArray(
                    designGroups.map((group) => <DesignRow entry={group} />),
                )}
            </div>
        </section>
    );
}
