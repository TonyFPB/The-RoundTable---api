import express from "express";
import cors from "cors";
import { loadEnvs } from "./config/envs";
import { authRouter, tableRouter } from "./router";
import { authenticateToken } from "./middleware";
import { prisma } from "./config";

loadEnvs();

const server = express()
server
  .use(cors())
  .use(express.json())
  .get("/", authenticateToken)
  .use("/auth", authRouter)
  .use("/table", tableRouter)

server.get("/", (req, res)=>res.send("hellow world"));

export default server