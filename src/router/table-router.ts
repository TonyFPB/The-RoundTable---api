import { postNewTable, getAllTables } from "../controller";
import { authenticateToken } from "../middleware";
import { Router } from "express";

const tableRouter = Router();

tableRouter
  .all("/*",authenticateToken)
  .post("/new", postNewTable)
  .get("/user", getAllTables)

export { tableRouter };
