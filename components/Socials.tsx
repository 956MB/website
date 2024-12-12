import clsx from "clsx";
import { socials } from "lib/info";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Social({
    serv,
    name,
    url,
}: {
    serv: string;
    name: string;
    url: string;
}) {
    return (
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className="group flex items-center justify-center whitespace-nowrap text-center no-underline"
        >
            <span className="font-ibmplex-sans-semibold text-[13px] capitalize leading-[14px] !text-white group-hover:text-white lg:text-[15px]">
                {serv}
            </span>
            <FiArrowUpRight
                size={18}
                className="ml-1 text-neutral-500 transition-transform duration-100 group-hover:-translate-y-0.5 group-hover:text-white"
            />
        </a>
    );
}

export default function Socials({ className = "" }: { className?: string }) {
    return (
        <div
            className={clsx(
                "flex w-full flex-row flex-wrap items-center justify-start gap-6 gap-y-3 text-[13px] leading-[13px] transition-all duration-75 sm:gap-6",
                className,
            )}
        >
            {React.Children.toArray(
                socials.map(({ serv, name, url }) => (
                    <Social serv={serv} name={name} url={url} />
                )),
            )}
        </div>
    );
}
