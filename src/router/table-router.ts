import { postNewTable } from "../controller";
import { authenticateToken, validateBody } from "../middleware";
import { Router } from "express";

const tableRouter = Router();

tableRouter
  .all("/*",authenticateToken)
  .post("/new", postNewTable)

export { tableRouter };
