import { useLocation } from "react-router-dom";

const SolarJobProfile = () => {
	const location = useLocation();
	const job = location.state;
	if (!job) {
		return <div>Job not found</div>;
	}

	return (
		<>
			<h1
				style={{
					fontSize: "32px",
					marginBottom: "60px",
					marginTop: "40px",
					textAlign: "center",
					marginLeft: "auto",
					fontWeight: "bold",
				}}
			>
				{job.title}
			</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "64%",
					margin: "0 auto",
					fontSize: "20px",
					marginBottom: "30px",
				}}
			>
				<img
					src="../../../../assets/solarJob.jpg"
					alt="Sample Image"
					style={{
						maxWidth: "65%",
						height: "auto",
					}}
				/>
				<p style={{ flex: "1", padding: "2px 24px" }}>
					<span style={{ fontWeight: "bold" }}>Description</span>: <br />
					<br />
					{job.job_role_definition}
					<br />
					<br />
					<br />
					<span style={{ fontWeight: "bold" }}>Job Category:</span> <br />
					<br />
					{job.job_category}
					<br />
					<br />
					<br />
					<span style={{ fontWeight: "bold" }}>Preferred Education:</span>{" "}
					<br />
					<br />
					{job.academic_qualification[0]}
					<br />
					<br />
					<br />
					<span style={{ fontWeight: "bold" }}>Sector:</span> <br />
					<br />
					{job.sector}
					<br />
					<br />
					<br />
					<span style={{ fontWeight: "bold" }}>Sub sector:</span> <br />
					<br />
					{job.sub_sector}
				</p>
			</div>
		</>
	);
};

export default SolarJobProfile;
