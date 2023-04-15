import { prisma } from "../config"

async function createPlayerForm(form: object) {
  return prisma.playerForm.create({
    data:{
      form:form
    }
  })
}



const playerFormRepository = {
  createPlayerForm

};

export { playerFormRepository };