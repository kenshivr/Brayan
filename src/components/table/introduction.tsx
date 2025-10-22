import cn from "@src/services/clsx";
import image from "@public/Down3D.png";
import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function Introduction({
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
    const { t } = useTranslation();

    return (
        <div
            className={cn(
                "bg-transparent mb-48 mt-12",
                "w-full flex flex-col gap-14 md:gap-0 md:flex-row",
                className
            )}
        >

            {/* Texto */}
            <div
                className="order-2 md:order-1 flex flex-col justify-center items-start w-full px-20"
            >
                <Title
                    content={t(`report.title`)}
                />
                <SubTitle
                    content={t(`report.subTitle`)}
                />
                <Paragraph
                    content={t(`report.paragraph`)}
                />

            </div>

            {/* Personaje */}
            <div
                className="order-1 md:order-2 flex flex-col justify-center items-center w-full"
            >
                <img src={image} width={300} alt="Personaje" />
            </div>

        </div>
    );
}

function Title({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-7xl mb-2"
            style={{ color: 'var(--color-firstColor)' }}
        >
            {content}
        </span>
    )
}

function SubTitle({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-4xl mb-6"
            style={{ color: 'var(--color-secondColor)' }}
        >
            {content}
        </span>
    )
}

function Paragraph({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{
                color: 'var(--color-firstColor)'
            }}
        >
            {content}
        </span>
    )
}