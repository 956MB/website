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
        <section className="w-full max-w-[100vw] overflow-hidden">
            <div className="flex w-full flex-col flex-1 flex-wrap items-center justify-start gap-y-3 px-6 sm:px-8 lg:pt-6 lg:pb-3">
                <div className="flex flex-col gap-y-8 w-full max-w-screen-lg mx-auto">
                    {React.Children.toArray(
                        projectGroups.map((group, i) => <ProjectRow entry={group} />),
                    )}
                </div>
            </div>
        </section>
    );
}
