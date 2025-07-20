import cn from "@src/services/clsx";
import { Children, type ReactNode } from "react";
import image from "@public/wink.png";

// Paleta de colores base para neumorphism
const COLORS = {
    base: '#3B2F2F',
    // base: '#E7E7E7',
    lightShadow: '#F3F9FF',
    darkShadow: '#AEAEC0',
    insetDarkShadow: 'rgba(0, 0, 0, 0.25)',
    insetLightShadow: '#FFFFFF',
    neumorphismInsetLight: 'rgba(255, 255, 255, 0.9)',
    neumorphismInsetDark: 'rgba(170, 174, 236, 0.8)',
    whiteBg: '#FFFFFF',
    grayBg: '#F3F4F6', // reemplaza gray-100 con color personalizado
};

const Neumorphism1 = () => (
    <div
        className="w-80 h-80 rounded-full"
        style={{
            backgroundColor: COLORS.base,
            boxShadow: `
        -10px -10px 30px ${COLORS.lightShadow},
        10px 10px 30px ${COLORS.darkShadow}
      `,
        }}
    />
);

const Neumorphism2 = () => (
    <div
        className="w-80 h-80 rounded-full"
        style={{
            backgroundColor: COLORS.base,
            boxShadow: `
        -10px -10px 30px ${COLORS.insetLightShadow},
        10px 10px 30px ${COLORS.darkShadow},
        inset -10px -10px 30px ${COLORS.insetDarkShadow},
        inset 10px 10px 30px ${COLORS.lightShadow}
      `,
        }}
    />
);

const Neumorphism3 = () => (
    <div
        className="w-80 h-80 rounded-xl"
        style={{
            backgroundColor: COLORS.base,
            boxShadow: `
        inset -10px -10px 25px ${COLORS.neumorphismInsetLight},
        inset 10px 10px 25px ${COLORS.neumorphismInsetDark}
      `,
        }}
    />
);

const Neumorphism4 = () => (
    <div
        className="w-80 h-80 rounded-xl"
        style={{
            backgroundColor: COLORS.base,
            boxShadow:
                `
                inset -4px -4px 6px ${COLORS.insetLightShadow},
                inset 4px 4px 6px ${COLORS.darkShadow}
            `,
        }}
    />
);

const Neumorphism5 = () => (
    <div
        className="w-80 h-80 rounded-xl"
        style={{
            backgroundColor: COLORS.base,
            boxShadow:
                `
                inset -4px -4px 6px ${COLORS.insetLightShadow},
                inset 4px 4px 6px rgba(174, 174, 192, 0.2)
            `,
        }}
    />
);

// const Neumorphism6 = ( children: any, w: string, h: string ) => (
//     <div
//         className={`w-${w} h-${h} rounded-xl`}
//         style={{
//             backgroundColor: COLORS.base,
//             boxShadow: `
//         /* sombra externa clara */
//         -8px -8px 16px rgba(255, 255, 255, 0.6),
//         /* sombra externa oscura */
//         8px 8px 16px rgba(0, 0, 0, 0.1),
//         /* sombra interna clara */
//         inset 8px 8px 16px rgba(255, 255, 255, 0.6),
//         /* sombra interna oscura */
//         inset -8px -8px 16px rgba(0, 0, 0, 0.1)
//       `.trim().replace(/\s+/g, ' ')
//         }}
//     >
//         {children}
//     </div>

// );

// import { ReactNode } from "react";

interface NeumorphismProps {
    w?: number;
    h?: number;
    className?: string;
    children?: ReactNode;
}

const Neumorphism6: React.FC<NeumorphismProps> = ({
    w,
    h,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    -8px -8px 16px rgba(255,255,255,0.6),
                    8px  8px 16px rgba(0,0,0,0.1),
                    inset 8px  8px 16px rgba(255,255,255,0.6),
                    inset -8px -8px 16px rgba(0,0,0,0.1)
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism7: React.FC<NeumorphismProps> = () => {
    const classNames = 'flex justify-center items-center';

    return (
        <div>
            <Neumorphism6 className={classNames} w={300} h={300}>
                <Neumorphism6 className={classNames} w={200} h={200}>
                    <Neumorphism6 className={classNames} w={100} h={100}>
                    </Neumorphism6>
                </Neumorphism6>
            </Neumorphism6>
        </div>
    )
};

const Neumorphism8: React.FC<NeumorphismProps> = ({
    w,
    h,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    -20px -20px 20px rgba(255,255,255,0.6),
                    10px  10px 20px rgba(174,174,192,0.4),
                    inset 4px 4px 6px #FFFFFF
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism9: React.FC<NeumorphismProps> = () => {
    const classNames = 'flex justify-center items-center';

    return (
        <div>
            <Neumorphism8 className={`${classNames} bg-red-500`} w={300} h={300}>
                <Neumorphism8 className={`${classNames} bg-blue-500`} w={200} h={200}>
                    <Neumorphism8 className={`${classNames} bg-green-500`} w={100} h={100}>
                    </Neumorphism8>
                </Neumorphism8>
            </Neumorphism8>
        </div>
    )
};

// const Neumorphism10: React.FC<NeumorphismProps> = ({
//     w = 300,
//     h = 300,
//     children,
//     className,
// }) => (
//     <div
//         style={{
//             width: `${w}px`,
//             height: `${h}px`,
//             backgroundColor: COLORS.base,
//             boxShadow:
//                 `
//                     28px 28px 20px rgba(13,39,80,0.5),
//                     10px 10px 20px rgba(255,255,255,0.45),
//                     inset 4px 4px 6px #FFFFFF
//                 `
//                     .trim()
//                     .replace(/\s+/g, " ")
//         }}
//         className={`rounded-xl ${className}`}
//     >
//         {children}
//     </div>
// );

const Neumorphism10: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    28px 28px 20px rgba(0,0,0,0.5),
                    10px 10px 20px rgba(0,0,0,0.45),
                    inset 4px 4px 6px #534747
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism11: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    28px 28px 50px rgba(13,39,80,0.16),
                    -23px -23px 45px rgba(255,255,255,1),
                    inset -31px -31px 43px rgba(255,255,255,0.64),
                    inset 26px 26px 48px rgba(13,39,80,0.16)
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism12: React.FC<NeumorphismProps> = ({
    w = 180,
    h = 180,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    28px 28px 50px rgba(13,39,80,0.16),
                    -23px -23px 45px rgba(255,255,255,1)
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism13: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    inset -31px -31px 43px rgba(255,255,255,0.64),
                    inset 26px 26px 48px rgba(13,39,80,0.16)
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism14: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow:
                `
                    inset -31px -31px 43px rgba(255,255,255,0.64),
                    inset 26px 26px 48px rgba(13,39,80,0.16)
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

// const Neumorphism15: React.FC<NeumorphismProps> = ({
//     w = 300,
//     h = 300,
//     children,
//     className,
// }) => (
//     <div
//         style={{
//             width: `${w}px`,
//             height: `${h}px`,
//             backgroundColor: COLORS.base,
//             boxShadow:
//                 `
//                     19px 27px 150px 7px srgba(155, 45, 193, 0.5),
//                     -91px -93px 250px -62px rgba(66, 255, 123, 0.92),
//                     86px -61px 107px -66px rgba(18, 220, 158, 0.73),
//                     -85px 1px 133px -42px rgba(215, 255, 100, 1),
//                     inset 0px 4px 204px 0px rgba(0, 0, 0, 0.20),
//                     0px 28px 133px 0px rgba(255, 122, 78, 0.35)
//                 `
//                     .trim()
//                     .replace(/\s+/g, " ")
//         }}
//         className={`rounded-xl ${className}`}
//     >
//         {children}
//     </div>
// );

const Neumorphism15: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className,
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow: `
        /* 1ª sombra (pink) */
        19px 27px 150px 7px rgba(155, 45, 193, 0.5),
        /* 2ª sombra (cyan) */
        -91px -93px 250px -62px rgba(66, 255, 123, 0.92),
        /* 3ª sombra (green) */
        86px -61px 107px -66px rgba(18, 220, 158, 0.73),
        /* 4ª sombra (yellow) */
        -85px 1px 133px -42px rgba(215, 255, 100, 1),
        /* inner shadow */
        inset 0px 4px 204px 0px rgba(0, 0, 0, 0.2),
        /* 5ª sombra (pink glow) */
        0px 28px 133px 0px rgba(255, 120, 174, 0.35)
      `
                .trim()
                .replace(/\s+/g, " "),
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

// const Neumorphism16: React.FC<NeumorphismProps> = ({
//     w = 300,
//     h = 300,
//     children,
//     className,
// }) => (
//     <div
//         style={{
//             width: `${w}px`,
//             height: `${h}px`,
//             backgroundColor: COLORS.base,
//             boxShadow: 
//                 `
//                     -12px -12px 35px rgba(255, 255, 255, 1),
//                     inset -12px -12px 35px rgba(255, 255, 255, 1)
//                 `
//                 .trim()
//                 .replace(/\s+/g, " "),
//         }}
//         className={`rounded-full ${className}`}
//     >
//         {children}
//     </div>
// );

const Neumorphism16: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className = "",
}) => (
    // --- contenedor externo: sombra OUTER ---
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow: `
        /* sombra externa clara arriba-izq + oscura abajo-der */
        -12px -12px 35px ${COLORS.lightShadow},
         12px  12px 35px ${COLORS.darkShadow}
      `
                .trim()
                .replace(/\s+/g, " "),
        }}
        className={`rounded-full ${className}`}
    >
        {/* --- contenedor interno: sombra INNER --- */}
        <div
            style={{
                width: "100%",
                height: "100%",
                boxShadow: `
          /* inset arriba-izq + inset abajo-der */
          inset -12px -12px 35px ${COLORS.lightShadow},
          inset  12px  12px 35px ${COLORS.darkShadow}
        `
                    .trim()
                    .replace(/\s+/g, " "),
            }}
            className="rounded-full overflow-hidden"
        >
            {children}
        </div>
    </div>
);

const Neumorphism17: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className = "",
}) => (
    // --- contenedor externo: sombra OUTER ---
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: COLORS.base,
            boxShadow: `
        /* sombra externa clara arriba-izq + oscura abajo-der */
        -12px -12px 35px ${COLORS.lightShadow},
         12px  12px 35px ${COLORS.darkShadow}
      `
                .trim()
                .replace(/\s+/g, " "),
        }}
        className={`rounded-full ${className} flex justify-center items-center`}
    >
        {/* --- contenedor interno: sombra INNER --- */}
        <div
            style={{
                boxShadow: `
          /* inset arriba-izq + inset abajo-der */
          inset -12px -12px 35px ${COLORS.lightShadow},
          inset  12px  12px 35px ${COLORS.darkShadow}
        `
                    .trim()
                    .replace(/\s+/g, " "),
            }}
            className="rounded-full overflow-hidden w-10/12 h-10/12"
        >
            {children}
        </div>
    </div>
);

export default function Hero({
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "py-96 gap-64",
                "w-full flex flex-col justify-center items-center",
                className
            )}
            style={{ backgroundColor: COLORS.base }}
        >
            <div
                className="rounded-full w-80 h-80 flex justify-center items-center"
                style={{
                    backgroundColor: COLORS.whiteBg,
                    boxShadow: 'inset 10px 10px 15px rgba(200,200,200,1)',
                }}
            >
                <div
                    className="rounded-full w-62 h-62 overflow-hidden flex justify-center items-end relative"
                    style={{
                        backgroundColor: COLORS.base,
                        boxShadow: '10px 10px 15px rgba(200,200,200,1)',
                    }}
                >
                    {/* Aquí iría la imagen o contenido */}
                </div>
            </div>

            <Neumorphism1 />
            <Neumorphism2 />
            <Neumorphism3 />
            <Neumorphism4 />
            <Neumorphism5 />
            <Neumorphism7 />
            <Neumorphism9 />
            <Neumorphism10 />
            <Neumorphism11 />
            <Neumorphism13 className="flex justify-center items-center">
                <Neumorphism12>
                </Neumorphism12>
            </Neumorphism13>
            <Neumorphism13 className="flex justify-center items-center">
                <Neumorphism12 className="relative">
                    <img
                        src={image}
                        alt="Wink"
                        className="w-full h-full object-cover absolute -bottom-2"
                    />
                </Neumorphism12>
            </Neumorphism13>

            <Neumorphism14 className="flex justify-center items-center">
                <img
                    src={image}
                    alt="Wink"
                    className="w-3/5 h-3/5 object-cover"
                />
            </Neumorphism14>

            <Neumorphism15 />
            <Neumorphism16 />
            <Neumorphism17 />

        </div>
    );
}


{/* <img
            src={image}
            alt="Personaje"
            className="w-[100%] h-[100%] object-cover absolute -bottom-6"
          /> */}