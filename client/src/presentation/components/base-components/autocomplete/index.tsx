// Copyright (c) MakEntWin Ltd. 2024 All rights reserved.

import { Tooltip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useMemo } from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController
} from 'react-hook-form';

/**
 * Interface for @see {@link BaseAutocompleteField}
 */
export interface IAutocompleteProps<
  FormValues extends FieldValues,
  FieldName extends Path<FormValues>
> {
  name: FieldName;
  control: Control<FormValues>;
  data: any /* Array<ISelectOption<string>> */;
  nullable: boolean;
  rules?: RegisterOptions<FormValues, FieldName>;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  removedOptions?: string[];
  testId?: string;
}

/**
 * Autocomplete field. The user is presented with a searchable dropdown list of options.
 * @param data - The data to be displayed in the autocomplete.
 * @param control - The control object from react-hook-form.
 * @param rules - The rules object from react-hook-form.
 * @param formFieldName - The name of the field in the form.
 * @param label - The label for the component.
 * @param placeholder - The placeholder for the component.
 * @param testId - The test id for the component.
 * @param disableClearable - Whether the clear button should be disabled.
 *
 */
export default function BaseAutocompleteField<
  FormValues extends FieldValues,
  FieldName extends Path<FormValues>
>({
  name,
  data,
  control,
  rules,
  nullable,
  disabled,
  testId = '',
  removedOptions,
  label
}: IAutocompleteProps<FormValues, FieldName>): JSX.Element {
  const { field, fieldState } = useController<FormValues, FieldName>({
    name,
    control,
    rules
  });

  const filteredData = useMemo(() => {
    const result = data.filter(d => {
      return removedOptions === undefined || !removedOptions.includes(d.value);
    });

    if (result.length === 1) {
      field.onChange(result[0].value);
    }

    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, removedOptions]);

  return (
    <>
      <Autocomplete<any>
        {...field}
        disableClearable={
          !nullable || field.value === null || filteredData.length === 1
        }
        options={filteredData}
        value={
          filteredData.find(d => {
            return d.value === field.value;
          }) ?? ''
        }
        data-testid={`autocomplete-select-${testId}`}
        onChange={(_, newValue) => {
          field.onChange(newValue?.value ?? null);
        }}
        disabled={disabled || filteredData.length === 1}
        renderInput={params => {
          return (
            <TextField
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  width: '100%',
                  backgroundColor: 'var(--white-color) !important',
                  padding: 'none !important',
                  height: '48px !important',
                  boxSizing: 'border-box !important',
                  borderRadius: 'var(border-radius-8) !important',
                  border: fieldState.error
                    ? '2px solid var(--red-color) !important'
                    : '1px solid var(--dark-secondary-color) !important'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiOutlinedInput-root:hover': {
                  backgroundColor: 'rgba(221, 221, 221, 0.87) !important'
                },
                '&.MuiInputLabel-root': {
                  fontSize: '16px !important',
                  color: 'var(--dark-secondary-color)',
                  opacity: '0.4',
                  position: 'absolute',
                  transition: 'all 0.2s ease',
                  padding: 'none',
                  pointerEvents: 'none'
                },
                '&.Mui-disabled': {
                  opacity: '0.3'
                },
                '& .MuiFormLabel-root': {
                  marginTop: '-14px !important',
                  marginLeft: '-12px !important',
                  fontSize: '20px !important',
                  color: 'var(--black-color) !important',
                  fontWeight: '600 !important'
                },
                '& .MuiFormPlaceholder-root': {
                  marginTop: '-14px !important',
                  marginLeft: '-12px !important',
                  fontSize: '20px !important',
                  color: 'var((--black-color) !important',
                  fontWeight: '600 !important'
                }
              }}
              {...params}
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              label={label}
              placeholder={label}
            />
          );
        }}
        renderOption={(props, option) => {
          return (
            <Tooltip title={option.tooltip || ''} arrow>
              <li {...props}>{option.label}</li>
            </Tooltip>
          );
        }}
      />
      {fieldState.error && (
        <div  data-testid={`${name} error`}>
          {fieldState.error.message}
        </div>
      )}
    </>
  );
}