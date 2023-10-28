import { AboutBody, AboutLinks } from "components/AboutBody";

export default async function AboutPage() {
    return (
        <section className="sm:h-full sm:pt-[75px]">
            <div className="relative flex flex-col flex-1 sm:h-full sm:justify-center mx-auto items-start px-[30px] max-w-5xl gap-y-[10px] lg:gap-y-[20px] overflow-hidden">
                <AboutBody />
                <AboutLinks mobilePos="block" />
            </div>
        </section>
    );
}
