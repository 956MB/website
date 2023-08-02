import clsx from "clsx";
import Link from "next/link";

export default function BlogLink({ link, num }: { link: string, num: number }) {
    const [label, _link] = link.split("||");

	return (
		<div
			className={clsx(
				"flex w-full items-center justify-end content-between m-0",
			)}
		>
			
			<div
				className={clsx(
					"flex flex-row gap-x-3 items-start justify-start w-full"
				)}
			>
				<div className="inline-flex flex-row gap-2">
					<span
						className={clsx(
							"font-ibmplex-sans-medium text-[14px] leading-4 whitespace-nowrap text-right transition-all duration-100 text-neutral-600"
						)}
					>
						{num + "."}
					</span>
                </div>
                <Link
                    key={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={_link}
                    className="inline-block text-[15px] leading-4 mr-auto overflow-hidden overflow-ellipsis text-left transition-all duration-100 -mt-[1px]"
                >
                    <span
                        className={clsx("text-white hover:underline font-inter-medium")}
                    >
                        {label}
                    </span>
                </Link>
			</div>
		</div>
	);
}
