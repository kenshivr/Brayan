import cn from "@src/services/clsx";
import { type ReactNode } from "react";

export default function MainContainer({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-x-hidden",
        "transition-all duration-300 ease-in-out relative",
        "h-screen w-screen bg-darkBrown overflow-y-auto",
        className
      )}
    >
      {/* <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "-top-20 -left-20",
          "absolute w-40 h-40",
          "bg-[color:var(--color-boneWhite)]/60"
        )}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "bottom-40 -right-20",
          "absolute w-20 h-20",
          "bg-[color:var(--color-boneWhite)]"
        )}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "bottom-20 left-60",
          "absolute w-40 h-40",
          "bg-[color:var(--color-boneWhite)]/60"
        )}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "top-40 right-150",
          "absolute w-20 h-20",
          "bg-[color:var(--color-boneWhite)]"
        )}
      /> */}

      {children}
    </div>
  );
}
