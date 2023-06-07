'use client';

import {
	about_h,
	about_p,
	background_h,
	background_p,
	bio_p,
	languages_h,
	languages_p,
	tools_h,
	tools_p
} from "../lib/info";
import { motion } from "framer-motion";
import { TextParagraph, TextTitle, TextTitleSub } from "./Text";

export default function AboutBody() {
    return (
        <motion.div
            className="pt-[30px] pl-[30px] flex-row text-left justify-start mr-0 /*border-l border-neutral-800*/"
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