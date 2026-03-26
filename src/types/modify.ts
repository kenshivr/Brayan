import type { Technology } from './table';
import type { ToastMessage } from 'primereact/toast';

export type TechnologyForm = Omit<Technology, 'image'>;

export interface ModifyProps {
    show: (params: ToastMessage) => void;
    data: Partial<Technology> | null;
    mode: number;
    handleSave: (item: Omit<Technology, 'id' | 'image'>) => void;
    handleUpdate: (item: Omit<Technology, 'image'>) => void;
    closeHandler: () => void;
}
