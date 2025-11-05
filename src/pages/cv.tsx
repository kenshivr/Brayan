import cn from "@src/services/clsx";
import Menu from "@src/components/UI/menu";
import pdfIngles from '@public/files/CV_2025_Ingles.pdf';
import pdfEspañol from '@public/files/CV_2025_español.pdf';
import { useTranslation } from "react-i18next";

export default function CV() {
    const { t } = useTranslation();

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
                    src={pdfEspañol}
                />

                <Curriculum
                    title={t("CV.title")}
                    language={t("CV.english")}
                    src={pdfIngles}
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
            <div className="w-4/5 mx-auto">
                <span className="text-sm md:text-lg">CV</span>

                <div>
                    <h2 className="text-3xl md:text-6xl py-2">{title}</h2>

                    <div
                        style={{
                            width: "50%",
                            height: "10px",
                            background: "var(--color-thirdColor)",
                            borderBottom: "3px solid var(--color-secondColor)",
                            transform: "skewX(-50deg)",
                        }}
                    />
                </div>
            </div>

            <span className="text-sm md:text-lg w-4/5 mx-auto">{language}</span>

            <iframe
                src={src}
                className="w-4/5 h-[460px] md:h-[900px] mb-8 mx-auto"
            ></iframe>
        </>
    )
}