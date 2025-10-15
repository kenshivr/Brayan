import run from "@public/run3D.png";
import cn from "@src/services/clsx";
import { GiProgression } from "react-icons/gi";

type TimelineEntry = {
  content: string;
};

const timeline: TimelineEntry[] = [
  {
    content: `
      Preslow: Participé en el desarrollo de proyectos web, así como en el 
      mantenimiento de sistemas existentes en la nube. También estuve a cargo 
      de la administración y supervisión de servidores. Además, lideré un equipo 
      de desarrolladores para asegurar el cumplimiento de objetivos técnicos 
      y de entrega.`,
  },
  {
    content: `
      MAC: Como parte de mi trabajo de titulación, desarrollamos una página web 
      para la Facultad de Estudios Superiores Acatlán. A través de esta plataforma, 
      estudiantes y mentores podían programar, gestionar y comentar reuniones, 
      además de dar seguimiento al progreso de los proyectos académicos.`,
  },
  {
    content: `
      Página Personal: Esta página tiene como propósito fortalecer mi presencia 
      en línea y reflejar mis habilidades como desarrollador. Antes de crear esta 
      versión, desarrollé una primera iteración más sencilla, cuando aún contaba 
      con menos experiencia. Ese proyecto inicial fue fundamental para comprender 
      de forma práctica todo el proceso que conlleva diseñar, construir y desplegar 
      un sitio web en internet.`,
  },
];

export default function CarouselCards() {
  return (
    <div
      style={{ color: "var(--color-firstColor)" }}
      className={cn(
        "mt-16 md:mt-0 min-h-[600px] bg-transparent",
        "relative overflow-hidden w-full",
        "flex flex-col md:flex-row justify-center"
      )}
    >
      <div className={cn("w-full md:w-1/2 flex justify-center items-center relative")}>
        <img
          src={run}
          width={320}
          height={320}
          alt="Personaje Corriendo"
          className={cn(
            "transform transition-transform duration-300",
            "group-hover:scale-150 -translate-y-4"
          )}
        />
        <span
          style={{
            color: "var(--color-firstColor)",
            backgroundColor: "var(--color-thirdColor)",
          }}
          className={cn(
            "absolute bottom-10 left-0 pl-20",
            "w-[250px] h-[40px] bg-peachTint flex items-center rounded-r-lg md:top-3/5"
          )}
        >
          Software Developer
        </span>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-end">
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
          Profesional
        </h3>

        {timeline.map((entry, index) => (
          <div key={index} className="flex justify-center gap-4 mb-4 items-center">
            <GiProgression className="h-full shrink-0" />
            <p className="w-10/12 text-justify text-xs md:text-sm lg:text-base">
              {entry.content.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
