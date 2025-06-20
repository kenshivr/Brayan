import top from '@public/top.png';
import cn from '@src/services/clsx';
import { Tag } from 'primereact/tag';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { DataTable, type DataTableFilterMeta } from 'primereact/datatable';

import ReactLogo from '@src/svg/react';
import TailwindLogo from '@src/svg/tailwind';
import TypescriptLogo from '@src/svg/typescript';

import Modify from './modify';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


interface technologie {
    id: number;
    name: string;
    version: string;
    link: string;
    usage: boolean;
    image: any;
}

const MODE = {
    MODIFY: 0,
    CREATE: 1
};

export default function CarouselCards() {
    const toast = useRef<Toast>(null);
    const [selected, setSelected] = useState<technologie | null>(null);

    const [item, setItem] = useState<any>({});
    
    const data: technologie[] = [
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

    const [mode, setMode] = useState(MODE.MODIFY);

    const [popout, setPopout] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [dataFiltered, setDataFiltered] = useState<any[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        version: { value: null, matchMode: FilterMatchMode.CONTAINS },
        link: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const show = (params: any): void => {
        toast.current?.show(params);
    };

    const ModifyRegister = () => {
        setMode(MODE.MODIFY);
        setPopout(true);
        setItem(selected);
    };

    const CreateRegister = () => {
        setItem({});
        setPopout(true);
        setMode(MODE.CREATE);
    };

    const popoutClose = () => {
        setPopout(false);
    };

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
                    onClick={CreateRegister}
                    className="!text-softBeige !bg-hazelBrown !border-softBeige"
                />
                <Button
                    outlined
                    size="small"
                    severity="info"
                    label="Modificar"
                    icon="pi pi-pencil"
                    disabled={!selected}
                    onClick={ModifyRegister}
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

            <Toast ref={toast} position='bottom-right' />

            <ConfirmDialog />

            {popout && (
                <Modify
                    data={item}
                    mode={mode}
                    show={show}
                    closeHandler={popoutClose}
                />
            )}

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
                    dataKey='name'
                    header={header}
                    footer={footer}
                    filters={filters}
                    // filterDisplay='row'
                    scrollHeight="400px"
                    selection={selected!}
                    selectionMode="single"
                    tableClassName="my-4"
                    globalFilterMatchMode='contains'
                    rowClassName={() => "border-none"}
                    emptyMessage='No hay datos que mostrar'
                    onFilter={(e) => {
                        setFilters(e.filters);
                    }}
                    onValueChange={(data: any) => {
                        setDataFiltered(data);
                    }}
                    onSelectionChange={(e) => {
                        const value = e.value;
                        setSelected(value);
                    }}
                >
                    <Column
                        field="name"
                        header="Nombre"
                        filter
                        filterPlaceholder="Buscar nombre"
                        showFilterMatchModes={false}
                        showClearButton={false}
                    />
                    <Column
                        field="version"
                        header="Versión"
                        filter
                        filterPlaceholder="Buscar versión"
                    />
                    <Column
                        field="link"
                        header="Enlace"
                        filter
                        filterPlaceholder="Buscar enlace"
                    />
                    <Column
                        header="Imagen"
                        body={imageBodyTemplate}
                    />
                    <Column
                        header="Estatus"
                        body={statusBodyTemplate}
                    />
                </DataTable>

            </div>

        </div>
    );
};