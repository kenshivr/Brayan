import run from "@public/run.png";
import cn from "@src/services/clsx";
import { GiProgression } from "react-icons/gi";

export default function CarouselCards() {
  const texts: string[] = [
    `
            Preslow: Trabaje como desarrollador de software junior
            web, desarrollando proyectos web, manteniendo sistemas ya existentes 
            en la nube, administrando y supervisando servidores asi como
            liderando un grupo de programadores para cumplir los objetivos.
        `,
    `
            MAC: Para trabajo de titulacion, creamos una pagina web
            para la facultad de estudios superiores acatlan, donde atravez
            de ella alunos y mentores podian tener, agendar y comentar las reuniones
            asi como darle seguimiento asus avances.
        `,
    `
            Pagina Personal: Asi como esta pagina sirve para darme presencia
            en internet y mostrar de lo que soy capaz, antes cree una pagina
            igual, una version menos avanzada ya que contaba con menores conocimientos
            pero me sirvio para comprender todo el flujo que implica tener una pagina
            web en internet.
        `,
  ];

  return (
    <div
      style={{ color: "var(--color-firstColor)" }}
      className={cn(
        "min-h-[800px] bg-transparent",
        "relative overflow-hidden w-full",
        "flex flex-col justify-center md:justify-center md:flex-row"
      )}
    >
      <div
        className={cn(
          "w-full md:w-1/2",
          "flex justify-center items-center relative"
        )}
      >
        <img
          width={320}
          height={320}
          alt="Personaje Corriendo"
          src={run}
          className={cn(
            "transform transition-transform duration-300",
            "group-hover:scale-150 -translate-y-4"
          )}
        />

        <span
          style={{
            color: "var(--color-firstColor)",
            backgroundColor: "var(--color-secondColor)",
          }}
          className={cn(
            "rounded-r-lg md:top-3/5",
            "absolute bottom-10 left-0 pl-20",
            "bg-peachTint w-[250px] h-[40px]",
            "items-center flex"
          )}
        >
          Software Developer
        </span>
      </div>

      <div
        className={cn("w-full md:w-1/2 flex flex-col justify-center items-end")}
      >
        <span
          style={{ color: "var(--color-secondColor)" }}
          className="text-2xl md:text-4xl pr-12"
        >
          Trayectoria
        </span>

        <h3
          style={{ color: "var(--color-firstColor)" }}
          className="text-5xl md:text-7xl mb-4 pr-12"
        >
          Profecional
        </h3>

        {texts.map((text: string) => {
          return (
            <div className="flex justify-center gap-4 mb-4 items-center">
              <GiProgression className="h-full" />
              <p
                className={cn(
                  "w-10/12 text-justify",
                  "text-xs md:text-sm lg:text-base"
                )}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
