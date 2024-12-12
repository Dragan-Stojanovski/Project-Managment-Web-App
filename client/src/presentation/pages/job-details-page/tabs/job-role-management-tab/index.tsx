import { useForm, useWatch } from "react-hook-form";
import AutocompleteRoleField from "../../../../components/base-components/autocomplete_role_field";
import styles from "./JobRoleManagement.module.css";
import { Grid } from "@mui/material";
import { MdArrowRightAlt } from "react-icons/md";
import AutocompleteSubSectorField from "../../../../components/base-components/autocomplete-subsector-field";
import AutocompleteSectorField from "../../../../components/base-components/autocomplete-sector-field";
import { IJob } from "../../../../../types/job-details/IGetJobRoles";
import { getJobRoles } from "../../../../../infra/http/api-calls/job-details/getJobRoles";
import { useEffect, useState } from "react";

const categoryLabels: Record<string, string> = {
  hard_skills: "Hard Skills",
  interpersonal_skills: "Interpersonal Skills", // Add other mappings as needed
  industry_specific: "Industry Specific", // Add other mappings as needed
  generic_skills: "Generic Skills", // Add other mappings as needed
};

const JobRoleManagementTab = (): JSX.Element => {
  const { handleSubmit, control } = useForm<any>({
    mode: "onChange",
  });
  const selectedCurrentSector = useWatch({ control, name: "sector" }); // Watching the sector field
  const selectedCurrentSubSector = useWatch({ control, name: "sub_sector" }); // Watching the sub-sector field
  const selectedCurrentJobRoleField = useWatch({
    control,
    name: "currentRole",
  });
  const selectedTargetJobRoleField = useWatch({ control, name: "targetRole" });
  const selectedTargetSector = useWatch({ control, name: "targetSector" });
  const selectedTargetSubSector = useWatch({
    control,
    name: "targetSubSector",
  });

  const [jobRolesData, setJobRolesData] = useState<IJob[] | []>([]);

  async function getJobRolesFn() {
    const result = await getJobRoles();
    setJobRolesData(result.data);
  }

  useEffect(() => {
    void getJobRolesFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findSelectedJob = (
    sector: string,
    subSector: string,
    currentRole: string,
    data: IJob[]
  ): IJob | null => {
    return (
      data.find(
        (job) =>
          job.sector === sector &&
          job.sub_sector === subSector &&
          job.job_role === currentRole
      ) || null
    );
  };

  const currentSelectedJob = findSelectedJob(
    selectedCurrentSector,
    selectedCurrentSubSector,
    selectedCurrentJobRoleField,
    jobRolesData
  );

  const targetSelectedJob = findSelectedJob(
    selectedTargetSector,
    selectedTargetSubSector,
    selectedTargetJobRoleField,
    jobRolesData
  );

  const findSkillMatchesAndMissing = (currentJob: IJob, targetJob: IJob) => {
    const skillCategories = [
      "hard_skills",
      "interpersonal_skills",
      "industry_specific",
      "generic_skills",
    ] as const;

    const results = skillCategories.reduce((acc, category) => {
      const currentSkills = currentJob[category] || [];
      const targetSkills = targetJob[category] || [];

      const matches = currentSkills.filter((skill) =>
        targetSkills.includes(skill)
      );
      const missing = targetSkills.filter(
        (skill) => !currentSkills.includes(skill)
      );

      acc[category] = { matches, missing };
      return acc;
    }, {} as Record<(typeof skillCategories)[number], { matches: string[]; missing: string[] }>);

    return results;
  };

  const skillComparison =
    currentSelectedJob && targetSelectedJob
      ? findSkillMatchesAndMissing(currentSelectedJob, targetSelectedJob)
      : null;


      const [activeCategory, setActiveCategory] = useState<string | null>(null); // State for active category

      const handleCategoryClick = (category: string) => {
        setActiveCategory((prev) => (prev === category ? null : category)); // Toggle active category
      };

  return (
    <div className={styles.container}>
      <section className={styles.target_role__wrapper}>


     
                <div className={styles.filters_wrapper}>
                <Grid
          container
          rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
          columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
        >
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
              name="sub_sector"
              control={control}
              nullable={false}
            />
          </Grid>
          <Grid item lg={3} >
            <AutocompleteRoleField
              label="Current Role"
              name="currentRole"
              control={control}
              nullable={false}
              sector={selectedCurrentSector}
              subsector={selectedCurrentSubSector}
            />
            {currentSelectedJob && <div  className={styles.job_description_wrapper}><p>{currentSelectedJob?.job_role_definition}</p>  </div>}
          </Grid>
          </Grid>
          </div>
          <Grid item lg={12}>
            <div className={styles.right_arrow_wrapper}>
              <MdArrowRightAlt />
            </div>
          </Grid>
          <div className={styles.filters_wrapper}>
          <Grid
          container
          rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
          columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
        >
          <Grid item lg={3}>
            <AutocompleteSectorField
              label="Sector"
              name="targetSector"
              control={control}
              nullable={false}
            />
          </Grid>
          <Grid item lg={3}>
            <AutocompleteSubSectorField
              label="Sub Sector"
              name="targetSubSector"
              control={control}
              nullable={false}
            />
          </Grid>
          <Grid item lg={3}>
            <AutocompleteRoleField
              label="Target Role"
              name="targetRole"
              control={control}
              nullable={false}
              sector={selectedTargetSector}
              subsector={selectedTargetSubSector}
            />
            {targetSelectedJob && <div className={styles.job_description_wrapper}><p>{targetSelectedJob?.job_role_definition}</p>  </div>}
          </Grid>

        </Grid>
         </div>
   
      </section>
      <section className={styles.category_container}>
      {skillComparison ? (
        Object.entries(skillComparison).map(
          ([category, { matches, missing }]) => (
            <div key={category} className={styles.category_wrapper}>
              <h2
                onClick={() => handleCategoryClick(category)} // Set active category on click
                style={{
                  cursor: "pointer",
                  color: activeCategory === category ? "white" : "black",
                  backgroundColor: activeCategory === category ? "var(--secondary-accent-color)" : "var(--light-color)",
                }}
              >
                       {categoryLabels[category] || category} {/* Fallback to category if no mapping */}

              </h2>
              {activeCategory === category && ( // Show only if the category is active
<div className={styles.matching_container}>
<div className={styles.jobs_name__wrapper}>
  <div className={styles.type_of_skill_box}>
<h3>Matched Skills</h3>
</div>
<div className={styles.type_of_skill_box}>
<h3>Missing Skills</h3>
</div>

  </div>




<div className={styles.jobs_name__wrapper}>
<div className={styles.jobs_name__box}>
     {matches.length > 0 ? (
                       <ul>
                         {matches.map((skill, index) => (
                           <li key={index}>{skill}</li>
                         ))}
                       </ul>
                     ) : (
                       <p>No matched skills</p>
                     )}
   </div>
<div className={styles.jobs_name__box}>
  
     {missing.length > 0 ? (
                       <ul>
                         {missing.map((skill, index) => (
                           <li key={index}>{skill}</li>
                         ))}
                       </ul>
                     ) : (
                       <p>No missing skills</p>
                     )}
  
   </div>


  </div>
  </div>
       
              )}
            </div>
          )
        )
      ) : (
        <p>No data to display</p>
      )}
    </section>
    </div>
  );
};

export default JobRoleManagementTab;
