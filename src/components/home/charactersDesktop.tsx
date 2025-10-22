import { useState } from "react";
import cn from "@src/services/clsx";

import type Card from "@src/types/card";
import { useCards } from "@src/models/cards";

import { useTranslation } from 'react-i18next';

export default function CharactersDesktop() {
  const cards = useCards();
  const { t } = useTranslation();
  const [target, setTarget] = useState<Card>(cards[0]);

  return (
    <div
      className={cn(
        "flex mb-40 mt-40",
        "mx-auto rounded-2xl relative",
        "w-5/6 h-[500px] border-5 border-solid"
      )}
      style={{ borderColor: "var(--color-firstColor)" }}
    >
      <div className="w-4/7 flex justify-center items-center overflow-hidden">
        <div
          key={target.image}
          className="absolute -bottom-40 transition-all duration-700 ease-in-out opacity-0 scale-95 animate-fade-in"
        >
          <img
            width={480}
            alt="Personaje"
            src={target.image}
            className="transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="w-3/7 flex flex-col justify-start items-start pt-6 overflow-hidden">
        <div
          key={target.id + "-text"}
          className="transition-all duration-700 ease-in-out opacity-0 scale-95 animate-fade-in"
        >
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
            {t(`cards.${target.id}.subTitle`)}
          </h4>

          <h2
            className="p-2 text-3xl"
            style={{
              background:
                "linear-gradient(to left, var(--color-secondColor), var(--color-firstColor))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {t(`cards.${target.id}.title`)}
          </h2>

          <p
            className="p-2 w-7/8 text-xs md:text-sm lg:text-lg"
          >
            {t(`cards.${target.id}.content`)}
          </p>
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
              onClick={() => setTarget(card)}
              className={cn(
                "outline-2 outline-offset-4 p-2 w-[300px] h-[300px]",
                "h-full m-2 flex justify-center items-center",
                "transition-all duration-500 ease-in-out",
                {
                  outline: isSelected,
                }
              )}
              style={{
                outlineColor: "var(--color-thirdColor)",
                boxShadow: isSelected
                  ? "inset 0px -9px 20px 0 var(--color-firstColor)"
                  : "none",
                background:
                  "linear-gradient(to bottom, var(--color-thirdColor), var(--color-fourthColor))",
              }}
            >
              <img
                alt="Personaje"
                src={card.image}
                className="h-full transition-transform duration-500 hover:scale-115"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
