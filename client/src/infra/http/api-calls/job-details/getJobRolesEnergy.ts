import instance from "../..";

export async function getJobRolesEnergy() {
	const result = await instance.get("/job-roles-energy");
	return result;
}
