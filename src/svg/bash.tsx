export default function BashLogo({
  className = "w-28 h-28",
}: {
  className?: string;
}) {
  return (
    <img
      src="/Brayan/svg/bash-icon.svg"
      alt="Bash Logo"
      className={className}
    />
  );
};

