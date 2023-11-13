import { AboutBody, AboutLinks } from "components/AboutBody";
import Image from "next/image";

export default async function AboutPage() {
	return (
		<section className="sm:h-full pt-[50px] lg:pt-[140px] mb-[30px] sm:mb-0 lg:mb-12">
			<div className="relative flex flex-col flex-1 sm:h-full sm:justify-start mx-auto items-start px-[30px] max-w-4xl gap-y-5 lg:gap-y-12">
                <div className="flex w-full relative justify-start items-center">
                    <div className="flex w-full h-full justify-center items-center max-h-28 border border-neutral-800 bg-black overflow-hidden">
                        <Image
                            alt={"banner"}
                            className={
                                "w-full h-full object-cover scale-175 sm:scale-125"
                            }
                            src={"/banner-red.png"}
                            width={4792}
                            height={2471}
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
				{/* <AboutLinks mobilePos="block" /> */}
			</div>
		</section>
	);
}
