import cn from "@src/services/clsx";
import { type ReactNode } from "react";
import image from "@public/wink.png";

export default function Hero({
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-transparent h-[1000px] relative",
        "border border-solid border-black",
        "bg-gray-100",
        "w-full flex justify-center items-center",
        className
      )}
    >

      <div
        className="rounded-full w-60 h-60 flex justify-center items-center bg-white"
        style={{ boxShadow: 'inset 10px 10px 15px rgba(200,200,200,1)' }}
      >

        <div
          className="rounded-full w-47 h-47 bg-gray-100 overflow-hidden flex justify-center items-end relative"
          style={{ boxShadow: '10px 10px 15px rgba(200,200,200,1)' }}
        >
          {/* <img
            src={image}
            alt="Personaje"
            className="w-[100%] h-[100%] object-cover absolute -bottom-6"
          /> */}
        </div>

      </div>

    </div>
  );
};