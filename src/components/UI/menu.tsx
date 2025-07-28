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
import { useThemeStore } from "@src/context/themeStore";

interface SocialMediaInterface {
  icon: ReactNode;
  link: string;
}

type Props = {
  socialMedias: SocialMediaInterface[];
};

const socialMedias: SocialMediaInterface[] = [
  { icon: <RiFacebookCircleLine />, link: "" },
  { icon: <RxInstagramLogo />, link: "" },
  { icon: <RiTwitterXLine />, link: "" },
  { icon: <PiTiktokLogoLight />, link: "" },
  { icon: <FaWhatsapp />, link: "" },
  { icon: <FaWhatsapp />, link: "" },
];

export default function Menu({ isDesktop }: { isDesktop: boolean }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { themes, selectedPalette, setPalette } = useThemeStore();

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setPalette(themeName);
  };

  return (
    <div
      className={cn(
        "fixed h-full w-[80px] pt-8 z-103",
        "flex flex-col justify-start items-center"
      )}
    >
      {!isDesktop && (
        <Neumorphism>
          <div className={cn("hidden md:flex flex-col gap-6 z-10")}>
            <Link to="//" className="group">
              <RiHome9Line
                style={{ color: 'var(--color-firstColor)' }} 
                className="w-6 h-6 transition-colors duration-300" 
              />
            </Link>
            <Link to="/report" className="group">
              <TbFileHorizontal
                style={{ color: 'var(--color-firstColor)' }} 
                className="w-6 h-6 transition-colors duration-300" 
              />
            </Link>
            <Link to="/proyects" className="group">
              <PiProjectorScreen
                style={{ color: 'var(--color-firstColor)' }} 
                className="w-6 h-6 transition-colors duration-300" 
              />
            </Link>
            <Link to="/components" className="group">
              <GoPackage
                style={{ color: 'var(--color-firstColor)' }} 
                className="w-6 h-6 transition-colors duration-300" 
              />
            </Link>
            {Object.entries(themes).map(([key, palette]) => (
              <ColorOrb
                key={key}
                colors={Object.values(palette)}
                size={24}
                onClick={() => handleThemeChange(key as keyof typeof themes)}
              />
            ))}
          </div>
        </Neumorphism>
      )}

      <IoIosMenu
        onClick={() => setMenuOpen(true)}
        style={{ color: 'var(--color-firstColor)' }}         
        className={cn(
          isDesktop ? "" : "md:hidden",
          "absolute top-2 left-4 w-8 h-8 z-100",
        )}
      />

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

      <div
        className={cn(
          menuOpen ? "translate-x-0" : "-translate-x-full",
          isDesktop ? "" : "md:hidden",
          "text-fifth-color text-lg gap-4",
          "fixed top-0 left-0 h-full z-101 transform",
          "transition-transform duration-300",
          "shadow-lg backdrop-blur-md",
          "pl-4 pr-4 pt-14",
          "w-full sm:w-[240px] flex flex-col justify-start overflow-y-auto"
        )}
        style={{ backgroundColor: "var(--color-fifthColor)" }}
      >
        <TitleMenu title="<Kenshi />" />
        <DividerHeavy />
        <CategoryMenu category="Menu" />
        <MenuOption
          content="Inicio"
          route="/"
          icon={<RiHome9Line className="w-5 h-5" />}
          activeColor={themes[selectedPalette].firstColor}
        />
        <MenuOption
          content="Reporte"
          route="report"
          icon={<TbFileHorizontal className="w-5 h-5" />}
          activeColor={themes[selectedPalette].firstColor}
        />
        <MenuOption
          content="Proyectos"
          route="proyects"
          icon={<PiProjectorScreen className="w-5 h-5" />}
          activeColor={themes[selectedPalette].firstColor}
        />
        <MenuOption
          content="Componentes"
          route="components"
          icon={<GoPackage className="w-5 h-5" />}
          activeColor={themes[selectedPalette].firstColor}
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
          {Object.entries(themes).map(([key, palette]) => (
            <ColorOrb
              key={key}
              colors={Object.values(palette)}
              size={24}
              onClick={() => handleThemeChange(key as keyof typeof themes)}
            />
          ))}
        </div>
      </div>

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
  return (
    <span
      className="text-3xl flex justify-center"
      style={{ color: "var(--color-firstColor)" }}
    >
      {title}
    </span>
  );
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
      className="w-full h-[3px] my-5 rounded-full"
      style={{
        backgroundImage: `linear-gradient(to right, transparent, var(--color-firstColor), transparent)`,
      }}
    />
  );
}

function DividerLight() {
  return (
    <div
      className="w-full h-px my-3 rounded-full"
      style={{
        backgroundImage: `linear-gradient(to right, transparent, var(--color-firstColor), transparent)`,
      }}
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
      backgroundColor: 'var(--color-fifthColor)',
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
