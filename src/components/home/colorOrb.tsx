import cn from "@src/services/clsx";

type ColorOrbProps = {
  size: number; 
  colors: string[];
  className?: string;
  onClick?: () => void;
};

export default function ColorOrb({
  size,
  colors,
  onClick,
  className = "",
}: ColorOrbProps) {
  if (colors.length !== 5) {
    console.warn("ColorOrb necesita exactamente 5 colores.");
    return null;
  }

  const thickness = 3; // porcentaje
  const outerMaskStart = 70 - thickness;
  const outerMaskEnd = 70;

  const gradient = `conic-gradient(
    ${colors[0]} 0deg,
    ${colors[1]} 45deg,
    ${colors[2]} 90deg,
    ${colors[3]} 135deg,
    ${colors[4]} 180deg,
    ${colors[0]} 225deg,
    ${colors[1]} 270deg,
    ${colors[2]} 315deg,
    ${colors[0]} 360deg
  )`;

  const planetSize = size * 0.625;
  const sphereSize = size * 0.125;
  const sphereOffset = (100 - 62.5) / 2 - 20;
  // const sphereOffset = (100 - 62.5) / 2 - 10;
  const toPercent = (value: number) => `${value}%`;

  return (
    <div
      className={cn(
        className,
        "relative flex items-center justify-center", 
      )}
      onClick={onClick}
      style={{ width: size, height: size }}
    >

      {/* Orbit Ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: gradient,
          WebkitMaskImage: `radial-gradient(circle, transparent ${outerMaskStart}%, black ${outerMaskEnd}%)`,
          maskImage: `radial-gradient(circle, transparent ${outerMaskStart}%, black ${outerMaskEnd}%)`,
        }}
      />

      {/* Main Planet */}
      <div
        className="rounded-full shadow-[0_0_60px_rgba(255,255,255,0.2)]"
        style={{
          width: planetSize,
          height: planetSize,
          background: `radial-gradient(circle at 30% 30%, ${colors.join(
            ", "
          )})`,
          boxShadow: `0 0 15px ${colors[3]}`,
        }}
      />

      {/* Small Orbiting Sphere */}
      <div
        className="absolute rounded-full"
        style={{
          width: sphereSize,
          height: sphereSize,
          top: toPercent(sphereOffset),
          right: toPercent(sphereOffset),
          background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
          boxShadow: `0 0 15px ${colors[3]}`,
        }}
      />
    </div>
  );
}
