import { ReactElement, useEffect, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import BaseAutocompleteField, { IAutocompleteProps } from '../autocomplete';
import { getJobRoles } from '../../../../infra/http/api-calls/job-details/getJobRoles';
import { IJob } from '../../../../types/job-details/IGetJobRoles';

interface IHookFormRoleAutocompleteFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
> extends Omit<IAutocompleteProps<TFieldValues, TFieldName>, 'data' | 'disableClearable'> {
  nullable: boolean;
  sector?: string | null; // Accept sector as a prop
  subsector?: string | null; // Accept subsector as a prop
}

/**
 * A React component for rendering an autocomplete field for selecting job roles,
 * integrated with `react-hook-form` and dynamically filtering options based on sector and subsector.
 */
const AutocompleteRoleField = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>
>({
  sector,
  subsector,
  ...props
}: IHookFormRoleAutocompleteFieldProps<TFieldValues, TFieldName>): ReactElement => {
  const [jobRolesData, setJobRolesData] = useState<IJob[] | []>([]); // Initialize with an empty array

  // Fetch job roles and filter based on sector and subsector
  async function getJobRolesFn() {
    if (!sector || !subsector) {
      setJobRolesData([]); // Clear data if sector or subsector is not selected
      return;
    }

    const result = await getJobRoles();
    const filteredRoles = result.data.filter(
      (role: IJob) => role.sector === sector && role.sub_sector === subsector
    );
    setJobRolesData(
      filteredRoles.map((role: IJob) => ({
        value: role.job_role,
        label: role.job_role,
      }))
    );
  }

  useEffect(() => {
    void getJobRolesFn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sector, subsector]); 

  return (
    <BaseAutocompleteField<TFieldValues, TFieldName>
      {...props}
      data={jobRolesData.length > 0 ? jobRolesData : []} 
      disabled={!sector || !subsector}
    />
  );
};

export default AutocompleteRoleField;