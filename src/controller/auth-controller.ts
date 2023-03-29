import authService, {NewUserSign} from "@/service/auth-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response) {
  try {
    const user = req.body as NewUserSign
    const newUser = await authService.postSignUp(user);
    res.sendStatus(httpStatus.CREATED); 
  }catch(err) {
    if(err.name === "ConflictEmailError"){
      return res.status(httpStatus.CONFLICT).send(err)
    }
    if(err.name === "ConflictNameError"){
      return res.status(httpStatus.CONFLICT).send(err)
    }
  }
}