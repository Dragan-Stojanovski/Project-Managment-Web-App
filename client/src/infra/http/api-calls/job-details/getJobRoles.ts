import instance from "../.."

export async function getJobRoles() {
  const result = await instance.get('/job-roles')
        return result
}