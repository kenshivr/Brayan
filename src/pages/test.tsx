import cn from "@src/services/clsx";
import image from "@public/wink.png";
import { type ReactNode } from "react";
import Menu from "@src/components/UI/menu";

const baseColor: string = '#3B2F2F';

const vectorLightShadow: [number, number, number] = [12, 18, 24];
const vectorDarkShadow: [number, number, number] = [-57, -57, -39];
const vectorInsetLightShadow: [number, number, number] = [24, 24, 24];

const vectorInsetDarkShadow: [number, number, number] = [-231, -231, -231];
const vectorNeumorphismInsetDark: [number, number, number] = [-61, -57, 5];

const vectorLight: [number, number, number] = [-31, -31, -31];

const vectorShadow2: [number, number, number] = [-218, -192, -151];

const vectorShadow3: [number, number, number] = [-148, -160, -160];

export function applyVectorToHex(
    colorHex: string,
    vector: [number, number, number],
    alpha?: string
): string {
    const hex = colorHex.replace(/^#/, '')
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) throw new Error('Invalid hex')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    const [dr, dg, db] = vector
    const clamp = (v: number) => Math.max(0, Math.min(255, v))
    const nr = clamp(r + dr)
    const ng = clamp(g + dg)
    const nb = clamp(b + db)
    return alpha !== undefined
        ? `rgba(${nr},${ng},${nb},${alpha})`
        : `rgb(${nr},${ng},${nb})`
}

const COLORS = {
    lightShadow: applyVectorToHex(baseColor, vectorLightShadow),
    darkShadow: applyVectorToHex(baseColor, vectorDarkShadow),
    insetDarkShadow: applyVectorToHex(baseColor, vectorInsetDarkShadow, '0.25'),
    insetLightShadow: applyVectorToHex(baseColor, vectorInsetLightShadow),
    neumorphismInsetLight: applyVectorToHex(baseColor, vectorInsetLightShadow, '0.9'),
    neumorphismInsetDark: applyVectorToHex(baseColor, vectorNeumorphismInsetDark, '0.8'),

    light: applyVectorToHex(baseColor, vectorLight, '1'),
    shadow: applyVectorToHex(baseColor, vectorDarkShadow, '0.2'),

    light0: applyVectorToHex(baseColor, vectorInsetLightShadow, '0.6'),
    shadow0: applyVectorToHex(baseColor, vectorInsetDarkShadow, '0.1'),

    light1: applyVectorToHex(baseColor, vectorInsetLightShadow, '0.64'),
    shadow1: applyVectorToHex(baseColor, vectorDarkShadow, '0.4'),

    light2: applyVectorToHex(baseColor, vectorInsetLightShadow, '1'),
    shadow2: applyVectorToHex(baseColor, vectorShadow2, '0.16'),

    shadow3: applyVectorToHex(baseColor, vectorInsetDarkShadow, '0.5'),

    shadow4: applyVectorToHex(baseColor, vectorInsetDarkShadow, '0.45'),

    shadow5: applyVectorToHex(baseColor, vectorShadow3),
};

const Neumorphism0 = () => (
    <div
        className="rounded-full w-80 h-80 flex justify-center items-center"
        style={{
            backgroundColor: baseColor,
            boxShadow: `inset 10px 10px 15px ${COLORS.light}`,
        }}
    >
        <div
            className="rounded-full w-62 h-62 overflow-hidden flex justify-center items-end"
            style={{
                backgroundColor: baseColor,
                boxShadow: `10px 10px 15px ${COLORS.light}`,
            }}
        />
    </div>
);

const Neumorphism1 = () => (
    <div
        className="w-80 h-80 rounded-full"
        style={{
            backgroundColor: baseColor,
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
            backgroundColor: baseColor,
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
            backgroundColor: baseColor,
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
            backgroundColor: baseColor,
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
            backgroundColor: baseColor,
            boxShadow:
                `
                inset -4px -4px 6px ${COLORS.insetLightShadow},
                inset 4px 4px 6px ${COLORS.shadow}
            `,
        }}
    />
);

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
            backgroundColor: baseColor,
            boxShadow:
                `
                    -8px -8px 16px ${COLORS.light0},
                    8px  8px 16px ${COLORS.shadow0},
                    inset 8px  8px 16px ${COLORS.light0},
                    inset -8px -8px 16px ${COLORS.shadow0}
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
            backgroundColor: baseColor,
            boxShadow:
                `
                    -20px -20px 20px ${COLORS.light0},
                    10px  10px 20px ${COLORS.shadow1},
                    inset 4px 4px 6px ${COLORS.insetLightShadow}
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
            <Neumorphism8 className={classNames} w={300} h={300}>
                <Neumorphism8 className={classNames} w={200} h={200}>
                    <Neumorphism8 className={classNames} w={100} h={100}>
                    </Neumorphism8>
                </Neumorphism8>
            </Neumorphism8>
        </div>
    )
};

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
            backgroundColor: baseColor,
            boxShadow:
                `
                    28px 28px 20px ${COLORS.shadow3},
                    10px 10px 20px ${COLORS.shadow4},
                    inset 4px 4px 6px ${COLORS.light2}
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
            backgroundColor: baseColor,
            boxShadow:
                `
                    28px 28px 50px ${COLORS.shadow2},
                    -23px -23px 45px ${COLORS.light2},
                    inset -31px -31px 43px ${COLORS.light1},
                    inset 26px 26px 48px ${COLORS.shadow2}
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
            backgroundColor: baseColor,
            boxShadow:
                `
                    28px 28px 50px ${COLORS.shadow2},
                    -23px -23px 45px ${COLORS.light2}
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
            backgroundColor: baseColor,
            boxShadow:
                `
                    inset -31px -31px 43px ${COLORS.light1},
                    inset 26px 26px 48px ${COLORS.shadow2}
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
            backgroundColor: baseColor,
            boxShadow:
                `
                    inset -31px -31px 43px ${COLORS.light1},
                    inset 26px 26px 48px ${COLORS.shadow2}
                `
                    .trim()
                    .replace(/\s+/g, " ")
        }}
        className={`rounded-xl ${className}`}
    >
        {children}
    </div>
);

const Neumorphism16: React.FC<NeumorphismProps> = ({
    w = 300,
    h = 300,
    children,
    className = "",
}) => (
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: baseColor,
            boxShadow: `
        -12px -12px 35px ${COLORS.lightShadow},
         12px  12px 35px ${COLORS.darkShadow}
      `
                .trim()
                .replace(/\s+/g, " "),
        }}
        className={`rounded-full ${className}`}
    >
        <div
            style={{
                width: "100%",
                height: "100%",
                boxShadow: `
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
    <div
        style={{
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: baseColor,
            boxShadow: `
        -12px -12px 35px ${COLORS.lightShadow},
         12px  12px 35px ${COLORS.darkShadow}
      `
                .trim()
                .replace(/\s+/g, " "),
        }}
        className={`rounded-full ${className} flex justify-center items-center`}
    >
        <div
            style={{
                boxShadow: `
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
        <>

            <Menu isDesktop={true} />

            <div
                className={cn(
                    className,
                    'p-10 gap-30 w-full justify-items-center',
                    'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
                )}
                style={{ backgroundColor: baseColor }}
            >

                <Neumorphism0 />

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
                    <Neumorphism12>
                    </Neumorphism12>
                </Neumorphism13>

                <Neumorphism14 className="flex justify-center items-center">
                    <img
                        src={image}
                        alt="Wink"
                        className="w-3/5 h-3/5 object-cover"
                    />
                </Neumorphism14>

                <Neumorphism16 />

                <Neumorphism17 />

            </div>
        </>
    );
};