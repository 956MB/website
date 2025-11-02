import ProjectRow from "components/ProjectRow";
import { baseUrl, name, og } from "lib/info";
import { pageMetadata } from "lib/interfaces";
import { projectGroups, projects_section } from "lib/projects";
import React from "react";

export const metadata = pageMetadata(baseUrl, name, og, projects_section);

export default function ProjectsPage() {
    return (
        <section className="w-full max-w-[100vw] overflow-hidden">
            <div className="flex w-full flex-1 flex-col flex-wrap items-center justify-start gap-y-3 px-6 sm:px-7 lg:pb-3 lg:pt-6">
                <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-y-8">
                    {React.Children.toArray(
                        projectGroups.map((group) => (
                            <ProjectRow entry={group} />
                        )),
                    )}
                </div>
            </div>
        </section>
    );
}
