import { useForm, useWatch } from "react-hook-form";
import AutocompleteRoleField from "../../../../components/base-components/autocomplete_role_field";
import Grid from "@mui/material/Grid";
import BaseButton from "../../../../components/base-components/base-button";
import styles from "./JobRole.module.css";
import AutocompleteMajorField from "../../../../components/base-components/autocomplete-major-field";
import AutocompleteSectorField from "../../../../components/base-components/autocomplete-sector-field";
import AutocompleteSubSectorField from "../../../../components/base-components/autocomplete-subsector-field";
import SliderComponent from "../../../../components/base-components/slider-component";
import BaseTableComponent from "../../../../components/base-components/base-table-component";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IJob } from "../../../../../types/job-details/IGetJobRoles";
import BaseModalWindow from "../../../../components/base-components/base-modal-window";
import { getJobRoles } from "../../../../../infra/http/api-calls/job-details/getJobRoles";

const JobRoleTab: React.FC = (): JSX.Element => {
  const { handleSubmit, control, watch } = useForm<any>({
    mode: "onChange",
  });

  const [selectedRowData, setSelectedRowData] = useState<IRow | undefined>();
  const handleDetailsClick = (rowData: IJob) => {
    setSelectedRowData(rowData);
  };

  console.log("selectedRowData--------------", selectedRowData);

  const selectedSector = useWatch({ control, name: "sector" });
  const selectedSubSector = useWatch({ control, name: "sub_sector" });
  const selectedJobRole = useWatch({ control, name: "job_role" });
  const [jobRolesData, setJobRolesData] = useState<IJob[] | []>([]);
  const [filteredJobRolesData, setFilteredJobRolesData] = useState<IJob[] | []>(
    []
  );
  const [showComparedData, setShowComparedData] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  async function getJobRolesFn() {
    const result = await getJobRoles();
    setJobRolesData(result.data);
    setFilteredJobRolesData(result.data);
  }

  useEffect(() => {
    void getJobRolesFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter the job roles data based on form values
  const filterJobRoles = (formData: any) => {
    let filteredData = jobRolesData;

    console.log("filteredData----------", filteredData);
    if (formData.major) {
      filteredData = filteredData.filter((job) => job.major === formData.major);
    }

    if (formData.sector) {
      filteredData = filteredData.filter(
        (job) => job.sector === formData.sector
      );
    }

    if (formData.subSector) {
      filteredData = filteredData.filter(
        (job) => job.sub_sector === formData.subSector
      );
    }

    // Update filtered data state

    setJobMatches(compareJobs(selectedJob, filteredData));
    setFilteredJobRolesData(filteredData);
  };

  // Filter the jobRolesData to find the selected job
  const findSelectedJob = (
    sector: string,
    subSector: string,
    jobRole: string,
    data: IJob[]
  ): IJob | null => {
    return (
      data.find(
        (job) =>
          job.sector === sector &&
          job.sub_sector === subSector &&
          job.job_role === jobRole
      ) || null
    );
  };

  const selectedJob = findSelectedJob(
    selectedSector,
    selectedSubSector,
    selectedJobRole,
    jobRolesData
  );

  console.log("selectedJob--------", selectedJob);

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
  ): { matchedSkills: string[]; matchPercentage: number } => {
    // Ensure both lists are cleaned (trimmed, lowercase)
    const cleanedOriginalSkills = originalSkills.map((skill) =>
      skill.trim().toLowerCase()
    );
    const cleanedTargetSkills = targetSkills.map((skill) =>
      skill.trim().toLowerCase()
    );

    // Find common skills
    const matchedSkills = cleanedOriginalSkills.filter((skill) =>
      cleanedTargetSkills.includes(skill)
    );
    const matchPercentage =
      matchedSkills.length / cleanedTargetSkills.length || 0;

    return { matchedSkills, matchPercentage };
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
    return (
      weights.w1 * x1 + weights.w2 * x2 + weights.w3 * x3 + weights.w4 * x4
    );
  };

  const calculateMatchingSkills = (selectedJob: IJob, job: IJob) => {
    const hardSkillsMatch = calculateSkillMatch(
      selectedJob.hard_skills,
      job.hard_skills
    );
    const softSkillsMatch = calculateSkillMatch(
      selectedJob.soft_skills,
      job.soft_skills
    );
    const interpersonalSkillsMatch = calculateSkillMatch(
      selectedJob.interpersonal_skills,
      job.interpersonal_skills
    );
    const industrySpecificSkillsMatch = calculateSkillMatch(
      selectedJob.industry_specific,
      job.industry_specific
    );
    const genericSkillsMatch = calculateSkillMatch(
      selectedJob.generic_skills,
      job.generic_skills
    );

    // Return all matched skills and the match percentages
    return {
      hardSkills: hardSkillsMatch,
      softSkills: softSkillsMatch,
      interpersonalSkills: interpersonalSkillsMatch,
      industrySpecificSkills: industrySpecificSkillsMatch,
      genericSkills: genericSkillsMatch,
    };
  };
  const compareJobs = (
    selectedJob: IJob,
    jobRolesData: IJob[]
  ): { job: IJob; score: number; matchDetails: any }[] => {
    return jobRolesData
      .filter((job) => job !== selectedJob)
      .map((job) => {
        const matchCount = calculateMatchingSkills(selectedJob, job);

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
        ).matchPercentage;
        const x4 = calculateIndustrySpecificSkillMatch(
          selectedJob.industry_specific,
          job.industry_specific
        );

        const weights = job.industry_specific.length
          ? { w1: 0.25, w2: 0.25, w3: 0.25, w4: 0.25 }
          : { w1: 0.25, w2: 0.25, w3: 0.5, w4: 0 };

        const score = calculateFinalScore(x1, x2, x3, x4, weights);

        return { job, score, matchDetails: matchCount };
      })
      .sort((a, b) => b.score - a.score);
  };

  //   const jobMatches = compareJobs(selectedJob, jobRolesData);

  const [jobMatches, setJobMatches] = useState<
    { job: IJob; score: number; matchDetails: any }[]
  >([]); // Type the state for jobMatches

  const onSubmit = () => {
    setJobMatches(compareJobs(selectedJob, filteredJobRolesData));
  };

  const onFilter = async (data: any) => {
    await filterJobRoles(data);
  };

  const columns = [
    {
      title: "Potential Progression",
      dataIndex: "jobRole",
      render: (jobRole: string) => <strong>{jobRole}</strong>, // Job role in bold
    },
    {
      title: "Result",
      dataIndex: "result",
      render: (matchDetails: number) => {
        const maxScore = 22; // Maximum possible score
        const maxFields = 8; // Maximum number of fields (bars)
        const filledFields = Math.round((matchDetails / maxScore) * maxFields); // Calculate filled fields based on percentage
        const progressArray = Array.from(
          { length: maxFields },
          (_, index) => index < filledFields
        );
        return (
          <div style={{ display: "flex", gap: "2px" }}>
            {progressArray.map((filled, index) => (
              <div
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: filled
                    ? "var(--secondary-accent-color)"
                    : "pink",
                  borderRadius: "2px",
                }}
              ></div>
            ))}
          </div>
        );
      },
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

  const matchingScore = watch("matchingScore"); // Slider value (0–100)
  const normalizedMatchingScore = matchingScore / 100; // Convert to 0–1 scale

  console.log("Normalized Matching Score:", normalizedMatchingScore);

  const data = jobMatches
    .filter(({ score }) => score >= normalizedMatchingScore) // Filter by normalized score
    .map(({ job, score, matchDetails }) => {
      // Extracting matched skills from each category
      const matchedHardSkills =
        matchDetails?.hardSkills?.matchedSkills.length || 0;
      const matchedInterpersonalSkills =
        matchDetails?.interpersonalSkills?.matchedSkills.length || 0;
      const matchedIndustrySpecificSkills =
        matchDetails?.industrySpecificSkills?.matchedSkills.length || 0;
      const matchedGenericSkills =
        matchDetails?.genericSkills?.matchedSkills.length || 0;

      // Total matched skills
      const totalMatchedSkills =
        matchedHardSkills +
        matchedInterpersonalSkills +
        matchedIndustrySpecificSkills +
        matchedGenericSkills;

      // Creating the data object
      return {
        jobRole: job.job_role,
        result: totalMatchedSkills,
        summary: `${totalMatchedSkills} / 22`, // Display matched skills in summary
        score: score,
        details: "",
        matchDetails,
      };
    });

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

  const maxSkills = {
    hardSkills: 14,
    softSkills: 8,
    industrySpecificSkills: 3,
  };

  // Extract matched skills from the selected data
  const matchedHardSkills =
    selectedRowData?.matchDetails?.hardSkills?.matchedSkills.length || 0;
  const matchedSoftSkills =
    selectedRowData?.matchDetails?.interpersonalSkills?.matchedSkills.length ||
    0;
  const matchedIndustrySpecificSkills =
    selectedRowData?.matchDetails?.industrySpecificSkills?.matchedSkills
      .length || 0;

  // Function to generate the filled/unfilled bars based on the matched skills
  const renderBars = (matchedSkills: number, maximumSkills: number) => {
    const progressArray = Array.from(
      { length: maximumSkills },
      (_, index) => index < matchedSkills
    );


    return (
      <div style={{ display: "flex", gap: "2px" }}>
        {progressArray.map((filled, index) => (
          <div
            key={index}
            style={{
              width: "30px" /* `${(100 / maximumSkills)}%` */,
              height: "20px",
              backgroundColor: filled
                ? "var(--secondary-accent-color)"
                : "pink",
              borderRadius: "2px",
            }}
          ></div>
        ))}
      </div>
    );
  };

  
  const skillComparison = {
    hardSkills: {
      matches: selectedRowData?.matchDetails?.hardSkills.matchedSkills.filter(
        (skill) => selectedJob.hard_skills.includes(skill)
      ),
      missing: selectedJob?.hard_skills.filter(
        (skill) =>
          !selectedRowData?.matchDetails.hardSkills.matchedSkills.includes(
            skill
          ) && skill
      ),
    },
    softSkills: {
      matches: selectedRowData?.matchDetails.softSkills.matchedSkills.filter(
        (skill) => selectedJob.soft_skills.includes(skill)
      ),
      missing: selectedJob?.soft_skills.filter(
        (skill) =>
          !selectedRowData?.matchDetails.softSkills.matchedSkills.includes(
            skill
          ) && skill
      ),
    },
    interpersonalSkills: {
      matches:
        selectedRowData?.matchDetails.interpersonalSkills.matchedSkills.filter(
          (skill) => selectedJob.interpersonal_skills.includes(skill)
        ),
      missing: selectedJob?.interpersonal_skills.filter(
        (skill) =>
          !selectedRowData?.matchDetails.interpersonalSkills.matchedSkills.includes(
            skill
          ) && skill
      ),
    },
    industrySpecificSkills: {
      matches:
        selectedRowData?.matchDetails.industrySpecificSkills.matchedSkills.filter(
          (skill) => selectedJob?.industry_specific.includes(skill)
        ),
      missing: selectedJob?.industry_specific.filter(
        (skill) =>
          !selectedRowData?.matchDetails.industrySpecificSkills.matchedSkills.includes(
            skill
          ) && skill
      ),
    },
    genericSkills: {
      matches:
        selectedRowData?.matchDetails.genericSkills.matchedSkills.filter(
          (skill) => selectedJob?.generic_skills.includes(skill)
        ),
      missing: selectedJob?.generic_skills.filter(
        (skill) =>
          !selectedRowData?.matchDetails.genericSkills.matchedSkills.includes(
            skill
          ) && skill
      ),
    },
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
  const categoryLabels = {
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    interpersonalSkills: "Interpersonal Skills",
    industrySpecificSkills: "Industry Specific Skills",
    genericSkills: "Generic Skills",
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters_wrapper}>
        <section className={styles.criteria_filtering__wrapper}>
          <h2>Criteria</h2>
          <form onSubmit={(e) => e.preventDefault()}>
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
                <BaseButton
                  onClick={() => onSubmit()}
                  text={"Explore"}
                  type={"submit"}
                />
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
      {/*   {jobMatches.length >0 &&   */}{" "}
      <div className={styles.filters_wrapper}>
        <section className={styles.criteria_filtering__wrapper}>
          <h2>Filter</h2>
          <form onSubmit={handleSubmit(onFilter)}>
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
                <BaseButton
                  onClick={() => {}}
                  text="Filter"
                  type="submit" // Trigger form submission
                />
              </Grid>
              <Grid item lg={2}></Grid>

              <Grid item lg={8}>
                <SliderComponent name="matchingScore" control={control} />
              </Grid>
              <Grid item lg={2}></Grid>
            </Grid>
          </form>
        </section>

        <br></br>
        <br></br>
        <br></br>
      </div>
      {/*  } */}
      {jobMatches.length > 0 && (
        <div className={styles.filters_wrapper}>
          <section>
            {selectedRowData && (
              <BaseModalWindow
                onModalClose={() => setSelectedRowData(undefined)}
                title={selectedRowData.jobRole}
              >
                {showComparedData ? (
               <div> {Object.entries(skillComparison).map(([category, { matches, missing }]) => ( <div key={category} className={styles.category_wrapper}> <h2 onClick={() => handleCategoryClick(category)} style={{ cursor: "pointer", color: activeCategory === category ? "white" : "black", backgroundColor: activeCategory === category ? "var(--secondary-accent-color)" : "var(--light-color)" }} > {categoryLabels[category] || category} </h2> {activeCategory === category && ( <div className={styles.matching_container}> <div className={styles.jobs_name__wrapper}> <div className={styles.type_of_skill_box}> <h3>Matched Skills</h3> </div> <div className={styles.type_of_skill_box}> <h3>Missing Skills</h3> </div> </div> <div className={styles.jobs_name__wrapper}> <div className={styles.jobs_name__box}> {matches.length > 0 ? ( <ul> {matches.map((skill, index) => ( <li key={index}>{skill}</li> ))} </ul> ) : ( <p>No matched skills</p> )} </div> <div className={styles.jobs_name__box}> {missing.length > 0 ? ( <ul> {missing.map((skill, index) => ( <li key={index}>{skill}</li> ))} </ul> ) : ( <p>No missing skills</p> )} </div> </div> </div> )} </div> ))} </div>
                ) : (
                  <div>
                    {/* Matched Hard Skills */}
                    <div>
                      <h4>Matched Hard Skills</h4>
                      {renderBars(matchedHardSkills, maxSkills.hardSkills)}
                      <span>{`${matchedHardSkills} / ${maxSkills.hardSkills}`}</span>
                    </div>

                    {/* Matched Soft Skills */}
                    <div>
                      <h4>Matched Soft Skills</h4>
                      {renderBars(matchedSoftSkills, maxSkills.softSkills)}
                      <span>{`${matchedSoftSkills} / ${maxSkills.softSkills}`}</span>
                    </div>

                    {/* Matched Industry Specific Skills */}
                    <div>
                      <h4>Matched Industry Specific Skills</h4>
                      {renderBars(
                        matchedIndustrySpecificSkills,
                        maxSkills.industrySpecificSkills
                      )}
                      <span>{`${matchedIndustrySpecificSkills} / ${maxSkills.industrySpecificSkills}`}</span>
                    </div>
                    <button
                      onClick={() => setShowComparedData(true)}
                      style={{
                        background: "var(--secondary-accent-color)",
                        cursor: "pointer",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        color: "#fff",
                        marginTop: "20px",
                      }}
                    >
                      Compare
                    </button>
                  </div>
                )}
              </BaseModalWindow>
            )}
            <h2>Job role mapping</h2>
            <BaseTableComponent columns={columns} data={currentData} />
            <div className={styles.paginationWrapper}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={isBackDisabled}
                className={`${styles.paginationButton} ${
                  isBackDisabled ? styles.disabled : ""
                }`}
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
                    Math.min(
                      prev + 1,
                      Math.ceil(data.length / itemsPerPage) - 1
                    )
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
      )}
    </div>
  );
};

export default JobRoleTab;
