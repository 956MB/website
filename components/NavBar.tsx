"use client";

import clsx from "clsx";
import Image from "next/image";
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

const COPYRIGHT = () => {
    const pathname = usePathname() || "/";
    const isHome = pathname === "/";

    return (
        <span className="text-wrap text-[14px] font-medium text-neutral-600 dark:text-neutral-400">
            <a
                href="/CC-BY-NC-SA-4.0"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black hover:underline dark:hover:text-neutral-100"
            >
                {`CC-BY-NC-SA-4.0`}
                {!isHome ? <br className="block sm:hidden" /> : <span> </span>}
                {` 2025 © Alexander Bays`}
            </a>
        </span>
    );
};

const Deco = ({ children, show }: { children: string; show: boolean }) =>
    // prettier-ignore
    <span
        className={clsx(
            "mb-[2px] text-[14px] font-medium leading-[14px] text-neutral-400 no-underline transition-all duration-150",
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
    </span>;

export default function Header() {
    const pathname = usePathname() || "/";
    const theme = useTheme();

    return (
        <div
            className={clsx(
                "z-[55] mt-4 flex max-h-[75px] w-full flex-1 flex-row justify-center sm:mt-0",
            )}
        >
            <div
                className={clsx(
                    "mx-6 flex w-full flex-1 flex-row items-center sm:mx-6",
                )}
            >
                <div className="no-scrollbar relative z-[55] flex w-full items-start justify-start overflow-x-scroll py-4">
                    <div className="inline-flex w-full flex-row items-center justify-between sm:justify-center sm:gap-x-7">
                        <div className="hidden h-full items-center justify-center sm:flex">
                            <Link href="/">
                                <Image
                                    src={
                                        theme.theme === "dark"
                                            ? "/logo-small.png"
                                            : "/logo.png"
                                    }
                                    width={29}
                                    height={29}
                                    alt="Home"
                                    className="mb-[2px] mr-1 h-[29px] translate-y-[1px] rounded-[5px] object-contain dark:mr-0 dark:h-[20px] dark:rounded-none sm:h-[29px] dark:sm:h-[20px]"
                                />
                            </Link>
                        </div>
                        <div className="hidden h-[22px] self-center border-r border-neutral-200 dark:border-neutral-800 sm:block"></div>
                        <div className="inline-flex w-full flex-row flex-nowrap items-center justify-between gap-x-4 sm:mr-auto sm:w-auto sm:justify-center sm:gap-y-6 sm:py-3 lg:gap-x-7">
                            {Object.entries(navItems).map(
                                ([path, { name, className }]) => {
                                    const isActive = path === pathname;

                                    return (
                                        <div
                                            key={path}
                                            className={clsx(
                                                "group relative inline-flex h-full flex-row items-center justify-center",
                                                className,
                                            )}
                                        >
                                            <div className="relative flex h-full cursor-pointer items-center justify-center py-3 text-center align-middle sm:py-0">
                                                <Deco show={isActive}>
                                                    {"/"}
                                                </Deco>
                                                <Link
                                                    href={path}
                                                    className={clsx(
                                                        "whitespace-nowrap text-[14px] leading-[14px] no-underline transition-colors duration-150 hover:text-p0 dark:hover:text-o0 lg:text-[15px]",
                                                        {
                                                            "text-neutral-600 dark:text-neutral-400":
                                                                !isActive,
                                                        },
                                                    )}
                                                >
                                                    <span
                                                        className={clsx(
                                                            "relative text-center capitalize",
                                                            pathname.endsWith(
                                                                name,
                                                            ) ||
                                                                pathname == path
                                                                ? "font-bold text-black dark:font-semibold dark:text-white"
                                                                : "font-medium hover:font-semibold",
                                                        )}
                                                    >
                                                        {name}
                                                    </span>
                                                </Link>
                                                {pathname !== path &&
                                                    pathname.includes(path) &&
                                                    path !== "/" && (
                                                        <div className="absolute -bottom-2 left-1/2 h-[2px] w-1/3 -translate-x-1/2 transform rounded-full bg-black dark:bg-white sm:-bottom-5"></div>
                                                    )}
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                        <div className="ml-auto hidden flex-row items-center gap-x-8 sm:flex">
                            {pathname !== "/" && (
                                <div className="hidden flex-1 xl:flex">
                                    <Socials isHome={true} />
                                </div>
                            )}
                            <div className="hidden items-center md:flex">
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
    const pathname = usePathname() || "/";
    const isHome = pathname === "/";

    return (
        <div
            className={clsx(
                "z-[55] flex max-h-[75px] w-full flex-1 flex-row justify-center lg:mt-8",
            )}
        >
            <div className="mx-6 mt-auto flex min-h-[75px] w-full flex-1 flex-row items-end justify-center gap-x-3 pb-6 pt-6 sm:mx-8 sm:items-center sm:gap-4 lg:max-h-[75px] lg:pb-0 lg:pt-0">
                {!isHome ? (
                    <>
                        <div className="flex flex-1 xl:hidden">
                            <Socials isHome={false} />
                        </div>
                        <div className="flex flex-col-reverse items-end justify-center gap-4 sm:flex-row">
                            <COPYRIGHT />
                            <div className="flex items-center gap-3">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://vercel.com/"
                                    className="flex items-center text-black transition-all duration-100 dark:text-white"
                                >
                                    <VercelIcon />
                                </a>
                                <div className="md:hidden">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <div className="flex items-center gap-3">
                            <div className="md:hidden">
                                <ThemeToggle />
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://vercel.com/"
                                    className="flex items-center text-black transition-all duration-100 dark:text-white"
                                >
                                    <VercelIcon />
                                </a>
                            </div>
                        </div>
                        <COPYRIGHT />
                    </div>
                )}
            </div>
        </div>
    );
}
