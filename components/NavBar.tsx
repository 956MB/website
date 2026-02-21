"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { copyright, license } from "lib/info";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { VercelIcon } from "./Icons";
import Socials from "./Socials";
import { ThemeToggle } from "./ThemeToggle";

const navItems: {
    [path: string]: { name: string; className?: string };
} = {
    "/": { name: "home", className: "sm:hidden" },
    "/projects": { name: "projects" },
    "/designs": { name: "designs" },
    "/neography": { name: "neography" },
    "/lightroom": { name: "lightroom" },
    "/extras": { name: "extras" },
};

const COPYRIGHT = () => {
    return (
        <span className="whitespace-nowrap font-pixel-square text-[14px] font-medium text-neutral-600 dark:text-neutral-400">
            <a
                href="/CC-BY-NC-SA-4.0"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-p0 hover:underline dark:hover:text-o0"
            >
                {`${license} ${copyright}`}
            </a>
        </span>
    );
};

const Deco = ({ children, show }: { children: string; show: boolean }) =>
    // prettier-ignore
    <span
        className={clsx(
            "mb-px text-[14px] font-mono font-medium leading-[14px] text-neutral-500 no-underline transition-all duration-150",
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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);
    const leftLinks = ["/", "/projects", "/designs"];
    const rightLinks = ["/neography", "/lightroom", "/extras"];

    const handleNavClick = (path: string) => {
        if (!scrollRef.current) return;
        if (leftLinks.includes(path)) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else if (rightLinks.includes(path)) {
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollWidth,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleNavScroll = () => {
            if (!scrollRef.current) return;

            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const isScrollable = scrollWidth > clientWidth;

            setShowRightFade(
                isScrollable && scrollLeft < scrollWidth - clientWidth - 1,
            );
            setShowLeftFade(isScrollable && scrollLeft > 0);
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            handleNavScroll();
            scrollElement.addEventListener("scroll", handleNavScroll);
            window.addEventListener("resize", handleNavScroll);

            return () => {
                scrollElement.removeEventListener("scroll", handleNavScroll);
                window.removeEventListener("resize", handleNavScroll);
            };
        }
    }, []);

    return (
        <div className="header-mask sticky top-0 z-[55] flex max-h-[75px] w-full flex-1 flex-row justify-center sm:mt-0">
            <div
                className={clsx(
                    "mx-6 flex w-full max-w-screen-lg flex-1 flex-row items-center sm:mx-7",
                )}
            >
                <div className="relative w-full">
                    <div
                        className={clsx(
                            "pointer-events-none absolute left-0 top-0 z-[60] h-full w-6 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 dark:from-black sm:hidden sm:w-12",
                            showLeftFade ? "opacity-100" : "opacity-0",
                        )}
                    />

                    <div
                        className={clsx(
                            "pointer-events-none absolute right-0 top-0 z-[60] h-full w-6 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 dark:from-black sm:hidden sm:w-12",
                            showRightFade ? "opacity-100" : "opacity-0",
                        )}
                    />

                    <div
                        ref={scrollRef}
                        className="no-scrollbar relative z-[55] flex w-full items-start justify-start overflow-x-scroll py-4"
                    >
                        <div
                            className="shrink-0 sm:hidden"
                            style={{ width: "24px" }}
                        />

                        <motion.div
                            className="inline-flex w-full flex-row items-center justify-between sm:justify-center sm:gap-x-5"
                            initial={{ opacity: 0, y: -18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="duration-50 hidden h-full items-center justify-center transition-transform hover:scale-[1.1] active:scale-100 sm:flex">
                                <Link
                                    href="/"
                                    className="flex h-10 w-10 items-center justify-center"
                                >
                                    <Image
                                        src={"/logo.png"}
                                        width={32}
                                        height={32}
                                        alt="Home"
                                        className="-ml-1.5 h-8 translate-y-[1px] rounded-[5px] object-contain invert dark:mr-0 dark:rounded-none dark:invert-0"
                                    />
                                </Link>
                            </div>
                            <div className="inline-flex w-full flex-row flex-nowrap items-start gap-x-[17px] sm:mr-auto sm:w-auto sm:items-center sm:justify-center sm:gap-x-7 sm:gap-y-6 sm:py-3">
                                {Object.entries(navItems).map(
                                    ([path, { name, className }]) => {
                                        const isActive = pathname === path;

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
                                                        onClick={() =>
                                                            handleNavClick(path)
                                                        }
                                                        className={clsx(
                                                            "whitespace-nowrap text-[14px] leading-[14px] no-underline transition-colors duration-150 hover:text-p0 dark:hover:text-o0 sm:text-[15px]",
                                                            {
                                                                "text-neutral-600 dark:text-neutral-400":
                                                                    !isActive,
                                                            },
                                                        )}
                                                    >
                                                        <span
                                                            className={clsx(
                                                                "relative text-center lowercase",
                                                                isActive
                                                                    ? "font-pixel-square font-bold text-black dark:font-semibold dark:text-white"
                                                                    : "font-pixel-square font-medium hover:font-semibold",
                                                            )}
                                                        >
                                                            {name}
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                            <div className="ml-auto hidden flex-row items-center gap-x-8 sm:flex">
                                <div className="hidden flex-1 lg:flex">
                                    <Socials isHome={true} />
                                </div>
                                <div className="hidden items-center sm:flex">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>

                        <div
                            className="shrink-0 sm:hidden"
                            style={{ width: "2.4rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div
            className={clsx(
                "z-[55] flex w-full max-w-screen-lg flex-1 flex-row justify-center lg:mt-10",
            )}
        >
            <div className="mx-6 mb-10 mt-auto flex w-full flex-1 flex-row items-center justify-center pb-14 pt-12 sm:mx-8 sm:gap-4 lg:pb-0 lg:pt-0">
                <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:items-center">
                    <div className="mb-1.5 flex items-center justify-center gap-4 sm:order-1 sm:mb-0">
                        <div className="md:hidden">
                            <ThemeToggle />
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://vercel.com/"
                                className="mt-1 flex items-center text-black transition-all duration-300 hover:rotate-180 dark:text-white"
                            >
                                <VercelIcon />
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:hidden">
                        <Socials isHome={false} />
                    </div>
                    <div className="order-2 w-full justify-center text-center sm:w-auto sm:justify-start">
                        <COPYRIGHT />
                    </div>
                </div>
            </div>
        </div>
    );
}
