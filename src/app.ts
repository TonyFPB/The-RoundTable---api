import express from "express";
import cors from "cors";
import { loadEnvs } from "./config/envs";
import { authRouter, tableRouter, userRouter } from "./router";
import { authenticateToken } from "./middleware";
import { prisma } from "./config";

loadEnvs();

const server = express()
server
  .use(cors())
  .use(express.json())
  .get("/health", async(req, res) => { res.send("OK!") })
  .use("/auth", authRouter)
  .use("/table", tableRouter)
  .use("/user", userRouter)

server.get("/", (req, res) => res.send("hellow world"));

export default server;
