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
        <p className="text-5xl text-softBeige">Brayan Vidal</p>
        <p className="text-5xl text-boneWhite">Dev</p>
      </div>
      
    </div>
  );
}
