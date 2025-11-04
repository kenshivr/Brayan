import cn from "@src/services/clsx";
import Menu from "@src/components/UI/menu";
import { useTranslation } from "react-i18next";

export default function CV() {
    const { t } = useTranslation();
    // t("carrer.softwareDeveloperLabel")

    return (
        <>
            <Menu isDesktop />

            <section
                className={cn(
                    "m-20 gap-8",
                    "flex flex-col justify-center items-start"
                )}
                style={{ color: "var(--color-firstColor)" }}
            >
                <Curriculum
                    title={t("CV.title")}
                    language={t("CV.spanish")}
                    src={'public/files/CV_2025_español.pdf'}
                />

                <Curriculum
                    title={t("CV.title")}
                    language={t("CV.english")}
                    src={'public/files/CV_2025_ingles.pdf'}
                />
            </section>
        </>
    );
}

function Curriculum({
    title,
    language,
    src,
}: {
    title: string,
    language: string,
    src: string,
}) {
    return (
        <>
            <div>
                <span className="text-lg">CV</span>

                <h2 className="text-6xl py-2">{title}</h2>

                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        background: "var(--color-thirdColor)",
                        borderBottom: "3px solid var(--color-secondColor)",
                        transform: "skewX(-50deg)",
                    }}
                />
            </div>

            <span className="text-lg">{language}</span>

            <iframe
                src={src}
                className="w-full h-[460px] md:h-[900px] mb-8"
                style={{ border: "none" }}
            ></iframe>
        </>
    )
}