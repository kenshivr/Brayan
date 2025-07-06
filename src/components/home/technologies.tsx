import cn from "@src/services/clsx";
import down from "@public/winkHappyGreetings.png";
import { useRef, useEffect, useState } from "react";
import topLeftCorner from "@public/topLeftCorner.png";
import sadnessGreetings from "../../../public/sadnessGreetings.png";

import CssLogo from "@src/svg/css";
import GitLogo from "@src/svg/git";
import ViteLogo from "@src/svg/vite";
import ReactLogo from "@src/svg/react";
import TailwindLogo from "@src/svg/tailwind";
import TypescriptLogo from "@src/svg/typescript";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";

interface Card {
  id: number;
  icon: any;
  image: any;
  title: string;
  subTitle: string;
  percentage: number;
  chapter: any;
  color: string;
}

const cards: Card[] = [
  {
    id: 1,
    icon: <RiTailwindCssFill className="w-7 h-7" />,
    image: <TailwindLogo />,
    title: "Tailwind",
    subTitle: "Framework CSS",
    percentage: 80,
    chapter: sadnessGreetings,
    color: "bg-softBeige",
  },
  {
    id: 2,
    icon: <FaGitAlt className="w-7 h-7" />,
    image: <GitLogo />,
    title: "Git",
    subTitle: "Version Control",
    percentage: 70,
    chapter: topLeftCorner,
    color: "bg-blushPink",
  },
  {
    id: 3,
    icon: <FaReact className="w-7 h-7" />,
    image: <ReactLogo />,
    title: "React",
    subTitle: "Libreria JS",
    percentage: 85,
    chapter: down,
    color: "bg-boneWhite",
  },
  {
    id: 4,
    icon: <SiTypescript className="w-7 h-7" />,
    image: <TypescriptLogo />,
    title: "TypeScript",
    subTitle: "TS Language",
    percentage: 90,
    chapter: sadnessGreetings,
    color: "bg-slateGray",
  },
  {
    id: 5,
    icon: <FaCss3Alt className="w-7 h-7" />,
    image: <CssLogo />,
    title: "CSS",
    subTitle: "Stylesheets",
    percentage: 65,
    chapter: topLeftCorner,
    color: "bg-peachTint",
  },
  {
    id: 6,
    icon: <SiVite className="w-7 h-7" />,
    image: <ViteLogo />,
    title: "Vite",
    subTitle: "Vite JS",
    percentage: 75,
    chapter: down,
    color: "bg-softOrange",
  },
  {
    id: 7,
    icon: <RiTailwindCssFill className="w-7 h-7" />,
    image: <TailwindLogo />,
    title: "Tailwind",
    subTitle: "Tailwind CSS",
    percentage: 80,
    chapter: sadnessGreetings,
    color: "bg-softBeige",
  },
  {
    id: 8,
    icon: <FaGitAlt className="w-7 h-7" />,
    image: <GitLogo />,
    title: "Git",
    subTitle: "Git Control",
    percentage: 72,
    chapter: topLeftCorner,
    color: "bg-blushPink",
  },
  {
    id: 9,
    icon: <FaReact className="w-7 h-7" />,
    image: <ReactLogo />,
    title: "React",
    subTitle: "React Framework",
    percentage: 85,
    chapter: down,
    color: "bg-boneWhite",
  },
  {
    id: 10,
    icon: <SiTypescript className="w-7 h-7" />,
    image: <TypescriptLogo />,
    title: "TS",
    subTitle: "TypeScript",
    percentage: 90,
    chapter: sadnessGreetings,
    color: "bg-slateGray",
  },
  {
    id: 11,
    icon: <FaCss3Alt className="w-7 h-7" />,
    image: <CssLogo />,
    title: "CSS",
    subTitle: "CSS3",
    percentage: 68,
    chapter: topLeftCorner,
    color: "bg-peachTint",
  },
  {
    id: 12,
    icon: <SiVite className="w-7 h-7" />,
    image: <ViteLogo />,
    title: "Vite",
    subTitle: "Next-gen tooling",
    percentage: 78,
    chapter: down,
    color: "bg-softOrange",
  },
];

export default function CarouselCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const totalCards = cards.length;
  const loopedCards = [...cards, ...cards];

  // Efecto para detectar cambios en el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efecto principal para calcular la tarjeta centrada
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateCenterCard = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = windowWidth / 2; // Centro de la ventana

      const cards = container.querySelectorAll(".card");
      let minDistance = Infinity;
      let closestIndex = null;

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (closestIndex !== null) {
        setCenterIndex(closestIndex % totalCards);
      }
    };

    // Configuramos el IntersectionObserver para mayor precisión
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCenterCard();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    // Observamos todas las tarjetas
    const cards = container.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    // También actualizamos en el scroll
    container.addEventListener("scroll", updateCenterCard);

    // Actualización inicial
    updateCenterCard();

    // Limpieza
    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", updateCenterCard);
    };
  }, [windowWidth, totalCards]);

  // Efecto para el desplazamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 18,
          behavior: "smooth",
        });
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[720px] my-8 py-8 text-softBeige flex items-center overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-12 h-[740px] px-16 py-9 items-center overflow-x-auto scrollbar-hide"
      >
        {loopedCards.map((card: Card, idx) => {
          const isActive = idx % totalCards === centerIndex;
          return (
            <div
              key={`${card.id}-${idx}`}
              className={cn(
                "relative group min-w-[200px] max-w-[200px] h-[300px] cursor-pointer card",
                "transition-all duration-500 ease-in-out",
                isActive ? "scale-[1.2] z-10" : "scale-100",
                "bg-hazelBrown rounded-2xl flex flex-col justify-end items-start gap-4 pb-10 pl-5"
              )}
              style={isActive ? { boxShadow: "0 0 20px #F6E3CE" } : {}}
            >
              <div
                className={cn(
                  `${card.color}`,
                  "backgroundCard rounded-xl flex flex-col justify-start items-center pt-12",
                  "absolute bottom-14 right-0 h-full w-1/2 transition-all duration-500 ease-in-out",
                  isActive ? "h-[130%] w-[80%]" : "",
                  "overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "transition-opacity duration-300 z-10 w-full ml-2",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                >
                  <img
                    width={100}
                    height={100}
                    alt="character"
                    src={card.chapter}
                  />
                  <div className="w-2/3 mt-2 mx-auto flex items-center gap-2">
                    <div className="flex-1 h-2 bg-hazelBrown rounded-full overflow-hidden">
                      <div
                        className="h-full bg-darkBrown transition-all duration-500"
                        style={{ width: `${card.percentage}%` }}
                      />
                    </div>
                    <span className="text-charcoalBlack text-sm whitespace-nowrap">
                      {card.percentage}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 right-5">{card.image}</div>
              {card.icon}
              <span className="text-base">{card.title}</span>
              <span className="text-3xl mt-6">{card.subTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
