import { prisma } from "../config";
import { PlayerType } from "@prisma/client";

async function createPlayer(userId: number, tableId: number ,type: PlayerType, playerFormId: number = null) {
  return prisma.player.create({
    data:{
      userId,
      type,
      tableId,
      playerFormId
    }
  })
}


const playerRepository = {
  createPlayer
};

export { playerRepository };
