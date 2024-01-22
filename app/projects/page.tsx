import ProjectRow from "components/ProjectRow";
import type { Metadata } from "next";

import { projects } from "lib/projects";
import React from "react";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some of my programming projects.",
};

export default function ProjectsPage() {
    return (
        <section>
            <div className="flex w-full mx-auto flex-col items-start pb-6 sm:pb-7 pt-6 last:border-transparent">
                {React.Children.toArray(
                    projects.map((project, i) => (
                        <div className="relative flex flex-col justify-center w-full items-center overflow-auto px-6 sm:px-8">
                            <ProjectRow
                                entry={project}
                            />
                            <hr className={clsx("h-px w-full max-w-screen-2xl bg-neutral-800 my-6 sm:my-7", i <= projects.length -2 ? "visible" : "hidden")} />
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
