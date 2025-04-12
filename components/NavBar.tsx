"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VercelIcon } from "./Icons";
import Socials from "./Socials";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const navItems: {
    [path: string]: { name: string; className?: string };
} = {
    "/": { name: "home", className: "sm:hidden" },
    "/projects": { name: "projects" },
    "/designs": { name: "designs" },
    "/neography": { name: "neography" },
    "/extras": { name: "extras" },
};

const COPYRIGHT = (
    <span className="font-medium whitespace-nowrap text-[15px] text-neutral-800 dark:text-neutral-300">
        <a href="/LICENSE.md" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-neutral-100 transition-colors">Alexander Bays © 2025</a>
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
    const theme = useTheme();

    return (
        <div
            className={clsx(
                "z-[55] flex max-h-[75px] w-full flex-1 flex-row justify-center mt-4 sm:mt-0"
            )}
        >
            <div className="mx-6 flex w-full max-w-screen-2xl flex-1 flex-row items-center sm:mx-8">
                <div className="no-scrollbar w-full relative z-[55] flex items-start justify-start overflow-x-scroll py-4">
                    <div className="inline-flex flex-row items-center justify-center gap-8 sm:gap-x-7 w-full">
                        <div className="hidden sm:flex items-center justify-center h-full">
                            <Link href="/">
                                <img
                                    src={theme.theme === "dark" ? "/logo-small.png" : "/logo.png"}
                                    alt="Home"
                                    className="h-[29px] sm:h-[29px] dark:h-[20px] dark:sm:h-[20px] mr-1 dark:mr-0 object-contain translate-y-[1px] rounded-[5px] dark:rounded-none mb-[2px]"
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:block h-[22px] border-r border-neutral-200 dark:border-neutral-800 self-center"></div>
                        <div className="mr-auto inline-flex flex-row flex-wrap items-center gap-x-8 lg:gap-x-7 overflow-hidden sm:w-auto sm:justify-center sm:gap-y-6 sm:py-3">
                            {Object.entries(navItems).map(([path, { name, className }]) => {
                                const isActive = path === pathname;

                                return (
                                    <div
                                        key={path}
                                        className={clsx(
                                            "group relative inline-flex h-full flex-row items-center justify-center",
                                            className
                                        )}
                                    >
                                        <div className="relative flex h-full cursor-pointer items-center justify-center py-3 text-center align-middle sm:py-0">
                                            <Deco show={isActive}>{"/"}</Deco>
                                            <Link
                                                href={path}
                                                className={clsx(
                                                    "whitespace-nowrap text-[14px] lg:text-[15px] leading-[14px] no-underline hover:text-[#9759AE] dark:hover:text-[#FF8200]",
                                                    { "text-neutral-700 dark:text-neutral-400": !isActive },
                                                )}
                                            >
                                                <span
                                                    className={clsx(
                                                        "relative text-center capitalize",
                                                        (pathname.includes(name) ||
                                                            pathname == path) ?
                                                            "text-black dark:text-white font-bold dark:font-semibold" :
                                                            "font-medium hover:font-semibold"
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
                            <div className="flex flex-row items-center gap-x-8 ml-auto">
                                {pathname !== "/" && (
                                    <div className="hidden xl:flex flex-1">
                                        <Socials />
                                    </div>
                                )}
                                <div className="hidden md:flex items-center">
                                    <ThemeToggle />
                                </div>
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
                "z-[55] flex max-h-[75px] w-full flex-1 flex-row justify-center lg:mt-8"
            )}
        >
            <div className="mx-6 mt-auto flex min-h-[75px] w-full max-w-screen-2xl flex-1 flex-row items-center justify-center gap-x-3 pb-6 pt-6 sm:mx-8 sm:gap-4 lg:max-h-[75px] lg:pb-0 lg:pt-0">
                {!isHome ? (
                    <>
                        <div className="xl:hidden flex flex-1">
                            <Socials />
                        </div>
                        <div className="flex flex-col-reverse items-end justify-center gap-4 sm:flex-row">
                            {COPYRIGHT}
                            <div className="flex items-center gap-3">
                                <div className="md:hidden">
                                    <ThemeToggle />
                                </div>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://vercel.com/"
                                    className="flex items-center text-black dark:text-white transition-all duration-100"
                                >
                                    <VercelIcon />
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-row items-center gap-4">
                        {COPYRIGHT}
                        <div className="flex items-center gap-3">
                            <div className="md:hidden">
                                <ThemeToggle />
                            </div>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://vercel.com/"
                                className="flex items-center text-black dark:text-white transition-all duration-100"
                            >
                                <VercelIcon />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
