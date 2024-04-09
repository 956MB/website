import clsx from "clsx";
import { FiArrowUpRight } from "react-icons/fi";

export default function BlogLink({ link, num }: { link: string; num: number }) {
    const [label, _link] = link.split("||");

    return (
        <div
            className={clsx(
                "m-0 flex w-full content-between items-center justify-start pr-6 sm:py-[5px]",
            )}
        >
            <a
                key={_link}
                rel="noopener noreferrer"
                target="_blank"
                href={_link}
                className={clsx(
                    "justify-left duration-50 flex items-center gap-x-2 text-left text-[15px] leading-4 text-neutral-200 no-underline transition-all child:hover:text-white",
                )}
            >
                <FiArrowUpRight
                    size={18}
                    className={
                        "noselect pointer-events-none -ml-[3px] text-neutral-500"
                    }
                />
                <span
                    className={clsx(
                        "font-neue-haas-grotesk-medium hover:underline",
                    )}
                >
                    {label}
                </span>
            </a>
        </div>
    );
}
