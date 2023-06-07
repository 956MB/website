import type { Metadata } from "next";

import { groups } from "lib/concepts";
import React from "react";
import ConceptRow from "components/ConceptRow";

export const metadata: Metadata = {
	title: "Concepts",
	description: "Various Figma, Photoshop and other design concepts.",
};

export default function ConceptsPage() {
	return (
		<section>
			<div className="flex w-full flex-col flex-wrap items-center justify-start mt-[55px]">
				{React.Children.toArray(
					groups.map((group, i) => (
                        <ConceptRow entry={group} />
					))
				)}
			</div>
		</section>
	);
}
