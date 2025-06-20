import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { UIMessages } from '@src/models/messages';
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

interface Form {
  id: number;
  name: string;
  version: string;
  link: string;
  estatus: number;
}

export default function EmployeesModify({
  show,
  data,
  mode,
  closeHandler,
  // }: any): JSX.Element {
}: any): any {
  const [form, setForm] = useState<Form>({
    id: 0,
    name: '',
    version: '',
    link: '',
    estatus: 0,
  });

  useEffect(() => {
    setForm(data);
  }, [data]);

  const handleChange = (name: any, value: any) => {
    setForm((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };

  const main = async (): Promise<void> => {
    mode == MODE.CREATE ? createRegister() : saveRegister();
  };

  const getData = () => {
    const data = {
      name: form.name,
      version: form.version,
      link: form.link,
      estatus: form.estatus,
    }

    return data;
  };

  const createRegister = async () => {
    const body = getData();

    try {

      console.log('body create: ', body);

      show(UIMessages.createSuccessful);
      closeHandler();
    } catch (error) {
      console.error(error);
    }
  };

  const saveRegister = async () => {
    const body = getData();

    try {

      console.log('body save: ', body);

      show(UIMessages.updateSuccessful);
      closeHandler();
    } catch (error) {
      console.error(error);
    }
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
            name='estatus'
            value={form.estatus}
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
