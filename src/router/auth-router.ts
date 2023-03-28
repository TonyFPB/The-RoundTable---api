import { validateBody } from "@/middleware";
import { SignUpSchema } from "@/schema";
import { Router } from "express";

const authRouter = Router();

authRouter
  .post("/sign-in")
  .post("/sign-up", validateBody(SignUpSchema),);

export { authRouter };

