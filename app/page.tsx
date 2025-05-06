"use client";

import { AboutBody } from "components/AboutBody";

export default function AboutPage() {
    return (
        <section className="flex w-full flex-1 flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center gap-y-2 px-6 pb-2 pt-0 sm:justify-start sm:gap-y-0 sm:px-7 sm:pt-10 lg:gap-y-3 lg:pt-10">
                <div className="border-neutral-200 dark:border-neutral-800 md:border-l md:px-6">
                    <AboutBody />
                </div>
            </div>
        </section>
    );
}
