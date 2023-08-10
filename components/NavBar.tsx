"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VercelIcon } from "./Icons";
import { logo_s } from "lib/info";
import Image from "next/image";

const navItems = {
    "/projects": { name: "projects" },
    "/design": { name: "design" },
    "/blog/gyea-cleanup-pt1": { name: "blog" },
};

export default function Header() {
    let pathname = usePathname() || "/";
    if (pathname.includes("/blog")) {
        pathname = "/blog";
    }

    return (
        <div className={clsx("fixed z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full flex justify-center flex-wrap transition bg-black/80 backdrop-blur")}>
            <div className={clsx("flex flex-row gap-8 m-auto items-center justify-center sm:justify-start w-full px-7", pathname == "/" ? "max-w-[960px]" : "max-w-screen-2xl")}>
                <Link
                    key={"home"}
                    href={"/"}
                >
                    <Image
                         alt="logo"
                         className="w-6 h-6 object-contain cursor-pointer mt-[3px] ml-[2px]"
                         src={logo_s}
                         placeholder="blur"
                         priority
                    />
                </Link>

                {Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (
                        <Link
                            key={path}
                            href={path}
                            className={clsx(
                                "transition-all duration-100 flex align-middle justify-center items-center text-[16px] no-underline whitespace-nowrap",
                                {
                                    "text-white/[0.4]": !isActive,
                                }
                            )}
                        >
                            <span
                                className={clsx(
                                    "relative font-inter-medium text-center lowercase",
                                    pathname.includes(name) || pathname == path ? "text-white" : null
                                )}
                            >
                                {name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div className="flex flex-row flex-1 h-[55px] min-h-[55px] max-h-[55px] w-full border-t border-neutral-800 justify-center items-center text-center flex-nowrap transition bg-black/80 backdrop-blur gap-x-3 mt-auto px-[30px]">
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={"https://vercel.com/"}
                className="flex items-center text-white transition-all duration-100 mt-[1px]"
            >
                <VercelIcon />
            </a>
        </div>
    );
}
