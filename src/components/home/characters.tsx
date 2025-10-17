import cn from "@src/services/clsx";
import { useState, type ReactNode } from "react";

import Down3D from "@public/Down3D.png";
import fall3D from "@public/thinking3D.png";
import peekedTop3D from "@public/run3D.png";
import bothHands3D from "@public/bothHands3D.png";

interface Card {
    id: number;
    title: string;
    subTitle: string;
    image: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: "¡Bienvenido!",
        subTitle: "Introducción",
        image: Down3D,
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
        image: fall3D,
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

export default function Characters({
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    const [target, setTarget] = useState<Card>(cards[0]);

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
            >

            </div>

            <div
                className="w-4/7 flex justify-center items-center"
            >
                <img
                    width={600}
                    alt="Personaje"
                    src={target.image}
                    className="absolute -bottom-50"
                />
            </div>

            <div
                className="w-2/7 rounded-br-2xl rounded-tr-2xl"
            >
                <div
                    className={cn(
                        'flex flex-col justify-start items-start pt-10 gap-1',
                    )}
                >
                    <h4
                        className="border border-solid border-white text-sm"
                    >
                        {target.subTitle}
                    </h4>

                    <h2
                        className="border border-solid border-white text-3xl"
                    >
                        {target.title}
                    </h2>
                    <p>Content</p>
                    <div className="flex gap-4">
                        <span>icons</span>
                        <span>icons</span>
                        <span>icons</span>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    'flex flex-row gap-4 items-center justify-center',
                    'absolute left-1/2 -translate-x-1/2 h-[100px] w-9/10 bottom-10',
                )}
            >
                {cards.map((card: Card) => {
                    const isSelected = card.id === target.id;

                    return (
                        <div
                            key={card.id}
                            className={cn(
                                'outline-2 outline-offset-4 p-4',
                                'h-full m-2 flex justify-center items-center',
                                {
                                    'outline': isSelected,
                                }
                            )}
                            onClick={() => setTarget(card)}
                            style={{
                                outlineColor: 'var(--color-thirdColor)',
                                boxShadow: isSelected
                                    ? 'inset 0px -9px 20px 0 var(--color-firstColor)'
                                    : 'none',
                                background: 'linear-gradient(to bottom, var(--color-thirdColor), var(--color-fourthColor))',
                            }}
                        >
                            <img
                                src={card.image}
                                height={100}
                                width={100}
                                alt="Personaje"
                            />
                        </div>
                    );
                })}

            </div>

        </div >
    );
}
