import cn from "@src/services/clsx";
import image from "@public/wink2.png";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { LiaDnaSolid } from "react-icons/lia";
import { useState, type ReactNode } from "react";
import { MdOutlineMilitaryTech } from "react-icons/md";
import ThemeToggle from "@src/components/UI/ThemeToggle";

export default function Hero({
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full h-auto overflow-hidden flex flex-col md:flex-row",
        className
      )}
    >
      {/* Fondo con sombra cuando el menú está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/25 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menú lateral para mobile */}
      <div
        className={cn(
          menuOpen ? "translate-x-0" : "-translate-x-full",
          "text-boneWhite text-lg gap-6",
          "fixed top-0 left-0 h-full z-40 transform",
          "transition-transform duration-300 md:hidden",
          "bg-hazelBrown w-full sm:w-1/3 p-6 flex flex-col justify-center"
        )}
      >
        <MenuOption content="Inicio" />
        <MenuOption content="Reporte" route="report"/>
        <MenuOption content="Proyectos" route="proyects"/>

      </div>

      {/* Contenido superior en mobile */}
      <div 
        className={cn(
          'flex md:hidden w-full order-1',
        )}
      >
        <div className="flex items-center pl-4 w-1/2 h-12">
          <IoIosMenu
            onClick={() => setMenuOpen(true)}
            className="w-8 h-8 cursor-pointer text-boneWhite z-10"
          />

          {menuOpen && (
            <IoMdClose
              onClick={() => setMenuOpen(false)}
              className={cn(
                "absolute top-3 left-3 z-50",
                "w-8 h-8 cursor-pointer text-boneWhite"
              )}
            />
          )}
        </div>

        <div className="flex flex-col gap-6 pr-4 items-end justify-center w-1/2 h-12 z-30">
          <ThemeToggle />
        </div>
      </div>

      {/* Panel izquierdo en desktop */}
      <div className="hidden md:flex flex-col gap-6 items-center justify-center w-[70px]">
        <MdOutlineMilitaryTech className="w-8 h-8 text-white hover:text-neutralBrown cursor-pointer transition-colors duration-300" />
        <GrTechnology className="w-8 h-8 text-white hover:text-softOrange cursor-pointer transition-colors duration-300" />
        <LiaDnaSolid className="w-8 h-8 text-white hover:text-peachTint cursor-pointer transition-colors duration-300" />
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col justify-center items-center w-full order-2 md:order-none py-6">
        <img src={image} width={200} alt="Personaje" />
        <p className="text-5xl text-softBeige">Brayan Vidal</p>
        <p className="text-5xl text-boneWhite">Dev</p>

        <div
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
      </div>

      {/* Panel derecho en desktop */}
      <div className="hidden md:flex flex-col items-center w-[70px]">
        <div className="flex flex-col items-end justify-center w-1/2 h-12 pt-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function MenuOption({
  route,
  content,
}: {
  route?: string;
  content?: string;
}) {
  return (
    <Link 
      to={`/${route ?? ""}`}
      className={cn(
        "text-boneWhite hover:text-softOrange"
      )}
    >
      {content}
    </Link>
  );
};