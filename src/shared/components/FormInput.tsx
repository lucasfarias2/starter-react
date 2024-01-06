/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Control, Controller, FieldErrors, FieldValues, RegisterOptions } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import Input from '@/shared/components/Input';

const FormInput = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { name, label, errors, control, required, rules, inputProps } = props;

  let errorMessage = 'This field is required';

  if (errors?.[name]?.type === 'custom') {
    errorMessage = errors[name]?.message as string;
  }

  return (
    <>
      {label && <label className="mb-1 text-sm font-semibold">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={{ required, ...rules }}
        render={({ field }) => (
          <Input
            {...inputProps}
            {...field}
            ref={ref}
            value={field.value || ''}
            className={twMerge(errors[name] ? 'mb-1 border border-red-600' : 'mb-2', inputProps.className)}
          />
        )}
      />
      {errors[name] && <span className="mb-4 text-xs font-medium text-red-600">{errorMessage}</span>}
    </>
  );
});

FormInput.displayName = 'FormInput';

interface IProps<TFieldValues extends FieldValues = any> {
  label?: string;
  name: string;
  errors: FieldErrors;
  control: Control<TFieldValues>;
  inputProps?: any;
  rules?: RegisterOptions<TFieldValues>;
  required?: boolean;
}

export default FormInput;
