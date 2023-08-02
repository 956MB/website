"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VercelIcon } from "./Icons";

const navItems = {
	"/": { name: "home" },
	_1: { name: "" },
	"/projects": { name: "projects" },
	_2: { name: "" },
	"/design": { name: "design" },
	_3: { name: "" },
	"/blog/gyea-cleanup-pt1": { name: "blog" },
};

export default function Header() {
	let pathname = usePathname() || "/";
	if (pathname.includes("/blog")) {
		pathname = "/blog";
	}

	return (
		<div className={clsx("fixed z-[55] h-[55px] min-h-[55px] max-h-[55px] w-full flex justify-center flex-wrap transition bg-black/80 backdrop-blur sm:border-b border-neutral-800")}>
			<div className="flex flex-row gap-4 sm:gap-6 m-auto items-center">
				{Object.entries(navItems).map(([path, { name }], i) => {
					const isActive = path === pathname;
					return path.includes("_") ? (
						<a
							key={path}
							className=" text-white/20 font-ibmplex-sans-semibold text-sm no-underline whitespace-nowrap pointer-events-none select-none"
						>
							|
						</a>
					) : (
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
									"relative transition-all duration-100 font-inter-medium active:mt-[4px] text-center lowercase",
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
