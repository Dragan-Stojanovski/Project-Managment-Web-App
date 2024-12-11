import { useEffect, useState } from "react";
import { getJobRoles } from "../../../infra/http/api-calls/job-details/getJobRoles";
import { IJob } from "../../../types/job-details/IGetJobRoles";
import { calculateJobMatchScore } from "../../../infra/utility/calculateJobMatchScore";

const subcategory: { [key: string]: number } = {
	project: 10,
	construction: 20,
	grid: 30,
	operations: 40,
};

const columnPositionMap: { [key: number]: string } = {
	10: "left",
	20: "center",
	30: "right",
	40: "new",
	50: "newright",
};
const rowPositionMap: { [key: number]: string } = {
	10: "high",
	20: "mid",
	30: "low",
	40: "high",
	50: "mid",
	60: "low",
	70: "high",
	80: "mid",
	90: "low",
	100: "high",
	110: "mid",
	120: "low",
	130: "high",
	140: "mid",
	150: "low",
	160: "high",
	170: "mid",
	180: "low",
	190: "high",
	200: "mid",
	210: "low",
	220: "high",
	230: "mid",
	240: "low",
};

export const JobRolePoints = () => {
	const [jobRoles, setJobRoles] = useState<IJob[] | null>(null);

	const getRoles = async () => {
		const response = await getJobRoles();
		setJobRoles(response.data);
	};

	useEffect(() => {
		void getRoles();
	}, []);

	let managementX = 0;
	let engineeringX = 0;
	let planningX = 0;
	let safetyX = 0;
	let supportingX = 0;
	let constructionX = 0;
	let qualityX = 0;
	let operationsX = 0;

	let managementY = 10;
	let engineeringY = 40;
	let planningY = 70;
	let safetyY = 100;
	let supportingY = 130;
	let constructionY = 160;
	let qualityY = 190;
	let operationsY = 220;

	let xValue = 10;
	let yValue = 10;
	let columnPosition = "left";
	let rowPosition = "high";

	return (
		<>
			{jobRoles?.map((jobRole: IJob, i: number) => {
				const similarRoles: Array<string> = [];
				jobRoles.forEach((otherJobRole: IJob) => {
					if (jobRole.title !== otherJobRole.title) {
						const similarScore = calculateJobMatchScore(jobRole, otherJobRole);
						if (similarScore >= 3.25) {
							similarRoles.push(otherJobRole.title.trim());
						}
					}
				});
				const result = similarRoles.join("|");
				const subSector = jobRole.sub_sector.split(" ")[0].toLocaleLowerCase();
				const jobCategory = jobRole.job_category
					.split(" ")[0]
					.toLocaleLowerCase()
					.replace(/[.,]/g, "");

				if (i > 0 && jobRole.sub_sector !== jobRoles[i - 1].sub_sector) {
					managementX = 0;
					engineeringX = 0;
					planningX = 0;
					safetyX = 0;
					supportingX = 0;
					constructionX = 0;
					qualityX = 0;
					operationsX = 0;
					managementY = 10;
					engineeringY = 40;
					planningY = 70;
					safetyY = 100;
					supportingY = 130;
					constructionY = 160;
					qualityY = 190;
					operationsY = 220;
				}

				if (jobCategory === "management") {
					if (managementX >= 50) {
						managementX = 10;
						managementY = managementY + 10;
					} else {
						managementX = managementX + 10;
					}
					xValue = managementX;
					yValue = managementY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "engineering") {
					if (engineeringX >= 50) {
						engineeringX = 10;
						engineeringY = engineeringY + 10;
					} else {
						engineeringX = engineeringX + 10;
					}
					xValue = engineeringX;
					yValue = engineeringY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "planning") {
					if (planningX >= 50) {
						planningX = 10;
						planningY = planningY + 10;
					} else {
						planningX = planningX + 10;
					}
					xValue = planningX;
					yValue = planningY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "safety") {
					if (safetyX >= 50) {
						safetyX = 10;
						safetyY = safetyY + 10;
					} else {
						safetyX = safetyX + 10;
					}
					xValue = safetyX;
					yValue = safetyY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "supporting") {
					if (supportingX >= 50) {
						supportingX = 10;
						supportingY = supportingY + 10;
					} else {
						supportingX = supportingX + 10;
					}
					xValue = supportingX;
					yValue = supportingY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "construction") {
					if (constructionX >= 50) {
						constructionX = 10;
						constructionY = constructionY + 10;
					} else {
						constructionX = constructionX + 10;
					}
					xValue = constructionX;
					yValue = constructionY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "quality") {
					if (qualityX >= 50) {
						qualityX = 10;
						qualityY = qualityY + 10;
					} else {
						qualityX = qualityX + 10;
					}
					xValue = qualityX;
					yValue = qualityY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				if (jobCategory === "operation") {
					if (operationsX >= 50) {
						operationsX = 10;
						operationsY = operationsY + 10;
					} else {
						operationsX = operationsX + 10;
					}
					xValue = operationsX;
					yValue = operationsY;
					columnPosition = columnPositionMap[xValue];
					rowPosition = rowPositionMap[yValue];
				}

				return (
					<div
						key={i}
						className={`point x${subcategory[subSector]}-${subSector} x${xValue}-${columnPosition} y${yValue}-${rowPosition}-${jobCategory}`}
						data-slug={jobRole.title.trim()}
						data-routes={result}
						data-tooltips="|||"
					>
						<a href="#" className="square">
							<span className="border"></span>
							<span className="dot"></span>
						</a>
						<div className="title">{jobRole.title}</div>
						<div className="description">
							<div className="description-screen"></div>
							<div className="description-box">
								<div className="description-title">{jobRole.title}</div>
								<p>{jobRole.job_role_definition}</p>
								<a href="#" className="close"></a>
								<div className="arrow"></div>
								<div className="arrow border"></div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
