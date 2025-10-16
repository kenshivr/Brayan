import cn from "@src/services/clsx";
import image from "@public/Down3D.png";
import { useState, type ReactNode } from "react";

import topLeft3D from "@public/topLeft3D.png";
import peekedTop3D from "@public/peekedTop3D.png";
import bothHands3D from "@public/bothHands3D.png";

interface Card {
    id: number;
    title: string;
    subTitle: string;
    image: string;
}

export default function Characters({
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    const [target, setTarget] = useState<string>('');

    const cards: Card[] = [
        {
            id: 1,
            title: "¡Bienvenido!",
            subTitle: "Introducción",
            image: topLeft3D,
        },
        {
            id: 2,
            title: "¿Qué es esta pagina?",
            subTitle: "Introducción",
            image: bothHands3D,
        },
        {
            id: 3,
            title: "¿Que veras aqui?",
            subTitle: "Contenido",
            image: peekedTop3D,
        },
        {
            id: 4,
            title: "TypeScript",
            subTitle: "Superset language",
            image: topLeft3D,
        },
        {
            id: 5,
            title: "CSS",
            subTitle: "Style sheets",
            image: bothHands3D,
        },
        {
            id: 6,
            title: "Vite",
            subTitle: "Build tool",
            image: peekedTop3D,
        },
    ];

    return (
        <div
            className={cn(
                "flex my-80",
                "mx-auto rounded-2xl relative",
                "w-5/6 h-[600px] border-5 border-solid",
                className
            )}
            style={{
                borderColor: 'var(--color-firstColor)'
            }}
        >

            <div
                className="w-1/7"
                style={{
                    backgroundImage: `linear-gradient(to top right, var(--color-firstColor), var(--color-thirdColor))`,
                }}
            >

            </div>

            <div
                className="w-4/7 flex justify-center items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom left, var(--color-firstColor), var(--color-thirdColor))`,
                }}
            >
                <img src={image} width={600} alt="Personaje" className="absolute -bottom-50" />
            </div>

            <div
                className="w-2/7"
                style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--color-firstColor), var(--color-thirdColor))`,
                }}
            >

            </div>

            <div
                className={cn(
                    'flex flex-row gap-4 items-center justify-center',
                    'absolute left-1/2 -translate-x-1/2 h-[100px] w-9/10 bottom-10',
                )}
            >
                {cards.map((card: Card) => (
                    <div className="h-full m-2 flex justify-center items-center">
                        <img src={card.image} height={100} width={100} alt="Personaje" />
                    </div>
                ))}
            </div>

        </div >
    );
}
