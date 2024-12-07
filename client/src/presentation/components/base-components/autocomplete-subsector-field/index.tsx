import { ReactElement, useEffect, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import BaseAutocompleteField, { IAutocompleteProps } from '../autocomplete';
import { getSubSectors } from '../../../../infra/http/api-calls/sub-sectors/getSubSectors';

interface IHookFormCountryAutocompleteFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> extends Omit<
    IAutocompleteProps<TFieldValues, TFieldName>,
    'data' | 'disableClearable'
  > {
  nullable: boolean;
}

/**
 * A React component for rendering an autocomplete field for selecting sub-sectors,
 * integrated with `react-hook-form`.
 * @param nullable - If true, the field can be cleared.
 * @param disableClearable - Whether to disable the clearable option based on the field value.
 * @param data - The data to be used by the autocomplete field (automatically provided).
 * @param disableClearable - Whether the field can be cleared.
 * @returns A `ReactElement` representing the sub-sector autocomplete field.
 */
const AutocompleteSubSectorField = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  nullable,
  ...props
}: IHookFormCountryAutocompleteFieldProps<TFieldValues, TFieldName>): ReactElement => {

  const [subSectorsData, setSubSectorsData] = useState<{ value: string; label: string }[]>([]);

  // Fetch sub-sectors and update the state
  async function getSubSectorsFn() {
    const result = await getSubSectors();
    console.log("Sub Sectors", result);
    setSubSectorsData(
      result.data.map((subSector) => ({
        value: subSector.title, // Use the title as the value and label
        label: subSector.title, // Display the title in the autocomplete
      }))
    );
  }

  useEffect(() => {
    void getSubSectorsFn();
  }, []);

  return (
    <BaseAutocompleteField<TFieldValues, TFieldName>
    nullable={false} {...props}
    data={subSectorsData} // Pass the sub-sectors data to the autocomplete
    />
  );
};

export default AutocompleteSubSectorField;