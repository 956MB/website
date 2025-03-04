"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VercelIcon } from "./Icons";
import Socials from "./Socials";

const navItems = {
    "/": { name: "home" },
    "/projects": { name: "projects" },
    "/designs": { name: "design" },
    "/neography": { name: "neography" },
    "/blog": { name: "blog" },
    "/extras": { name: "extras" },
};

const COPYRIGHT = (
    <span className="font-medium whitespace-nowrap text-[15px] text-neutral-300">
        Alexander Bays © 2025
    </span>
);

const Deco = ({ children, show }: { children: string; show: boolean }) => (
    <span
        className={clsx(
            "mb-[2px] text-[14px] leading-[14px] text-neutral-400 no-underline transition-all duration-150 font-medium",
            show
                ? children === "/"
                    ? "mr-[6px]"
                    : "ml-[6px]"
                : clsx(
                    "hidden opacity-0 sm:block",
                    "group-hover:opacity-50",
                    children === "/"
                        ? "mr-0 group-hover:mr-[6px]"
                        : "ml-0 group-hover:ml-[6px]",
                ),
        )}
    >
        {children}
    </span>
);

export default function Header() {
    let pathname = usePathname() || "/";

    return (
        <div
            className={clsx(
                "z-[55] flex min-h-[75px] w-full flex-1 flex-row justify-center sm:max-h-[75px]"
            )}
        >
            <div className="mx-6 flex w-full max-w-screen-2xl flex-1 flex-row items-center sm:mx-8">
                <div className="no-scrollbar w-full relative z-[55] flex items-start justify-start overflow-x-scroll py-4 sm:border-b border-neutral-800">
                    <div className="inline-flex flex-row items-start justify-center gap-8 sm:gap-10">
                        <div className="mr-auto inline-flex flex-row flex-wrap items-center gap-x-8 lg:gap-x-7 overflow-hidden sm:w-auto sm:justify-center sm:gap-y-6 sm:py-3">
                            {Object.entries(navItems).map(([path, { name }]) => {
                                const isActive = path === pathname;

                                return (
                                    <div
                                        key={path}
                                        className="group relative inline-flex h-full flex-row items-center justify-center"
                                    >
                                        <div className="relative flex h-full cursor-pointer items-center justify-center py-3 text-center align-middle sm:py-0">
                                            <Deco show={isActive}>{"/"}</Deco>
                                            <Link
                                                href={path}
                                                className={clsx(
                                                    "whitespace-nowrap text-[14px] lg:text-[15px] leading-[14px] no-underline hover:text-[#FF8200]",
                                                    { "text-neutral-400": !isActive },
                                                )}
                                            >
                                                <span
                                                    className={clsx(
                                                        "font-medium hover:font-semibold relative text-center capitalize",
                                                        (pathname.includes(name) ||
                                                            pathname == path) &&
                                                        "text-white font-semibold",
                                                    )}
                                                >
                                                    {name}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    let pathname = usePathname() || "/";
    const isHome = pathname === "/";

    return (
        <div
            className={clsx(
                "z-[55] flex min-h-[75px] w-full flex-1 flex-row justify-center lg:mt-8 lg:max-h-[75px]"
            )}
        >
            <div className="mx-6 mt-auto flex min-h-[75px] w-full max-w-screen-2xl flex-1 flex-row items-center gap-x-3 border-t border-neutral-800 pb-6 pt-6 sm:mx-8 sm:gap-4 lg:max-h-[75px] lg:pb-0 lg:pt-0">
                {!isHome ? (
                    <>
                        <div className="flex-1">
                            <Socials />
                        </div>
                        <div className="flex flex-col-reverse items-end justify-center gap-4 sm:flex-row">
                            {COPYRIGHT}
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://vercel.com/"
                                className="flex items-center text-white transition-all duration-100"
                            >
                                <VercelIcon />
                            </a>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-row items-center gap-4">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://vercel.com/"
                            className="flex items-center text-white transition-all duration-100"
                        >
                            <VercelIcon />
                        </a>
                        {COPYRIGHT}
                    </div>
                )}
            </div>
        </div>
    );
}
