import Parse from "html-react-parser";

export function TextTitle({ children }: { children: string }) {
    return (
        <a className="mb-[10px] text-[28px] font-bold leading-5 text-white">
            {Parse(children)}
        </a>
    );
}

export function TextTitleSub({ children }: { children: string }) {
    return (
        <a className="m-0 text-start text-base font-bold text-white">
            {Parse(children)}
        </a>
    );
}

export function TextParagraph({ children }: { children: string }) {
    return (
        <span className="about-text-p m-0 text-start text-[15px] font-normal italic leading-[1.56em] tracking-wide text-neutral-800 dark:text-neutral-300 sm:text-[16px] lg:font-medium">
            {Parse(children)}
        </span>
    );
}

export function TextParagraphSub({ children }: { children: string }) {
    return (
        <span className="about-text-p m-0 text-start text-[16px] font-medium leading-[1.56em] tracking-wide text-neutral-500">
            {Parse(children)}
        </span>
    );
}
