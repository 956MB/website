"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VercelIcon } from "./Icons";
import { logo_s, copyright } from "lib/info";
import Image from "next/image";
import { socials } from "lib/info";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

const navItems = {
	"/projects": { name: "projects" },
	"/designs": { name: "designs" },
	"/blog/circles-only-apparently": { name: "blog" },
	"/extras": { name: "extras" },
};

function socialMap() {
	return socials.map((link) => {
		return React.Children.toArray(
			<a
				key={link.key}
				rel="noopener noreferrer"
				target="_blank"
				href={link.url}
				className={clsx(
					"flex text-center items-center justify-left text-neutral-200 mt-[2px] no-underline whitespace-nowrap child:hover:text-white transition-all duration-50"
				)}
			>
				<span
					className={clsx("relative font-inter-semibold uppercase")}
				>
					{link.key}
				</span>
				{
					<FiArrowUpRight
						size={18}
						className={"text-neutral-500 ml-1"}
					/>
				}
			</a>
		);
	});
}

export default function Header() {
	let pathname = usePathname() || "/";

	return (
		<div
			className={clsx(
				"relative lg:fixed z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full flex justify-center"
			)}
		>
			<div
				className={clsx(
					"flex flex-row gap-6 sm:gap-10 m-auto items-center justify-start w-full h-full max-w-screen-3xl mx-6 sm:mx-7 border-b border-neutral-800 bg-black/90 backdrop-blur"
				)}
			>
                <div className="relative inline-flex justify-center items-center h-full">
                    <Link key={"home"} href={"/"}>
                        <Image
                            alt="logo"
                            className="w-6 h-6 min-w-[24px] min-h-[24px] object-contain cursor-pointer mt-[2px] ml-[2px]"
                            src={logo_s}
                            placeholder="blur"
                            priority
                        />
                    </Link>

                    {pathname === "/" && (
                        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white"></div>
                    )}
                </div>

				<div className="inline-flex flex-row gap-6 sm:gap-10 items-center justify-center h-full overflow-hidden">
					{Object.entries(navItems).map(([path, { name }]) => {
						const isActive = path === pathname;

						return (
							<div
								key={path}
								className={clsx(
									"relative inline-flex flex-row justify-center items-center h-full",
									path.includes("/extras") && "sm:pl-10"
								)}
							>
								{path.includes("/extras") && (
									<div className="absolute inset-y-0 left-0 w-[1px] my-5 bg-transparent sm:bg-neutral-800"></div>
								)}
								<div className="relative flex align-middle text-center justify-center items-center h-full">
									<Link
										href={path}
										className={clsx(
											"text-[13px] sm:text-[14px] leading-[14px] no-underline whitespace-nowrap mt-[2px] hover:text-white",
											{
												"text-neutral-500": !isActive,
											}
										)}
									>
										<span
											className={clsx(
												"relative font-inter-semibold text-center uppercase",
												(pathname.includes(name) ||
													pathname == path) &&
													"text-white font-inter-bold"
											)}
										>
											{name}
										</span>
										{(pathname.includes(name) ||
											pathname == path) && (
											<div className="absolute inset-x-0 bottom-0 h-[3px] bg-white"></div>
										)}
									</Link>
								</div>
							</div>
						);
					})}
				</div>

				<div className="hidden lg:inline-flex ml-auto flex-row justify-center gap-6 text-[14px] leading-[14px]">
					{socialMap()}
				</div>
			</div>
		</div>
	);
}

export function Footer() {
	return (
		<div
			className={clsx(
				"flex flex-row flex-1 z-[55] min-h-[75px] lg:max-h-[75px] w-full justify-center"
			)}
		>
			<div className="flex flex-col justify-center items-start sm:items-center flex-1 min-h-[75px] lg:max-h-[75px] w-full max-w-screen-3xl mx-6 lg:mx-7 border-t border-neutral-800 flex-nowrap bg-black/80 backdrop-blur mt-auto pt-6 pb-3 lg:pt-0 lg:pb-0 gap-1">
				<div className="flex flex-row lg:hidden w-full justify-start items-center gap-3  text-[13px] leading-[13px]">
					{socialMap()}
				</div>
				<div className="flex flex-row w-full text-[13px] sm:text-[14px] leading-[14px] font-inter-semibold text-left uppercase text-neutral-500">
					<div className="flex flex-col justify-center items-start w-full h-full py-4 mr-auto">
						<span>{copyright}</span>
					</div>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href={"https://vercel.com/"}
						className="flex items-center text-white transition-all duration-100 mt-[1px]"
					>
						<VercelIcon />
					</a>
					<div className="hidden sm:flex flex-col justify-center items-start w-full h-full"></div>
				</div>
			</div>
		</div>
	);
}
