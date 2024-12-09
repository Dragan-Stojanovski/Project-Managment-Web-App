import { IJob } from "../../types/job-details/IGetJobRoles";

const qualificationOrder: { [key: string]: number } = {
	"High School Diploma": 1,
	Certificate: 2,
	Diploma: 3,
	BSc: 4,
	MSc: 5,
	PhD: 6,
};
const categoryOrder: { [key: string]: number } = {
	"Semi-skilled": 1,
	Skilled: 2,
	Technician: 3,
	Professional: 4,
};

export const calculateJobMatchScore = (
	originalJob: IJob,
	targetJob: IJob
): number => {
	const x1 = skillCategoryMatch(
		originalJob.skill_category,
		targetJob.skill_category
	);
	const x2 = academicMatch(
		originalJob.academic_qualification[0],
		targetJob.academic_qualification[0]
	);
	const x3 = commonSkillsMatch(originalJob, targetJob);
	//const x4 = calculateIndustrySpecificSkillMatch(originalJob, targetJob);

	const finalScore = x1 * 1 + x2 * 1 + x3 * 3;
	return finalScore;
};

const skillCategoryMatch = (original: string, target: string): number => {
	return categoryOrder[original] >= categoryOrder[target] ? 1 : 0;
};
const academicMatch = (current: string, target: string): number => {
	return qualificationOrder[current] >= qualificationOrder[target] ? 1 : 0;
};
const commonSkillsMatch = (originalJob: IJob, targetJob: IJob): number => {
	const originalSkills = new Set([
		...originalJob.hard_skills,
		...originalJob.interpersonal_skills,
	]);
	const targetSkills = [
		...targetJob.hard_skills,
		...targetJob.interpersonal_skills,
	];

	let commonSkills = 0;
	targetSkills.forEach((skill) => {
		if (originalSkills.has(skill)) {
			commonSkills++;
		}
	});
	return (
		commonSkills /
		(targetJob.hard_skills.length + targetJob.interpersonal_skills.length)
	);
};
