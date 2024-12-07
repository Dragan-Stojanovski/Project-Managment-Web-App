// Copyright (c) MakEntWin Ltd. 2024 All rights reserved.

import { ReactElement } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import BaseAutocompleteField, { IAutocompleteProps } from '../autocomplete';


interface IHookFormCountryAutocompleteFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> extends Omit<
    IAutocompleteProps<TFieldValues, TFieldName>,
    'data' | 'disableClearable'
  > {
  nullable:boolean;
}

/**
 * A React component for rendering an autocomplete field for selecting countries,
 * integrated with `react-hook-form` and translated country names.
 * @param additionalOptions - Additional options to include in the autocomplete field.
 * @param disableClearable - Whether to disable the clearable option based on the field value.
 * @param data - The data to be used by the autocomplete field (automatically provided).
 * @param disableClearable - Whether the field can be cleared.
 * @returns A `ReactElement` representing the country autocomplete field.
 */
const AutocompleteMajorField = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  // nullable,
  ...props
}: IHookFormCountryAutocompleteFieldProps<
  TFieldValues,
  TFieldName
>): ReactElement => {

const professionsData = [
    { value: '1', label: 'Major 1', tooltip: 'First option' },
    { value: '2', label: 'Major 2', tooltip: 'Second option' }
  ];


  return (
    <BaseAutocompleteField<TFieldValues, TFieldName>
      {...props}
      data={professionsData}
    />
  );
};

export default AutocompleteMajorField;