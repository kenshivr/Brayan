export default function ReactLogo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
      <circle cx="128" cy="128" r="16" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="16" fill="none">
        <ellipse rx="88" ry="40" transform="rotate(0 128 128)" />
        <ellipse rx="88" ry="40" transform="rotate(60 128 128)" />
        <ellipse rx="88" ry="40" transform="rotate(120 128 128)" />
      </g>
    </svg>
  );
};