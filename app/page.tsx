import { AboutBody } from "components/AboutBody";

export default function AboutPage() {
    return (
        <section className="flex h-full w-full flex-col items-center justify-center px-6 pt-6 sm:px-7">
            <div className="border-neutral-200 dark:border-neutral-800 md:px-6">
                <AboutBody />
            </div>
        </section>
    );
}
