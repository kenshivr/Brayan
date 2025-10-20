import { useState } from "react";
import cn from "@src/services/clsx";

import lookUp from "@public/lookUp.png";
import AngrySit from "@public/angrySit.png";
import jumpHappy from "@public/jumpHappy.png";
import hoddie3D from "@public/hoddie3D.png";
import drink3D from "@public/drink3D.png";
import drinkHappy from "@public/drinkHappy.png";

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
    title: "¿Qué es esta página?",
    subTitle: "Presentación",
    content: `
      Bienvenido a mi página web personal. Este espacio está diseñado para presentarme profesionalmente,
      mostrar mis habilidades como desarrollador y ofrecerte una experiencia interactiva para que conozcas
      lo que puedo crear.
    `,
  },
  {
    id: 2,
    image: AngrySit,
    title: "¿Quién soy?",
    subTitle: "Sobre mí",
    content: `
      Mi nombre es brayan vidal romero y soy un desarrollador full stack con experiencia en la creación de aplicaciones web
      completas, desde la base de datos hasta la interfaz de usuario.
    `,
  },
  {
    id: 3,
    image: jumpHappy,
    title: "¿Qué hago?",
    subTitle: "Habilidades",
    content: `
      Me dedico al desarrollo de software utilizando tecnologías como JavaScript, TypeScript, React, Node, Express,
      PostgreSQL, MongoDB, MySql y más.
    `,
  },
  {
    id: 4,
    image: hoddie3D,
    title: "¿Cuál es el objetivo?",
    subTitle: "Propósito",
    content: `
      Esta página tiene como objetivo mostrar una parte de mi trabajo y habilidades. Aquí puedes interactuar con
      diferentes componentes y explorar ejemplos de lo que puedo construir.
    `,
  },
  {
    id: 5,
    image: drink3D,
    title: "¿Necesitas una web?",
    subTitle: "Para clientes",
    content: `
      Si tienes una idea, un emprendimiento o necesitas mejorar tu presencia online, puedo ayudarte a crear una solución web
      profesional, moderna y personalizada. Trabajo de forma cercana con mis clientes para transformar sus necesidades
      en productos funcionales y atractivos.
    `,
  },
  {
    id: 6,
    image: drinkHappy,
    title: "¡Explora y disfruta!",
    subTitle: "Interactividad",
    content: `
      Esta página está pensada para que no solo leas sobre mí, sino que también interactúes.
      Puedes cambiar los colores del sitio creando tu propia paleta personalizada, modificar una tabla
      (agregar, editar y eliminar información) y acceder fácilmente a mis redes sociales para contactarme.
    `,
  },
];

export default function CharactersDesktop() {
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
            {target.subTitle}
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
            {target.title}
          </h2>

          <p className="p-2 w-7/8 text-xs md:text-sm lg:text-lg">{target.content}</p>
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
                "transition-all duration-500 ease-in-out cursor-pointer",
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
