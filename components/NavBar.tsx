"use client";

import clsx from "clsx";
import { copyright, logo_s, socials } from "lib/info";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { VercelIcon } from "./Icons";

const navItems = {
    "/projects": { name: "projects" },
    "/designs": { name: "designs / art" },
    "/neography": { name: "neography" },
    "/extras": { name: "other stuff" },
};

function Social({
    serv,
    name,
    url,
}: {
    serv: string;
    name: string;
    url: string;
}) {
    return (
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className={clsx(
                "flex items-center justify-center whitespace-nowrap text-center no-underline child:hover:text-white",
            )}
        >
            <span
                className={clsx(
                    "font-neue-haas-grotesk-medium text-[13px] uppercase leading-[14px] !text-white sm:text-[14px]",
                )}
            >
                {serv}
            </span>

            {
                <FiArrowUpRight
                    size={18}
                    className={clsx("ml-1 text-neutral-500")}
                />
            }
        </a>
    );
}

export default function Header() {
    let pathname = usePathname() || "/";

    return (
        <div
            className={clsx(
                "no-scrollbar relative z-[55] flex h-[75px] max-h-[75px] min-h-[75px] w-full justify-start overflow-x-scroll px-6 sm:justify-center sm:px-7",
            )}
        >
            <div
                className={clsx(
                    "m-auto inline-flex h-full flex-row items-center justify-center gap-8 bg-black/90 backdrop-blur sm:gap-10",
                )}
            >
                <div className="relative inline-flex h-full items-center justify-center">
                    <Link key={"home"} href={"/"}>
                        <Image
                            alt="logo"
                            className="ml-[2px] h-6 min-h-[24px] w-6 min-w-[24px] cursor-pointer object-contain"
                            src={logo_s}
                            placeholder="blur"
                            priority
                        />
                    </Link>
                </div>

                <div className="inline-flex h-full w-full flex-row items-center gap-9 overflow-hidden sm:w-auto sm:justify-center">
                    {Object.entries(navItems).map(([path, { name }], idx) => {
                        const isActive = path === pathname;

                        return (
                            <div
                                key={path}
                                className={clsx(
                                    "relative inline-flex h-full flex-row items-center justify-center",
                                    path.includes("/projects") && "sm:pl-10",
                                )}
                            >
                                {path.includes("/projects") && (
                                    <div className="absolute inset-y-0 left-0 my-5 w-[1px] bg-transparent sm:bg-neutral-800"></div>
                                )}

                                <div className="relative flex h-full items-center justify-center py-3 text-center align-middle">
                                    <span
                                        className={clsx(
                                            "noselect mb-[2px] mr-1 whitespace-nowrap text-[13px] leading-[14px] text-neutral-400 no-underline sm:text-[14px]",
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    >
                                        {"["}
                                    </span>
                                    <Link
                                        href={path}
                                        className={clsx(
                                            "whitespace-nowrap text-[13px] leading-[14px] no-underline hover:text-white sm:text-[14px]",
                                            {
                                                "text-neutral-500": !isActive,
                                            },
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                "font-neue-haas-grotesk-medium relative text-center uppercase",
                                                (pathname.includes(name) ||
                                                    pathname == path) &&
                                                    "text-white",
                                            )}
                                        >
                                            {name}
                                        </span>
                                    </Link>
                                    <span
                                        className={clsx(
                                            "noselect mb-[2px] ml-1 whitespace-nowrap text-[13px] leading-[14px] text-neutral-400 no-underline sm:text-[14px]",
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    >
                                        {"]"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    let pathname = usePathname() || "/";

    return (
        <div
            className={clsx(
                "z-[55] flex min-h-[75px] w-full flex-1 flex-row justify-center lg:mb-6 lg:mt-8 lg:max-h-[75px]",
                pathname === "/" ? "max-w-4xl" : "max-w-none",
            )}
        >
            <div className="mx-7 mt-auto flex min-h-[75px] w-full max-w-screen-2xl flex-1 flex-row items-center justify-center gap-1 bg-black/80 pb-6 pt-6 backdrop-blur sm:justify-between sm:gap-4 lg:mx-7 lg:max-h-[75px] lg:pb-0 lg:pt-0">
                <div className="flex w-full flex-row flex-wrap items-center justify-start gap-6 gap-y-3 text-[13px] leading-[13px] transition-all duration-75 sm:gap-6">
                    {React.Children.toArray(
                        socials.map(({ serv, name, url }) => (
                            <Social serv={serv} name={name} url={url} />
                        )),
                    )}
                </div>
                <div className="flex flex-row items-center justify-end">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"https://vercel.com/"}
                        className="flex items-center text-white transition-all duration-100"
                    >
                        <VercelIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}
