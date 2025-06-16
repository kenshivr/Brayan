export default function GitLogo({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <img
      src="/svg/git-svgrepo-com.svg"
      alt="Git Logo"
      className={className}
    />
  );
};