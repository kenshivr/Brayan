export default function TailwindLogo({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <img
      src="/Brayan/svg/tailwind-svgrepo-com.svg"
      alt="Tailwind Logo"
      className={className}
    />
  );
};