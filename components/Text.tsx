import Parse from "html-react-parser";

export function TextTitle({ children }: { children: string }) {
    return (
        <a className="font-neue-haas-grotesk-bold mb-[10px] text-[28px] leading-5 text-white">
            {Parse(children)}
        </a>
    );
}

export function TextTitleSub({ children }: { children: string }) {
    return (
        <a className="font-neue-haas-grotesk-bold m-0 text-start text-base text-white">
            {Parse(children)}
        </a>
    );
}

export function TextParagraph({ children }: { children: string }) {
    return (
        <span className="font-ibmplex-sans-medium about-text-p m-0 text-start text-[16px] leading-[1.7em] tracking-wide text-neutral-300">
            {Parse(children)}
        </span>
    );
}

export function TextParagraphSub({ children }: { children: string }) {
    return (
        <span className="font-neue-haas-grotesk-medium about-text-p m-0 text-start text-[16px] leading-[1.7em] tracking-wide text-neutral-500">
            {Parse(children)}
        </span>
    );
}
