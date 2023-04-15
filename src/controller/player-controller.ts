import { Response } from "express";
import { AuthenticatedRequest } from "../middleware";
import httpStatus from "http-status";
import { NewPlayer } from "../schema";
import { playerService } from "../service";


export async function newPlayer(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const { playerUserId, tableId } = req.body as NewPlayer;
    
    const player = await playerService.addPlayer(userId, playerUserId, tableId);

    return res.status(httpStatus.CREATED).send(player);
  }catch(err) {
    if(err.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(err);
    }
    if(err.name === "TypePlayerError") {
      return res.status(httpStatus.FORBIDDEN).send(err);
    }
    if(err.name === "PlayerConflictError") {
      return res.status(httpStatus.CONFLICT).send(err);
    }
  }
}