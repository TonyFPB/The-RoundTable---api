import express from "express";
import cors from "cors";
import { loadEnvs } from "./config/envs";
import { authRouter } from "./router";

loadEnvs();

const server = express()
server
  .use(cors())
  .use(express.json())
  .use("/auth", authRouter)


server.get("/", (req, res)=>res.send("hellow world"));

export default server