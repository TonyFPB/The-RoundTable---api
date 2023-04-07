import { getUsers } from "../controller";
import { authenticateToken } from "../middleware";
import { Router } from "express";

const userRouter = Router();

userRouter.all("/*", authenticateToken).get("/", getUsers);

export { userRouter };