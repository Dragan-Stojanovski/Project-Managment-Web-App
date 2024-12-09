import { useForm, useWatch } from "react-hook-form";
import AutocompleteRoleField from "../../../../components/base-components/autocomplete_role_field";
import Grid from "@mui/material/Grid";
import BaseButton from "../../../../components/base-components/base-button";
import styles from "./JobRole.module.css";
import AutocompleteMajorField from "../../../../components/base-components/autocomplete-major-field";
import AutocompleteSectorField from "../../../../components/base-components/autocomplete-sector-field";
import AutocompleteSubSectorField from "../../../../components/base-components/autocomplete-subsector-field";
import AutocompleteMovementTypeField from "../../../../components/base-components/autocomplete-movement-type";
import AutocompleteJobCategoryField from "../../../../components/base-components/autocomplete-jobcategory-field";
import SliderComponent from "../../../../components/base-components/slider-component";
import BaseTableComponent from "../../../../components/base-components/base-table-component";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import JobRoleModalWindow from "./job-role-modal-window";
import { IJob } from "../../../../../types/job-details/IGetJobRoles";
import BaseModalWindow from "../../../../components/base-components/base-modal-window";
import { getJobRoles } from "../../../../../infra/http/api-calls/job-details/getJobRoles";
const JobRoleTab = (): JSX.Element => {
	const { handleSubmit, control, watch } = useForm<any>({
		mode: "onChange",
	  });

	const [selectedRowData, setSelectedRowData] = useState<IRow | undefined>();
    const handleDetailsClick = (rowData:IJob) => {
        setSelectedRowData(rowData);
      };

	  const selectedSector = useWatch({ control, name: "sector" }); // Watching the sector field
const selectedSubSector = useWatch({ control, name: "sub_sector" }); // Watching the sub-sector field
const selectedJobRole = useWatch({ control, name: "job_role" }); // Watching the job role field
	  const [jobRolesData, setJobRolesData] = useState<IJob[] | []>([]);

	  async function getJobRolesFn() {
	
	
		const result = await getJobRoles();
		setJobRolesData(result.data);
		
	  }
	
	  useEffect(() => {
		void getJobRolesFn();
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []); 


	  // Filter the jobRolesData to find the selected job
const findSelectedJob = (
	sector: string,
	subSector: string,
	jobRole: string,
	data: IJob[]
  ): IJob | null => {
	return data.find(
	  (job) =>
		job.sector === sector &&
		job.sub_sector === subSector &&
		job.job_role === jobRole
	) || null;
  };
  
  const selectedJob = findSelectedJob(
	selectedSector,
	selectedSubSector,
	selectedJobRole,
	jobRolesData
  );
  
  if (!selectedJob) {
	console.warn("No job found matching the selected criteria.");
  } else {
	console.log("Selected Job:", selectedJob);
  }


  const skillCategoryRankings = [
	"Semi-skilled",
	"Skilled",
	"Technician",
	"Professional",
  ];
  
  const calculateSkillCategoryMatch = (
	originalSkillCategory: string,
	targetSkillCategory: string
  ): number => {
	const originalRank = skillCategoryRankings.indexOf(originalSkillCategory);
	const targetRank = skillCategoryRankings.indexOf(targetSkillCategory);
	return originalRank >= targetRank ? 1 : 0;
  };

  const academicQualificationRankings = [
	"High School",
	"Certificate",
	"Diploma",
	"Bachelor",
	"Master",
	"PhD",
  ];
  
  const calculateAcademicQualificationMatch = (
	originalQualifications: string[],
	targetQualifications: string[]
  ): number => {
	const highestOriginalRank = Math.max(
	  ...originalQualifications.map((qual) =>
		academicQualificationRankings.indexOf(qual)
	  )
	);
	const highestTargetRank = Math.max(
	  ...targetQualifications.map((qual) =>
		academicQualificationRankings.indexOf(qual)
	  )
	);
	return highestOriginalRank >= highestTargetRank ? 1 : 0;
  };


  const calculateSkillMatch = (
	originalSkills: string[],
	targetSkills: string[]
  ): number => {
	const commonSkills = originalSkills.filter((skill) =>
	  targetSkills.includes(skill.toLowerCase())
	);
	return commonSkills.length / targetSkills.length || 0;
  };


  const calculateIndustrySpecificSkillMatch = (
	originalSkills: string[],
	targetSkills: string[]
  ): number => {
	const commonIndustrySkills = originalSkills.filter((skill) =>
	  targetSkills.includes(skill.toLowerCase())
	);
	return commonIndustrySkills.length / targetSkills.length || 0;
  };

  const calculateFinalScore = (
	x1: number,
	x2: number,
	x3: number,
	x4: number,
	weights = { w1: 0.25, w2: 0.25, w3: 0.25, w4: 0.25 }
  ): number => {
	return weights.w1 * x1 + weights.w2 * x2 + weights.w3 * x3 + weights.w4 * x4;
  };


  const compareJobs = (
	selectedJob: IJob,
	jobRolesData: IJob[]
  ): { job: IJob; score: number }[] => {
	return jobRolesData
	  .filter((job) => job !== selectedJob) // Exclude the selected job itself
	  .map((job) => {
		const x1 = calculateSkillCategoryMatch(
		  selectedJob.skill_category,
		  job.skill_category
		);
		const x2 = calculateAcademicQualificationMatch(
		  selectedJob.academic_qualification,
		  job.academic_qualification
		);
		const x3 = calculateSkillMatch(
		  [...selectedJob.hard_skills, ...selectedJob.interpersonal_skills],
		  [...job.hard_skills, ...job.interpersonal_skills]
		);
		const x4 = calculateIndustrySpecificSkillMatch(
		  selectedJob.industry_specific,
		  job.industry_specific
		);
  
		const weights = job.industry_specific.length
		  ? { w1: 0.25, w2: 0.25, w3: 0.25, w4: 0.25 }
		  : { w1: 0.25, w2: 0.25, w3: 0.5, w4: 0 };
  
		const score = calculateFinalScore(x1, x2, x3, x4, weights);
		return { job, score };
	  })
	  .sort((a, b) => b.score - a.score); 
  };


//   const jobMatches = compareJobs(selectedJob, jobRolesData);


const [jobMatches,setJobMatches] = useState([])
const onSubmit = (() => {
 setJobMatches(compareJobs(selectedJob, jobRolesData));
})


console.log("jobMatches:",jobMatches)
const columns = [
	{
	  title: "Potential Progression",
	  dataIndex: "jobRole",
	  render: (jobRole: string) => <strong>{jobRole}</strong>, // Job role in bold
	},
	{
	  title: "Result",
	  dataIndex: "result",
	  render: (progress: boolean[]) => (
		<div style={{ display: "flex", gap: "2px" }}>
		  {progress.map((filled, index) => (
			<div
			  key={index}
			  style={{
				width: "10px",
				height: "10px",
				backgroundColor: filled ? "var(--secondary-accent-color)" : "pink",
				borderRadius: "2px",
			  }}
			></div>
		  ))}
		</div>
	  ),
	},
	{
	  title: "Summary",
	  dataIndex: "summary",
	},
	{
	  title: "See Details",
	  dataIndex: "details",
	  render: (_, rowData) => (
		<button
		  style={{
			background: "var(--secondary-accent-color)",
			cursor: "pointer",
			border: "none",
			padding: "5px 10px",
			borderRadius: "5px",
			color: "#fff",
		  }}
		  onClick={() => handleDetailsClick(rowData)} // Trigger details action
		>
		  Details
		</button>
	  ),
	},
  ];
  const calculateMatchProgress = (job: IJob) => {
	// Combine hard and soft skills for better match calculation
	const totalSkills = [...job.hard_skills, ...job.soft_skills]; 
	const matchPercentage = 0.75; // Example match percentage
	const matchedSkills = Math.round(matchPercentage * totalSkills.length); // Calculate matched skills
	return new Array(matchedSkills).fill(true).concat(new Array(totalSkills.length - matchedSkills).fill(false)); // Return boolean array
  };
  
  
  const data = jobMatches.map(({ job, score }) => ({
	jobRole: job.job_role, // Job role as before
	result: calculateMatchProgress(job), // Calculate the progress based on skills
	summary: `${score} / 1`, // Summary with the score
	matchedSkills: "TestMatchedSkills", // Placeholder, adjust as needed
	details: "", // Additional details if needed
  }));

	  
	
	const itemsPerPage = 4; // Number of items per page
	const [currentPage, setCurrentPage] = useState(0);

	// Calculate the current data to display
	const offset = currentPage * itemsPerPage;
	const currentData = data.slice(offset, offset + itemsPerPage);

	// Handle page change
	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected);
	};

	const isBackDisabled = currentPage === 0;
	const isNextDisabled =
		currentPage === Math.ceil(data.length / itemsPerPage) - 1;

	return (
		<div className={styles.container}>
			{/* <section className={styles.jobRoleSection}>
				<div>
					<Grid
						container
						rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }}
						columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}
					>
						<Grid item lg={3}>
							<AutocompleteRoleField
								label="Role"
								name="role"
								control={control}
								nullable={false}
							/>
						</Grid>
						<Grid item lg={3}>
							<BaseButton text={"Explore"} type={"submit"} />
						</Grid>
					</Grid>
				</div>
			</section> */}

			<div className={styles.filters_wrapper}>
				<section className={styles.criteria_filtering__wrapper}>
					<h2>Criteria</h2>
					<form onSubmit={(e) => e.preventDefault()}>
					<Grid container rowSpacing={{ xs: "10px", sm: "20px", md: "20px", lg: "20px" }} columnSpacing={{ xs: "20px", sm: "40px", md: "40px", lg: "40px" }}>

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
  <Grid item lg={3}>
    <AutocompleteRoleField
      label="Role"
      name="job_role"
      control={control}
      nullable={false}
      sector={selectedSector} 
      subsector={selectedSubSector} 
    />
  </Grid>
  <Grid item lg={3}>
    <BaseButton onClick={() => onSubmit()} text={"Explore"} type={"submit"} />
  </Grid>
</Grid>
  </form>


						{/* <Grid item lg={3}>
							<AutocompleteMovementTypeField
								label="Movement Type"
								name="movementType"
								control={control}
								nullable={false}
							/>
						</Grid> */}
					
				</section>
</div>
				<br></br>
				<br></br>
				<br></br>
				<div className={styles.filters_wrapper}>
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

						<Grid item lg={3}>
							<AutocompleteJobCategoryField
								label="Job Category"
								name="jobCategory"
								control={control}
								nullable={false}
							/>
						</Grid>

						<Grid item lg={2}></Grid>

            <Grid item lg={8}>
              <SliderComponent name="matchingScore" control={control} />
            </Grid>
            <Grid item lg={2}></Grid>
          </Grid>
        </section>
        <br></br>
        <br></br>
        <br></br>
		</div>
		<div className={styles.filters_wrapper}>
        <section>
           {selectedRowData &&  <BaseModalWindow onModalClose={() => setSelectedRowData(undefined)} title={selectedRowData.jobRole}> <h1>Modal Window</h1> </BaseModalWindow>}
          <h2>Job role mapping</h2>
          <BaseTableComponent columns={columns} data={currentData} />
          <div className={styles.paginationWrapper}>
          <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
    disabled={isBackDisabled}
    className={`${styles.paginationButton} ${isBackDisabled ? styles.disabled : ""}`}
  >
    Back
  </button>

						<ReactPaginate
							previousLabel={""}
							nextLabel={""}
							pageCount={Math.ceil(data.length / itemsPerPage)}
							onPageChange={handlePageChange}
							forcePage={currentPage}
							containerClassName={styles.pagination}
							activeClassName={styles.activePage}
						/>

						<button
							onClick={() =>
								setCurrentPage((prev) =>
									Math.min(prev + 1, Math.ceil(data.length / itemsPerPage) - 1)
								)
							}
							disabled={isNextDisabled}
							className={`${styles.paginationButton} ${
								isNextDisabled ? styles.disabled : ""
							}`}
						>
							Next
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default JobRoleTab;
