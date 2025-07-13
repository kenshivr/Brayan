import { useState } from "react";
import cn from "@src/services/clsx";
import Menu from "@src/components/UI/menu";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import topLeftCorner from "@public/topLeftCorner.png";

interface Proyect {
  title: string;
  image: string;
  content: string;
  year: string;
  month: string;
}

export default function Proyects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proyects: Proyect[] = [
    {
      title: `Tienda NFT'S`,
      image: topLeftCorner,
      content: `
                Tienda ficticia de NFT'S donde se aprecian
                mis habilidades front-end.
            `,
      year: "22",
      month: "Sep",
    },
    {
      title: `Tienda NFT'S`,
      image: topLeftCorner,
      content: `
                Tienda ficticia de NFT'S donde se aprecian
                mis habilidades front-end.
            `,
      year: "22",
      month: "Sep",
    },
    {
      title: `Tienda NFT'S`,
      image: topLeftCorner,
      content: `
                Tienda ficticia de NFT'S donde se aprecian
                mis habilidades front-end.
            `,
      year: "22",
      month: "Sep",
    },
    {
      title: `Tienda NFT'S`,
      image: topLeftCorner,
      content: `
                Tienda ficticia de NFT'S donde se aprecian
                mis habilidades front-end.
            `,
      year: "22",
      month: "Sep",
    },
  ];

  const handleSwipe = (direction: "back" | "next") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % proyects.length;
      } else {
        return (prevIndex - 1 + proyects.length) % proyects.length;
      }
    });
  };

  return (
    <div
      className={cn(
        "w-screen h-screen overflow-hidden",
        "flex flex-row flex-nowrap",
        "text-softBeige relative",
      )}
    >
      <Menu isDesktop={true} />

      <div
        className={cn(
          "flex transition-transform duration-500 ease-in-out",
          "w-[calc(100vw_*_" + proyects.length + ")]"
        )}
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {proyects.map((proyect, index) => (
          <div
            key={index}
            className={cn(
              "py-6 relative",
              "w-screen h-screen",
              "flex flex-shrink-0",
              "flex-col justify-between items-center",
            )}
          >
            <button
              onClick={() => handleSwipe("back")}
              className={cn(
                "transform -translate-y-1/2",
                "flex justify-center items-center",
                "absolute top-1/2 left-4 w-10 h-10",
              )}
            >
              <IoIosArrowBack className="w-5 h-5" />
            </button>

            <div>No se que poner aqui</div>

            <div 
              className={cn(
                'relative',
                'relative overflow-hidden',
                'flex w-4/6 justify-center',
              )}
              >
              <span
                className={cn(
                  "marquee marquee-left text-4xl md:text-6xl lg:text-9xl",
                )}
              >
                {"<"}
                {proyect.title.split(" ")[0]}
                {" />"}
              </span>

              <img
                alt="character"
                src={proyect.image}
                className={cn(
                  'w-[70vw] h-[70vw]',
                  'md:w-[30vw] md:h-[30vw]',
                  'object-cover z-10 relative',
                )}
              />

              <span
                className={cn(
                  "marquee marquee-right text-4xl md:text-6xl lg:text-9xl"
                )}
              >
                {"<"}
                {proyect.title.split(" ")[1]}
                {" />"}
              </span>
            </div>

            <div className="w-2/3 flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <CiCalendar className="h-10 w-10" />
                <span>{proyect.year}</span>
                <span>{proyect.month}</span>
              </div>
              <p className="text-2xl">{proyect.content}</p>
            </div>

            <button
              onClick={() => handleSwipe("next")}
              className={cn(
                "transform -translate-y-1/2",
                "flex justify-center items-center",
                "absolute top-1/2 right-4 w-10 h-10",
              )}
            >
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
