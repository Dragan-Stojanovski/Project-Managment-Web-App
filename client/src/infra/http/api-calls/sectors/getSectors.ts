import instance from "../.."

export async function getSectors() {
  const result = await instance.get('/sectors')
        return result
}