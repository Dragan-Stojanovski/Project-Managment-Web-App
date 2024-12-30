import instance from "../..";

export async function getJobRolesSolar() {
	const result = await instance.get("/job-roles-solar-sector");
	return result;
}
