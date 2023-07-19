import { AboutBody, AboutLinks } from "components/AboutBody";
import Image from "next/image";
import { logo } from "../lib/info";

export default async function AboutPage() {
	return (
		<section>
			<div className="flex w-full mx-auto flex-col items-start /*border-t border-neutral-800*/ mt-[75px] ">
				<div className="relative flex flex-col justify-center mx-auto items-start overflow-auto px-[30px] max-w-[1080px] gap-x-[30px] lg:gap-x-[55px]">
                    {/* <AboutLinks mobilePos="hidden md:block"/> */}
                    <div className="flex relative items-center justify-center h-40 w-full px-0 /*bg-[linear-gradient(to_bottom,rgba(0,0,0,1.0),rgba(0,0,0,0.1),rgba(0,0,0,1.0)),url('../public/images/is-this-anything/IMG_1853_invert.png')]*/ bg-bottom bg-cover bg-no-repeat mb-[30px] sm:mb-[20px]">
                        <Image
                            alt="logo"
                            className="absolute w-40 h-40 hover:mt-[-30px] transition-all duration-100 object-contain cursor-pointer"
                            src={logo}
                            placeholder="blur"
                            priority
                        />
                    </div>
					<AboutBody />
                    <AboutLinks mobilePos="block"/>
				</div>
			</div>
		</section>
	);
}
