"use client";

import {
    about_p,
    about_email,
    background_p,
    bio_p,
    languages_p,
    tools_p,
} from "lib/info";
import { TextParagraph, TextParagraphSub } from "./Text";
import React from "react";

export function AboutBody() {
    return (
        <div className="flex-row text-left justify-start items-start mr-0 lg:mb-5 mt-6 lg:mt-4">
            <div className="flex flex-wrap m-0 flex-col pr-0 text-left gap-y-5 items-start justify-start overflow-hidden">
                <div className="inline-flex flex-col">
                    <TextParagraph>{about_p}</TextParagraph>
                    <TextParagraphSub>{about_email}</TextParagraphSub>
                </div>
                <TextParagraph>{bio_p}</TextParagraph>
                <TextParagraph>{background_p}</TextParagraph>
                <div className="flex flex-row items-center justify-center w-full my-1 sm:my-2">
                    <hr className="h-px w-full bg-neutral-800 my-auto" />
                </div>
                <TextParagraph>{languages_p}</TextParagraph>
                <TextParagraph>{tools_p}</TextParagraph>
            </div>
        </div>
    );
}