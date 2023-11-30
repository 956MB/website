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

export function AboutLinks({ mobilePos }: { mobilePos: string }) {
    const getSocial = (key: string): { color: string, icon: JSX.Element } => {
        switch (key) {
            case "github": return { color: "hover:border-neutral-400/80", icon: <Github size={18} /> };
            case "reddit": return { color: "hover:border-[#FF4500]/80", icon: <FaRedditAlien size={21} /> };
            case "twitter": return { color: "hover:border-[#1D9BF0]/80", icon: <XIcon /> };
            case "mastadon": return { color: "hover:border-[#6364FF]/80", icon: <Mastodon size={18} /> };
            case "discord": return { color: "hover:border-[#5865F2]/80", icon: <Discord size={18} /> };
            default: return { color: "hover:border-[#9146FF]/80", icon: <Twitch size={18} /> };
        }
    }

    return (
        <div
            className={clsx(
                "flex flex-col w-full items-start lg:items-center justify-start mb-[30px] gap-y-[20px] lg:gap-y-[40px]",
                mobilePos
            )}
        >
            <div className="inline-flex flex-row gap-3">
                <a className="text-neutral-400 text-sm no-underline mr-auto font-inter-medium whitespace-nowrap">
                    {email.key}:
                </a>
                <a
                    className="text-white text-sm m-0 font-inter-semibold transition-all duration-100 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={email.url}
                >
                    {email.value}
                </a>
            </div>
        </div>
    );
}
