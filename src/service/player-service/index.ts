import { notFoundError, playerConflictError, typePlayerError } from "../../errors";
import { baseFormRepository, playerFormRepository, playerRepository, userRepository } from "../../repository";

async function addPlayer(masterId: number, playerUserId: number, tableId: number): Promise<{ playerId: number }> {
  const master = await playerRepository.findOnePlayerInTable(masterId, tableId);

  if (!master) throw notFoundError();
  if (master.type === "ADVENTURER") throw typePlayerError();

  const playerUser = await userRepository.findUserById(playerUserId);
  if (!playerUser) throw notFoundError();

  const playerExists = await playerRepository.findOnePlayerInTable(playerUserId, tableId);
  if (playerExists) throw playerConflictError();

  const baseForm = master.Table.BaseForm.form as object;
  const playerForm = await playerFormRepository.createPlayerForm(baseForm);

  const newPlayer = await playerRepository.createPlayer(playerUserId, tableId, "ADVENTURER", playerForm.id);

  return { playerId: newPlayer.id }
}



const playerService = {
  addPlayer
};

export { playerService };
