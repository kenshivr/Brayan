import Modify from './modify';
import top from '@public/top.png';
import cn from '@src/services/clsx';
import { Tag } from 'primereact/tag';
import ReactLogo from '@src/svg/react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import TailwindLogo from '@src/svg/tailwind';
import { FilterMatchMode } from 'primereact/api';
import TypescriptLogo from '@src/svg/typescript';
import { useState, useRef, useMemo } from 'react';
import type { ButtonProps } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast, type ToastMessage } from 'primereact/toast';
import { DataTable, type DataTableFilterMeta } from 'primereact/datatable';
import { useThemeStore } from '@src/context/themeStore';

export interface Technology {
    id: number;
    name: string;
    version: string;
    link: string;
    usage: boolean;
    image: any;
}

const MODE = {
    CREATE: 1,
    MODIFY: 2,
};

export default function Table() {
    const { themes, selectedPalette } = useThemeStore();
    const theme = themes[selectedPalette];

    const toast = useRef<Toast>(null);
    const [item, setItem] = useState<Technology | null>(null);
    const [selected, setSelected] = useState<Technology | null>(null);
    const [data, setData] = useState<Technology[]>([
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
    ]);

    const [mode, setMode] = useState(MODE.MODIFY);
    const [popout, setPopout] = useState<boolean>(false);

    const [filters, setFilters] = useState<DataTableFilterMeta>({
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        version: { value: null, matchMode: FilterMatchMode.CONTAINS },
        link: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const show = (params: ToastMessage): void => {
        toast.current?.show(params);
    };

    const openEditForm = () => {
        setItem(selected);
        setPopout(true);
        setMode(MODE.MODIFY);
    };

    const openCreateForm = () => {
        setItem(null);
        setPopout(true);
        setMode(MODE.CREATE);
    };

    const popoutClose = () => {
        setPopout(false);
    };

    const generateNextId = (items: Technology[]): number =>
        items.length ? Math.max(...items.map(i => i.id)) + 1 : 0;

    const handleSave = (item: Omit<Technology, 'id'>) => {
        setData(prev => [...prev, { ...item, id: generateNextId(prev) }]);
    };

    const handleUpdate = (updatedItem: Technology) => {
        setData(prev =>
            prev.map(item =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const ActionButton = (props: ButtonProps) => (
        <Button
            {...props}
            outlined
            size="small"
            style={{
                color: theme.firstColor,
                backgroundColor: theme.fifthColor,
                borderColor: theme.firstColor,
            }}
        />
    );

    const header = useMemo(() => (
        <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg"
            style={{ backgroundColor: theme.fifthColor, color: theme.firstColor }}
        >
            <span className="text-xl font-bold flex justify-center sm:justify-start">Tecnologías</span>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <ActionButton label="Crear" icon="pi pi-plus" onClick={openCreateForm} />
                <ActionButton label="Modificar" icon="pi pi-pencil" onClick={openEditForm} disabled={!selected} />
                <ActionButton label="Exportar" icon="pi pi-download" />
            </div>
        </div>
    ), [selected, theme]);

    const imageBodyTemplate = (tech: Technology) => tech.image;

    const statusBodyTemplate = (tech: Technology) => (
        <Tag
            className="rounded-sm p-2"
            value={tech.usage ? 'Activo' : 'Inactivo'}
            severity={tech.usage ? 'success' : 'danger'}
        />
    );

    const footer = useMemo(() => (
        <div className="flex items-center h-4 pl-3">
            <span> Total de tecnologías: {data.length} </span>
        </div>
    ), [data.length]);

    return (
        <div
            className={cn(
                'w-full pt-20 flex flex-col',
            )}
            style={{ color: theme.firstColor }}
        >
            <Toast ref={toast} position='bottom-right' />

            <ConfirmDialog />

            {popout && (
                <Modify
                    data={item}
                    mode={mode}
                    show={show}
                    handleSave={handleSave}
                    closeHandler={popoutClose}
                    handleUpdate={handleUpdate}
                />
            )}

            <div className="relative w-full px-4 pb-4 md:pb-0">

                <div 
                    className={cn(
                        'absolute -top-32 left-1/2 transform -translate-x-1/2 z-10'
                    )}
                >
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
                    dataKey='id'
                    header={header}
                    footer={footer}
                    filters={filters}
                    filterDisplay='row'
                    scrollHeight="400px"
                    selection={selected!}
                    selectionMode="single"
                    globalFilterMatchMode='contains'
                    rowClassName={() => "border-none"}
                    emptyMessage='No hay datos que mostrar'
                    onFilter={(e) => {
                        setFilters(e.filters);
                    }}
                    onSelectionChange={(e) => {
                        const value = e.value;
                        setSelected(value);
                    }}
                >
                    <Column
                        filter
                        field="name"
                        header="Nombre"
                        showClearButton={false}
                        filterPlaceholder="Buscar nombre"
                    />
                    <Column
                        filter
                        field="version"
                        header="Versión"
                        showClearButton={false}
                        filterPlaceholder="Buscar versión"
                    />
                    <Column
                        filter
                        field="link"
                        header="Enlace"
                        showClearButton={false}
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
