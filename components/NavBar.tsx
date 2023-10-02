"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VercelIcon, XIcon } from "./Icons";
import { logo_s } from "lib/info";
import Image from "next/image";
import { socials } from "lib/info";
import { Twitch, Github, Discord } from "react-bootstrap-icons";
import { FaRedditAlien } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import React from "react";

const navItems = {
	"/projects": { name: "projects" },
	"/design": { name: "design" },
	"/blog/gyea-cleanup-pt1": { name: "blog" },
};

export default function Header() {
	let pathname = usePathname() || "/";

	const getSocial = (key: string): JSX.Element => {
		switch (key) {
			case "twitter":
				return <XIcon />;
			case "github":
				return <Github size={16} />;
			case "reddit":
				return <FaRedditAlien size={19} />;
			case "mail":
				return <BiEnvelope size={19} />;
			default:
				return <Twitch size={16} />;
		}
	};

	return (
		<div
			className={clsx(
				"relative lg:fixed z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full flex justify-center"
			)}
		>
			<div
				className={clsx(
					"flex flex-row gap-7 sm:gap-10 m-auto items-center justify-start w-full h-full max-w-screen-3xl mx-6 sm:mx-7 border-b border-neutral-800 bg-black/90 backdrop-blur"
				)}
			>
				<Link key={"home"} href={"/"}>
					<Image
						alt="logo"
						className="w-6 h-6 object-contain cursor-pointer mt-[1px] ml-[2px]"
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
								"transition-all duration-100 flex align-middle justify-center items-center text-[14px] no-underline whitespace-nowrap mt-[1px]",
								{
									"text-white/[0.4]": !isActive,
								}
							)}
						>
							<span
								className={clsx(
									"relative font-inter-semibold text-center uppercase",
									pathname.includes(name) || pathname == path
										? "text-white"
										: null
								)}
							>
								{name}
							</span>
						</Link>
					);
				})}

				<div className="hidden md:inline-flex ml-auto flex-row flex-wrap justify-center gap-3 md:-mr-[9px]">
					{socials.map((link) => {
						let socialIcn = getSocial(link.key);
						return React.Children.toArray(
							<a
								rel="noopener noreferrer"
								target="_blank"
								href={link.url}
								className={clsx(
									"flex min-w-[36px] min-h-[36px] text-center items-center justify-center text-white mt-[1px]"
								)}
							>
								{socialIcn}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export function Footer() {
	return (
        <div
			className={clsx(
				"flex flex-row flex-1 z-[55] h-[75px] min-h-[75px] max-h-[75px] w-full justify-center"
			)}
		>
            <div className="flex flex-row flex-1 h-[75px] min-h-[75px] max-h-[75px] w-full max-w-screen-3xl mx-6 sm:mx-7 border-t border-neutral-800 justify-center items-center text-center flex-nowrap bg-black/80 backdrop-blur gap-x-3 mt-auto px-[30px]">
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"https://vercel.com/"}
                    className="flex items-center text-white transition-all duration-100 mt-[1px]"
                >
                    <VercelIcon />
                </a>
            </div>
        </div>
	);
}
