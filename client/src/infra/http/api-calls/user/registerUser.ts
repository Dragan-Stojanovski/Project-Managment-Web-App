import instance from "../.."
import { IRegisterUserRequestBody } from "../../../../types/user/IRegisterUserRequestBody"

/**
 * Registers a new user with the provided information.
 * 
 * @param data - The registration details of the new user.
 * @returns A promise that resolves to the result of the user registration.
 */
export async function registerNewUser(data:IRegisterUserRequestBody):Promise<void> {
  const result:void = await instance.post('/register',data)
        return result
}