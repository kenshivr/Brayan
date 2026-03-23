export default function BunLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/bun.svg"
            alt="Bun"
            className={className}
        />
    );
};