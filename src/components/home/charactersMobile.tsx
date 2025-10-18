import { useState } from "react";
import cn from "@src/services/clsx";

import lookUp from "@public/lookUp.png";
import AngrySit from "@public/angrySit.png";
import jumpHappy from "@public/jumpHappy.png";
import hoddie3D from "@public/hoddie3D.png";
import drink3D from "@public/drink3D.png";
import drinkHappy from "@public/drinkHappy.png";

import icon from "@public/icon.png";

interface Card {
  id: number;
  title: string;
  image: string;
  content: string;
  subTitle: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: lookUp,
    title: "¡Bienvenido!",
    content: "Introducción",
    subTitle: "Introducción",
  },
  {
    id: 2,
    image: AngrySit,
    content: "Introducción",
    subTitle: "Introducción",
    title: "¿Qué es esta pagina?",
  },
  {
    id: 3,
    image: jumpHappy,
    content: "Contenido",
    subTitle: "Contenido",
    title: "¿Que veras aqui?",
  },
  {
    id: 4,
    image: hoddie3D,
    title: "TypeScript",
    content: "TypeScript",
    subTitle: "Superset language",
  },
  {
    id: 5,
    title: "CSS",
    image: drink3D,
    content: "Style sheets",
    subTitle: "Style sheets",
  },
  {
    id: 6,
    title: "Vite",
    content: "Vite",
    image: drinkHappy,
    subTitle: "Build tool",
  },
];

export default function CharactersMobile() {
  const [target, setTarget] = useState<Card>(cards[0]);

  return (
    <div
      className={cn(
        "mx-auto rounded-2xl relative",
        "flex flex-col mb-40 mt-32 items-end",
        "w-5/6 h-[600px] border-5 border-solid",
      )}
      style={{
        borderColor: "var(--color-firstColor)",
      }}
    >
      <div 
        className="w-2/3 sm:w-full"
      >
        
        <div
          className={cn("flex flex-col justify-center items-center pt-6")}
        >
          <h4
            className="text-xs sm:text-base"
            style={{
              background:
                "linear-gradient(to right, var(--color-secondColor), var(--color-firstColor))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {target.subTitle}
          </h4>

          <h2
            style={{
              background:
                "linear-gradient(to left, var(--color-secondColor), var(--color-firstColor))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            className="p-2 text-center text-3xl sm:text-5xl"
          >
            {target.title}
          </h2>

          <p 
            className="p-2 text-base sm:text-2xl" 
          >
            {target.content}
          </p>

          <div className="flex gap-2 w-full justify-center">
            <span>
              <img alt="Icono" src={icon} className="w-[40px]" />
            </span>
            <span>
              <img alt="Icono" src={icon} className="w-[40px]" />
            </span>
            <span>
              <img alt="Icono" src={icon} className="w-[40px]" />
            </span>
          </div>
        </div>

      </div>

      <div 
        className='w-2/3'
      >
        <img 
            alt="Personaje" 
            src={target.image} 
            className="w-[270px] sm:w-[400px] absolute -bottom-22 sm:-bottom-55"
        />
      </div>

      <div
        className={cn(
          "absolute left-5 w-[80px] h-9/10 top-7",
          "flex flex-col gap-4 items-center justify-center"
        )}
      >
        {cards.map((card: Card) => {
          const isSelected = card.id === target.id;

          return (
            <div
              key={card.id}
              className={cn(
                "outline-2 outline-offset-4 p-2",
                "h-full m-2 flex justify-center items-center",
                {
                  outline: isSelected,
                }
              )}
              onClick={() => setTarget(card)}
              style={{
                outlineColor: "var(--color-thirdColor)",
                boxShadow: isSelected
                  ? "inset 0px -9px 20px 0 var(--color-firstColor)"
                  : "none",
                background:
                  "linear-gradient(to bottom, var(--color-thirdColor), var(--color-fourthColor))",
              }}
            >
              <img src={card.image} height={100} width={100} alt="Personaje" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
