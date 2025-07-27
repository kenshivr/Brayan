import cn from "@src/services/clsx";
import image from "@public/wink2.png";
import { type ReactNode } from "react";

export default function Hero({
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-transparent",
        "relative w-full h-auto overflow-hidden flex flex-col md:flex-row",
        className
      )}
    >

      {/* Contenido principal */}
      <div className="relative flex flex-col justify-center items-center w-full order-2 md:order-none py-6">
        <img src={image} width={200} alt="Personaje" />
        <p 
          style={{ color: "var(--color-firstColor)" }}
          className="text-5xl">Brayan Vidal</p>
        <p 
          style={{ color: "var(--color-secondColor)" }}
          className="text-5xl">Dev</p>
      </div>
      
    </div>
  );
}
