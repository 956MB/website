import { AboutBody } from "components/AboutBody";
import RecentRow from "components/RecentsRow";
import { recents_group } from "lib/designs";
import Image from "next/image";

export default async function AboutPage() {
    return (
        <section>
            <div className="relative mx-auto flex flex-col items-start gap-y-2 px-6 pb-12 pt-10 sm:max-w-4xl sm:justify-start sm:gap-y-8 sm:px-7 sm:pt-16 lg:gap-y-0">
                <div className="relative mb-3 flex w-full items-center justify-start sm:mb-11">
                    <div className="flex h-full max-h-28 w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-black">
                        <Image
                            alt={"banner"}
                            className={"h-full w-full object-cover"}
                            src={"/sketch-banner.png"}
                            width={1920}
                            height={384}
                            loading="eager"
                            unoptimized={true}
                        />
                    </div>
                </div>

                <AboutBody />

                <RecentRow entry={recents_group} />
            </div>
        </section>
    );
}
