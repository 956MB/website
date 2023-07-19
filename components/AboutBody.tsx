"use client";

import {
	about_h,
	about_p,
	background_h,
	background_p,
	bio_p,
	languages_h,
	languages_p,
	tools_h,
	tools_p,
} from "../lib/info";
import { TextParagraph, TextTitle, TextTitleSub } from "./Text";
import { links } from "../lib/info";
import LinkRow from "../components/LinkRow";
import React from "react";
import clsx from "clsx";

export function AboutBody() {
	return (
		<div
			className="flex-row text-left justify-start mr-0 /*border-l border-neutral-800*/"
		>
			<div className="flex flex-wrap m-0 flex-col pr-0 pb-[30px] text-left gap-y-3">
				<TextTitle>{about_h}</TextTitle>
				<TextParagraph>{about_p}</TextParagraph>
				<TextParagraph>{bio_p}</TextParagraph>
				<TextTitleSub>{background_h}</TextTitleSub>
				<TextParagraph>{background_p}</TextParagraph>
				<TextTitleSub>{languages_h}</TextTitleSub>
				<TextParagraph>{languages_p}</TextParagraph>
				<TextTitleSub>{tools_h}</TextTitleSub>
				<TextParagraph>{tools_p}</TextParagraph>
			</div>
		</div>
	);
}

export function AboutLinks({ mobilePos }: { mobilePos: string }) {
	return (
		<div
			className={clsx(
				"flex flex-col w-full sm:min-w-[275px] items-start text-right justify-center mb-[30px]",
				mobilePos
			)}
		>
			<div className="flex flex-wrap m-0 flex-col w-full">
				{links.map((link, i) =>
					React.Children.toArray(
						<LinkRow
							row_key={link.key}
							row_value={link.value}
							row_href={link.url}
						/>
					)
				)}
			</div>
		</div>
	);
}
