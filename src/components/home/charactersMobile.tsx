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

export default function CharactersMobile() {
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
