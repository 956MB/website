"use client";

import { motion } from "framer-motion";
import {
    about_email,
    about_n,
    about_p,
    bio_p,
    languages_p,
    tools_p,
} from "lib/info";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { holiTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TextParagraph, TextParagraphSub } from "./Text";

export function AboutBody() {
    const markdown = String.raw`
~~~graphql
           /////////////////////////////      
         /···|/////////////////////|···|      
        |·/||/                    /||/        
      /·|  /·|                  |||/          
     |·/    |·/              /|·|/            
   /·|      /·|            /|·|/              
  ||/        |·/         /||/                 
/··|/////////|·|       /||////            //  
////////////////    /|||//|||·|        /|||/  
                  /|·|||||/  |·|    /|||/     
                /|···||/      |·|/|||/        
              /|··||/         /···/           
           /|··||/         /|||/|·|           
         /|··|/         /|||/    |·|          
       /|·|/         /|···|//////|··|         
       //            ////////////////         
~~~
`;

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            className="mr-0 mt-6 w-full max-w-2xl flex-row items-center justify-center justify-items-center text-left lg:mt-0 lg:pt-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="m-0 mb-10 flex max-w-4xl flex-col flex-wrap items-start justify-center gap-y-5 pr-0 text-left sm:gap-y-7">
                <motion.div
                    variants={itemVariants}
                    className="inline-flex flex-col items-start justify-center gap-y-5 sm:gap-y-6"
                >
                    <TextParagraph>{about_n}</TextParagraph>
                    <div className="inline-flex flex-col items-start justify-center gap-y-1">
                        <TextParagraph>{about_p}</TextParagraph>
                        <TextParagraphSub>{about_email}</TextParagraphSub>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <TextParagraph>{bio_p}</TextParagraph>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <TextParagraph>{languages_p}</TextParagraph>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <TextParagraph>{tools_p}</TextParagraph>
                </motion.div>
            </div>

            <motion.div
                variants={itemVariants}
                className="flex w-full flex-row items-center justify-center align-middle"
            >
                <div className="flex w-full flex-col items-center overflow-x-auto border-t border-dashed border-neutral-200 py-10 dark:border-neutral-800">
                    <Markdown
                        className="text-right text-sm leading-4 text-black saturate-0 dark:invert"
                        components={{
                            code(props) {
                                const { children, className, ...rest } = props;
                                const match = /language-(\w+)/.exec(
                                    className || "",
                                );
                                // prettier-ignore
                                return match ? (
                                    <SyntaxHighlighter
                                        {...rest}
                                        PreTag="div"
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
                                                fontSize: "14px",
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
                                                fontSize: "14px",
                                                lineHeight:
                                                    "1.05rem",
                                                color: "black",
                                                border: 0,
                                                borderRadius: 0,
                                                boxShadow: "none",
                                                textShadow: "none",
                                            },
                                        }}
                                    >
                                        {String(children).replace(
                                            /\n$/,
                                            "",
                                        )}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {markdown}
                    </Markdown>
                </div>
            </motion.div>
        </motion.div>
    );
}
