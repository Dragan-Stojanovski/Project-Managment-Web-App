import { useEffect, useState } from "react";
import styles from "./JobDetails.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid2, Slider } from "@mui/material";
import BasicSelect from "../../components/base-components/base-select/BasicSelect";
import JobRoleTab from "./tabs/job-role";
import JobRoleManagementTab from "./tabs/job-role-management-tab";

const JobDetails = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("jobRole");

  const [jobRoles, setJobRoles] = useState([
    { label: "Electircal Engineer" },
    { label: "Software Engineer" },
  ]);

  useEffect(() => {
    // fetch all job roles on start
  }, []);

  const handleExplore = () => {
    //
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Energy Occupation Map</h1>

        <div className={styles.tab_button__wrapper}>
          <button
            className={`${styles.tab_button} ${
              activeTab == "jobRole" ? styles.activeTabButton : ""
            }`}
            onClick={() => setActiveTab("jobRole")}
          >
            Job role
          </button>
          <button
            className={`${styles.tab_button} ${
              activeTab == "jobRoleManagement" ? styles.activeTabButton : ""
            }`}
            onClick={() => setActiveTab("jobRoleManagement")}
          >
            Job role management
          </button>
        </div>

        {activeTab === "jobRole" && <JobRoleTab />}
        {activeTab === "jobRoleManagement" && <JobRoleManagementTab />}

        {/* <h1>Job Details</h1>
				<Autocomplete
					disablePortal
					options={jobRoles}
					sx={{ width: 300 }}
					renderInput={(params) => <TextField {...params} label="Job role" />}
				/>
				<Button variant="contained" action={handleExplore}>
					Explore
				</Button>
			</div>
			<div>
				<h1>Filters</h1>
				<Grid2 container spacing={2}>
					<Grid2 size={2}>
						<BasicSelect
							label="Major"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
					<Grid2 size={2}>
						<BasicSelect
							label="Sector"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
					<Grid2 size={2}>
						<BasicSelect
							label="Sub Sector"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
				</Grid2>
				<Grid2 container spacing={2}>
					<Grid2 size={2}>
						<BasicSelect
							label="Job Category"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
					<Grid2 size={2}>
						<BasicSelect
							label="Sector"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
					<Grid2 size={2}>
						<BasicSelect
							label="Sub Sector"
							value=""
							onChange={() => {
								console.log;
							}}
							options={[]}
						/>
					</Grid2>
				</Grid2>
				<Grid2 container spacing={2}>
					<Grid2 size={6}>
						<Slider
							aria-label="Matching score"
							defaultValue={50}
							valueLabelDisplay="auto"
							shiftStep={30}
							step={10}
							marks
							min={0}
							max={100}
						/>
					</Grid2>
				</Grid2> */}
      </div>
      {/* on */}
    </>
  );
};

export default JobDetails;
