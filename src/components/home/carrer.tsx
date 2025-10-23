import cn from "@src/services/clsx";
import runImage from "@public/run3D.png";
import { GiProgression } from "react-icons/gi";
import { useTranslation } from "react-i18next";

type TimelineEntry = {
  company: string;
  description: string;
};

export default function Carrer() {
  const { t } = useTranslation();

  const timeline = t("carrer.timeline", { returnObjects: true }) as TimelineEntry[];

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
          src={runImage}
          width={320}
          height={320}
          alt={t("carrer.softwareDeveloperLabel")}
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
          {t("carrer.softwareDeveloperLabel")}
        </span>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-end">
        <span
          style={{ color: "var(--color-secondColor)" }}
          className="text-2xl md:text-4xl pr-12"
        >
          {t("carrer.professionalLabel")}
        </span>
        <h3
          style={{ color: "var(--color-firstColor)" }}
          className="text-5xl md:text-7xl mb-4 pr-12"
        >
          {t("carrer.careerLabel")}
        </h3>

        {timeline.map((entry, idx) => (
          <div key={idx} className="flex justify-center gap-4 mb-4 items-center">
            <GiProgression className="h-full shrink-0" />
            <p className="w-10/12 text-justify text-xs md:text-sm lg:text-base">
              <strong>{entry.company}: </strong>
              {entry.description.trim()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
