export default function SpringLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/spring.svg"
            alt="Spring"
            className={className}
        />
    );
};