export default function ReactLogo({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <img
      src="/svg/reactjs-svgrepo-com.svg"
      alt="React Logo"
      className={className}
    />
  );
};