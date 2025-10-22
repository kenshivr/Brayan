import cn from "@src/services/clsx";
import Translate from "./translate";
import { type ReactNode } from "react";
import AnimationMouse from "./animationMouse";

export default function MainContainer({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-fifthColor)",
        fontFamily: 'slabion',
      }}
      className={cn(
        "overflow-x-hidden",
        "transition-all duration-300 ease-in-out relative",
        "h-screen w-screen overflow-y-auto",
        className
      )}
    >

      <AnimationMouse />
      <Translate />

      {/* <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "-top-20 -left-20",
          "absolute w-40 h-40",
        )}
        style={{
          backgroundColor: 'var(--color-firstColor)'
        }}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "bottom-40 -right-20",
          "absolute w-20 h-20",
        )}
        style={{
          backgroundColor: 'var(--color-firstColor)'
        }}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "bottom-20 left-60",
          "absolute w-40 h-40",
        )}
        style={{
          backgroundColor: 'var(--color-firstColor)'
        }}
      />

      <div
        className={cn(
          "blur-3xl",
          "rounded-full z-0",
          "top-40 right-150",
          "absolute w-20 h-20",
        )}
        style={{
          backgroundColor: 'var(--color-firstColor)'
        }}
      /> */}

      {children}
    </div>
  );
}
