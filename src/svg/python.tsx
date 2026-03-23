export default function PythonLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/python.svg"
            alt="Python"
            className={className}
        />
    );
};