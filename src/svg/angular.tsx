export default function AngularLogo({
    className = "w-28 h-28",
}: {
    className?: string;
}) {
    return (
        <img
            src="/Brayan/svg/angular.svg"
            alt="Angular"
            className={className}
        />
    );
};