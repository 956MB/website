import ReactHtmlParser from "react-html-parser";

export function TextTitle({ children }: { children: React.ReactNode }) {
    return (
        <a className="font-inter-bold text-[28px] mb-[10px] text-white leading-5">
            {ReactHtmlParser(children)}
        </a>
    );
}

export function TextTitleSub({ children }: { children: React.ReactNode }) {
    return (
        <a className="font-inter-bold text-[15px] m-0 text-white text-left">
            {ReactHtmlParser(children)}
        </a>
    );
}

export function TextParagraph({ children }: { children: React.ReactNode }) {
    return (
        <a className="font-inter-medium text-[15px] leading-[1.4em] m-0 text-neutral-300 about-text-p text-left">
            {ReactHtmlParser(children)}
        </a>
    );
}
