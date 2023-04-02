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

async function findPlayerAndTablesByUserId(userId: number) {
  return prisma.player.findMany({
    where:{
      userId
    },
    select:{
      id:true,
      type:true,
      Table:{
        select:{
          id:true,
          name:true,
          BaseForm:true
        }
      }
    }
  })
}


const playerRepository = {
  createPlayer,
  findPlayerAndTablesByUserId
};

export { playerRepository };
