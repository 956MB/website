import clsx from "clsx";
import { socials } from "lib/info";
import React from "react";
import { FaGithub, FaReddit, FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

function socialIcon(iconType: string) {
    switch (iconType) {
        case "twitter":
            return FaXTwitter({ size: 18 });
        case "github":
            return FaGithub({ size: 18 });
        case "reddit":
            return FaReddit({ size: 18 });
        case "linktree":
            return SiLinktree({ size: 18 });
        default:
            return null;
    }
}

function Social({ serv, url }: { serv: string; url: string }) {
    // prettier-ignore
    return (
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className="group flex items-center justify-center whitespace-nowrap text-center no-underline"
        >
            <div
                className={clsx(
                    "mr-1 flex h-6 w-6 items-center justify-center",
                    (serv === "x" || serv === "linktree") && "mr-[2px]",
                )}
            >
                <div
                    className={clsx(
                        "child:text-neutral-800 dark:child:text-neutral-400",
                    )}
                >
                    {!serv ? null : socialIcon(serv)}
                </div>
            </div>

            <span className="text-[14px] font-medium capitalize leading-[14px] text-neutral-600 group-hover:text-p0 dark:text-white dark:group-hover:text-o0 transition-colors duration-150 lg:text-[15px]">
                {serv}
            </span>
        </a>
    );
}

export default function Socials({
    className = "",
    isHome = true,
}: {
    isHome?: boolean;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                "flex w-full flex-row items-center justify-start gap-y-3 text-[13px] leading-[13px] transition-all duration-75 sm:gap-5",
                isHome
                    ? "flex-nowrap items-center justify-between gap-3"
                    : "flex-wrap items-center justify-start gap-3",
                className,
            )}
        >
            {React.Children.toArray(
                socials.map(({ serv, url }) => (
                    <Social serv={serv} url={url} />
                )),
            )}
        </div>
    );
}
