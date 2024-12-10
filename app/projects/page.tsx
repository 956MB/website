import clsx from "clsx";
import ProjectRow from "components/ProjectRow";
import { projectGroups } from "lib/projects";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some of my programming projects.",
};

export default function ProjectsPage() {
    return (
        <section>
            <div className="flex w-full flex-col flex-wrap items-center justify-start gap-y-3 px-6 pb-6 sm:px-8 sm:pt-5">
                {React.Children.toArray(
                    projectGroups.map((group, i) => <ProjectRow entry={group} />),
                )}
            </div>
        </section>
    );
}
