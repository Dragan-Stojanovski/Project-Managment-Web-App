import { useForm } from 'react-hook-form';
import AutocompleteRoleField from '../../../../components/base-components/autocomplete_role_field';
import styles from './JobRoleManagement.module.css';
import { Grid } from '@mui/material';
import BaseButton from '../../../../components/base-components/base-button';
import { MdArrowRightAlt } from "react-icons/md";
import AutocompleteMajorField from '../../../../components/base-components/autocomplete-major-field';
import AutocompleteSubSectorField from '../../../../components/base-components/autocomplete-subsector-field';
import AutocompleteSectorField from '../../../../components/base-components/autocomplete-sector-field';
import AutocompleteMovementTypeField from '../../../../components/base-components/autocomplete-movement-type';
import SliderComponent from '../../../../components/base-components/slider-component';

const JobRoleManagementTab =():JSX.Element => {
    const { handleSubmit, control } = useForm<any>({
        mode: "onChange",
      });
    return(
        <div className={styles.container}>
        <section className={styles.target_role__wrapper}>

<Grid
            container
            rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
            columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
          >
  <Grid item lg={3}>
              <AutocompleteRoleField
                label="Current Role"
                name="currentRole"
                control={control}
                nullable={false}
              />
            </Grid>
<Grid item lg={1}>
<div className={styles.right_arrow_wrapper}>
<MdArrowRightAlt />
</div>
</Grid>


            <Grid item lg={3}>
              <AutocompleteRoleField
                label="Target Role"
                name="targetRole"
                control={control}
                nullable={false}
              />
            </Grid>

            <Grid item lg={3}>
              <BaseButton text={"Explore"} type={"submit"} />
            </Grid>


            </Grid>

        </section>


<div className={styles.filters_wrapper}>
<section className={styles.criteria_filtering__wrapper}>
          <h2>Criteria</h2>
          <Grid
            container
            rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
            columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
          >

<Grid item lg={3}>
              <AutocompleteMajorField
                label="Degree"
                name="degree"
                control={control}
                nullable={false}
              />
            </Grid>


            <Grid item lg={3}>
              <AutocompleteSectorField
                label="Sector"
                name="sector"
                control={control}
                nullable={false}
              />
            </Grid>
            <Grid item lg={3}>
              <AutocompleteSubSectorField
                label="Sub Sector"
                name="subSector"
                control={control}
                nullable={false}
              />
            </Grid>
            <Grid item lg={3}>
              <AutocompleteMovementTypeField
                label="Movement Type"
                name="movementType"
                control={control}
                nullable={false}
              />
            </Grid>
            </Grid>
</section>

<br></br>
        <br></br>
        <br></br>

        <section className={styles.criteria_filtering__wrapper}>
          <h2>Filter</h2>
          <Grid
            container
            rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
            columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
          >

<Grid item lg={3}>
              <AutocompleteMajorField
                label="Major"
                name="major"
                control={control}
                nullable={false}
              />
            </Grid>
            <Grid item lg={3}>
              <AutocompleteSectorField
                label="Sector"
                name="sector"
                control={control}
                nullable={false}
              />
            </Grid>
            <Grid item lg={3}>
              <AutocompleteSubSectorField
                label="Sub Sector"
                name="subSector"
                control={control}
                nullable={false}
              />
            </Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={2}></Grid>

<Grid item lg={8}>
  <SliderComponent name="matchingScore" control={control} />
</Grid>
<Grid item lg={2}></Grid>
            </Grid>
            </section>


    </div>
    </div>
    ) 
    
}

export default JobRoleManagementTab;