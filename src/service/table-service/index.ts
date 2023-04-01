import { badRequestError, notFoundError } from "../../errors";
import { BaseFormType } from "../../controller";
import { baseFormRepository, playerRepository, tableRepository } from "../../repository";

async function createNewTable(userId: number, name: string, form: BaseFormType ) {
  if(!form || !name) throw badRequestError();

  if(typeof form === "object"){
    const newForm = await baseFormRepository.createForm(form);
    const newTable = await tableRepository.createTable(name, newForm.id);
    const newPlayer = await playerRepository.createPlayer(userId, newTable.id, "MASTER", null);
 
    return newTable;
  
  }if(typeof form === "number"){
    const baseForm = await baseFormRepository.findFormById(form);
    if(!baseForm) throw notFoundError();

    const newTable = await tableRepository.createTable(name, baseForm.id);
    const newPlayer = await playerRepository.createPlayer(userId, newTable.id, "MASTER", null);

    return newTable
  }

}


const tableService = {
  createNewTable
};



export { tableService }