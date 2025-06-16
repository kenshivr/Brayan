export default function TailwindLogo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
      <path
        fill="#38BDF8"
        d="M24 0C18 0 14 3 12 9c2-3 4.5-4 7.5-3.5 1.5.3 2.7 1.2 4 2.5 2 2 4 4 8.5 4 6 0 10-3 12-9-2 3-4.5 4-7.5 3.5-1.5-.3-2.7-1.2-4-2.5C30.5 2 28.5 0 24 0Zm-12 14C6 14 2 17 0 23c2-3 4.5-4 7.5-3.5 1.5.3 2.7 1.2 4 2.5 2 2 4 4 8.5 4 6 0 10-3 12-9-2 3-4.5 4-7.5 3.5-1.5-.3-2.7-1.2-4-2.5-2-2-4-4-8.5-4Z"
      />
    </svg>
  );
};