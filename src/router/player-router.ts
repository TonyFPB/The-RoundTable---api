import { NewPlayerSchema } from "../schema";
import { authenticateToken, validateBody } from "../middleware";
import { Router } from "express";
import { newPlayer } from "../controller";

const playerRouter = Router();

playerRouter
  .all("/*",authenticateToken)
  .post("/add", validateBody(NewPlayerSchema), newPlayer);

export { playerRouter };
