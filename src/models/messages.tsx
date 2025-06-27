import type { ToastMessage } from 'primereact/toast';

export const UIMessages: Record<string, ToastMessage> = {
  createSuccessful: {
    severity: 'success',
    summary: 'Registro Guardado!',
    detail: 'Tu información fue guardada con éxito!',
    life: 6000
  },
  deleteSuccessful: {
    severity: 'success',
    summary: 'Registro Eliminado!',
    detail: 'Tu información fue eliminada con éxito!',
    life: 6000
  },
  updateSuccessful: {
    severity: 'success',
    summary: 'Registro Actualizado!',
    detail: 'Tu información fue actualizada con éxito!',
    life: 6000
  },
};