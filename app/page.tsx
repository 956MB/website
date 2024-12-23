import { AboutBody } from "components/AboutBody";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const markdown = String.raw`
~~~python
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

export default async function AboutPage() {
    return (
        <section>
            <div className="flex w-full flex-col items-center gap-y-2 px-6 pb-2 sm:justify-start sm:gap-y-0 sm:px-7 md:pt-16 lg:gap-y-0">
                <div className="mb-6 hidden w-full flex-row items-center justify-start align-middle md:flex">
                    <Markdown
                        className="text-right text-[11px] leading-4 saturate-0"
                        children={markdown}
                        components={{
                            code(props) {
                                const { children, className, node, ...rest } =
                                    props;
                                const match = /language-(\w+)/.exec(
                                    className || "",
                                );
                                return match ? (
                                    <SyntaxHighlighter
                                        {...rest}
                                        PreTag="div"
                                        children={String(children).replace(
                                            /\n$/,
                                            "",
                                        )}
                                        language={match[1]}
                                        style={{
                                            ...dark,
                                            'pre[class*="language-"]': {
                                                ...dark[
                                                    'pre[class*="language-"]'
                                                ],
                                                backgroundColor: "transparent",
                                                borderColor: "transparent",
                                                margin: 0,
                                                border: 0,
                                                borderRadius: 0,
                                                boxShadow: "none",
                                                textShadow: "none",
                                                padding: "0",
                                            },
                                        }}
                                    />
                                ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </div>

                <AboutBody />
            </div>
        </section>
    );
}
