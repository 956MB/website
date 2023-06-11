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
import { motion } from "framer-motion";
import { TextParagraph, TextTitle, TextTitleSub } from "./Text";
import { links, logo } from "../lib/info";
import Image from "next/image";
import LinkRow from "../components/LinkRow";
import React from "react";
import clsx from "clsx";

export function AboutBody() {
	return (
		<motion.div
			className="md:pt-[30px] flex-row text-left justify-start mr-0 /*border-l border-neutral-800*/"
			initial={{ opacity: 0, scale: 1.07, y: 1.1 }}
			animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
			exit={{ opacity: 0, scale: 1.07, y: 1.1 }}
			transition={{
				type: "slide",
				damping: 15,
				duration: 0.25,
				stiffness: 250,
				delay: 0,
			}}
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
		</motion.div>
	);
}

export function AboutLinks({ mobilePos }: { mobilePos: string }) {
	return (
		<div
			className={clsx(
				"flex flex-col w-full sm:min-w-[275px] items-center text-right justify-center mb-[30px]",
				mobilePos
			)}
		>
			<div className="flex relative items-center justify-center h-[330px] w-full md:w-[275px] px-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1.0),rgba(0,0,0,0.1),rgba(0,0,0,1.0)),url('../public/images/is-this-anything/IMG_1853_invert.png')] bg-bottom bg-cover bg-no-repeat">
				<Image
					alt="logo"
					className="absolute w-52 h-52 hover:mt-[-30px] transition-all duration-100 object-contain cursor-pointer"
					src={logo}
					placeholder="blur"
					priority
				/>
			</div>

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
