import instance from "../.."

export async function getSubSectors() {
  const result = await instance.get('/sub-sectors')
        return result
}