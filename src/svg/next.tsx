export default function NextLogo({
  className = "w-28 h-28",
}: {
  className?: string;
}) {
  return (
    <img
      src="/Brayan/svg/nextjs-icon.svg"
      alt="Next.js Logo"
      className={className}
    />
  );
};

