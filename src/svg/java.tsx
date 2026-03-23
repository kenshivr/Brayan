export default function JavaLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/java.svg"
            alt="Java"
            className={className}
        />
    );
};