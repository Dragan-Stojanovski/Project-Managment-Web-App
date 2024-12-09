// Copyright (c) MakEntWin Ltd. 2024 All rights reserved.

import { ReactElement, useEffect, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import BaseAutocompleteField, { IAutocompleteProps } from '../autocomplete';
import { ISectorsResponse } from '../../../../types/sectors/IGetSectors';
import { getSectors } from '../../../../infra/http/api-calls/sectors/getSectors';


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
const AutocompleteSectorField = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  // nullable,
  ...props
}: IHookFormCountryAutocompleteFieldProps<
  TFieldValues,
  TFieldName
>): ReactElement => {
  const [sectorsData, setSectorsData] = useState<ISectorsResponse[] | []>([]);
  async function getSectorsFn() {
    const result = await getSectors();
    console.log("Sub Sectors", result);
    setSectorsData(
      result.data.map((subSector:ISectorsResponse) => ({
        value: subSector.title, 
        label: subSector.title, 
      }))
    );
  }

  useEffect(() => {
    void getSectorsFn();
  }, []);

  return (
    <BaseAutocompleteField<TFieldValues, TFieldName>
      {...props}
      data={sectorsData}
    />
  );
};

export default AutocompleteSectorField;