import { useState, type ReactNode } from "react";
import cn from "@src/services/clsx";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RiHome9Line } from "react-icons/ri";
import { PiProjectorScreen } from "react-icons/pi";
import { TbFileHorizontal } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import ColorOrb from "../home/colorOrb";
import { themes, changeTheme } from "./palette";

interface SocialMediaInterface {
  icon: ReactNode;
  link: string;
}

type Props = {
  socialMedias: SocialMediaInterface[];
};

const socialMedias: SocialMediaInterface[] = [
  {
    icon: <RiFacebookCircleLine />,
    link: "",
  },
  {
    icon: <RxInstagramLogo />,
    link: "",
  },
  {
    icon: <RiTwitterXLine />,
    link: "",
  },
  {
    icon: <PiTiktokLogoLight />,
    link: "",
  },
  {
    icon: <FaWhatsapp />,
    link: "",
  },
  {
    icon: <FaWhatsapp />,
    link: "",
  },
];

export default function Menu({ isDesktop }: { isDesktop: boolean }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] =
    useState<keyof typeof themes>("stoneMist");

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setActiveTheme(themeName);
    changeTheme(themeName);
  };

  return (
    <div
      className={cn(
        "absolute h-full w-[80px] pt-8 z-103",
        "flex flex-col justify-start items-center"
      )}
    >
      {/* Panel izquierdo en desktop */}
      {!isDesktop && (
        <Neumorphism>
          <div className={cn("hidden md:flex flex-col gap-6 z-10")}>
            <Link to="//" className="group">
              <RiHome9Line className="w-6 h-6 text-boneWhite group-hover:text-neutralBrown transition-colors duration-300" />
            </Link>
            <Link to="/report" className="group">
              <TbFileHorizontal className="w-6 h-6 text-boneWhite group-hover:text-softOrange transition-colors duration-300" />
            </Link>
            <Link to="/proyects" className="group">
              <PiProjectorScreen className="w-6 h-6 text-boneWhite group-hover:text-peachTint transition-colors duration-300" />
            </Link>
            <Link to="/components" className="group">
              <GoPackage className="w-6 h-6 text-boneWhite group-hover:text-peachTint transition-colors duration-300" />
            </Link>
            <Link to="/components" className="group">
              <ColorOrb
                colors={["#E3E6D8", "#BAC1C5", "#ABA7A6", "#958B8C", "#7B737D"]}
                size={24}
              />
            </Link>
            <Link to="/components" className="group">
              <ColorOrb
                colors={["#BF7A8D", "#7A4CC5", "#3F458A", "#29243E", "#11121D"]}
                size={24}
              />
            </Link>
            <Link to="/components" className="group">
              <ColorOrb
                colors={["#9BA8AB", "#4A5C6A", "#253745", "#11212D", "#06141B"]}
                size={24}
              />
            </Link>
            <Link to="/components" className="group">
              <ColorOrb
                colors={["#DCE0E8", "#8EA1AE", "#6B212C", "#685652", "#27363F"]}
                size={24}
              />
            </Link>
            <Link to="/components" className="group">
              <ColorOrb
                colors={["#DED1C6", "#A77693", "#174871", "#133B5E", "#0F2D4D"]}
                size={24}
              />
            </Link>
          </div>
        </Neumorphism>
      )}

      {/* Icono de menu */}
      <IoIosMenu
        onClick={() => setMenuOpen(true)}
        className={cn(
          isDesktop ? "" : "md:hidden",
          "absolute top-2 left-4 w-8 h-8",
          "text-boneWhite z-100"
        )}
      />

      {/* Fondo con sombra cuando el menú está abierto */}
      <div
        className={cn(
          "top-0 right-0 h-full w-[calc(100%-240px)]",
          "transition-all duration-300 transform",
          "fixed hidden sm:block z-102",
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto bg-black/40"
            : "translate-x-full opacity-0 pointer-events-none",
          isDesktop ? "md:block" : "md:hidden"
        )}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menú lateral */}
      <div
        className={cn(
          menuOpen ? "translate-x-0" : "-translate-x-full",
          isDesktop ? "" : "md:hidden",
          "text-fifth-color text-lg gap-6",
          "fixed top-0 left-0 h-full z-101 transform",
          "transition-transform duration-300",
          "shadow-lg backdrop-blur-md",
          "w-full sm:w-[240px] p-6 flex flex-col justify-start overflow-y-auto"
        )}
        style={{ backgroundColor: "var(--fifth-color)" }}
      >
        <TitleMenu title="<Kenshi />" />
        <DividerHeavy />
        <CategoryMenu category="Menu" />
        <MenuOption
          content="Inicio"
          route="/"
          icon={<RiHome9Line className="w-5 h-5" />}
          activeColor={themes[activeTheme].firstColor}
        />
        <MenuOption
          content="Reporte"
          route="report"
          icon={<TbFileHorizontal className="w-5 h-5" />}
          activeColor={themes[activeTheme].firstColor}
        />
        <MenuOption
          content="Proyectos"
          route="proyects"
          icon={<PiProjectorScreen className="w-5 h-5" />}
          activeColor={themes[activeTheme].firstColor}
        />
        <MenuOption
          content="Componentes"
          route="test"
          icon={<GoPackage className="w-5 h-5" />}
          activeColor={themes[activeTheme].firstColor}
        />
        <DividerLight />
        <CategoryMenu category="Redes" />
        <SocialMediaMenu socialMedias={socialMedias} />
        <DividerLight />
        <CategoryMenu category="Colores" />
        <div
          className={cn(
            "w-full max-w-full gap-4 justify-items-start",
            "grid grid-cols-3 grid-rows-2 md:grid-cols-2 md:grid-rows-3"
          )}
        >
          <ColorOrb
            colors={Object.values(themes.stoneMist)}
            size={24}
            onClick={() => handleThemeChange("stoneMist")}
          />
          <ColorOrb
            colors={Object.values(themes.midnightRose)}
            size={24}
            onClick={() => handleThemeChange("midnightRose")}
          />
          <ColorOrb
            colors={Object.values(themes.steelDepths)}
            size={24}
            onClick={() => handleThemeChange("steelDepths")}
          />
          <ColorOrb
            colors={Object.values(themes.antiqueInk)}
            size={24}
            onClick={() => handleThemeChange("antiqueInk")}
          />
          <ColorOrb
            colors={Object.values(themes.plumOcean)}
            size={24}
            onClick={() => handleThemeChange("plumOcean")}
          />
        </div>
      </div>

      {/* Icono de cerrar */}
      {menuOpen && (
        <IoMdClose
          onClick={() => setMenuOpen(false)}
          className={cn(
            isDesktop ? "" : "md:hidden",
            "absolute top-2 left-3 z-102",
            "w-8 h-8 text-boneWhite"
          )}
        />
      )}
    </div>
  );
}

function TitleMenu({ title }: { title: string }) {
  return <span className="text-3xl text-softBeige">{title}</span>;
}

function CategoryMenu({ category }: { category: string }) {
  return (
    <span className={cn("text-boneWhite hover:text-softOrange text-[12px]")}>
      {category}
    </span>
  );
}

function MenuOption({
  icon,
  route,
  content,
  activeColor,
}: {
  route?: string;
  content?: string;
  icon?: ReactNode;
  activeColor: string;
}) {
  return (
    <div className="flex flex-row justify-start items-center gap-2">
      {icon && icon}
      <Link
        to={`/${route ?? ""}`}
        style={{ color: activeColor }}
        className="hover:text-softOrange text-lg"
      >
        {content}
      </Link>
    </div>
  );
}

export function SocialMediaMenu({ socialMedias }: Props) {
  return (
    <div
      className={cn(
        "grid gap-4",
        "grid grid-cols-2 grid-rows-3",
        "sm:grid-cols-3 sm:grid-rows-2"
      )}
    >
      {socialMedias.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
}

function DividerHeavy() {
  return (
    <div
      className={cn(
        "w-full h-[2px] my-5 rounded-full",
        "bg-gradient-to-r from-transparent via-boneWhite/30 to-transparent"
      )}
    />
  );
}

function DividerLight() {
  return (
    <div
      className={cn(
        "w-full h-px my-2 rounded-full",
        "bg-gradient-to-r from-transparent via-boneWhite/30 to-transparent"
      )}
    />
  );
}

const Neumorphism: React.FC<any> = ({
  w = 50,
  h = 450,
  children,
  className,
}) => (
  <div
    style={{
      width: `${w}px`,
      height: `${h}px`,
      backgroundColor: "#3B2F2F",
      boxShadow: `
                    20px 20px 12px rgba(0,0,0,0.5),
                    2px 2px 12px rgba(0,0,0,0.45),
                    inset 4px 4px 6px #534747
                `
        .trim()
        .replace(/\s+/g, " "),
    }}
    className={`rounded-xl justify-center items-center hidden md:flex ${className}`}
  >
    {children}
  </div>
);
