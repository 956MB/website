import { AboutBody, AboutLinks } from "components/AboutBody";
import Image from "next/image";
import { logo, whoami_h } from "lib/info";

export default async function AboutPage() {
    return (
        <section className="sm:h-full">
            {/* <div className="flex w-full mx-auto flex-col items-center"> */}
                <div className="relative flex flex-col flex-1 sm:h-full sm:justify-center mx-auto items-start px-[30px] max-w-5xl gap-y-[10px] lg:gap-y-[20px] overflow-hidden">
                    <AboutBody />
                    <AboutLinks mobilePos="block" />
                </div>
            {/* </div> */}
        </section>
    );
}
