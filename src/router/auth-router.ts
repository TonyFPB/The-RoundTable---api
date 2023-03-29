import { signUp } from "@/controller";
import { validateBody } from "@/middleware";
import { SignUpSchema } from "@/schema";
import { Router } from "express";

const authRouter = Router();

authRouter
  .post("/sign-in")
  .post("/sign-up", validateBody(SignUpSchema), signUp);

export { authRouter };

