export default function SocketLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/socketdotio.svg"
            alt="Socket"
            className={className}
        />
    );
};