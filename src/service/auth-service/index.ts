import { authRepository } from "@/repository"
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { ConflictEmailError, ConflictNameError } from "./errors";

export async function postSignUp(newUser: NewUserSign): Promise<User> {
  const {name, email, password} = newUser  

  const userEmail = await authRepository.findUserByEmail(email);
  if(userEmail) throw ConflictEmailError();

  const userName = await authRepository.findUserByName(name);
  if(userName) throw ConflictNameError();

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await authRepository.createNewUser(name, email, hashPassword)

  return user
}


const authService = {
  postSignUp
}

export default authService

export type NewUserSign = {
  name: string,
  email: string, 
  password: string, 
  confirmPasssword: string
}