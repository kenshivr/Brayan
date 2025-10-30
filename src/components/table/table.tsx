import Modify from './modify';
import top from '@public/peekedTop3D.png';
import cn from '@src/services/clsx';
import { Tag } from 'primereact/tag';
import CssLogo from "@src/svg/css";
import GitLogo from "@src/svg/git";
import ViteLogo from "@src/svg/vite";
import ReactLogo from "@src/svg/react";
import TailwindLogo from "@src/svg/tailwind";
import TypescriptLogo from "@src/svg/typescript";
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import ExcelService from '@src/services/excel';
import { FilterMatchMode } from 'primereact/api';
import { useState, useRef, useMemo, useEffect } from 'react'; // Agregar useEffect
import type { ButtonProps } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast, type ToastMessage } from 'primereact/toast';
import { DataTable, type DataTableFilterMeta } from 'primereact/datatable';
import { useThemeStore } from '@src/context/themeStore';
import { technologiesExcel } from '@src/models/files';

export interface Technology {
    id: number;
    name: string;
    version?: string;
    link: string;
    usage: boolean;
    image: any;
}

const MODE = {
    CREATE: 1,
    MODIFY: 2,
};

// Clave para el localStorage
const LOCAL_STORAGE_KEY = 'technologies-data';

// Datos por defecto
const defaultData: Technology[] = [
    {
        id: 0,
        name: 'React',
        version: '19.1.0',
        link: 'https://es.react.dev/',
        usage: true,
        image: <ReactLogo className='w-12 h-12' />,
    },
    {
        id: 1,
        name: 'Tailwind',
        version: '4.1.8',
        link: 'https://tailwindcss.com/',
        usage: true,
        image: <TailwindLogo className='w-12 h-12' />,
    },
    {
        id: 2,
        name: 'Typescript',
        version: '5.8.3',
        link: 'https://www.typescriptlang.org/',
        usage: true,
        image: <TypescriptLogo className='w-12 h-12' />,
    },
    {
        id: 3,
        name: 'Css',
        version: '4.1.8',
        link: 'https://developer.mozilla.org/es/docs/Web/CSS',
        usage: false,
        image: <CssLogo className='w-12 h-12' />,
    },
    {
        id: 4,
        name: 'Git',
        link: 'https://git-scm.com/',
        usage: true,
        image: <GitLogo className='w-12 h-12' />,
    },
    {
        id: 5,
        name: 'Vite',
        version: '6.3.5',
        link: 'https://vite.dev/',
        usage: true,
        image: <ViteLogo className='w-12 h-12' />,
    },
];

// Función para cargar datos del localStorage
const loadFromLocalStorage = (): Technology[] => {
    try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
    return defaultData;
};

// Función para guardar datos en el localStorage
const saveToLocalStorage = (data: Technology[]): void => {
    try {
        // Convertir los elementos React a un formato serializable
        const serializableData = data.map(item => ({
            ...item,
            image: null // No podemos serializar elementos React, se reconstruirán después
        }));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serializableData));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

// Función para reconstruir las imágenes después de cargar desde localStorage
const reconstructImages = (data: Technology[]): Technology[] => {
    const imageMap: { [key: string]: any } = {
        'React': <ReactLogo className='w-12 h-12' />,
        'Tailwind': <TailwindLogo className='w-12 h-12' />,
        'Typescript': <TypescriptLogo className='w-12 h-12' />,
        'Css': <CssLogo className='w-12 h-12' />,
        'Git': <GitLogo className='w-12 h-12' />,
        'Vite': <ViteLogo className='w-12 h-12' />,
    };

    return data.map(item => ({
        ...item,
        image: imageMap[item.name] || <img src="fav.ico" alt="Default" className="w-12 h-12" />
    }));
};

export default function Table() {
    const { themes, selectedPalette } = useThemeStore();
    const theme = themes[selectedPalette];

    const toast = useRef<Toast>(null);
    const [item, setItem] = useState<Technology | null>(null);
    const [selected, setSelected] = useState<Technology | null>(null);
    const [data, setData] = useState<Technology[]>([]);

    // Cargar datos del localStorage al inicializar
    useEffect(() => {
        const loadedData = loadFromLocalStorage();
        const dataWithImages = reconstructImages(loadedData);
        setData(dataWithImages);
    }, []);

    // Guardar en localStorage cada vez que data cambie
    useEffect(() => {
        if (data.length > 0) {
            saveToLocalStorage(data);
        }
    }, [data]);

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

    const handleDownload = () => {
        const date = new Date().toISOString().split('T')[0];
        const name = `Kenshi tecnologias ${date}`;

        new ExcelService().setName(name).define(data, technologiesExcel).download();
    };

    const popoutClose = () => {
        setPopout(false);
    };

    const generateNextId = (items: Technology[]): number =>
        items.length ? Math.max(...items.map(i => i.id)) + 1 : 0;

    const handleSave = (item: Omit<Technology, 'id' | 'image'>) => {
        setData(prev => {
            const newData = [
                ...prev,
                {
                    ...item,
                    id: generateNextId(prev),
                    image: <img src="fav.ico" alt="Default" className="w-12 h-12" />,
                },
            ];
            return newData;
        });
    };

    const handleUpdate = (updatedItem: Omit<Technology, 'image'>) => {
        setData(prev => {
            const newData = prev.map(item =>
                item.id === updatedItem.id
                    ? { ...item, ...updatedItem, image: item.image }
                    : item
            );
            return newData;
        });
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
                <ActionButton
                    label="Crear"
                    icon="pi pi-plus"
                    onClick={openCreateForm}
                />
                <ActionButton
                    label="Modificar"
                    icon="pi pi-pencil"
                    disabled={!selected}
                    onClick={openEditForm}
                />
                <ActionButton
                    label="Exportar"
                    icon="pi pi-download"
                    onClick={handleDownload}
                />
                {/* Botón adicional para resetear datos */}
                <ActionButton
                    label="Resetear"
                    icon="pi pi-refresh"
                    onClick={() => {
                        const dataWithImages = reconstructImages(defaultData);
                        setData(dataWithImages);
                    }}
                />
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
                'w-full mt-28 mb-14 flex flex-col',
            )}
            style={{
                color: theme.firstColor,
                fontFamily: 'var(--font-FontText)'
            }}
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
                        'absolute -top-[134px] left-1/2 transform -translate-x-1/2 z-10'
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
                    scrollHeight="800px"
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