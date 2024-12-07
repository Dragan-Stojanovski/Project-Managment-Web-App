import { ReactElement, useEffect, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import BaseAutocompleteField, { IAutocompleteProps } from '../autocomplete';
import { getJobRoles } from '../../../../infra/http/api-calls/job-details/getJobRoles';

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
 * A React component for rendering an autocomplete field for selecting job roles,
 * integrated with `react-hook-form` and displaying job role titles.
 */
const AutocompleteRoleField = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  ...props
}: IHookFormCountryAutocompleteFieldProps<TFieldValues, TFieldName>): ReactElement => {
  const [jobRolesData, setJobRolesData] = useState<{ value: string; label: string }[]>([]); // Initialize with an empty array

  // Fetch job roles and update the state
  async function getJobRolesFn() {
    const result = await getJobRoles();
    setJobRolesData(
      result.data.map((role) => ({
        value: role.job_role, 
        label: role.job_role, 
      }))
    );
  }

  useEffect(() => {
    void getJobRolesFn();
  }, []);

  return (
    <BaseAutocompleteField<TFieldValues, TFieldName>
      {...props}
      data={jobRolesData.length > 0 ? jobRolesData : []} // Ensure we pass an empty array if data is not ready
    />
  );
};

export default AutocompleteRoleField;