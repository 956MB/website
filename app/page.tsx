"use client";

import { AboutBody } from "components/AboutBody";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { holiTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AboutPage() {
    const markdown = String.raw`
~~~puppet
    /\\\\\\\\\ ······················································································
   /\\\//////// ·····················································································
   \//\\\ ···························································································
    \////\\\        /\\\\\\\\   /\\/\\\\\\\     /\\\\\\\\\   /\\\\\\\\\     /\\\\\\\\\\\\\ ··········
────── \////\\\ ── /\\\/////\\\ \/\\\/////\\\  /\\\////// ─ /\\\/////\\\ ─ /\\\/////////\\\ ─────────
──────────── \////\\\  /\\\\\\\\\\\ \//\\\\\\\\/\\\/\\\ ────── \//\\\\\\\\/\\\ \/\\\ ───── \/\\\ ────
──────────────── \////\\\ \//\\/////// ─ \///////\// \//\\\ ────── \///////\// ─ \//\\\ ──── /\\\ ───
──────────────────── \////\\\\\ ───────────────────── \///\\\ ───── /\\\/\\\\\\ ── \///\\\\\\\\\/ ───
                        \/////                          \/////      \///\\\\\\       \///////// ·····
                                                                        \///// ······················
~~~
`;

    return (
        <section className="flex w-full flex-1 flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center gap-y-2 px-6 pb-2 pt-0 sm:justify-start sm:gap-y-0 sm:px-7 sm:pt-10 lg:gap-y-3 lg:pt-10">
                <div className="border-neutral-200 dark:border-neutral-800 md:border-l md:px-6 md:py-4">
                    <AboutBody />

                    <div className="mb-3 hidden w-full flex-row items-center justify-center align-middle md:flex">
                        <div className="flex flex-col items-center overflow-x-auto">
                            <Markdown
                                className="text-right text-[11px] leading-4 text-black saturate-0 dark:invert"
                                children={markdown}
                                components={{
                                    code(props) {
                                        const {
                                            children,
                                            className,
                                            node,
                                            ...rest
                                        } = props;
                                        const match = /language-(\w+)/.exec(
                                            className || "",
                                        );
                                        return match ? (
                                            <SyntaxHighlighter
                                                {...rest}
                                                PreTag="div"
                                                children={String(
                                                    children,
                                                ).replace(/\n$/, "")}
                                                language={match[1]}
                                                style={{
                                                    ...holiTheme,
                                                    'pre[class*="language-"]': {
                                                        ...holiTheme[
                                                            'pre[class*="language-"]'
                                                        ],
                                                        backgroundColor:
                                                            "transparent",
                                                        borderColor:
                                                            "transparent",
                                                        margin: 0,
                                                        border: 0,
                                                        borderRadius: 0,
                                                        boxShadow: "none",
                                                        textShadow: "none",
                                                        padding: "0",
                                                        fontSize: "11px",
                                                        fontFamily: "monospace",
                                                        lineHeight: "1.05rem",
                                                        color: "black",
                                                    },
                                                    'code[class*="language-"]':
                                                        {
                                                            ...holiTheme[
                                                                'code[class*="language-"]'
                                                            ],
                                                            fontFamily:
                                                                "monospace",
                                                            fontSize: "11px",
                                                            lineHeight:
                                                                "1.05rem",
                                                            color: "black",
                                                            border: 0,
                                                            borderRadius: 0,
                                                            boxShadow: "none",
                                                            textShadow: "none",
                                                        },
                                                }}
                                            />
                                        ) : (
                                            <code
                                                {...rest}
                                                className={className}
                                            >
                                                {children}
                                            </code>
                                        );
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
