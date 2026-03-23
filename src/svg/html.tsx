export default function HtmlLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/file-type-html.svg"
            alt="HTML"
            className={className}
        />
    );
};