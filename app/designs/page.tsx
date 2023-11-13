import type { Metadata } from "next";

import { groups } from "lib/designs";
import React from "react";
import DesignRow from "components/DesignRow";

export const metadata: Metadata = {
    title: "Designs",
    description: "Various Figma, Photoshop and other design concepts.",
};

export default function DesignPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start sm:pt-7 gap-y-3 sm:gap-y-7 pb-6 px-6 sm:px-7">
                {React.Children.toArray(
                    groups.map((group, i) => (
                        <DesignRow entry={group} />
                    ))
                )}
            </div>
        </section>
    );
}
