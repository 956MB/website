import { AboutBody, AboutLinks } from "components/AboutBody";
import Image from "next/image";
import { logo, whoami_h } from "../lib/info";

export default async function AboutPage() {
	return (
		<section>
			<div className="flex w-full mx-auto flex-col items-start mt-[75px] ">
				<div className="relative flex flex-col justify-center mx-auto items-start overflow-auto px-[30px] max-w-[960px] gap-y-[10px] lg:gap-y-[20px]">
                    <div className="flex relative items-center justify-center h-36 w-full px-0 bg-bottom bg-cover bg-no-repeat mb-[30px] sm:mb-0">
                        <div className="inline-flex flex-row text-center items-end gap-1 font-gyea-regular text-6xl text-white uppercase thicker-font">
                            <span className="custom-font line-clamp-2">{whoami_h[Math.floor(Math.random() * whoami_h.length)]}</span>
                        </div>
                    </div>
					<AboutBody />
                    <AboutLinks mobilePos="block"/>
				</div>
			</div>
		</section>
	);
}
