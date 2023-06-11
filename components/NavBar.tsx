"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { VercelIcon } from "./Icons";

const navItems = {
	"/": { name: "about" },
	_1: { name: "" },
	"/projects": { name: "projects" },
	_2: { name: "" },
	"/concepts": { name: "concepts" },
	_3: { name: "" },
	"/blog": { name: "blog" },
};

export default function Header() {
	let pathname = usePathname() || "/";
	if (pathname.includes("/blog/")) {
		pathname = "/blog";
	}

	return (
		<div className="fixed z-[55] h-[55px] min-h-[55px] max-h-[55px] w-full border-b border-neutral-800 flex justify-center flex-wrap transition bg-black/80 backdrop-blur">
			<div className="flex flex-row gap-4 sm:gap-7 m-auto items-center">
				{Object.entries(navItems).map(([path, { name }], i) => {
					const isActive = path === pathname;
					return path.includes("_") ? (
						<a
							key={path}
							className=" text-white/[0.20] font-ibmplex-sans-semibold text-sm no-underline whitespace-nowrap pointer-events-none select-none"
						>
							/
						</a>
					) : (
						<Link
							key={path}
							href={path}
							className={clsx(
								"transition-all duration-100 flex align-middle justify-center items-center text-[16px] no-underline whitespace-nowrap capitalize",
								{
									"text-white/[0.4]": !isActive,
								}
							)}
						>
							<span
								className={clsx(
									"relative transition-all duration-100 font-inter-semibold active:mt-[4px] text-center",
									path === pathname ? "text-white" : null
								)}
							>
								{name}
								{path === pathname ? (
									<motion.div
										className="absolute transition-all duration-100 text-white"
										layoutId="navbar"
										transition={{
											type: "spring",
											stiffness: 350,
											damping: 30,
										}}
									/>
								) : null}
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
		<div className="flex flex-row flex-1 h-[55px] min-h-[55px] max-h-[55px] w-full border-t border-neutral-800 justify-center items-center text-center flex-wrap transition bg-black/80 backdrop-blur gap-x-3 mt-auto">
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
