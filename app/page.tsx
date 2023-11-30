import { AboutBody } from "components/AboutBody";
import Image from "next/image";
import { recents_group } from "lib/designs";
import RecentRow from "components/RecentsRow";

export default async function AboutPage() {
	return (
		<section>
			<div className="relative flex flex-col sm:justify-start mx-auto items-start px-6 sm:px-7 sm:max-w-4xl gap-y-5 lg:gap-y-0 pt-12 sm:pt-16 pb-12">
                <div className="flex w-full relative justify-start items-center mb-3 sm:mb-11">
                    <div className="flex w-full h-full justify-center items-start max-h-28 rounded-lg border border-neutral-800 bg-black overflow-hidden">
                        <Image
                            alt={"banner"}
                            className={
                                "w-full h-full object-cover"
                            }
                            src={"/banner-pl.png"}
                            width={1500}
                            height={500}
                            loading="eager"
                        />

                    </div>
                    <Image
                        alt={"avatar"}
                        className={
                            "absolute object-cover z-50 w-32 sm:w-40 ml-24 sm:ml-20"
                        }
                        src={"/avatar.png"}
                        width={380}
                        height={487}
                        loading="eager"
                    />
                </div>

				<AboutBody />

                <RecentRow entry={recents_group} />
			</div>
		</section>
	);
}
