"use client";

import { AboutBody } from "components/AboutBody";

export default function AboutPage() {
    return (
        <section className="flex flex-col items-center justify-center w-full flex-1">
            <div className="flex w-full flex-col items-center gap-y-2 px-6 pb-2 sm:justify-start sm:gap-y-0 sm:px-7 pt-0 sm:pt-10 lg:pt-16 lg:gap-y-0">
                <AboutBody />
            </div>
        </section>
    );
}
