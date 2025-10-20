import { type Technology } from './table';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { UIMessages } from '@src/models/messages';
import { type ToastMessage } from 'primereact/toast';
import { estatus as estatusOptions } from '@src/models/constans';
import {
  FormText,
  ModifyBody,
  ModifyTitle,
  ModifyFooter,
  ModifyHeader,
  FieldDropdown,
  ModifyContainer,
} from '../form/form';

const MODE = {
  MODIFY: 0,
  CREATE: 1
};

type TechnologyForm = Omit<Technology, 'image'>;

interface ModifyProps {
  show: (params: ToastMessage) => void;
  data: Partial<Technology> | null;
  mode: typeof MODE[keyof typeof MODE];
  handleSave: (item: Omit<Technology, 'id' | 'image'>) => void;
  handleUpdate: (item: Omit<Technology, 'image'>) => void;
  closeHandler: () => void;
}

export default function Modify({
  show,
  data,
  mode,
  handleSave,
  closeHandler,
  handleUpdate,
}: ModifyProps) {
  const [form, setForm] = useState<Omit<TechnologyForm, 'image'>>({
    id: 0,
    name: '',
    version: '',
    link: '',
    usage: false
  });

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id ?? 0,
        name: data.name ?? '',
        version: data.version ?? '',
        link: data.link ?? '',
        usage: data.usage ?? false,
      });
    }
  }, [data]);

  const handleChange = (name: any, value: any) => {
    setForm((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };

  const main = async (): Promise<void> => {
    if (mode === MODE.CREATE) {
      await createRegister();
    } else {
      await saveRegister();
    }
  };

  const getData = (): Omit<Technology, 'image'> => ({
    id: form.id,
    name: form.name,
    version: form.version,
    link: form.link,
    usage: form.usage,
  });

  const createRegister = async () => {
    const body = getData();

    handleSave(body);

    show(UIMessages.createSuccessful);
    closeHandler();
  };

  const saveRegister = async () => {
    const body = getData();

    handleUpdate(body);

    show(UIMessages.updateSuccessful);
    closeHandler();
  };

  return (
    <>
      {/* <Cover /> */}

      <ModifyContainer>

        <ModifyHeader>
          <ModifyTitle>
            {mode == MODE.CREATE ? 'Crea un registro' : 'Modifica un registro'}
          </ModifyTitle>
        </ModifyHeader>

        <ModifyBody>
          <FormText
            name='name'
            label='Nombre'
            value={form.name}
            changeParent={handleChange}
          />
          <FormText
            name='version'
            label='Version'
            value={form.version}
            changeParent={handleChange}
          />
          <FormText
            name='link'
            label='Link'
            value={form.link}
            changeParent={handleChange}
          />
          <FieldDropdown
            label='Estado'
            name='usage'
            value={form.usage}
            options={estatusOptions}
            changeParent={handleChange}
          />
        </ModifyBody>

        <ModifyFooter>
          <Button
            label='Cancelar'
            icon='pi pi-times'
            severity='secondary'
            onClick={closeHandler}
          />
          <Button
            onClick={main}
            label='Guardar'
            icon='pi pi-check'
          />
        </ModifyFooter>

      </ModifyContainer>

    </>
  );
}
