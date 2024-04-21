import { AboutBody } from "components/AboutBody";
import RecentRow from "components/RecentsRow";
import { recents_group } from "lib/designs";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const markdown = `
~~~python
db                  .dP'            d8'    db                                    .dP'           
db    db             dP'               88  db    db                               dP'              
                                       88                                                          
  'Yb    'Y8888888b.  'Yb   .dP' .dP'  88    'Yb    'Yb d88b d88b  'Yb.d88b d88b   'Yb   'Yb    dP'
   88       .dP'       88   88   88    88     88     88P   8Y   8b  88'   8Y   8b   88     Yb  dP  
   88     ,dP          88   Y8   Y8   .88     88     88    8P   88  88    8P   88   88      YbdP   
  .8P     88     .    .8P   'Y88P'Y88P'Y8.   .8P    .8P  bdP  bdP   88  ,dP  ,dP   .8P      .8P    
          'Yb...dP                                                  88                    dP'  b   
            '"""'                                                   88                    Y.  ,P   
                                                                   .8P                     '""'    
~~~
`;

export default async function AboutPage() {
    return (
        <section>
            <div className="relative mx-auto flex flex-col items-start gap-y-2 px-6 pb-12 pt-5 sm:max-w-4xl sm:justify-start sm:gap-y-0 sm:px-7 sm:pt-16 lg:gap-y-0">
                <div className="mb-6 hidden w-full flex-row items-center justify-center align-middle md:flex">
                    <Markdown
                        className="text-right text-[12px] leading-4 saturate-0 lg:text-[13px]"
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

                <RecentRow entry={recents_group} />
            </div>
        </section>
    );
}
