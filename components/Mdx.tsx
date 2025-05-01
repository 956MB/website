import clsx from "clsx";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { XLg } from "react-bootstrap-icons";
import { PortalWithState } from "react-portal";
import Tooltip from "./Tooltip";

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
                <Image key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

function MdxImage(props) {
    const { alt, ...rest } = props;

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
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
                        <div className="pointer-events-all absolute left-0 top-0 z-[99] flex h-screen w-screen flex-col bg-black/90 backdrop-blur">
                            <div className="flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start">
                                <div
                                    className={clsx(
                                        "flex w-full flex-col flex-nowrap items-center justify-center border-neutral-800 sm:border-b",
                                    )}
                                >
                                    <div className="flex min-h-[55px] w-full flex-row items-center justify-center px-2 sm:px-4">
                                        <div className="justify-left flex h-full w-full flex-row items-center sm:min-w-[100px]">
                                            <button
                                                className="group h-full px-1"
                                                onClick={closePortal}
                                            >
                                                <Tooltip
                                                    content="Close"
                                                    position={"bottom"}
                                                >
                                                    <XLg
                                                        size={18}
                                                        className="text-white"
                                                    />
                                                </Tooltip>
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="mb-[1px] mt-0 flex h-px w-full bg-neutral-800 sm:hidden" />
                                </div>
                            </div>

                            <div className="flex flex-grow items-center justify-center gap-0 overflow-hidden">
                                <Image
                                    alt={alt}
                                    className="m-0 block max-h-full max-w-full object-contain"
                                    loading="eager"
                                    unoptimized={true}
                                    {...rest}
                                />
                            </div>
                        </div>,
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
        <article className="prose prose-neutral prose-quoteless dark:prose-invert">
            <Component components={{ ...components }} />
        </article>
    );
}
