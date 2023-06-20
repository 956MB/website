import { AboutBody, AboutLinks } from "components/AboutBody";

export default async function AboutPage() {
	return (
		<section>
			<div className="flex w-full mx-auto flex-col items-start /*border-t border-neutral-800*/ mt-[85px] md:mt-[110px]">
				<div className="relative flex flex-col md:flex-row justify-center mx-auto items-start overflow-auto px-[30px] max-w-[1080px] gap-x-[30px] lg:gap-x-[55px]">
                    <AboutLinks mobilePos="hidden md:block"/>
					<AboutBody />
                    <AboutLinks mobilePos="block md:hidden"/>
				</div>
			</div>
		</section>
	);
}
