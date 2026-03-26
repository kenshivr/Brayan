import cn from "@src/services/clsx";
import { useRef, useEffect, useState } from "react";

import fall3D from "@public/fall3D.webp";
import topLeft3D from "@public/topLeft3D.webp";
import peekedTop3D from "@public/peekedTop3D.webp";
import bothHands3D from "@public/bothHands3D.webp";
import inComputer3D from "@public/inComputer3D.webp";

import CssLogo from "@src/svg/css";
import BunLogo from "@src/svg/bun";
import GitLogo from "@src/svg/git";
import ViteLogo from "@src/svg/vite";
import BashLogo from "@src/svg/bash";
import NextLogo from "@src/svg/next";
import JavaLogo from "@src/svg/java";
import WarpLogo from "@src/svg/warp";
import HtmlLogo from "@src/svg/html";
import ReactLogo from "@src/svg/react";
import SpringLogo from "@src/svg/spring";
import SocketLogo from "@src/svg/socket";
import PythonLogo from "@src/svg/python";
import AngularLogo from "@src/svg/angular";
import TailwindLogo from "@src/svg/tailwind";
import TypescriptLogo from "@src/svg/typescript";

import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaJava,
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaPython,
  FaCss3Alt,
  FaAngular,
} from "react-icons/fa";

import {
  SiBun,
  SiWarp,
  SiVite,
  SiSpring,
  SiGnubash,
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";

import { Neumorphism1 } from "@src/pages/components";
import { useThemeStore } from "@src/context/themeStore";
import type { Card } from "@src/types/technologies";

const cards: Card[] = [
  {
    id: 1,
    icon: <RiTailwindCssFill className="w-7 h-7" />,
    image: <TailwindLogo />,
    title: "Tailwind",
    subTitle: "Styling framework",
    percentage: 90,
    chapter: peekedTop3D,
    color: "fourthColor",
  },
  {
    id: 2,
    icon: <FaGitAlt className="w-7 h-7" />,
    image: <GitLogo />,
    title: "Git",
    subTitle: "Version Control",
    percentage: 75,
    chapter: bothHands3D,
    color: "secondColor",
  },
  {
    id: 3,
    icon: <FaReact className="w-7 h-7" />,
    image: <ReactLogo />,
    title: "React",
    subTitle: "UI library",
    percentage: 85,
    chapter: topLeft3D,
    color: "fourthColor",
  },
  {
    id: 4,
    icon: <SiTypescript className="w-7 h-7" />,
    image: <TypescriptLogo />,
    title: "TypeScript",
    subTitle: "Superset language",
    percentage: 90,
    chapter: fall3D,
    color: "secondColor",
  },
  {
    id: 5,
    icon: <FaCss3Alt className="w-7 h-7" />,
    image: <CssLogo />,
    title: "CSS",
    subTitle: "Style sheets",
    percentage: 75,
    chapter: inComputer3D,
    color: "fourthColor",
  },
  {
    id: 6,
    icon: <SiVite className="w-7 h-7" />,
    image: <ViteLogo />,
    title: "Vite",
    subTitle: "Build tool",
    percentage: 80,
    chapter: peekedTop3D,
    color: "secondColor",
  },
  {
    id: 7,
    icon: <SiGnubash className="w-7 h-7" />,
    image: <BashLogo className="w-24 h-24" />,
    title: "Bash",
    subTitle: "Shell scripting",
    percentage: 85,
    chapter: topLeft3D,
    color: "fourthColor",
  },
  {
    id: 8,
    icon: <SiNextdotjs className="w-7 h-7" />,
    image: <NextLogo className="w-24 h-24" />,
    title: "Next",
    subTitle: "Web framework",
    percentage: 75,
    chapter: fall3D,
    color: "secondColor",
  },
  {
    id: 9,
    icon: <FaJava className="w-7 h-7" />,
    image: <JavaLogo className="w-24 h-24" />,
    title: "Java",
    subTitle: "Program. Language",
    percentage: 70,
    chapter: inComputer3D,
    color: "fourthColor",
  },
  {
    id: 10,
    icon: <SiSpring className="w-7 h-7" />,
    image: <SpringLogo className="w-24 h-24" />,
    title: "Spring",
    subTitle: "Java Framework",
    percentage: 65,
    chapter: peekedTop3D,
    color: "secondColor",
  },
  {
    id: 11,
    icon: <FaHtml5 className="w-7 h-7" />,
    image: <HtmlLogo className="w-24 h-24" />,
    title: "HTML",
    subTitle: "Markup language",
    percentage: 95,
    chapter: bothHands3D,
    color: "fourthColor",
  },
  {
    id: 12,
    icon: <FaAngular className="w-7 h-7" />,
    image: <AngularLogo className="w-24 h-24" />,
    title: "Angular",
    subTitle: "Web framework",
    percentage: 70,
    chapter: topLeft3D,
    color: "secondColor",
  },
  {
    id: 13,
    icon: <FaPython className="w-7 h-7" />,
    image: <PythonLogo className="w-24 h-24" />,
    title: "Python",
    subTitle: "Program. language",
    percentage: 85,
    chapter: fall3D,
    color: "fourthColor",
  },
  {
    id: 14,
    icon: <SiWarp className="w-7 h-7" />,
    image: <WarpLogo className="w-24 h-24" />,
    title: "Warp",
    subTitle: "Terminal",
    percentage: 85,
    chapter: inComputer3D,
    color: "secondColor",
  },
  {
    id: 15,
    icon: <SiBun className="w-7 h-7" />,
    image: <BunLogo className="w-24 h-24" />,
    title: "Bun",
    subTitle: "JS runtime",
    percentage: 80,
    chapter: peekedTop3D,
    color: "fourthColor",
  },
  {
    id: 16,
    icon: <SiSocketdotio className="w-7 h-7" />,
    image: <SocketLogo className="w-24 h-24" />,
    title: "Socket.io",
    subTitle: "Real-time library",
    percentage: 70,
    chapter: bothHands3D,
    color: "secondColor",
  },
];

export default function CarouselCards() {
  const palette = useThemeStore((state) => state.themes[state.selectedPalette]);
  const totalCards = cards.length;
  const loopedCards = [...cards, ...cards];
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [centerIndex, setCenterIndex] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const detectCenterCard = () => {
      const container = containerRef.current;
      if (!container || cardRefs.current.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closestIdx = -1;
      let closestDistance = Infinity;

      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - centerX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = idx % totalCards;
        }
      });

      setCenterIndex(closestIdx);
      animationFrameId = requestAnimationFrame(detectCenterCard);
    };

    animationFrameId = requestAnimationFrame(detectCenterCard);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        color: "var(--color-firstColor)",
      }}
      className={cn(
        "relative w-full h-[600px] pt-40",
        "flex items-center overflow-hidden bg-transparent"
      )}
    >
      <div className="flex gap-12 h-[740px] px-16 py-9 items-center animate-scroll">
        {loopedCards.map((card: Card, idx) => {
          const isActive = idx % totalCards === centerIndex;

          return (
            <Neumorphism1
              key={idx}
              ref={(el: any) => {
                cardRefs.current[idx] = el;
              }}
              className={cn(
                "relative group min-w-[200px] max-w-[200px] h-[300px]",
                "transition-transform duration-500 ease-in-out card",
                isActive ? "scale-[1.2] card-active-16" : "scale-100",
                "rounded-2xl flex flex-col justify-end items-start gap-4 pb-10 pl-5"
              )}
            >
              <div
                className={cn(
                  "backgroundCard rounded-xl flex flex-col justify-start items-center pt-12",
                  "absolute bottom-14 right-0 h-full w-1/2 transition-all duration-500 ease-in-out",
                  isActive ? "h-[130%] w-[80%]" : "",
                  "overflow-hidden"
                )}
                style={{
                  backgroundColor: palette[card.color as keyof typeof palette],
                }}
              >
                <div
                  className={cn(
                    "transition-opacity duration-300 z-10 w-full ml-4",
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
                    <div
                      className="flex-1 h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: 'var(--color-thirdColor)' }}
                    >
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${card.percentage}%`,
                          backgroundColor: 'var(--color-firstColor)',
                        }}
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
            </Neumorphism1>
          );
        })}
      </div>
    </div>
  );
};