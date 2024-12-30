import instance from "../..";

export async function getJobRolesWindSector() {
	const result = await instance.get("/job-roles-wind-sector");
	return result;
}
