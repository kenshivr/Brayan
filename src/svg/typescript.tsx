export default function TypeScriptLogo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="24" fill="#3178C6" />
      <path fill="#fff" d="M105 115h46v12h-17v41h-12v-41h-17v-12Zm60 0h40v12h-28v6h26v12h-26v7h29v13h-41v-50Z"/>
    </svg>
  );
};