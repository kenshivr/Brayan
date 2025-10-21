import { useState } from "react";
import cn from "@src/services/clsx";

import type Card from "@src/types/card";
import { useCards } from "@src/models/cards";

export default function CharactersMobile() {
  const cards = useCards();
  const [target, setTarget] = useState<Card>(cards[0]);

  return (
    <div
      className={cn(
        "mx-auto rounded-2xl relative",
        "flex flex-col mb-60 mt-32 items-end",
        "w-5/6 h-[600px] border-5 border-solid",
      )}
      style={{
        borderColor: "var(--color-firstColor)",
      }}
    >
      <div
        className="w-2/3"
      >

        <div
          key={target.id + "-text"}
          className={cn(
            "flex flex-col justify-center items-center pt-6",
            'transition-all duration-700 ease-in-out opacity-0 scale-95 animate-fade-in text-center'
          )}
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
            className="p-2 text-center text-3xl"
          >
            {target.title}
          </h2>

          <p
            className="text-base sm:text-lg p-4"
          >
            {target.content}
          </p>
        </div>

      </div>

      <div
        className='w-2/3'
      >
        <img
          key={target.id + "-image"}
          alt="Personaje"
          src={target.image}
          className={cn(
            'w-[270px] sm:w-[400px] absolute -bottom-70 sm:-bottom-80',
            'transition-all duration-700 ease-in-out opacity-0 scale-95 animate-fade-in'
          )}
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
                "outline-2 outline-offset-4 p-3",
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
              <img
                src={card.image}
                height={100}
                width={100}
                alt="Personaje"
                className="h-full transition-transform duration-1000 hover:scale-130"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
