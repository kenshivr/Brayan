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

export default function CharactersDesktop() {
  const [target, setTarget] = useState<Card>(cards[0]);

  return (
    <div
      className={cn(
        "flex mb-40 mt-40",
        "mx-auto rounded-2xl relative",
        "w-5/6 h-[450px] border-5 border-solid",
      )}
      style={{
        borderColor: "var(--color-firstColor)",
      }}
    >
      <div className="w-4/7 flex justify-center items-center">
        <img
          width={480}
          alt="Personaje"
          src={target.image}
          className="absolute -bottom-40"
        />
      </div>

      <div className="w-3/7 flex flex-col justify-start items-start pt-10">
        <h4
          className="p-2 text-base"
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
          className="p-2 text-3xl"
        >
          {target.title}
        </h2>

        <p className="p-2">card</p>

        <div className="flex gap-2 w-full justify-start">
          <span>
            <img src={icon} alt="Icono" className="w-[50px]" />
          </span>
          <span>
            <img alt="Icono" src={icon} className="w-[50px]" />
          </span>
          <span>
            <img alt="Icono" src={icon} className="w-[50px]" />
          </span>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-row gap-4 items-center justify-center",
          "absolute left-1/2 -translate-x-1/2 h-[100px] w-9/10 bottom-10"
        )}
      >
        {cards.map((card: Card) => {
          const isSelected = card.id === target.id;

          return (
            <div
              key={card.id}
              className={cn(
                "outline-2 outline-offset-4 p-2 w-[300px] h-[300px]",
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
              <img alt="Personaje" src={card.image} className="h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
