"use client";

import { AboutBody } from "components/AboutBody";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    dark, funky, okaidia, tomorrow, twilight, a11yDark,
    atomDark, cb, coldarkDark, dracula, holiTheme
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { projectGroups } from "lib/projects";
import { IEntry } from "lib/interfaces";
import clsx from "clsx";
import { getLangColor } from "lib/util";

export default function AboutPage() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

    const allProjects: IEntry[] = projectGroups.flatMap(group => group.items);

    const langCounts: { [key: string]: number } = {};
    allProjects.forEach(project => {
        const lang = project.lang || 'none';
        langCounts[lang] = (langCounts[lang] || 0) + 1;
    });

    const langStats = Object.entries(langCounts).map(([lang, count]) => ({
        lang,
        count,
        percentage: (count / allProjects.length) * 100
    })).sort((a, b) => b.count - a.count);

    return (
        <section className="flex flex-col items-center justify-center w-full flex-1">
            <div className="flex w-full flex-col items-center gap-y-2 px-6 pb-2 sm:justify-start sm:gap-y-0 sm:px-7 pt-0 sm:pt-10 lg:pt-16 lg:gap-y-0">

                <AboutBody />

                <div className="flex flex-col items-center w-full max-w-2xl mb-2 sm:mb-4 md:mb-6 lg:mb-4 mt-3">
                    <div className="flex w-full h-6 overflow-hidden items-center gap-x-[2px]">
                        {langStats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative h-full flex items-center justify-center group"
                                style={{
                                    width: `${stat.percentage}%`,
                                }}
                                title={`${stat.lang}: ${stat.percentage.toFixed(1)}%`}
                            >
                                <div
                                    className={clsx(
                                        "absolute h-1 transition-all duration-200 ease-in-out",
                                        getLangColor(stat.lang),
                                        "group-hover:h-[6px]",
                                    )}
                                    style={{
                                        width: '100%',
                                        left: 0,
                                        right: 0
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
