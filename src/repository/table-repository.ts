import { prisma } from "../config";

async function createTable(name: string, baseFormId:number) {
  return prisma.table.create({
    data:{
      name,
      baseFormId
    }
  })
}


const tableRepository = {
  createTable
};

export { tableRepository };
