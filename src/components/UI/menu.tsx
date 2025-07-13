import { useState } from "react";
import cn from "@src/services/clsx";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { LiaDnaSolid } from "react-icons/lia";
import { MdOutlineMilitaryTech } from "react-icons/md";

export default function Menu({ isDesktop }: { isDesktop: boolean }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Fondo con sombra cuando el menú está abierto */}
      <div
        className={cn(
          "top-0 right-0 h-full w-[calc(100%-200px)]",
          "transition-all duration-300 transform",
          "fixed hidden sm:block z-102",
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto bg-black/40"
            : "translate-x-full opacity-0 pointer-events-none",
          isDesktop
            ? "md:block"
            : "md:hidden"
        )}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menú lateral */}
      <div
        className={cn(
          menuOpen ? "translate-x-0" : "-translate-x-full",
          isDesktop ? "" : "md:hidden",
          "text-boneWhite text-lg gap-6",
          "fixed top-0 left-0 h-full z-101 transform",
          "transition-transform duration-300",
          "bg-hazelBrown w-full sm:w-[200px] p-6 flex flex-col justify-center",
        )}
      >
        <MenuOption content="Inicio" />
        <MenuOption content="Reporte" route="report" />
        <MenuOption content="Proyectos" route="proyects" />
      </div>

      {/* Icono de menu */}
      <IoIosMenu
        onClick={() => setMenuOpen(true)}
        className={cn(
          "absolute top-2 left-4 w-8 h-8",
          "cursor-pointer text-boneWhite z-100"
        )}
      />

      {/* Icono de cerrar */}
      {menuOpen && (
        <IoMdClose
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute top-2 left-3 z-102",
            "w-8 h-8 cursor-pointer text-boneWhite"
          )}
        />
      )}

      {/* Panel izquierdo en desktop */}
      {!isDesktop && (
        <div 
          className={cn(
            'hidden md:flex flex-col gap-6',
            'items-center justify-center w-[70px]',
            'border-4 border-solid border-black',
          )}
        >
          <MdOutlineMilitaryTech className="w-8 h-8 text-white hover:text-neutralBrown cursor-pointer transition-colors duration-300" />
          <GrTechnology className="w-8 h-8 text-white hover:text-softOrange cursor-pointer transition-colors duration-300" />
          <LiaDnaSolid className="w-8 h-8 text-white hover:text-peachTint cursor-pointer transition-colors duration-300" />
        </div>
      )}
    </>
  );
}

function MenuOption({ route, content }: { route?: string; content?: string }) {
  return (
    <Link
      to={`/${route ?? ""}`}
      className={cn("text-boneWhite hover:text-softOrange")}
    >
      {content}
    </Link>
  );
}
