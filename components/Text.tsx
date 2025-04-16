import Parse from "html-react-parser";

export function TextTitle({ children }: { children: string }) {
    return (
        <a className="font-bold mb-[10px] text-[28px] leading-5 text-white">
            {Parse(children)}
        </a>
    );
}

export function TextTitleSub({ children }: { children: string }) {
    return (
        <a className="font-bold m-0 text-start text-base text-white">
            {Parse(children)}
        </a>
    );
}

export function TextParagraph({ children }: { children: string }) {
    return (
        <span className="about-text-p italic m-0 text-start text-[15px] font-normal lg:font-medium leading-[1.56em] tracking-wide text-neutral-800 dark:text-neutral-300 sm:text-[16px]">
            {Parse(children)}
        </span>
    );
}

export function TextParagraphSub({ children }: { children: string }) {
    return (
        <span className="font-medium about-text-p m-0 text-start text-[16px] leading-[1.56em] tracking-wide text-neutral-500">
            {Parse(children)}
        </span>
    );
}
