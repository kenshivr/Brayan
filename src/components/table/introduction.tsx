import cn from "@src/services/clsx";
import image from "@public/Down3D.png";
import { type ReactNode } from "react";

export default function Introduction({
    className = "",
}: {
    children?: ReactNode;
    className?: string;
}) {
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
                className="flex flex-col justify-center items-start w-full px-20"
            >
                <Title
                    content={'Report'}
                />
                <SubTitle
                    content={'CRUD and exporting data.'}
                />
                <Paragraph
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
                <Paragraph1
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
                <Paragraph2
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
                <Paragraph3
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
                <Paragraph4
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
                <Paragraph5
                    content={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt nihil 
                        nihil  sint dolores, asperiores, praesentium beatae nulla aperiam corporis
                        optio ea quisquam sit iusto consequatur, modi magni tempore omnis ullam?
                    `}
                />
            </div>

            {/* Personaje */}
            <div
                className="flex flex-col justify-center items-center w-full"
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
                color: 'var(--color-firstColor)',
                fontFamily: 'agneos_outline'
            }}
        >
            {content}
        </span>
    )
}

function Paragraph1({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{ 
                color: 'var(--color-firstColor)',
                fontFamily: 'agneos_regular'
            }}
        >
            {content}
        </span>
    )
}

function Paragraph2({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{ 
                color: 'var(--color-firstColor)',
                fontFamily: 'aventi'
            }}
        >
            {content}
        </span>
    )
}

function Paragraph3({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{ 
                color: 'var(--color-firstColor)',
                fontFamily: 'quloon'
            }}
        >
            {content}
        </span>
    )
}

function Paragraph4({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{ 
                color: 'var(--color-firstColor)',
                fontFamily: 'slabion'
            }}
        >
            {content}
        </span>
    )
}

function Paragraph5({
    content
}: {
    content: string
}) {
    return (
        <span
            className="text-2xl text-justify mb-6"
            style={{ 
                color: 'var(--color-firstColor)',
                fontFamily: 'falling'
            }}
        >
            {content}
        </span>
    )
}

// export default function Layout({
//   children,
//   className = ''
// }: {
//   children?: ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={cn(
//         'mx-3 flex flex-col gap-2',
//         'xl:mx-0 xl:flex-row xl:px-3',
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// }