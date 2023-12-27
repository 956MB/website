"use client";

import {
    about_p,
    background_p,
    bio_p,
    languages_p,
    tools_p,
} from "lib/info";
import { TextParagraph } from "./Text";
import { email } from "lib/info";
import React from "react";
import clsx from "clsx";
import { FaRedditAlien } from "react-icons/fa";
import { Mastodon, Twitch, Github, Discord } from 'react-bootstrap-icons';
import { XIcon } from "./Icons";

export function AboutBody() {
    return (
        <div className="flex-row text-left justify-start items-start mr-0 lg:mb-5 mt-6 lg:mt-4">
            <div className="flex flex-wrap m-0 flex-col pr-0 text-left gap-y-5 items-start justify-start overflow-hidden">
                <TextParagraph>{about_p}</TextParagraph>
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