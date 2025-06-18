export default function CssLogo({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <img
      src="/Brayan/public/svg/css-svgrepo-com.svg"
      alt="Css Logo"
      className={className}
    />
  );
};