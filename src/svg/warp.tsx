export default function WarpLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/warp-light.svg"
            alt="Warp"
            className={className}
        />
    );
};