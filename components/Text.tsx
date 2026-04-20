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
        <span className="about-text-p m-0 block text-start font-degular text-xs leading-4 text-neutral-600 dark:text-neutral-350 lg:font-medium">
            {Parse(children)}
        </span>
    );
}

export function TextParagraphSub({ children }: { children: string }) {
    return (
        <span className="about-text-p m-0 block text-start font-degular text-xs font-semibold leading-[1.15] text-neutral-500">
            {Parse(children)}
        </span>
    );
}
