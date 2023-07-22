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
			<div className="flex w-full mx-auto flex-col items-start mt-[55px] last:border-transparent gap-y-5">
				{React.Children.toArray(
					projects.map((project, i) => (
						<div className="relative flex flex-row justify-center w-full items-start overflow-auto px-[2.5%] pt-[30px]">
							<ProjectRow
                                entry={project}
                                side={(i % 2) == 0 ? "right" : "left"}
							/>
						</div>
					))
				)}
			</div>
		</section>
	);
}
