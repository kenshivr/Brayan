import { useState } from 'react';
import cn from '../services/clsx';
import { Tag } from 'primereact/tag';
import top from '../../public/top.png';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import ReactLogo from '../svg/react';
import TailwindLogo from '../svg/tailwind';
import TypescriptLogo from '../svg/typescript';

interface technologie {
    id: number;
    name: string;
    version: string;
    link: string;
    usage: boolean;
    image: any;
}

export default function CarouselCards() {
    const [selected, setSelected] = useState<technologie | null>(null);


    const data: technologie[] =
        [
            {
                id: 0,
                name: 'Tailwind',
                version: '4.1.8',
                link: 'tailwind.com',
                usage: true,
                image: <ReactLogo className='w-12 h-12' />,
            },
            {
                id: 1,
                name: 'React',
                version: '19.1.0',
                link: 'react.com',
                usage: true,
                image: <TailwindLogo className='w-12 h-12' />,
            },
            {
                id: 2,
                name: 'clsx',
                version: '2.1.1',
                link: 'clsx.com',
                usage: false,
                image: <TypescriptLogo className='w-12 h-12' />,
            },
        ];

    const header = (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-hazelBrown p-4 rounded-lg text-softBeige">
            {/* TÍTULO */}
            <span className="text-xl font-bold flex justify-center sm:justify-start">Tecnologías</span>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                    outlined
                    size="small"
                    label="Crear"
                    icon="pi pi-plus"
                    severity="success"
                    className="!text-softBeige !bg-hazelBrown !border-softBeige"
                />
                <Button
                    outlined
                    size="small"
                    severity="info"
                    label="Modificar"
                    icon="pi pi-pencil"
                    disabled={!selected}
                    className="!text-softBeige !bg-hazelBrown !border-softBeige"
                />
                <Button
                    outlined
                    size="small"
                    label="Exportar"
                    severity="danger"
                    icon="pi pi-download"
                    className="!text-softBeige !bg-hazelBrown !border-softBeige"
                />
            </div>
        </div>
    );

    const imageBodyTemplate = (product: technologie) => {
        const imageSrc = product.image;

        return (
            imageSrc
        );
    };

    const getSeverity = (product: technologie) => {
        return product.usage ? 'success' : 'danger';
    };

    const statusBodyTemplate = (product: technologie) => {
        return (
            <Tag
                className='rounded-sm p-2 text-boneWhite'
                value={product.usage ? 'Activo' : 'Inactivo'}
                severity={getSeverity(product)}
            />
        );
    };

    const footer = () => {
        return (
            <div className='flex items-center h-4 pl-3'>
                <span>
                    Total de tecnologias : {data ? data.length : 0}
                </span>
            </div>
        );
    }

    return (
        <div
            className={cn(
                'w-full ',
                'text-softBeige',
                'flex flex-col'
            )}
        >

            <div className="relative w-full px-4">

                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-10">
                    <img
                        src={top}
                        alt="Personaje Asomado"
                        width={150}
                        height={150}
                        className="drop-shadow-lg"
                    />
                </div>

                <DataTable
                    scrollable
                    value={data}
                    header={header}
                    footer={footer}
                    scrollHeight="400px"
                    selection={selected!}
                    selectionMode="single"
                    tableClassName="my-4"
                    rowClassName={() => "border-none"}
                    onSelectionChange={(e) => setSelected(e.value)}
                >
                    <Column field="name" header="Nombre" />
                    <Column field="version" header="Version" />
                    <Column field="link" header="Enlace" />
                    <Column header="Imagen" body={imageBodyTemplate} />
                    <Column header="Estatus" body={statusBodyTemplate} />
                </DataTable>

            </div>

        </div>
    );
};