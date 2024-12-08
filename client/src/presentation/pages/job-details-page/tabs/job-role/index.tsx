import { useForm } from "react-hook-form";
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
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JobRoleModalWindow from "./job-role-modal-window";
import { IJob } from "../../../../../types/job-details/IGetJobRoles";
import BaseModalWindow from "../../../../components/base-components/base-modal-window";
const JobRoleTab = (): JSX.Element => {
    const [selectedRowData, setSelectedRowData] = useState<IRow | undefined>();
    const handleDetailsClick = (rowData:IJob) => {
        setSelectedRowData(rowData);
      };

	const columns = [
		{
			title: "Potential Progression",
			dataIndex: "jobRole",
			render: (jobRole) => <strong>{jobRole}</strong>, // Styled text
		},
		{
			title: "Result",
			dataIndex: "result",
			render: (progress) => (
				<div style={{ display: "flex", gap: "2px" }}>
					{progress.map((filled, index) => (
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
			), // Displays the progress indicator
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
					onClick={() => handleDetailsClick(rowData)} // Pass row data to handler
				>
					Details
				</button>
			), // Displays the details button
		},
	];

	const data = [
		{
			jobRole: "Mechanical Eng. Lead",
			result: [true, true, true, true, true, false, false, false],
			summary: "22/22 matched",
			matchedSkills: "TestMatchedSkills",
			details: "",
		},
		{
			jobRole: "Project Coordinator",
			result: [true, true, true, true, false, false, false, false],
			summary: "19/22 matched",
			matchedSkills: "TestMatchedSkills",
			details: "",
		},
		{
			jobRole: "Software Engineer",
			result: [true, true, true, false, false, false, false, false],
			summary: "18/22 matched",
			matchedSkills: "TestMatchedSkills",
			details: "",
		},
		{
			jobRole: "Lead Civil & Automation Eng.",
			result: [true, true, true, true, false, false, false, false],
			summary: "11/22 matched",
			matchedSkills: "TestMatchedSkills",
			details: "",
		},
		{
			jobRole: "Software Engineer",
			result: [true, true, false, false, false, false, false, false],
			summary: "11/22 matched",
			matchedSkills: "TestMatchedSkills",
			details: "",
		},
	];
	const { handleSubmit, control } = useForm<any>({
		mode: "onChange",
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

	return (
		<div className={styles.container}>
			<section className={styles.jobRoleSection}>
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
								name="subsector"
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
