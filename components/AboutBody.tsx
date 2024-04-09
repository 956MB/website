"use client";

import {
    about_email,
    about_p,
    background_p,
    bio_p,
    languages_p,
    tools_p,
} from "lib/info";
import React from "react";
import { TextParagraph, TextParagraphSub } from "./Text";

export function AboutBody() {
    return (
        <div className="mr-0 mt-6 flex-row items-start justify-start text-left lg:mb-5 lg:mt-4">
            <div className="m-0 flex flex-col flex-wrap items-center justify-center gap-y-5 overflow-hidden pr-0 text-left">
                <div className="inline-flex flex-col items-start justify-center">
                    <TextParagraph>{about_p}</TextParagraph>
                    <TextParagraphSub>{about_email}</TextParagraphSub>
                </div>
                <TextParagraph>{bio_p}</TextParagraph>
                <TextParagraph>{background_p}</TextParagraph>
                <div className="my-1 flex w-full flex-row items-center justify-center sm:my-2">
                    <hr className="my-auto h-px w-full bg-neutral-800" />
                </div>
                <TextParagraph>{languages_p}</TextParagraph>
                <TextParagraph>{tools_p}</TextParagraph>
            </div>
        </div>
    );
}
