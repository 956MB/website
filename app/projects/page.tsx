import clsx from "clsx";
import ProjectRow from "components/ProjectRow";
import { projects } from "lib/projects";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects",
    description: "Some of my programming projects.",
};

export default function ProjectsPage() {
    return (
        <section>
            <div className="mx-auto flex w-full flex-col items-start pb-6 pt-5 last:border-transparent sm:pb-7">
                {React.Children.toArray(
                    projects.map((project, i) => (
                        <div className="relative flex w-full flex-col items-center justify-center overflow-auto px-6 sm:px-8">
                            <ProjectRow entry={project} />
                            <hr
                                className={clsx(
                                    "my-6 h-px w-full max-w-screen-2xl bg-neutral-800 sm:my-7",
                                    i <= projects.length - 2
                                        ? "visible"
                                        : "hidden",
                                )}
                            />
                        </div>
                    )),
                )}
            </div>
        </section>
    );
}
