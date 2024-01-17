"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VercelIcon } from "./Icons";
import { logo_s, copyright } from "lib/info";
import Image from "next/image";
import { socials } from "lib/info";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";

const navItems = {
	"/projects": { name: "projects" },
	"/designs": { name: "designs" },
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
    const [socialHovered, setSocialHovered] = useState<string>("");

	return (
		<div
			className={clsx(
				"relative z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full flex justify-center"
			)}
		>
			<div
				className={clsx(
					"flex flex-row gap-10 sm:gap-10 m-auto items-center justify-center w-full h-full max-w-screen-3xl mx-6 sm:mx-7 bg-black/90 backdrop-blur"
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

				<div className="flex sm:inline-flex flex-row gap-12 sm:gap-10 items-center sm:justify-center h-full sm:w-auto overflow-hidden">
					{Object.entries(navItems).map(([path, { name }], idx) => {
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
											"text-[13px] sm:text-[14px] leading-[14px] no-underline whitespace-nowrap hover:text-white",
											{
												"text-neutral-500": !isActive,
											}
										)}
									>
										<span
											className={clsx(
												"relative font-neue-haas-grotesk-medium uppercase text-center",
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

				<div className="hidden xl:inline-flex ml-auto flex-row justify-center gap-6 text-[14px] leading-[14px] transition-opacity duration-100">
                    {React.Children.toArray(
                        socials.map(({serv, name, url}) =>
                            <div
                                className={(socialHovered !== "" && socialHovered !== serv) ? "opacity-50" : ""}
                                onMouseEnter={() => setSocialHovered(serv)}
                                onMouseLeave={() => setSocialHovered("")}
                            >
                                <Social serv={serv} name={name} url={url} />
                            </div>
                        )
                    )}
				</div>
			</div>
		</div>
	);
}

export function Footer() {
	return (
		<div
			className={clsx(
				"flex flex-row flex-1 z-[55] min-h-[75px] lg:max-h-[75px] w-full justify-center max-w-4xl xl:max-w-none lg:mb-6 lg:mt-3"
			)}
		>
			<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center flex-1 min-h-[75px] lg:max-h-[75px] w-full max-w-screen-3xl mx-7 lg:mx-7 bg-black/80 backdrop-blur mt-auto pt-6 pb-3 lg:pt-0 lg:pb-0 gap-1 sm:gap-4">
				<div className="flex flex-row flex-wrap xl:hidden w-full justify-start items-center gap-6 gap-y-3 sm:gap-6 text-[13px] leading-[13px] transition-all duration-75">
                    {React.Children.toArray(
                        socials.map(({serv, name, url}) => <Social serv={serv} name={name} url={url} />)
                    )}
				</div>
				<div className="flex xl:w-full justify-end sm:justify-center items-center flex-row pb-3">
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
