import { FC } from 'react';

// Third party
import { Controller, useFormContext } from 'react-hook-form';

// MUI
import TextField, { TextFieldProps } from '@mui/material/TextField';

type TRHFTextField = TextFieldProps & {
  name: string;
  multiline?: boolean;
  rows?: number;
};

const RHFTextField: FC<TRHFTextField> = ({
                                           name, helperText, type, multiline, rows, ...other
                                         }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={field.value || ''}
          onChange={(event) => {
            if (type === 'number') {
              const { value } = event.target;
              field.onChange(value === '' ? '': Number(value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message: helperText}
          multiline={multiline || undefined}
          rows={multiline ? rows: undefined}
          {...other}
        />
      )}
    />
  );
};

export {
  RHFTextField,
};
