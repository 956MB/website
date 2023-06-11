import Image from "next/image";
import LinkRow from "../components/LinkRow";
import { links, logo } from "../lib/info";
import React from "react";
import AboutBody from "components/AboutBody";

export const revalidate = 60;

export default async function AboutPage() {
	return (
		<section>
			<div className="flex w-full mx-auto flex-col items-start /*border-t border-neutral-800*/ mt-[110px]">
				<div className="relative flex flex-col sm:flex-row justify-center mx-auto items-start overflow-auto px-[30px] max-w-[1080px] gap-x-[30px] lg:gap-x-[55px]">
					<div className="flex-row text-right justify-start mb-[30px]">
						<div className="block w-fit">
							<div className="block relative h-[330px] w-[275px] px-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,1.0)),url('../public/images/is-this-anything/IMG_1853_invert.png')] bg-bottom bg-cover bg-no-repeat">
								<Image
									alt="logo"
									className="absolute w-52 h-52 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] mt-[-30px] hover:mt-[-35px] transition-all duration-100 object-contain cursor-pointer"
									src={logo}
									placeholder="blur"
									priority
								/>
							</div>

							<div className="flex flex-wrap m-0 flex-col pt-[22px] w-[100%]">
								{links.map((link, i) =>
									React.Children.toArray(
										<LinkRow
											row_key={link.key}
											row_value={link.value}
											row_href={link.url}
										/>
									)
								)}
							</div>
						</div>
					</div>

					<AboutBody />
				</div>
			</div>
		</section>
	);
}
