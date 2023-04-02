import { tableService } from "@/service";
import { AuthenticatedRequest } from "../middleware";
import { notFoundError } from "../errors";
import { Response } from "express";
import httpStatus from "http-status";

export async function postNewTable(req: AuthenticatedRequest, res: Response,) {
  try{
    const userId = req.userId;
    const {name, baseForm } = req.body as NewTable;
    
    const table = await tableService.createNewTable(userId, name, baseForm);
    return res.status(httpStatus.CREATED).send(table);
  }catch(err) {
    if(err.name === "BadRequestError") {
      return res.status(httpStatus.BAD_REQUEST).send(err);
    }if(err.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(err);
    }
  }
};

export async function getAllTables(req: AuthenticatedRequest, res: Response) {
  try{
    const userId = req.userId;
    console.log(userId)
    const table = await tableService.findAllTablesFromUser(userId);
    return res.send(table);
  }catch(err) {
    if(err.name === "PlayerTableErrorNotFound"){
      return res.status(httpStatus.NOT_FOUND).send(err);
    }
  }
}

export type BaseFormType = JSON | number

type  NewTable = {
  name: string,
  baseForm: BaseFormType
}
