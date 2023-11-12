import clsx from "clsx";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function BlogLink({ link, num }: { link: string, num: number }) {
    const [label, _link] = link.split("||");

	return (
		<div
			className={clsx(
				"flex w-full items-center justify-start content-between m-0 sm:py-[5px] pr-6",
			)}
		>

            <a
                key={_link}
                rel="noopener noreferrer"
                target="_blank"
                href={_link}
                className={clsx(
                    "flex items-center justify-left text-left text-[15px] leading-4 text-neutral-200 no-underline child:hover:text-white transition-all duration-50 gap-x-2"
                )}
            >
                <FiArrowUpRight
                    size={18}
                    className={"text-neutral-500 -ml-[3px]"}
                />
                <span
                    className={clsx("hover:underline font-inter-medium")}
                >
                    {label}
                </span>
            </a>
		</div>
	);
}
