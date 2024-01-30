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
	"/designs": { name: "designs / art" },
	"/neography": { name: "neography" },
	"/extras": { name: "extras" },
};

function Social ({serv, name, url}: {serv: string, name: string, url: string}) {
    return (
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className={clsx(
                "flex text-center items-center justify-center no-underline whitespace-nowrap child:hover:text-white",
            )}
        >
            <span
                className={clsx(
                    "font-neue-haas-grotesk-medium uppercase !text-white text-[13px] sm:text-[14px] leading-[14px]"
                )}
            >
                {serv}
            </span>

            {
                <FiArrowUpRight
                    size={18}
                    className={clsx(
                        "text-neutral-500 ml-1"
                    )}
                />
            }
        </a>
    )
}

export default function Header() {
	let pathname = usePathname() || "/";

	return (
		<div
			className={clsx(
				"relative z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full px-6 sm:px-7 flex justify-start sm:justify-center overflow-x-scroll no-scrollbar"
			)}
		>
			<div
				className={clsx(
					"inline-flex flex-row gap-8 sm:gap-10 m-auto items-center justify-center h-full bg-black/90 backdrop-blur"
				)}
			>
				<div className="relative inline-flex justify-center items-center h-full">
					<Link key={"home"} href={"/"}>
						<Image
							alt="logo"
							className="w-6 h-6 min-w-[24px] min-h-[24px] object-contain cursor-pointer ml-[2px]"
							src={logo_s}
							placeholder="blur"
							priority
						/>
					</Link>

					{pathname === "/" && (
						<div className="absolute inset-x-0 bottom-0 h-[3px] bg-white"></div>
					)}
				</div>

				<div className="inline-flex flex-row gap-9 sm:gap-10 items-center sm:justify-center h-full w-full sm:w-auto overflow-hidden">
					{Object.entries(navItems).map(([path, { name }], idx) => {
						const isActive = path === pathname;

						return (
							<div
								key={path}
								className={clsx(
									"relative inline-flex flex-row justify-center items-center h-full",
									path.includes("/projects") && "sm:pl-10"
								)}
							>
								{path.includes("/projects") && (
									<div className="absolute inset-y-0 left-0 w-[1px] my-5 bg-transparent sm:bg-neutral-800"></div>
								)}

								<div className="relative flex align-middle text-center justify-center items-center h-full">
									<Link
										href={path}
										className={clsx(
											"text-[13px] sm:text-[14px] leading-[14px] no-underline whitespace-nowrap hover:text-white",
											{
												"text-neutral-500": !isActive,
											}
										)}
									>
										<span
											className={clsx(
												"relative font-neue-haas-grotesk-medium uppercase text-center py-3",
												(pathname.includes(name) ||
													pathname == path) && "text-white"
											)}
										>
											{name}
										</span>

										{(pathname.includes(name) ||
											pathname == path) && (
											<div className={clsx(
                                                "absolute inset-x-0 bottom-0 h-[3px] bg-white",
                                            )}></div>
										)}
									</Link>
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
				"flex flex-row flex-1 z-[55] min-h-[75px] lg:max-h-[75px] w-full justify-center lg:mb-6 lg:mt-3",
                pathname === "/" ? "max-w-4xl" : "max-w-none"
			)}
		>
			<div className="flex flex-row justify-center sm:justify-between items-center flex-1 min-h-[75px] lg:max-h-[75px] w-full max-w-screen-2xl mx-7 lg:mx-7 bg-black/80 backdrop-blur mt-auto pt-6 pb-6 lg:pt-0 lg:pb-0 gap-1 sm:gap-4">
				<div className="flex flex-row flex-wrap w-full justify-start items-center gap-6 gap-y-3 sm:gap-6 text-[13px] leading-[13px] transition-all duration-75">
                    {React.Children.toArray(
                        socials.map(({serv, name, url}) => <Social serv={serv} name={name} url={url} />)
                    )}
				</div>
				<div className="flex justify-end items-center flex-row">
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
