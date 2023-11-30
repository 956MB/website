import Parse from "html-react-parser";

export function TextTitle({ children }: { children: string }) {
    return (
        <a className="font-inter-bold text-[28px] mb-[10px] text-white leading-5">
            {Parse(children)}
        </a>
    );
}

export function TextTitleSub({ children }: { children: string }) {
    return (
        <a className="font-inter-bold text-base m-0 text-white text-left">
            {Parse(children)}
        </a>
    );
}

export function TextParagraph({ children }: { children: string }) {
    return (
        <a className="font-inter-medium text-[15px] leading-[1.5em] m-0 text-neutral-350 about-text-p text-left">
            {Parse(children)}
        </a>
    );
}
