import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { PortalWithState } from "react-portal";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import { XLg } from "react-bootstrap-icons";

const CustomLink = (props) => {
    const href = props.href;

    if (href.startsWith("/")) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function ImageGrid({ imageUrls }) {
    return (
        <div className="image-grid">
            {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

function MdxImage(props) {
    const { alt, ...rest } = props;

    return (
        <PortalWithState
            closeOnOutsideClick
            closeOnEsc
        >
            {({ openPortal, closePortal, portal }) => (
                <React.Fragment>
                    <button onClick={openPortal}>
                        <Image
                            alt={alt}
                            loading="eager"
                            unoptimized={true}
                            {...rest}
                        />
                    </button>
                    {portal(
                        <div className="flex flex-col absolute top-0 left-0 w-screen h-screen bg-black/90 pointer-events-all z-[99] backdrop-blur">
                            <div className="flex-shrink-0 flex-grow-0 flex flex-col items-center justify-start">
                                <div
                                    className={clsx(
                                        "flex flex-col flex-nowrap w-full items-center justify-center sm:border-b border-neutral-800"
                                    )}
                                >
                                    <div className="flex flex-row items-center w-full min-h-[55px] justify-center px-2 sm:px-4">
                                        <div className="flex flex-row items-center h-full w-full justify-left sm:min-w-[100px]">
                                            <button
                                                className="h-full px-1 group"
                                                onClick={closePortal}
                                            >
                                                <Tooltip content="Close" position={"bottom"}>
                                                    <XLg size={18} className="text-white" />
                                                </Tooltip>
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="flex sm:hidden h-px w-full bg-neutral-800 mb-[1px] mt-0" />
                                </div>
                            </div>

                            <div
                                className="flex flex-grow items-center justify-center overflow-hidden gap-0"
                            >
                                <Image
                                    alt={alt}
                                    className="block max-h-full max-w-full object-contain m-0"
                                    loading="eager"
                                    unoptimized={true}
                                    {...rest}
                                />
                            </div>
                        </div>
                    )}
                </React.Fragment>
            )}
        </PortalWithState>
    );
}

const components = {
    Image: MdxImage,
    a: CustomLink,
    ImageGrid: ImageGrid,
};

interface MdxProps {
    code: string;
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <article className="prose prose-quoteless prose-neutral dark:prose-invert">
            <Component components={{ ...components }} />
        </article>
    );
}
