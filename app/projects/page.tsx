import ProjectRow from "components/ProjectRow";
import type { Metadata } from "next";

import { projects } from "lib/projects";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some of my programming projects.",
};

export default function ProjectsPage() {
    return (
        <section>
            <div className="flex w-full mx-auto flex-col items-start mt-[75px] last:border-transparent gap-y-8">
                {React.Children.toArray(
                    projects.map((project, i) => (
                        <div className="relative flex flex-row justify-center w-full items-center overflow-auto px-[2.5%] py-[2.5%]">
                            <ProjectRow
                                entry={project}
                            />
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
