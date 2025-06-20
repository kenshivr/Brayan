import cn from '../../services/clsx';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { type ChangeEvent, type ReactNode, useEffect, useState } from 'react';

interface FormLabelProps {
  name: string;
  className?: string;
}

export function Title({
  children,
  className = ''
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'pb-2 pt-8 text-center font-valera text-xl text-preslow-dark-gray',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Label({ children }: any) {
  return (
    <div className='mb-2 mt-4 font-notoLight text-lg text-[#687086]'>
      {children}
    </div>
  );
}

export function TableContainer({
  children,
  className = ''
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('m-auto w-[95%] max-w-[1200px]', className)}>
      {children}
    </div>
  );
}

export function FormText({
  name,
  value,
  label,
  onBlur,
  invalid,
  disabled,
  className,
  changeParent,
  required = false
}: any) {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    setInputValue(targetValue);
    changeParent(name, targetValue);
  };

  return (
    <div>
      <FormLabel name={`${label}${required ? '*' : ''}`} />
      <InputText
        onBlur={onBlur}
        value={inputValue}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className={cn(
          'w-42', { 'border-red-600': invalid }, className
        )}
      />
    </div>
  );
}

export function FormNumber({
  value,
  required = false,
  label,
  name,
  changeParent,
  className
}: any) {
  const [inputValue, setInputValue] = useState<number>(0);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (event: any) => {
    const targetValue: number = event.value;

    setInputValue(targetValue);
    changeParent(name, targetValue);
  };

  return (
    <div>
      <FormLabel name={`${label}${required ? '*' : ''}`} />
      <InputNumber
        value={inputValue}
        onValueChange={handleChange}
        className={cn('w-full', className)}
      />
    </div>
  );
}

export function InputDrop({
  name,
  value,
  label,
  options,
  required,
  classDrop,
  classLabel,
  changeParent,
}: any) {
  const [inputValue, setInputValue] = useState<any>(null);

  useEffect(() => {
    if (value && options) {
      const item = options.find((obj: any) => obj.code === value);

      setInputValue(item);
    } else {
      setInputValue(null);
    }
  }, [value, options]);

  const handleChange = (event: any) => {
    const targetValue = event.target.value;

    setInputValue(targetValue);
    changeParent(name, targetValue.code);
  };

  return (
    <div>
      <FormLabel
        className={cn('', classLabel)}
        name={`${label}${required ? '*' : ''}`}
      />
      <Dropdown
        options={options}
        optionLabel='name'
        value={inputValue}
        onChange={handleChange}
        className={cn('h-[47px] w-full', classDrop)}
      />
    </div>
  );
}

export function FieldDropdown(props: any) {
  const [dropValue, setDropValue] = useState('');

  const fieldStyle = props.visible ? { backgroundColor: '#f0f0f0' } : {};

  const getOptions = (options: any, value: any) => {
    if (typeof value === 'object') return value;

    for (let i = 0; i < options.length; ++i) {
      const item = options[i];
      if (item.code === value) {
        return item;
      }
    }
    return '';
  };

  useEffect(() => {
    let options = getOptions(props.options, props.value);

    setDropValue(options);
  }, [props.options, props.value]);

  const handleChange = (event: any) => {
    const value = event.target.value.code;

    props.changeParent(props.name, value);
  };

  return (
    <>
      <div className='w-42'>
        <FormLabel name={`${props.label}${props.required ? '*' : ''}`} />
        <Dropdown
          value={dropValue}
          optionLabel='name'
          className='w-full'
          style={fieldStyle}
          onChange={handleChange}
          options={props.options ? props.options : []}
          placeholder={props.placeholder ? props.placeholder : ''}
        />
      </div>
    </>
  );
}

export function FormLabel({ name, className }: FormLabelProps) {
  return (
    <div
      className={cn('text-md mb-2 font-notoLight text-preslow-gray', className)}
    >
      {name}
    </div>
  );
}

export function ModifyContainer({ children }: any) {
  useEffect(() => {
    // Deshabilita el scroll al montar
    document.body.style.overflow = 'hidden';

    return () => {
      // Restaura el scroll al desmontar
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(246,227,206,0.2)] backdrop-blur-md">
      <div className="p-6 flex flex-col gap-4 h-[90%] w-[80%] rounded-md bg-hazelBrown shadow-lg">
        {children}
      </div>
    </div>
  );
}

export function ModifyHeader({ children }: any) {
  return <div className='flex h-16 w-full'>{children}</div>;
};

export function ModifyTitle({ children }: any) {
  return (
    <span className='font-valera text-3xl'>
      {children}
    </span>
  );
};

export function ModifyBody({ children }: any) {
  return (
    <div className='grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {children}
    </div>
  );
};

export function ModifyFooter({ children }: any) {
  return (
    <div className={cn(
      'h-24 w-full justify-end gap-4 px-4',
      'flex flex-col md:flex-row items-end md:items-center',
    )}>
      {children}
    </div>
  );
};