export default function ViteLogo({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <img
      src="/svg/vitejs-svgrepo-com.svg"
      alt="Vite Logo"
      className={className}
    />
  );
};